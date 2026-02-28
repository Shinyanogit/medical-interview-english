import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";
import Section from "../components/Section";
import AudioHighlightPlayer, {
  AudioChainProvider,
} from "../components/AudioHighlightPlayer";
import {
  overviewData,
  sleCaseData,
  raCaseData,
  formatComparison,
  alternativeFormatSections,
  formatComparisonNote,
  alternativeFormatCaseIntro,
  vocabularySections,
  templateData,
  peTemplateData,
  type CaseData,
  type AudioSection,
} from "../data/casePresentationData";

const basePath =
  import.meta.env.BASE_URL === "/" || import.meta.env.BASE_URL === ""
    ? ""
    : import.meta.env.BASE_URL.replace(/\/$/, "");

function buildAppPath(relative: string) {
  const trimmed = relative.replace(/^\/+/, "");
  const url = `${basePath}/${trimmed}`.replace(/^\/\//, "/");
  return url.startsWith("/") ? url : `/${url}`;
}

// ── Tab definitions ──

const TABS = [
  { id: "overview", label: "全体像" },
  { id: "template", label: "テンプレート" },
  { id: "sle", label: "SLE症例" },
  { id: "ra", label: "RA症例" },
  { id: "formats", label: "場面別" },
  { id: "vocab", label: "ボキャブラリー" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// ── Sub-components ──

const CalloutBlock: React.FC<{
  type: "note" | "example" | "info" | "warning" | "tip";
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ type, label, children, defaultOpen = false }) => (
  <details className={`callout callout-${type}`} open={defaultOpen || undefined}>
    <summary>{label}</summary>
    <div className="callout-content">{children}</div>
  </details>
);

const MarkdownText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
};

// ── Case Tab (SLE / RA) ──

const CaseTab: React.FC<{ data: CaseData }> = ({ data }) => (
  <AudioChainProvider>
    <div>
      <p className="description">
        <MarkdownText text={data.intro} />
      </p>

      <Section title="バックグラウンド安定再生（1本）" level={3} defaultCollapsed={false}>
        <p style={{ fontSize: "0.85em", color: "var(--text-color)", opacity: 0.7 }}>
          スマホで通し再生が止まる場合は、こちらを使ってください。
        </p>
        <audio controls preload="none" style={{ width: "100%", maxWidth: 480 }}>
          <source src={buildAppPath(data.fullCaseAudio)} type="audio/mpeg" />
        </audio>
      </Section>

      {data.sections.map((section, i) => (
        <Section key={section.id} title={section.title} level={2} defaultCollapsed={false}>
          {section.description && (
            <p style={{ fontSize: "0.8em", opacity: 0.6, margin: "0 0 8px" }}>
              → {section.description}
            </p>
          )}
          <AudioHighlightPlayer
            text={section.text}
            audioSrc={buildAppPath(section.audioFile)}
            timestampSrc={buildAppPath(section.timestampFile)}
            order={i}
          />
          {section.tip && (
            <CalloutBlock type="tip" label={section.tip.title} defaultOpen>
              <ul>
                {section.tip.items.map((item, j) => (
                  <li key={j}>
                    <MarkdownText text={item} />
                  </li>
                ))}
              </ul>
            </CalloutBlock>
          )}
        </Section>
      ))}
    </div>
  </AudioChainProvider>
);

// ── Overview Tab ──

const OverviewTab: React.FC = () => {
  const d = overviewData;
  return (
    <div>
      <p className="description">
        <MarkdownText text={d.intro} />
      </p>

      <Section title="Don't Make Your Attending SAD" level={2}>
        <table>
          <thead>
            <tr>
              <th>原則</th>
              <th>意味</th>
              <th>要点</th>
            </tr>
          </thead>
          <tbody>
            {d.sadPrinciples.map((p) => (
              <tr key={p.letter}>
                <td>
                  <strong>{p.letter}</strong>tructure / <strong>{p.name}</strong>
                </td>
                <td>{p.meaning}</td>
                <td>{p.point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Full Case Presentation: 12項目" level={2}>
        <ol>
          {d.twelveItems.map((item, i) => (
            <li key={i}>
              <MarkdownText text={item} />
            </li>
          ))}
        </ol>
      </Section>

      <Section title="3つのダメパターン" level={2}>
        <table>
          <thead>
            <tr>
              <th>パターン</th>
              <th>一言</th>
            </tr>
          </thead>
          <tbody>
            {d.badPatterns.map((p) => (
              <tr key={p.name}>
                <td>
                  <strong>{p.name}</strong>
                </td>
                <td>{p.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <CalloutBlock type="warning" label="詳細">
          {d.badPatterns.map((p) => (
            <p key={p.name}>
              <strong>{p.name}</strong>: {p.detail}
            </p>
          ))}
        </CalloutBlock>
      </Section>

      <Section title="Diagnostic Framing: 4ステップ" level={2}>
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>内容</th>
              <th>ポイント</th>
            </tr>
          </thead>
          <tbody>
            {d.diagnosticFraming.map((s) => (
              <tr key={s.step}>
                <td>{s.step}</td>
                <td>{s.content}</td>
                <td>{s.point}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <strong>{d.diagnosticFramingNote}</strong>
        </p>
        <CalloutBlock type="example" label="実践例で見るStep 1→4の流れ（SLE症例）">
          <p>
            <strong>Step 1 — Patient Information:</strong>
          </p>
          <blockquote>
            <MarkdownText text={d.diagnosticFramingExample.step1} />
          </blockquote>
          <p>
            <strong>Step 4 — Summary（逆算の起点）:</strong>
          </p>
          <blockquote>
            <MarkdownText text={d.diagnosticFramingExample.step4} />
          </blockquote>
        </CalloutBlock>
      </Section>

      <Section title="HPI の構築" level={2}>
        <ul>
          {d.hpiConstruction.principles.map((p, i) => (
            <li key={i}>
              <MarkdownText text={p} />
            </li>
          ))}
        </ul>
        <CalloutBlock type="tip" label="OPQRSTの扱い">
          <p>{d.hpiConstruction.opqrstNote}</p>
        </CalloutBlock>
        <Section title="膠原病でのHPIのポイント" level={3}>
          <ul>
            {d.hpiConstruction.rheumatologyPoints.map((p, i) => (
              <li key={i}>
                <MarkdownText text={p} />
              </li>
            ))}
          </ul>
        </Section>
      </Section>

      <Section title="Pertinent Positives & Negatives" level={2}>
        <p>
          鑑別に関連する所見を <strong>ある場合もない場合も</strong> 述べる。
        </p>
        <p>
          <strong>判断基準</strong>: <em>{d.pertinentPosNeg.criterion}</em>
        </p>
        <p>
          <strong>成功の条件</strong>: {d.pertinentPosNeg.successCondition}
        </p>
      </Section>

      <Section title="Semantic Qualifiers" level={2}>
        <table>
          <thead>
            <tr>
              <th>一般的表現</th>
              <th>Semantic Qualifier</th>
              <th>示唆する鑑別</th>
            </tr>
          </thead>
          <tbody>
            {d.semanticQualifiers.map((q, i) => (
              <tr key={i}>
                <td>{q.general}</td>
                <td>{q.qualifier}</td>
                <td>{q.suggests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="一般英語 vs 医学英語" level={2}>
        <table>
          <thead>
            <tr>
              <th>セクション</th>
              <th>使う言語</th>
              <th>理由</th>
            </tr>
          </thead>
          <tbody>
            {d.languageUse.map((l, i) => (
              <tr key={i}>
                <td>{l.section}</td>
                <td>{l.language}</td>
                <td>{l.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="学習ロードマップ" level={2}>
        <ol>
          {d.learningRoadmap.map((item, i) => (
            <li key={i}>
              <MarkdownText text={item} />
            </li>
          ))}
        </ol>
        <CalloutBlock type="tip" label="最初にやりがちな過ち">
          <MarkdownText text={d.learningMistake} />
        </CalloutBlock>
      </Section>
    </div>
  );
};

// ── Template Tab ──

const TemplateTab: React.FC = () => (
  <div>
    <p className="description">
      日本語ラベルをクリック → 英語テンプレが展開。閉じた状態で「英語で何と言うか」を考えてから開く。
    </p>

    {templateData.map((tmpl) => (
      <Section key={tmpl.id} title={tmpl.sectionTitle} level={2}>
        {tmpl.blocks.map((block, i) => (
          <CalloutBlock
            key={i}
            type={block.type}
            label={block.label}
            defaultOpen={block.type === "warning"}
          >
            <MarkdownText text={block.content} />
          </CalloutBlock>
        ))}
      </Section>
    ))}

    <Section title="PE → 身体診察 定型表現（膠原病特化）" level={2}>
      <p className="description">
        膠原病で追加すべき所見は ★ で表示。
      </p>
      {peTemplateData.map((pe, i) => (
        <Section key={i} title={pe.section} level={3}>
          <ul>
            {pe.expressions.map((expr, j) => (
              <li key={j}>{expr}</li>
            ))}
          </ul>
          {pe.rheumatologyAdditions && pe.rheumatologyAdditions.length > 0 && (
            <>
              <p>
                <strong>★ 膠原病で追加:</strong>
              </p>
              <ul>
                {pe.rheumatologyAdditions.map((expr, j) => (
                  <li key={j}>{expr}</li>
                ))}
              </ul>
            </>
          )}
        </Section>
      ))}
    </Section>
  </div>
);

// ── Formats Tab ──

const FormatsTab: React.FC = () => (
  <AudioChainProvider>
    <div>
      <Section title="使い分け" level={2} defaultCollapsed={false}>
        <table>
          <thead>
            <tr>
              <th>様式</th>
              <th>目的</th>
              <th>いつ使う</th>
              <th>要素数</th>
            </tr>
          </thead>
          <tbody>
            {formatComparison.map((f) => (
              <tr key={f.name}>
                <td>
                  <strong>{f.name}</strong>
                </td>
                <td>{f.purpose}</td>
                <td>{f.when}</td>
                <td>{f.elements}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="練習用の共通症例" level={2} defaultCollapsed={false}>
        <p>{alternativeFormatCaseIntro}</p>
      </Section>

      {alternativeFormatSections.map((section, i) => {
        const formatInfo = formatComparison.find((f) =>
          section.title.includes(f.name)
        );
        return (
          <Section key={section.id} title={section.title} level={2} defaultCollapsed={false}>
            {formatInfo?.background && (
              <CalloutBlock type="info" label="背景">
                <p>{formatInfo.background}</p>
              </CalloutBlock>
            )}
            <AudioHighlightPlayer
              text={section.text}
              audioSrc={buildAppPath(section.audioFile)}
              timestampSrc={buildAppPath(section.timestampFile)}
              order={i}
            />
          </Section>
        );
      })}

      <CalloutBlock type="info" label="各フォーマットの情報量の違い" defaultOpen>
        <MarkdownText text={formatComparisonNote} />
      </CalloutBlock>
    </div>
  </AudioChainProvider>
);

// ── Vocab Tab ──

const VocabTab: React.FC = () => (
  <div>
    <p className="description">
      フリップカード用。日本語 → 英語を瞬時に言えるか確認する。
    </p>
    {vocabularySections.map((section) => (
      <Section key={section.id} title={section.title} level={2}>
        <div style={{ overflowX: "auto" }}>
          <table className="vocab-table">
            <thead>
              <tr>
                {section.columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.entries.map((entry, i) => (
                <tr key={i}>
                  <td>{entry.jp}</td>
                  <td>{entry.en}</td>
                  <td>{entry.example}</td>
                  {entry.extra !== undefined && <td>{entry.extra}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    ))}
  </div>
);

// ── Main Page ──

const CasePresentationPage: React.FC = () => {
  const { layout } = useLayout();
  const [activeTab, setActiveTab] = useState<TabId>("overview");

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
      <h1>症例プレゼンテーション</h1>
      <p className="description">
        英語症例プレゼンテーションの型・定型表現・実践例を学ぶ
      </p>

      <div className="case-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`case-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="case-tab-content">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "template" && <TemplateTab />}
        {activeTab === "sle" && <CaseTab data={sleCaseData} />}
        {activeTab === "ra" && <CaseTab data={raCaseData} />}
        {activeTab === "formats" && <FormatsTab />}
        {activeTab === "vocab" && <VocabTab />}
      </div>
    </div>
  );
};

export default CasePresentationPage;
