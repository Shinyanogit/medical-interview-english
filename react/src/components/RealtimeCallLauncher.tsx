import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useRealtimeCall, {
  RealtimeProvider,
} from "../hooks/useRealtimeCall";

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
    availableScenarios,
    scenarioId,
    setScenarioId,
    activeScenario,
  } = useRealtimeCall();

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

  return (
    <>
      <button
        type="button"
        className={launcherClassName}
        aria-label="音声ロールプレイを開始"
        onClick={handleOpen}
      >
        🎧
        {unreadFeedbackCount > 0 && (
          <span className="call-launcher-badge">
            {unreadFeedbackCount > 9 ? "9+" : unreadFeedbackCount}
          </span>
        )}
      </button>
      {(status === "connected" || status === "connecting") && !open && (
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
      {open && (
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

            <div className="call-section">
              <h3>プロバイダー</h3>
              <div className="call-provider-options">
                {PROVIDER_OPTIONS.map((option) => {
                  const active = option.id === provider;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={`call-provider-button ${
                        active ? "is-active" : ""
                      }`}
                      onClick={() => onProviderChange(option.id)}
                    >
                      <span className="call-provider-label">
                        {option.label}
                      </span>
                      <span className="call-provider-description">
                        {option.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

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

            <div className="call-section">
              <label className="call-field-label" htmlFor="call-api-key">
                APIキー
              </label>
              <input
                id="call-api-key"
                className="call-field-input"
                type="password"
                placeholder="sk- または AI... で始まるキーを入力"
                value={currentKey}
                onChange={handleKeyChange}
                autoComplete="off"
                spellCheck={false}
              />
              <p className="call-hint">
                入力したキーはブラウザの LocalStorage にのみ保存されます。
                セキュリティ上、公開リポジトリへのコミットや画面共有などで漏洩しないよう十分ご注意ください。
              </p>
            </div>

            <div className="call-section">
              <label className="call-field-label" htmlFor="call-system-prompt">
                患者の設定
              </label>
              <textarea
                id="call-system-prompt"
                className="call-field-textarea"
                rows={6}
                value={systemPrompt}
                onChange={(event) => setSystemPrompt(event.target.value)}
              />
              <p className="call-hint">
                開始時にプロバイダーへ送信する指示です。診療科・性格・症状などを自由に設定できます。
              </p>
            </div>

            {transcriptEntries.length > 0 && (
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

            {error && <p className="call-error">{error}</p>}

            <div className="call-actions">
              <button
                type="button"
                className="call-button call-button-primary"
                onClick={onConnect}
                disabled={connectDisabled}
              >
                {status === "connecting" ? "接続中…" : "接続する"}
              </button>
              <button
                type="button"
                className="call-button"
                onClick={stopCall}
                disabled={hangupDisabled}
              >
                通話を終了
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RealtimeCallLauncher;
