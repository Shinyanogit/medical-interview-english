import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useRealtimeCall, {
  RealtimeProvider,
} from "../hooks/useRealtimeCall";
import ScoringPanel from "./ScoringPanel";
import ScoreDialog from "./ScoreDialog";

const PROVIDER_OPTIONS: Array<{
  id: RealtimeProvider;
  label: string;
  description: string;
}> = [
  {
    id: "openai",
    label: "ChatGPT Realtime mini",
    description: "OpenAI Realtime API を利用します。",
  },
  {
    id: "gemini",
    label: "Gemini Live 2.5 Flash",
    description: "Google Gemini Live API を利用します。",
  },
];

const STATUS_LABEL: Record<string, string> = {
  idle: "未接続",
  connecting: "接続中…",
  connected: "通話中",
  ending: "終了処理中…",
  error: "エラー",
};

const RealtimeCallLauncher: React.FC = () => {
  const [open, setOpen] = useState(false);

  const {
    provider,
    status,
    error,
    remoteStream,
    localStream,
    systemPrompt,
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
    scoreResult,
    endedWithoutScore,
    awaitingFinalScore,
    availableScenarios,
    scenarioId,
    setScenarioId,
    activeScenario,
    requestScoring,
    pendingAssistantText,
  } = useRealtimeCall();

  // Wide-screen detection for split (right dock)
  const [isWide, setIsWide] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const w = window.innerWidth;
    const h = window.innerHeight || 1;
    return w / h > 1.2;
  });
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight || 1;
      setIsWide(w / h > 1.2);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);
  const [dockWidth, setDockWidth] = useState<number>(
    Math.min(520, Math.floor((typeof window !== "undefined" ? window.innerWidth : 1200) * 0.45))
  );
  // Push main document to the left when dock is visible
  useEffect(() => {
    const showDock = (open && isWide) || ((status === "connected" || status === "connecting" || status === "ending") && isWide);
    if (!showDock) {
      document.body.style.marginRight = "";
      return;
    }
    document.body.style.marginRight = `${dockWidth}px`;
    return () => {
      document.body.style.marginRight = "";
    };
  }, [open, isWide, status, dockWidth]);
  // Show dock when panel is open in landscape, or during call/ending
  const showDock = (open && isWide) || ((status === "connected" || status === "connecting" || status === "ending") && isWide);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const max = Math.max(320, Math.floor(window.innerWidth * 0.8));
    setDockWidth((w) => Math.min(Math.max(320, w), max));
  }, [isWide]);
  const isResizingRef = useRef(false);
  const startResize = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    isResizingRef.current = true;
    e.preventDefault();
  }, []);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isResizingRef.current) return;
      const vw = window.innerWidth;
      const x = e.clientX;
      const newWidth = Math.max(320, Math.min(vw - 200, vw - x));
      setDockWidth(newWidth);
    };
    const onUp = () => {
      isResizingRef.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const element = audioRef.current;
    if (remoteStream) {
      element.srcObject = remoteStream;
      const play = () => {
        element
          .play()
          .catch((playError) =>
            console.warn("Autoplay prevented for remote stream:", playError)
          );
      };
      if (element.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
        play();
      } else {
        element.onloadedmetadata = play;
      }
    } else {
      element.pause();
      element.srcObject = null;
    }
  }, [remoteStream]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  const onProviderChange = useCallback(
    (nextProvider: RealtimeProvider) => {
      clearError();
      setProvider(nextProvider);
    },
    [setProvider, clearError]
  );

  const onConnect = useCallback(async () => {
    await startCall({ provider });
  }, [startCall, provider]);

  const connectDisabled =
    status === "connecting" || !hasApiKey(provider) || status === "connected";
  const hangupDisabled = status !== "connected" && status !== "connecting";

  const activeStatusLabel = useMemo(
    () => STATUS_LABEL[status] || status,
    [status]
  );

  const currentKey = getApiKey(provider);

  const handleKeyChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      clearError();
      setApiKey(provider, event.target.value);
    },
    [provider, setApiKey, clearError]
  );

  const handleScenarioChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      clearError();
      setScenarioId(event.target.value);
    },
    [clearError, setScenarioId]
  );

  const [lastSeenFeedbackCount, setLastSeenFeedbackCount] = useState(0);

  useEffect(() => {
    if (open) {
      setLastSeenFeedbackCount(feedbackEntries.length);
    }
  }, [open, feedbackEntries.length]);

  const unreadFeedbackCount = Math.max(
    0,
    feedbackEntries.length - lastSeenFeedbackCount
  );

  const launcherClassName = [
    "call-launcher",
    status === "connected" ? "is-active" : "",
    unreadFeedbackCount > 0 ? "has-unread" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleHangup = useCallback(() => {
    stopCall();
  }, [stopCall]);

  const formatTimestamp = useCallback((value: number) => {
    const date = new Date(value);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }, []);

  const lastAssistant = useMemo(() => {
    for (let i = transcriptEntries.length - 1; i >= 0; i--) {
      const e = transcriptEntries[i];
      if (e.role === "assistant" && e.text) return e.text;
    }
    return "";
  }, [transcriptEntries]);

  const assistantSubtitle = pendingAssistantText || lastAssistant;

  const handleLauncherClick = useCallback(() => {
    if (status === "connecting" || status === "connected" || status === "ending") {
      stopCall();
      return;
    }

    if (!open) {
      setOpen(true);
      return;
    }

    if (status === "idle" || status === "error") {
      startCall({ provider });
    }
  }, [status, open, startCall, stopCall, provider]);

  const [scoreOpen, setScoreOpen] = useState(false);
  // Open score dialog automatically when a new score arrives after ending or hangup
  useEffect(() => {
    if ((awaitingFinalScore || scoreResult || endedWithoutScore) && (status === "idle" || status === "ending")) {
      setScoreOpen(true);
    }
  }, [awaitingFinalScore, scoreResult, endedWithoutScore, status]);

  return (
    <>
      <button
        type="button"
        className={launcherClassName}
        aria-label="音声ロールプレイを開始"
        onClick={handleLauncherClick}
      >
        🎧
        {unreadFeedbackCount > 0 && (
          <span className="call-launcher-badge">
            {unreadFeedbackCount > 9 ? "9+" : unreadFeedbackCount}
          </span>
        )}
      </button>
      {(status === "connected" || status === "connecting" || status === "ending") && !open && (
        <div className={`call-mini-status call-mini-status-${status}`}>
          <div className="call-mini-details">
            <span className="call-mini-status-label">{activeStatusLabel}</span>
            {unreadFeedbackCount > 0 && (
              <span className="call-mini-feedback">
                フィードバック {unreadFeedbackCount}
              </span>
            )}
          </div>
          <div className="call-mini-actions">
            <button
              type="button"
              className="call-mini-button"
              onClick={() => setOpen(true)}
            >
              設定を開く
            </button>
            <button
              type="button"
              className="call-mini-button is-danger"
              onClick={handleHangup}
              disabled={status === "connecting"}
            >
              終了
            </button>
          </div>
        </div>
      )}
      <audio
        ref={audioRef}
        className="call-audio"
        autoPlay
        playsInline
        hidden
      />
      {open && !showDock && (
        <div className="call-modal" onMouseDown={handleBackdropClick}>
          <div
            className="call-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label="音声ロールプレイ設定"
          >
            <div className="call-modal-header">
              <div>
                <h2>音声ロールプレイ</h2>
                <p className="call-subtitle">
                  右下のボタンから患者役との会話を開始できます。
                </p>
              </div>
              <button
                type="button"
                className="call-modal-close"
                onClick={handleClose}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>

            <div className="call-status-row">
              <span className={`call-status-badge call-status-${status}`}>
                {activeStatusLabel}
              </span>
              {localStream && status === "connected" && (
                <span className="call-mic-indicator">🎤 マイク取得済み</span>
              )}
            </div>

            {/* プロバイダー・接続設定は設定画面に移動 */}

            <div className="call-section">
              <h3>シナリオ</h3>
              <label className="call-field-label" htmlFor="call-scenario-select">
                臨床ストーリー
              </label>
              <select
                id="call-scenario-select"
                className="call-field-input"
                value={scenarioId}
                onChange={handleScenarioChange}
              >
                {availableScenarios.map((scenario) => (
                  <option key={scenario.id} value={scenario.id}>
                    {scenario.title}
                  </option>
                ))}
              </select>
              {activeScenario && (
                <div className="call-scenario-summary">
                  <p className="call-scenario-title">
                    {activeScenario.shortSummary}
                  </p>
                  <ul className="call-scenario-list">
                    <li>
                      <strong>Chief complaint:</strong>{" "}
                      {activeScenario.chiefComplaint}
                    </li>
                    <li>
                      <strong>Patient:</strong>{" "}
                      {`${activeScenario.patient.age}歳 ${activeScenario.patient.gender === "female" ? "女性" : activeScenario.patient.gender === "male" ? "男性" : activeScenario.patient.gender}`}
                      {activeScenario.patient.occupation
                        ? ` / ${activeScenario.patient.occupation}`
                        : ""}
                    </li>
                    <li>
                      <strong>Opening line:</strong>{" "}
                      {activeScenario.openingStatement}
                    </li>
                  </ul>
                  <p className="call-hint">
                    追加の医療設定は下のテキストエリアで編集できます。
                  </p>
                </div>
              )}
            </div>

            {/* 接続（APIキー）は設定画面に移動 */}

            {/* 患者の設定編集はこの画面では不可（シナリオは上で選択） */}

            {(transcriptEntries.length > 0 || pendingAssistantText) && (
              <div className="call-section">
                <h3>会話ログ</h3>
                <ul className="call-transcript-list">
                  {transcriptEntries.map((entry) => (
                    <li key={entry.id} className="call-transcript-item">
                      <span className="call-transcript-meta">
                        <span className={`call-transcript-role role-${entry.role}`}>
                          {entry.role === "user"
                            ? "医師"
                            : entry.role === "assistant"
                            ? "患者"
                            : "システム"}
                        </span>
                        <time dateTime={new Date(entry.timestamp).toISOString()}>
                          {formatTimestamp(entry.timestamp)}
                        </time>
                      </span>
                      <p className="call-transcript-text">{entry.text}</p>
                    </li>
                  ))}
                  {pendingAssistantText && (
                    <li className="call-transcript-item">
                      <span className="call-transcript-meta">
                        <span className="call-transcript-role role-assistant">患者</span>
                        <time>{formatTimestamp(Date.now())}</time>
                      </span>
                      <p className="call-transcript-text">{pendingAssistantText}</p>
                    </li>
                  )}
                </ul>
              </div>
            )}

            <div className="call-section">
              <h3>リアルタイムフィードバック</h3>
              {feedbackEntries.length === 0 ? (
                <p className="call-hint">
                  通話中の発話内容に対するフィードバックがここに表示されます。
                  閉じている間も通話は継続されます。
                </p>
              ) : (
                <ul className="call-feedback-list">
                  {feedbackEntries.map((entry) => (
                    <li key={entry.id} className="call-feedback-item">
                      <div className="call-feedback-header">
                        <span className="call-feedback-provider">
                          {entry.provider === "openai"
                            ? "OpenAI"
                            : "Gemini"}
                        </span>
                        <time
                          dateTime={new Date(entry.timestamp).toISOString()}
                        >
                          {formatTimestamp(entry.timestamp)}
                        </time>
                      </div>
                      <p className="call-feedback-text">{entry.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <ScoringPanel
              transcriptEntries={transcriptEntries}
              feedbackEntries={feedbackEntries}
              scenarioTitle={activeScenario?.title}
              scoreResult={scoreResult}
            />

            {error && <p className="call-error">{error}</p>}

            <div className="call-actions">
              <button
                type="button"
                className="call-button call-button-primary"
                onClick={() => startCall({ provider })}
                disabled={status === "connecting" || status === "connected"}
              >
                {status === "connecting" ? "接続中…" : status === "connected" ? "通話中" : "通話を開始"}
              </button>
              <button
                type="button"
                className="call-button"
                onClick={stopCall}
                disabled={status !== "connected" && status !== "connecting"}
              >
                通話を終了
              </button>
            </div>
          </div>
        </div>
      )}

      {showDock && (
        <>
          <div className="call-dock" style={{ width: dockWidth }}>
            <div className="call-dock-header">
              <strong>音声ロールプレイ</strong>
              <div className="spacer" />
              <span className={`call-status-badge call-status-${status}`}>{activeStatusLabel}</span>
              <button type="button" className="call-modal-close" onClick={handleHangup} aria-label="終了">×</button>
            </div>
            <div className="call-dock-body">
              {/* プロバイダー・接続設定は設定画面に移動 */}

              {/* Scenario */}
              <div className="call-section">
                <h3>シナリオ</h3>
                <label className="call-field-label" htmlFor="call-scenario-select-dock">臨床ストーリー</label>
                <select id="call-scenario-select-dock" className="call-field-input" value={scenarioId} onChange={handleScenarioChange}>
                  {availableScenarios.map((scenario) => (
                    <option key={scenario.id} value={scenario.id}>{scenario.title}</option>
                  ))}
                </select>
              </div>

              {/* 接続設定は設定画面に移動 */}

              {(transcriptEntries.length > 0 || pendingAssistantText) && (
                <div className="call-section">
                  <h3>会話ログ</h3>
                  <ul className="call-transcript-list">
                    {transcriptEntries.map((entry) => (
                      <li key={entry.id} className="call-transcript-item">
                        <span className="call-transcript-meta">
                          <span className={`call-transcript-role role-${entry.role}`}>
                            {entry.role === "user" ? "医師" : entry.role === "assistant" ? "患者" : "システム"}
                          </span>
                          <time dateTime={new Date(entry.timestamp).toISOString()}>{formatTimestamp(entry.timestamp)}</time>
                        </span>
                        <p className="call-transcript-text">{entry.text}</p>
                      </li>
                    ))}
                    {pendingAssistantText && (
                      <li className="call-transcript-item">
                        <span className="call-transcript-meta">
                          <span className="call-transcript-role role-assistant">患者</span>
                          <time>{formatTimestamp(Date.now())}</time>
                        </span>
                        <p className="call-transcript-text">{pendingAssistantText}</p>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              <div className="call-section">
                <h3>リアルタイムフィードバック</h3>
                {feedbackEntries.length === 0 ? (
                  <p className="call-hint">通話中の発話内容に対するフィードバックがここに表示されます。</p>
                ) : (
                  <ul className="call-feedback-list">
                    {feedbackEntries.map((entry) => (
                      <li key={entry.id} className="call-feedback-item">
                        <div className="call-feedback-header">
                          <span className="call-feedback-provider">{entry.provider === "openai" ? "OpenAI" : "Gemini"}</span>
                          <time dateTime={new Date(entry.timestamp).toISOString()}>{formatTimestamp(entry.timestamp)}</time>
                        </div>
                        <p className="call-feedback-text">{entry.text}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <ScoringPanel
                transcriptEntries={transcriptEntries}
                feedbackEntries={feedbackEntries}
                scenarioTitle={activeScenario?.title}
                scoreResult={scoreResult}
              />

              {/* 通話開始/終了は🎧ボタンに集約 */}
            </div>
          </div>
          <div className="call-dock-resizer" style={{ left: `calc(100vw - ${dockWidth + 4}px)` }} onMouseDown={startResize} />
        </>
      )}
      {(status === "connected" || status === "connecting") && assistantSubtitle && (
        <div className="call-subtitles">
          {assistantSubtitle}
        </div>
      )}
      <ScoreDialog
        open={scoreOpen}
        onClose={() => setScoreOpen(false)}
        result={scoreResult}
        awaiting={awaitingFinalScore && !scoreResult && !endedWithoutScore}
        failed={endedWithoutScore && !scoreResult}
      />
    </>
  );
};

export default RealtimeCallLauncher;
