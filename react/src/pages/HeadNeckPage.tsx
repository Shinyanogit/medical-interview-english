import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";
import Section from "../components/Section";
import PageIframe from "../components/PageIframe";

const basePath =
  import.meta.env.BASE_URL === "/" || import.meta.env.BASE_URL === ""
    ? ""
    : import.meta.env.BASE_URL.replace(/\/$/, "");

const buildAppPath = (relative: string) => {
  const trimmed = relative.replace(/^\/+/, "");
  const url = `${basePath}/${trimmed}`.replace(/^\/\//, "/");
  return url.startsWith("/") ? url : `/${url}`;
};

const HeadNeckPage: React.FC = () => {
  const { layout } = useLayout();
  const [showLegacy, setShowLegacy] = useState(false);
  const legacyUrl = useMemo(() => buildAppPath("legacy/head-neck.html"), []);

  const layoutClass =
    layout === "two-column"
      ? "layout-two-column"
      : layout === "single-column"
      ? "layout-single-column"
      : "";

  return (
    <div className={`container ${layoutClass}`}>
      <Link to="/" className="back-link">
        ← トップページに戻る
      </Link>
      <h1>頭頸部</h1>

      <Section title="改訂準備中（Work in progress）" level={2}>
        <p>
          胸部ページ同様、Reactベースで刷新予定です。現在の英語表現は旧版に隔離し、トグルを開くか別ページ遷移でのみ閲覧できるようにしています。
        </p>
        <ul className="expanded">
          <li>アウトライン: docs/head-neck-outline.md</li>
          <li>原稿案は Notion で作成予定</li>
          <li>旧版は iframe または別タブで確認可能</li>
        </ul>
      </Section>

      <Section title="次のステップ案" level={2} defaultCollapsed>
        <ul className="expanded">
          <li>新セリフを Notion でドラフト → React セクションへ実装</li>
          <li>音声再生のキー紐づけを胸部ページと同等に整備</li>
          <li>画像・手技の差し替え計画を検討</li>
        </ul>
      </Section>

      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <button
          type="button"
          className="auth-button auth-button-primary"
          onClick={() => setShowLegacy((prev) => !prev)}
        >
          {showLegacy ? "旧版を閉じる" : "旧版を表示"}
        </button>
        <Link to="/head-neck/old" className="back-link">
          旧版を別ページで開く
        </Link>
      </div>

      {showLegacy && (
        <Section title="旧版（Head &amp; Neck legacy）" level={2} fullWidth>
          <PageIframe src={legacyUrl} title="頭頸部診察（旧版）" />
        </Section>
      )}
    </div>
  );
};

export default HeadNeckPage;
