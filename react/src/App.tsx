import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LayoutProvider, useLayout } from "./context/LayoutContext";
import SettingsModal from "./components/SettingsModal";
import Section from "./components/Section";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ExternalHtmlPage from "./pages/ExternalHtmlPage";
import PageIframe from "./components/PageIframe";

const Home: React.FC = () => {
  const { layout } = useLayout();

  return (
    <div
      className={`container ${
        layout === "two-column"
          ? "layout-two-column"
          : layout === "single-column"
          ? "layout-single-column"
          : ""
      }`}
    >
      <h1>英語de診療</h1>
      {/*
      <div className="section">
        <Section title="総論（General Description）" level={2}>
          <p className="description">React + Vite + TypeScript の最小骨組みです。テーマ/レイアウトはコンテキストで管理します。</p>
          <ul className="expanded">
            <li>ダークモード切替（自動/手動）</li>
            <li>レイアウト（自動/2段/1段）</li>
            <li>折りたたみ可能なセクション（h2/h3/h4）</li>
          </ul>

          <Section title="デモ: h3 セクション" level={3} defaultCollapsed={true}>
            <p>この部分は h3 をクリックして展開/折りたたみできます。</p>
            <ul className="expanded">
              <li>項目A</li>
              <li>項目B</li>
            </ul>
            <Section title="デモ: h4 セクション" level={4} defaultCollapsed={true}>
              <p>h4 セクションも同様に制御できます。</p>
            </Section>
          </Section>
        </Section>
      </div> */}

      <div className="sections-grid">
        <Link to="/medical-interview" className="section-card">
          <div className="section-icon">🗣️</div>
          <div className="section-title">医療面接</div>
          <div className="section-subtitle">Medical Interview</div>
        </Link>
        <Link to="/head-neck" className="section-card">
          <div className="section-icon">🧑‍⚕️</div>
          <div className="section-title">頭頸部</div>
          <div className="section-subtitle">Head & Neck</div>
        </Link>
        <Link to="/chest" className="section-card">
          <div className="section-icon">🫁</div>
          <div className="section-title">胸部</div>
          <div className="section-subtitle">Chest</div>
        </Link>
        <Link to="/abdomen" className="section-card">
          <div className="section-icon">🫃</div>
          <div className="section-title">腹部</div>
          <div className="section-subtitle">Abdomen</div>
        </Link>
        <Link to="/neurological" className="section-card">
          <div className="section-icon">🧠</div>
          <div className="section-title">神経</div>
          <div className="section-subtitle">Neurological</div>
        </Link>
        <Link to="/presentation" className="section-card">
          <div className="section-icon">📊</div>
          <div className="section-title">プレゼン</div>
          <div className="section-subtitle">Presentation</div>
        </Link>
        <Link to="/debug" className="section-card">
          <div className="section-icon">🧪</div>
          <div className="section-title">デバッグ</div>
          <div className="section-subtitle">Debug / Sandbox</div>
        </Link>
      </div>
    </div>
  );
};

type ContentMode = "react" | "html";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [contentMode, setContentMode] = useState<ContentMode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("contentMode");
      if (saved === "html" || saved === "react") return saved;
    }
    return "react";
  });
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [buttonPos, setButtonPos] = useState<{
    left: number;
    top: number;
  } | null>(null);
  const positionRef = useRef<{ left: number; top: number } | null>(null);
  const dragState = useRef({ dragging: false, moved: false, isTouch: false });
  const dragDetails = useRef({
    startX: 0,
    startY: 0,
    startLeft: 0,
    startTop: 0,
  });

  const applyPosition = (pos: { left: number; top: number }) => {
    positionRef.current = pos;
    setButtonPos(pos);
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    dragState.current.isTouch = isTouchDevice;

    if (!isTouchDevice) {
      try {
        const saved = localStorage.getItem("settingsButtonPosition");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (
            typeof parsed.left === "number" &&
            typeof parsed.top === "number"
          ) {
            applyPosition({ left: parsed.left, top: parsed.top });
          }
        }
      } catch (e) {
        console.warn("Failed to restore settings button position:", e);
      }
    }

    if (isTouchDevice) return;

    const handleMouseDown = (e: MouseEvent) => {
      dragState.current.dragging = true;
      dragState.current.moved = false;
      button.classList.add("dragging");
      const rect = button.getBoundingClientRect();
      dragDetails.current = {
        startX: e.clientX,
        startY: e.clientY,
        startLeft: rect.left,
        startTop: rect.top,
      };
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragState.current.dragging) return;
      const { startX, startY, startLeft, startTop } = dragDetails.current;
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      if (
        !dragState.current.moved &&
        (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2)
      ) {
        dragState.current.moved = true;
      }
      const newLeft = startLeft + deltaX;
      const newTop = startTop + deltaY;
      const maxLeft = window.innerWidth - button.offsetWidth;
      const maxTop = window.innerHeight - button.offsetHeight;
      const finalLeft = Math.max(0, Math.min(newLeft, maxLeft));
      const finalTop = Math.max(0, Math.min(newTop, maxTop));
      applyPosition({ left: finalLeft, top: finalTop });
    };

    const handleMouseUp = () => {
      if (!dragState.current.dragging) return;
      dragState.current.dragging = false;
      button.classList.remove("dragging");
      const latestPos = positionRef.current;
      if (latestPos) {
        try {
          localStorage.setItem(
            "settingsButtonPosition",
            JSON.stringify(latestPos)
          );
        } catch (e) {
          console.warn("Failed to save settings button position:", e);
        }
      }
    };

    button.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      button.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleSettingsClick = () => {
    if (dragState.current.moved) {
      dragState.current.moved = false;
      return;
    }
    setOpen(true);
  };

  useEffect(() => {
    try {
      localStorage.setItem("contentMode", contentMode);
    } catch (e) {
      console.warn("Failed to save content mode:", e);
    }
  }, [contentMode]);

  const buttonStyle = buttonPos
    ? {
        left: `${buttonPos.left}px`,
        top: `${buttonPos.top}px`,
        right: "auto",
      }
    : undefined;

  const basePath =
    import.meta.env.BASE_URL === "/" || import.meta.env.BASE_URL === ""
      ? ""
      : import.meta.env.BASE_URL.replace(/\/$/, "");

  const buildAppPath = (relative: string) => {
    const trimmed = relative.replace(/^\/+/, "");
    const url = `${basePath}/${trimmed}`.replace(/^\/\//, "/");
    return url.startsWith("/") ? url : `/${url}`;
  };

  const renderPage = (
    baseTitle: string,
    url: string,
    options?: { enableAudio?: boolean }
  ) =>
    contentMode === "react" ? (
      <ExternalHtmlPage
        title={`${baseTitle}(r)`}
        url={url}
        enableAudio={options?.enableAudio}
      />
    ) : (
      <PageIframe title={`${baseTitle}（HTML版）`} src={url} />
    );

  return (
    <ThemeProvider>
      <LayoutProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/medical-interview"
              element={renderPage(
                "医療面接",
                buildAppPath("legacy/medical-interview.html"),
                {
                  enableAudio: true,
                }
              )}
            />
            <Route
              path="/head-neck"
              element={renderPage(
                "頭頸部",
                buildAppPath("legacy/head-neck.html"),
                {
                  enableAudio: true,
                }
              )}
            />
            <Route
              path="/chest"
              element={renderPage("胸部", buildAppPath("legacy/chest.html"), {
                enableAudio: true,
              })}
            />
            <Route
              path="/abdomen"
              element={renderPage("腹部", buildAppPath("legacy/abdomen.html"), {
                enableAudio: true,
              })}
            />
            <Route
              path="/neurological"
              element={renderPage(
                "神経",
                buildAppPath("legacy/neurological.html"),
                {
                  enableAudio: true,
                }
              )}
            />
            <Route
              path="/presentation"
              element={renderPage(
                "プレゼン",
                buildAppPath("legacy/presentation.html"),
                {
                  enableAudio: true,
                }
              )}
            />
            <Route path="/debug" element={<DebugPage />} />
          </Routes>
          <button
            ref={buttonRef}
            style={buttonStyle}
            className="settings-button"
            aria-label="設定"
            onClick={handleSettingsClick}
          >
            ⚙️
          </button>
          <SettingsModal
            open={open}
            onClose={() => setOpen(false)}
            contentMode={contentMode}
            setContentMode={setContentMode}
          />
        </BrowserRouter>
      </LayoutProvider>
    </ThemeProvider>
  );
};

export default App;

const DebugPage: React.FC = () => {
  const { layout } = useLayout();
  return (
    <div
      className={`container ${
        layout === "two-column"
          ? "layout-two-column"
          : layout === "single-column"
          ? "layout-single-column"
          : ""
      }`}
    >
      <Link to="/" className="back-link">
        ← トップページに戻る
      </Link>
      <h1>デバッグ（UIコンポーネント検証）</h1>
      <Section title="総論（General Description）" level={2}>
        <p className="description">
          コンポーネントの動作確認用ページです。h2/h3/h4
          のトグルやレイアウト切替を試せます。
        </p>
        <ul className="expanded">
          <li>ダークモード切替（auto/dark）</li>
          <li>レイアウト（auto/2段/1段）</li>
          <li>折りたたみ可能な見出し</li>
        </ul>
        <Section title="デモ: h3 セクション" level={3} defaultCollapsed>
          <p>h3 をクリックして展開/折りたたみできます。</p>
          <ul className="expanded">
            <li>項目A</li>
            <li>項目B</li>
          </ul>
          <Section title="デモ: h4 セクション" level={4} defaultCollapsed>
            <p>h4 セクションも同様に制御できます。</p>
          </Section>
        </Section>
      </Section>
    </div>
  );
};
