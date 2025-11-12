# 医療面接対策 - 英語質問集

## プロジェクトの目的

英語での医療面接練習のためのインタラクティブな学習ツールです。医療面接で使用する質問文をクリックすると、OpenAI TTS APIで生成された高品質な音声が再生され、発音とイントネーションを学習できます。

## 機能

- **医療面接**: OPQRSTフレームワーク、系統的な質問集（便・尿・体重・食欲・睡眠、家族歴、既往歴、薬、健康診断、対処行動、酒タバコ、仕事、ストレス・睡眠、生理・性生活など）
- **身体診察**: 
  - 頭頸部診察（顔・顔貌、頭髪、頭皮、眼、耳、鼻、口・咽頭、頸部）
  - 胸部診察（視診、触診、打診、聴診）
  - 腹部診察（視診、聴診、打診、触診）
  - 神経診察（意識レベル、脳神経、運動系、感覚系、反射、協調運動、歩行）
- **音声再生機能**: 各英語表現をクリックすると、OpenAI TTS API（tts-1-hdモデル）で生成された高品質な音声が再生されます
- **レスポンシブデザイン**: スマートフォン、タブレット、PCで快適に閲覧可能
- **ダークモード**: システム設定に応じて自動切り替え、または手動切り替え可能
- **レイアウト切り替え**: 広い画面で2段組レイアウトを選択可能
- **セクションの折りたたみ**: h2、h3、h4単位でセクションを展開/折りたたみ可能

## ファイル構成

```
.
├── index.html                  # トップページ（各ページへのリンク）
├── medical-interview.html      # 医療面接の英語表現（90個）
├── head-neck.html             # 頭頸部診察の英語表現（93個）
├── abdomen.html                # 腹部診察の英語表現（58個）
├── chest.html                  # 胸部診察の英語表現（54個）
├── neurological.html           # 神経診察の英語表現（96個）
├── note.md                     # 質問文の元データ（Markdown形式）
├── generate_audio.py           # 医療面接用音声ファイル生成スクリプト
├── generate_all_audio.py       # 身体診察用音声ファイル一括生成スクリプト
├── embed_audio_map.py          # audio_map.jsonをHTMLに埋め込むスクリプト
├── start_server.sh             # ローカルサーバー起動スクリプト
├── audio/                      # 音声ファイルディレクトリ
│   ├── *.mp3                  # 各英語表現の音声ファイル（388個）
│   └── audio_map.json         # テキストとファイル名のマッピング（参考用）
├── README.md                   # このファイル
└── ANDROID_GUIDE.md            # Android対応ガイド
```

## 開発の経過

### 1. 初期段階：質問文の整理
- `note.md`に医療面接で使用する質問文を日本語で整理
- OPQRSTフレームワークと系統的な質問項目を構造化

### 2. 英語質問文の追加
- 各質問項目に対して、実践的な英語の質問例文を2-3文ずつ追加
- 医療面接でよく使われる標準的な英語表現を使用

### 3. HTML化と音声機能の実装
- スマートフォンでも見やすいレスポンシブデザインのHTMLファイルを作成
- 各質問文をクリックすると音声が再生される機能を実装
- 初期実装ではブラウザのWeb Speech APIを使用

### 4. 高品質音声の生成
- `sample.py`を参考に、OpenAI TTS APIを使用した音声生成スクリプト（`generate_audio.py`）を作成
- 69個の質問文すべてに対して、`tts-1-hd`モデルで高品質な音声ファイルを生成
- テキストとファイル名のマッピングJSONファイルを自動生成

### 5. CORS問題の解決
- `file://`プロトコルでHTMLを開く際のCORSエラーを解決
- 音声マッピングをHTMLファイルに直接埋め込むことで、外部JSONファイルの読み込みを不要に
- これにより、ローカルファイルとして直接開いても動作するように改善

### 6. 音声読み込みの最適化
- 音声ファイルの読み込み処理を改善
- `readyState`をチェックして再生可能な状態を確認
- `canplaythrough`イベントを待ってから再生することで、確実に音声が再生されるように改善

### 7. GitHub Pagesへのデプロイ
- GitHubリポジトリを作成し、コードをプッシュ
- GitHubのPush Protection機能により、APIキーがコードに含まれていることを検出
- APIキーを環境変数（`OPENAI_API_KEY`）に移動し、コードから削除
- `.gitignore`ファイルを作成して、機密情報が誤ってコミットされないように設定
- Git履歴を書き換えて、APIキーを含む古いコミットを削除
- GitHub Pagesを有効化し、Webアプリとして公開
- 公開URL: `https://Shinyanogit.github.io/medical-interview-english/`

### 8. UI/UXの改善
- 設定ボタンとダークモード切り替え機能を追加
- セクションのトグル機能を実装（h2、h3、h4単位で展開/折りたたみ可能）
- 設定ボタンをPCでドラッグ&ドロップ可能に（位置を保存）
- 広い画面（iPad、Macなど）で2段組レイアウトを実装
- 相槌・共感表現のセクションを追加

### 9. 身体診察ページの追加（2024年12月）
- **新規ページの作成**:
  - `head-neck.html`: 頭頸部診察（93個の英語表現）
  - `abdomen.html`: 腹部診察（58個の英語表現）
  - `chest.html`: 胸部診察（54個の英語表現）
  - `neurological.html`: 神経診察（96個の英語表現）
  - 合計301個の新しい英語表現を追加

- **コード構造の統一**:
  - すべての身体診察ページで`medical-interview.html`と同じCSS/JavaScript構造を適用
  - レスポンシブデザイン、ダークモード、レイアウト切り替え機能を統一
  - セクションのトグル機能（h2、h3、h4単位）を実装

- **ボタンスタイルの実装**:
  - `.question-item`要素をボタン風のスタイルに変更
  - ホバー効果、アクティブ状態、再生中の視覚的フィードバックを追加
  - スピーカーアイコン（🔊）を追加

- **音声ファイルの生成と統合**:
  - `generate_all_audio.py`スクリプトを作成し、すべての身体診察ページの音声を一括生成
  - OpenAI TTS API（`tts-1-hd`モデル、`nova`音声）を使用して388個の音声ファイルを生成
  - `audio_map.json`を更新し、すべての英語表現と音声ファイルのマッピングを管理
  - `embed_audio_map.py`スクリプトを作成し、`audio_map.json`を各HTMLファイルに直接埋め込み（CORSエラー回避）

- **音声再生機能の改善**:
  - Web Speech APIへのフォールバックを無効化（GPTの音声のみを使用）
  - マッチング失敗時や音声ファイル読み込みエラー時にエラーメッセージを表示
  - Promiseベースの非同期処理で音声マップの読み込みを確実に待機
  - テキストのクリーンアップ処理を追加（`(ai)`タグやパラフレーズの削除）

- **UIの微調整**:
  - `<p class="description">`タグのスタイルを控えめに変更（フォントサイズ縮小、背景透明化、不透明度調整）
  - 上位のトグル（h2、h3、h4）が閉じたときに、下位の要素（`<p>`、`<ul>`、`<li>`）も確実に非表示になるようにCSSとJavaScriptを修正
  - セクションを閉じたときに、そのセクション内のすべてのサブセクションの展開状態をリセット

## 使用方法

### 基本的な使い方

1. `index.html`をブラウザで開く
2. 各質問文をクリックすると、音声が再生されます
3. 再生中の質問文は緑色にハイライト表示されます

### Androidデバイスで使用する方法

**簡単な方法（ローカルネットワーク）:**

1. ターミナルで以下を実行：
   ```bash
   ./start_server.sh
   ```
   または
   ```bash
   python3 -m http.server 8000 --bind 0.0.0.0
   ```

2. 表示されたURLをAndroidデバイスのブラウザで開く
   - PCとAndroidデバイスが同じWi-Fiネットワークに接続されている必要があります

**Webアプリ化（推奨）:**

詳細は `ANDROID_GUIDE.md` を参照してください。
- GitHub Pagesで公開（無料）
- Netlifyで公開（無料、簡単）
- どこからでもアクセス可能

**現在の公開URL:**
- https://Shinyanogit.github.io/medical-interview-english/

このURLから、PC・スマートフォン・タブレットのどのデバイスからでもアクセスできます。

### 音声ファイルの再生成

**医療面接用の音声ファイルを再生成する場合：**
```bash
# 既存ファイルを上書きして再生成
python generate_audio.py --overwrite

# カスタムオプションで生成
python generate_audio.py --md-file note.md --output-dir audio --voice alloy --overwrite
```

**身体診察用の音声ファイルを一括生成する場合：**
```bash
# 環境変数を設定
export OPENAI_API_KEY="your-api-key-here"

# すべての身体診察ページの音声を生成
python generate_all_audio.py

# audio_map.jsonをHTMLに埋め込む（CORSエラー回避のため）
python embed_audio_map.py
```

利用可能な音声：
- `alloy` (デフォルト)
- `echo`
- `fable`
- `onyx`
- `nova` (身体診察ページで使用)
- `shimmer`

## 技術スタック

- **HTML/CSS/JavaScript**: フロントエンド
- **OpenAI TTS API**: 音声生成（tts-1-hdモデル）
- **Python**: 音声ファイル生成スクリプト

## 注意事項

- OpenAI APIキーが必要です（環境変数`OPENAI_API_KEY`として設定）
- 音声ファイルは`audio/`ディレクトリに保存されます
- `index.html`は`file://`プロトコルで直接開いても動作します（CORS問題を回避済み）
- APIキーはコードに含めず、環境変数として管理してください（セキュリティのため）

## GitHub Pagesでの公開

### サイトの更新方法

`main`ブランチを更新すると、GitHub Pagesのサイトも自動的に更新されます：

```bash
# 1. ファイルを編集

# 2. 変更をコミット
git add .
git commit -m "更新内容"

# 3. GitHubにプッシュ
git push origin main

# 4. 数分待つと、サイトが自動的に更新される
```

### GitHub Pagesの制約

- **ファイルサイズ**: リポジトリ全体で推奨1GB以下、1ファイル100MB以下
- **帯域幅**: Publicリポジトリは無制限
- **ビルド時間**: 初回1〜5分、更新時1〜3分
- **静的サイトのみ**: サーバーサイド処理（PHP、Python、データベースなど）は不可
- **HTTPS**: 自動でHTTPS対応（無料）
- **公開範囲**: Publicリポジトリは誰でもアクセス可能

現在のプロジェクトはこれらの制約内で問題なく動作します。

## 今後の計画

### Capacitorによるネイティブアプリ化

**目標**: iPhoneとAndroidの両方に対応したネイティブアプリとして公開

**Capacitorについて**:
- Capacitorは、既存のWebアプリ（HTML/CSS/JavaScript）をネイティブアプリに変換するフレームワーク
- **1つのコードベースでiOSとAndroid両方に対応**可能
- 既存のコードをほぼそのまま使用できるため、開発コストが低い
- App StoreとGoogle Play Storeに公開可能

**実装予定の機能**:
- ネイティブアプリとしてのパッケージング
- オフライン動作の最適化
- プッシュ通知（オプション）
- アプリアイコンの作成
- ストア申請用の準備

**メリット**:
- ユーザーがアプリストアからインストール可能
- ホーム画面にアイコンとして表示
- よりネイティブな体験を提供
- オフラインでも基本的な機能が動作

**参考**: [Capacitor公式サイト](https://capacitorjs.com/)

## YouTube文字起こしデータについて

### Wisconsin身体診察動画の文字起こし

YouTubeの再生リスト（[Wisconsin身体診察シリーズ](https://www.youtube.com/watch?v=REJrguhSig4&list=PL58EB7187C918A367&index=2)）から文字起こしデータを取得し、`サンプル資料/Data/Wisconsin/身体診察/`ディレクトリに保存しました。

**取得方法**:
```bash
python3 download_youtube_transcripts.py
```

**取得内容**:
- 29個の動画の文字起こしデータ（英語）
- 各ファイルには動画ID、タイトル、言語情報が含まれます
- 生データ: `サンプル資料/Data/Wisconsin/身体診察/`
- 整形済み: `サンプル資料/Data/Wisconsin/身体診察_整形済み/`

**文字起こしの整形**:
```bash
python3 format_transcripts.py
```
- YouTube字幕の短い行を結合し、読みやすい段落に整形
- 文末記号（ピリオド、疑問符、感嘆符）で適切に段落を分割
- 2-3文ごと、または200-250文字程度で段落を区切る

**患者への指示の抽出**:
```bash
python3 extract_patient_instructions.py
```
- 文字起こしから「患者への呼びかけ・指示」のみを抽出
- 視聴者への説明と患者への指示を自動的に区別
- 出力先: `サンプル資料/Data/Wisconsin/患者への指示/`
- 約215個の患者への指示を抽出（全29動画から）

**注意事項**:
- YouTubeのレート制限により、連続して大量のリクエストを送るとIPブロックされる可能性があります
- スクリプトは各リクエスト間に3秒の待機時間を設けています
- 既に保存されたファイルは自動的にスキップされます

### 追加の動画プレイリスト（取得待機中）

以下の3つのプレイリストからも文字起こしと患者への指示を抽出予定です：

1. **Head and Neck Examination Series**
   - URL: https://www.youtube.com/watch?v=iUCHCTOKiA8&list=PL7BA2576027185DF3
   - 説明: 頭頸部診察の詳細シリーズ

2. **Physical Examination Series**
   - URL: https://www.youtube.com/watch?v=2umCjR2vRhU&list=PLC7C8F7FBEC35295D
   - 説明: 身体診察の包括的なシリーズ

3. **Clinical Skills Series**
   - URL: https://www.youtube.com/playlist?list=PLi9o6OEHhWUgfQ86kx5mKkRdaSJJfgFI1
   - 説明: 臨床スキルの実践シリーズ

**現在の状況**: IPブロックにより取得待機中。しばらく時間を置いてから再試行予定。

## 復元文書について

### 1AM1100の復元

`サンプル資料`フォルダ内の1AM1100のHTML文書を復元し、`サンプル資料/restored/1AM1100/`ディレクトリに配置しました。

**復元内容**:
- **Section 0**: 導入 (Introduction) - 4ファイル
- **Section A**: 身体診察総論 (General Physical Examination) - 10ファイル
- **Section B**: 頭頸部・胸部・腹部の身体診察 (Head, Neck, Chest, and Abdomen) - 42ファイル
- **Section C**: 神経系の身体診察 (Neurological Examination) - 47ファイル
- **Section D**: 筋・骨格系の身体診察 (Musculoskeletal Examination) - 19ファイル
- **Section E**: 心肺蘇生法 (Cardiopulmonary Resuscitation) - 10ファイル
- **Section Z**: 資料 (Reference) - 1ファイル
- **合計**: 133個のHTMLファイル
- 関連するCSS、JavaScript、画像、アイコンファイル、メニューファイル

**復元方法**:
```bash
python3 restore_1AM1100.py
```

**閲覧方法**:
1. `サンプル資料/restored/1AM1100/S1/index.html`をブラウザで開く（個別ファイル一覧）
2. `サンプル資料/restored/1AM1100/S1/integrated.html`をブラウザで開く（統合ビューアー）
3. または、各HTMLファイルを直接開く（例: `サンプル資料/restored/1AM1100/S1/B/S1BP001.html`）

**注意事項**:
- 元のHTMLファイルは相対パス（`../css/`, `../js/`, `../icon/`）を使用しているため、ディレクトリ構造を維持する必要があります
- 復元文書は元の構造を保ったまま、現在のWebサイトへの組み込み方法を考察するための参考資料として使用できます

## 今後の改善案

- 音声の速度調整機能
- お気に入り機能
- 学習進捗の記録
- クイズ機能の追加
