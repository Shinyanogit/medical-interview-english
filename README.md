# 医療面接対策 - 英語質問集

## プロジェクトの目的

英語での医療面接練習のためのインタラクティブな学習ツールです。医療面接で使用する質問文をクリックすると、OpenAI TTS APIで生成された高品質な音声が再生され、発音とイントネーションを学習できます。

## 機能

- **OPQRSTフレームワーク**: 症状聴取の基本フレームワーク（Onset, Palliative/Provocative, Quality, Region/Radiation, Severity, Time course）
- **系統的な質問集**: 便・尿・体重・食欲・睡眠、家族歴、既往歴、薬、健康診断、対処行動、酒タバコ、仕事、ストレス・睡眠、生理・性生活など
- **音声再生機能**: 各質問文をクリックすると、OpenAI TTS API（tts-1-hdモデル）で生成された高品質な音声が再生されます
- **レスポンシブデザイン**: スマートフォン、タブレット、PCで快適に閲覧可能

## ファイル構成

```
.
├── index.html              # メインのHTMLファイル（音声マッピングを含む）
├── note.md                 # 質問文の元データ（Markdown形式）
├── generate_audio.py        # 音声ファイル生成スクリプト
├── start_server.sh          # ローカルサーバー起動スクリプト
├── audio/                  # 音声ファイルディレクトリ
│   ├── *.mp3              # 各質問文の音声ファイル（69個）
│   └── audio_map.json     # テキストとファイル名のマッピング（参考用）
├── README.md              # このファイル
└── ANDROID_GUIDE.md       # Android対応ガイド
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

音声ファイルを再生成する場合：

```bash
# 既存ファイルを上書きして再生成
python generate_audio.py --overwrite

# カスタムオプションで生成
python generate_audio.py --md-file note.md --output-dir audio --voice alloy --overwrite
```

利用可能な音声：
- `alloy` (デフォルト)
- `echo`
- `fable`
- `onyx`
- `nova`
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

## 今後の改善案

- 音声の速度調整機能
- お気に入り機能
- 学習進捗の記録
- クイズ機能の追加
