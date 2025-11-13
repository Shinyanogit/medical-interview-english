import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type RealtimeProvider = "openai" | "gemini";

type CallStatus = "idle" | "connecting" | "connected" | "error";

type ApiKeys = Record<RealtimeProvider, string>;

interface StartCallOptions {
  provider?: RealtimeProvider;
}

interface ProviderConfig {
  id: RealtimeProvider;
  label: string;
  createAnswer: (args: {
    apiKey: string;
    offer: RTCSessionDescriptionInit;
    systemPrompt: string;
  }) => Promise<string>;
  dataChannelLabel?: string;
  onDataChannelOpen?: (channel: RTCDataChannel, prompt: string) => void;
  supportsFeedback?: boolean;
}

const STORAGE_KEY = "medical-interview-realtime-keys";
const DEFAULT_PROMPT =
  "You are playing the role of a patient in a clinical interview simulation. Answer as a real patient would, keeping responses concise but natural. If you need to clarify information, ask the interviewer a follow-up question.";

const envDefaults: ApiKeys = {
  openai: import.meta.env.VITE_OPENAI_REALTIME_API_KEY || "",
  gemini: import.meta.env.VITE_GEMINI_LIVE_API_KEY || "",
};

const OPENAI_DEFAULT_MODEL =
  import.meta.env.VITE_OPENAI_REALTIME_MODEL || "gpt-4o-realtime-preview";
const OPENAI_DEFAULT_URL =
  import.meta.env.VITE_OPENAI_REALTIME_URL || "/api/openai";

const GEMINI_DEFAULT_MODEL =
  import.meta.env.VITE_GEMINI_LIVE_MODEL || "gemini-live-2.5-flash-preview";
const GEMINI_DEFAULT_BASE_URL =
  import.meta.env.VITE_GEMINI_LIVE_BASE_URL || "/api/gemini";

type TranscriptEntry = {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
  timestamp: number;
};

type FeedbackEntry = {
  id: string;
  provider: RealtimeProvider;
  text: string;
  timestamp: number;
};

const ICE_SERVERS: RTCConfiguration = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

function loadInitialKeys(): ApiKeys {
  if (typeof window === "undefined") {
    return { ...envDefaults };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...envDefaults };
    }
    const stored = JSON.parse(raw) as Partial<ApiKeys>;
    return {
      openai: stored.openai ?? envDefaults.openai ?? "",
      gemini: stored.gemini ?? envDefaults.gemini ?? "",
    };
  } catch {
    return { ...envDefaults };
  }
}

const providerConfigs: Record<RealtimeProvider, ProviderConfig> = {
  openai: {
    id: "openai",
    label: "ChatGPT Realtime mini (OpenAI)",
    createAnswer: async ({ apiKey, offer, systemPrompt }) => {
      const endpoint = `${OPENAI_DEFAULT_URL}?model=${encodeURIComponent(
        OPENAI_DEFAULT_MODEL
      )}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/sdp",
          "X-Api-Key": apiKey,
        },
        body: offer.sdp ?? "",
      });
      const answer = await response.text();
      if (!response.ok) {
        throw new Error(
          `OpenAI Realtime API error: ${
            answer || response.statusText || "unknown error"
          }`
        );
      }
      return answer;
    },
    dataChannelLabel: "oai-events",
    onDataChannelOpen: (channel, prompt) => {
      const trimmed = prompt.trim();
      if (!trimmed) return;
      try {
        channel.send(
          JSON.stringify({
            type: "response.create",
            response: {
              conversation: "default",
              instructions: trimmed,
            },
          })
        );
      } catch (error) {
        console.warn("Failed to send OpenAI instruction payload:", error);
      }
    },
    supportsFeedback: true,
  },
  gemini: {
    id: "gemini",
    label: "Gemini Live 2.5 Flash (Google)",
    createAnswer: async ({ apiKey, offer }) => {
      const endpoint = `${GEMINI_DEFAULT_BASE_URL}/${encodeURIComponent(
        GEMINI_DEFAULT_MODEL
      )}:connect`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/sdp",
          "X-Api-Key": apiKey,
        },
        body: offer.sdp ?? "",
      });

      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        const body = await response.json();
        if (!response.ok) {
          const message =
            body?.error?.message || response.statusText || "unknown error";
          throw new Error(`Gemini live API error: ${message}`);
        }
        const sdp: unknown =
          body?.sdp ?? body?.answer ?? body?.sessionDescription;
        if (typeof sdp !== "string" || !sdp) {
          throw new Error(
            "Gemini live API responded without a valid session description."
          );
        }
        return sdp;
      }

      const answer = await response.text();
      if (!response.ok) {
        throw new Error(
          `Gemini live API error: ${
            answer || response.statusText || "unknown error"
          }`
        );
      }
      return answer;
    },
    dataChannelLabel: "client-events",
    onDataChannelOpen: (channel, prompt) => {
      const trimmed = prompt.trim();
      if (!trimmed) return;
      try {
        channel.send(
          JSON.stringify({
            type: "input_text",
            text: trimmed,
          })
        );
      } catch (error) {
        console.warn("Failed to send Gemini instruction payload:", error);
        try {
          channel.send(trimmed);
        } catch (nested) {
          console.warn("Fallback Gemini instruction send failed:", nested);
        }
      }
    },
    supportsFeedback: true,
  },
};

export default function useRealtimeCall() {
  const [provider, setProvider] = useState<RealtimeProvider>("openai");
  const [status, setStatus] = useState<CallStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [systemPrompt, setSystemPrompt] = useState<string>(DEFAULT_PROMPT);
  const [apiKeys, setApiKeys] = useState<ApiKeys>(() => loadInitialKeys());
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [transcriptEntries, setTranscriptEntries] = useState<TranscriptEntry[]>(
    []
  );
  const [feedbackEntries, setFeedbackEntries] = useState<FeedbackEntry[]>([]);

  const pcRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteStreamRef = useRef<MediaStream | null>(null);
  const providerRef = useRef<RealtimeProvider>("openai");
  const systemPromptRef = useRef<string>(DEFAULT_PROMPT);
  const conversationItemsRef = useRef<
    Map<string, { role?: TranscriptEntry["role"]; text: string }>
  >(new Map());
  const pendingResponseRef = useRef<
    Map<string, { text: string; isFeedback: boolean }>
  >(new Map());

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(apiKeys));
    } catch (storageError) {
      console.warn("Failed to persist realtime API keys:", storageError);
    }
  }, [apiKeys]);

  useEffect(() => {
    providerRef.current = provider;
  }, [provider]);

  useEffect(() => {
    systemPromptRef.current = systemPrompt;
  }, [systemPrompt]);

  const cleanup = useCallback(
    (nextStatus: CallStatus = "idle") => {
      const pc = pcRef.current;
      if (pc) {
        try {
          pc.onconnectionstatechange = null;
          pc.onicecandidate = null;
          pc.ontrack = null;
          pc.close();
        } catch (closeError) {
          console.warn("Peer connection close error:", closeError);
        }
      }
      pcRef.current = null;

      if (dataChannelRef.current) {
        try {
          const channel = dataChannelRef.current;
          channel.onopen = null;
          channel.onmessage = null;
          channel.onclose = null;
          channel.onerror = null;
          channel.close();
        } catch (channelError) {
          console.warn("Data channel close error:", channelError);
        }
      }
      dataChannelRef.current = null;

      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      localStreamRef.current = null;
      setLocalStream(null);

      if (remoteStreamRef.current) {
        remoteStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      remoteStreamRef.current = null;
      setRemoteStream(null);

      conversationItemsRef.current.clear();
      pendingResponseRef.current.clear();
      setTranscriptEntries([]);
      setFeedbackEntries([]);

      setStatus(nextStatus);
    },
    [setStatus]
  );

  const stopCall = useCallback(() => {
    setError(null);
    cleanup("idle");
  }, [cleanup]);

  const hasApiKey = useCallback(
    (target: RealtimeProvider) => {
      return Boolean(apiKeys[target]?.trim());
    },
    [apiKeys]
  );

  const setApiKey = useCallback((target: RealtimeProvider, value: string) => {
    setApiKeys((prev) => ({
      ...prev,
      [target]: value,
    }));
  }, []);

  const requestFeedback = useCallback(
    (utterance: string) => {
      const channel = dataChannelRef.current;
      if (!channel || channel.readyState !== "open") return;
      const trimmed = utterance.trim();
      if (!trimmed) return;

      const instructions = `The learner just said: """${trimmed}""". Provide concise, constructive grammar and expression feedback in Japanese. Focus on one or two key corrections, and include a suggested improved sentence. Respond only as plain text, start your message with "[FEEDBACK]" and do not output audio.`;

      try {
        if (providerRef.current === "openai") {
          channel.send(
            JSON.stringify({
              type: "response.create",
              response: {
                conversation: "feedback",
                modalities: ["text"],
                instructions,
              },
            })
          );
        } else {
          channel.send(
            JSON.stringify({
              type: "input_text",
              text: `[FEEDBACK_REQUEST] ${instructions}`,
            })
          );
        }
      } catch (sendError) {
        console.warn("Failed to request feedback:", sendError);
      }
    },
    []
  );

  const appendTranscript = useCallback((entry: TranscriptEntry) => {
    setTranscriptEntries((prev) => {
      const next = [...prev, entry];
      return next.slice(-50);
    });
  }, []);

  const appendFeedback = useCallback((entry: FeedbackEntry) => {
    setFeedbackEntries((prev) => {
      const next = [...prev, entry];
      return next.slice(-50);
    });
  }, []);

  const handleDataMessage = useCallback(
    (event: MessageEvent, supportsFeedback?: boolean) => {
      const raw = event.data;
      let textPayload: string | null = null;
      if (typeof raw === "string") {
        textPayload = raw;
      } else if (raw instanceof ArrayBuffer) {
        try {
          textPayload = new TextDecoder().decode(raw);
        } catch {
          textPayload = null;
        }
      }

      if (!textPayload) {
        return;
      }

      let parsed: any = null;
      try {
        parsed = JSON.parse(textPayload);
      } catch {
        parsed = null;
      }

      if (!parsed || typeof parsed !== "object" || !parsed.type) {
        const candidate = textPayload.trim();
        if (candidate.startsWith("[FEEDBACK]")) {
          appendFeedback({
            id: `feedback-${Date.now()}`,
            provider: providerRef.current,
            text: candidate.replace(/^\[FEEDBACK\]\s*/, "").trim(),
            timestamp: Date.now(),
          });
        }
        return;
      }

      switch (parsed.type) {
        case "conversation.item.created": {
          const itemId = parsed.item?.id;
          if (typeof itemId === "string") {
            const role = parsed.item?.role;
            conversationItemsRef.current.set(itemId, {
              role:
                role === "user" || role === "assistant" || role === "system"
                  ? role
                  : "assistant",
              text: "",
            });
          }
          break;
        }
        case "conversation.item.deleted": {
          const itemId = parsed.item_id;
          if (typeof itemId === "string") {
            conversationItemsRef.current.delete(itemId);
          }
          break;
        }
        case "conversation.item.input_audio_transcription.delta": {
          const itemId = parsed.item_id;
          const delta = parsed.delta;
          if (typeof itemId === "string" && typeof delta === "string") {
            const target =
              conversationItemsRef.current.get(itemId) || {
                role: "assistant" as const,
                text: "",
              };
            target.text = (target.text || "") + delta;
            conversationItemsRef.current.set(itemId, target);
          }
          break;
        }
        case "conversation.item.input_audio_transcription.completed": {
          const itemId = parsed.item_id;
          if (typeof itemId === "string") {
            const item = conversationItemsRef.current.get(itemId);
            if (item?.role === "user" && item.text.trim()) {
              const transcriptText = item.text.trim();
              appendTranscript({
                id: `${itemId}-transcript`,
                role: "user",
                text: transcriptText,
                timestamp: Date.now(),
              });
              if (supportsFeedback) {
                requestFeedback(transcriptText);
              }
            }
          }
          break;
        }
        case "response.output_text.delta": {
          const responseId =
            typeof parsed.response_id === "string"
              ? parsed.response_id
              : typeof parsed.response?.id === "string"
              ? parsed.response.id
              : null;
          const delta = parsed.delta;
          if (responseId && typeof delta === "string") {
            const entry =
              pendingResponseRef.current.get(responseId) || {
                text: "",
                isFeedback: false,
              };
            entry.text += delta;
            if (!entry.isFeedback && entry.text.trim().startsWith("[FEEDBACK]")) {
              entry.isFeedback = true;
            }
            pendingResponseRef.current.set(responseId, entry);
          }
          break;
        }
        case "response.completed": {
          const responseId =
            typeof parsed.response_id === "string"
              ? parsed.response_id
              : typeof parsed.response?.id === "string"
              ? parsed.response.id
              : null;
          if (responseId) {
            const entry = pendingResponseRef.current.get(responseId);
            if (entry) {
              const text = entry.text.trim();
              if (entry.isFeedback && text) {
                appendFeedback({
                  id: responseId,
                  provider: providerRef.current,
                  text: text.replace(/^\[FEEDBACK\]\s*/, "").trim(),
                  timestamp: Date.now(),
                });
              } else if (text) {
                appendTranscript({
                  id: responseId,
                  role: "assistant",
                  text,
                  timestamp: Date.now(),
                });
              }
              pendingResponseRef.current.delete(responseId);
            }
          }
          break;
        }
        default:
          break;
      }
    },
    [appendFeedback, appendTranscript, requestFeedback]
  );

  const startCall = useCallback(
    async ({ provider: preferredProvider }: StartCallOptions = {}) => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setError("このブラウザではマイクへのアクセスがサポートされていません。");
        setStatus("error");
        return;
      }

      const targetProvider = preferredProvider ?? provider;
      const config = providerConfigs[targetProvider];
      if (!config) {
        setError("対応していないプロバイダーが選択されています。");
        setStatus("error");
        return;
      }

      const apiKey = apiKeys[targetProvider]?.trim();
      if (!apiKey) {
        setError("APIキーが設定されていません。設定後に再度お試しください。");
        setStatus("error");
        return;
      }

      if (pcRef.current) {
        console.warn("Call already active; ignoring duplicate start request.");
        return;
      }

      providerRef.current = targetProvider;
      setProvider(targetProvider);
      setStatus("connecting");
      setError(null);
      setTranscriptEntries([]);
      setFeedbackEntries([]);
      conversationItemsRef.current.clear();
      pendingResponseRef.current.clear();

      const pc = new RTCPeerConnection(ICE_SERVERS);
      pcRef.current = pc;

      pc.addEventListener("connectionstatechange", () => {
        if (!pcRef.current) return;
        const state = pcRef.current.connectionState;
        if (state === "connected") {
          setStatus("connected");
        } else if (state === "failed") {
          setError("接続が失敗しました。ネットワーク環境をご確認ください。");
          cleanup("error");
        } else if (state === "disconnected" || state === "closed") {
          cleanup("idle");
        }
      });

      pc.addEventListener("track", (event) => {
        const [stream] = event.streams;
        if (stream) {
          remoteStreamRef.current = stream;
          setRemoteStream(stream);
        }
      });

      pc.addEventListener("datachannel", (event) => {
        const channel = event.channel;
        if (!channel) return;
        dataChannelRef.current = channel;
        const handleMessage = (messageEvent: MessageEvent) =>
          handleDataMessage(messageEvent, config.supportsFeedback);
        channel.addEventListener("message", handleMessage);
        channel.addEventListener("close", () => {
          channel.removeEventListener("message", handleMessage);
          if (dataChannelRef.current === channel) {
            dataChannelRef.current = null;
          }
        });
        channel.addEventListener("error", (evt) => {
          console.warn("Data channel error:", evt);
        });
        if (channel.readyState === "open") {
          config.onDataChannelOpen?.(channel, systemPromptRef.current);
        } else if (config.onDataChannelOpen) {
          channel.addEventListener(
            "open",
            () => config.onDataChannelOpen?.(channel, systemPromptRef.current),
            { once: true }
          );
        }
      });

      try {
        const local = await navigator.mediaDevices.getUserMedia({ audio: true });
        localStreamRef.current = local;
        setLocalStream(local);
        local
          .getTracks()
          .forEach((track) => pc.addTrack(track, localStreamRef.current!));
      } catch (mediaError) {
        console.error("Failed to obtain microphone:", mediaError);
        setError("マイクへアクセスできませんでした。権限設定をご確認ください。");
        cleanup("error");
        return;
      }

      let dataChannel: RTCDataChannel | null = null;
      if (config.dataChannelLabel) {
        try {
          dataChannel = pc.createDataChannel(config.dataChannelLabel);
          dataChannelRef.current = dataChannel;
          const openChannel = dataChannel;
          const handleMessage = (messageEvent: MessageEvent) =>
            handleDataMessage(messageEvent, config.supportsFeedback);
          openChannel.addEventListener("message", handleMessage);
          openChannel.addEventListener("close", () => {
            openChannel.removeEventListener("message", handleMessage);
            if (dataChannelRef.current === openChannel) {
              dataChannelRef.current = null;
            }
          });
          openChannel.addEventListener("error", (evt) => {
            console.warn("Data channel error:", evt);
          });
          if (openChannel.readyState === "open") {
            config.onDataChannelOpen?.(openChannel, systemPromptRef.current);
          } else if (config.onDataChannelOpen) {
            openChannel.addEventListener(
              "open",
              () =>
                config.onDataChannelOpen?.(
                  openChannel,
                  systemPromptRef.current
                ),
              { once: true }
            );
          }
        } catch (channelError) {
          console.warn("Data channel creation failed:", channelError);
        }
      }

      const offer = await pc.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: false,
      });
      await pc.setLocalDescription(offer);

      try {
        const answerSdp = await config.createAnswer({
          apiKey,
          offer,
          systemPrompt: systemPromptRef.current,
        });
        const remoteDescription = {
          type: "answer" as const,
          sdp: answerSdp,
        };
        await pc.setRemoteDescription(remoteDescription);
      } catch (apiError) {
        console.error("Realtime call negotiation failed:", apiError);
        setError(
          apiError instanceof Error ? apiError.message : String(apiError)
        );
        cleanup("error");
        return;
      }

    },
    [apiKeys, cleanup, handleDataMessage, provider, setProvider]
  );

  const clearError = useCallback(() => setError(null), []);

  const callSummary = useMemo(
    () => ({
      provider,
      status,
      error,
      remoteStream,
      localStream,
      systemPrompt,
      transcriptEntries,
      feedbackEntries,
    }),
    [
      provider,
      status,
      error,
      remoteStream,
      localStream,
      systemPrompt,
      transcriptEntries,
      feedbackEntries,
    ]
  );

  const getApiKey = useCallback(
    (target: RealtimeProvider) => apiKeys[target] ?? "",
    [apiKeys]
  );

  useEffect(() => {
    return () => {
      cleanup("idle");
    };
  }, [cleanup]);

  return {
    ...callSummary,
    startCall,
    stopCall,
    setProvider,
    setSystemPrompt,
    hasApiKey,
    setApiKey,
    getApiKey,
    clearError,
    feedbackEntries,
    transcriptEntries,
  };
}
