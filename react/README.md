# React プロトタイプ（Option A 併存構成）

このディレクトリは、既存の静的サイトと併存させる React + Vite + TypeScript の最小構成です。

## 前提
- Node.js 18+ 推奨

## 開発
```
cd react
npm install
npm run dev
```

## ビルド
```
npm run build
npm run preview
```

## 構成
- `src/context/ThemeContext.tsx`: テーマ（auto/dark/light）管理
- `src/context/LayoutContext.tsx`: レイアウト（auto/two-column/single-column）管理
- `src/components/SettingsModal.tsx`: 設定モーダル
- `src/components/Section.tsx`: 折りたたみ可能なセクション（h2/h3/h4）
- `src/styles.css`: 既存スタイルをベースにした共通CSS

## メモ
- まずは UI 基盤の用意のみ。コンテンツ（医療面接や身体診察のデータ）は後続で JSON 化して描画予定。
- ルート配信の既存HTMLはそのまま動作します（このフォルダは独立した開発/配布ユニット）。

