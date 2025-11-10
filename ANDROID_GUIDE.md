# Android対応ガイド

## 方法1: ローカルネットワークで共有（最も簡単）

同じWi-Fiネットワークに接続したPCとAndroidデバイス間で、HTMLファイルを共有する方法です。

### 手順

1. **PCでHTTPサーバーを起動**

```bash
# Python 3がインストールされている場合
cd "/Users/shinyyama/Documents/医学/臨床実習/エレクラ/野口医学研究所/医療面接対策"
python3 -m http.server 8000

# または、より詳細な情報を表示
python3 -m http.server 8000 --bind 0.0.0.0
```

2. **PCのIPアドレスを確認**

```bash
# macOSの場合
ifconfig | grep "inet " | grep -v 127.0.0.1

# または
ipconfig getifaddr en0
```

出力例: `192.168.1.100`

3. **Androidデバイスでアクセス**

- Androidのブラウザ（Chromeなど）を開く
- アドレスバーに以下を入力：
  ```
  http://192.168.1.100:8000/index.html
  ```
  （`192.168.1.100`は実際のPCのIPアドレスに置き換えてください）

4. **ホーム画面に追加（オプション）**

- Androidブラウザのメニューから「ホーム画面に追加」を選択
- これでアプリのように起動できます

### 利点
- ✅ インターネット接続不要
- ✅ 設定が簡単
- ✅ 無料

### 注意点
- PCとAndroidデバイスが同じWi-Fiネットワークに接続されている必要があります
- PCを起動している間のみアクセス可能です

---

## 方法2: クラウドストレージを使用

Google DriveやDropboxなどのクラウドストレージにアップロードしてアクセスする方法です。

### Google Driveの場合

1. **ファイルをアップロード**
   - `index.html`と`audio/`フォルダ全体をGoogle Driveにアップロード

2. **共有設定**
   - ファイルを右クリック → 「共有」→ 「リンクを知っている全員」に変更

3. **Google Drive Viewerで開く**
   - ただし、Google DriveのビューアーではJavaScriptが制限される可能性があります

### より確実な方法：Google Drive + 簡易サーバー

1. **ファイルをZIP化**
   ```bash
   cd "/Users/shinyyama/Documents/医学/臨床実習/エレクラ/野口医学研究所/医療面接対策"
   zip -r medical_interview.zip index.html audio/
   ```

2. **Google Driveにアップロード**
   - ZIPファイルをGoogle Driveにアップロード
   - Androidデバイスでダウンロードして解凍
   - ファイルマネージャーで`index.html`を開く

---

## 方法3: GitHub PagesでWebアプリ化（推奨）

無料でWebアプリとして公開し、どこからでもアクセスできるようにします。

### 手順

1. **GitHubリポジトリを作成**
   - GitHubアカウントにログイン
   - 新しいリポジトリを作成（例: `medical-interview-english`）

2. **ファイルをアップロード**
   ```bash
   cd "/Users/shinyyama/Documents/医学/臨床実習/エレクラ/野口医学研究所/医療面接対策"
   
   # Gitリポジトリを初期化（まだの場合）
   git init
   
   # ファイルを追加
   git add index.html audio/ README.md
   
   # コミット
   git commit -m "Initial commit"
   
   # GitHubリポジトリに接続（URLは実際のリポジトリURLに置き換え）
   git remote add origin https://github.com/yourusername/medical-interview-english.git
   git branch -M main
   git push -u origin main
   ```

3. **GitHub Pagesを有効化**
   - GitHubリポジトリの「Settings」→「Pages」
   - Sourceを「main」ブランチに設定
   - 数分待つと、`https://yourusername.github.io/medical-interview-english/`でアクセス可能

4. **Androidデバイスでアクセス**
   - ブラウザで上記URLを開く
   - ホーム画面に追加してアプリのように使用可能

### 利点
- ✅ どこからでもアクセス可能
- ✅ 無料
- ✅ 自動的にHTTPS対応
- ✅ 更新が簡単（git pushするだけ）

---

## 方法4: NetlifyでWebアプリ化（最も簡単なデプロイ）

Netlifyはドラッグ&ドロップで簡単にデプロイできます。

### 手順

1. **Netlifyアカウントを作成**
   - https://www.netlify.com/ にアクセス
   - GitHubアカウントでサインアップ（推奨）

2. **デプロイ**
   - Netlifyダッシュボードで「Add new site」→「Deploy manually」
   - `index.html`と`audio/`フォルダをZIP化してアップロード
   - または、GitHubリポジトリを接続して自動デプロイ

3. **アクセス**
   - Netlifyが自動的にURLを生成（例: `https://random-name-123.netlify.app`）
   - このURLをAndroidデバイスで開く

### 利点
- ✅ 非常に簡単なデプロイ
- ✅ 無料プランあり
- ✅ 自動HTTPS
- ✅ カスタムドメインも可能

---

## 推奨方法

**開発・テスト段階**: 方法1（ローカルネットワーク）
**本番運用**: 方法3（GitHub Pages）または方法4（Netlify）

---

## トラブルシューティング

### 音声が再生されない場合

1. **ファイルパスの確認**
   - `audio/`フォルダが正しく配置されているか確認
   - ファイル名が`audio_map.json`と一致しているか確認

2. **ブラウザの確認**
   - ChromeやFirefoxなどのモダンブラウザを使用
   - 古いブラウザでは動作しない可能性があります

3. **コンソールの確認**
   - ブラウザの開発者ツール（F12）でエラーを確認

### ローカルネットワークで接続できない場合

1. **ファイアウォールの確認**
   - PCのファイアウォールでポート8000が開いているか確認

2. **IPアドレスの確認**
   - PCとAndroidデバイスが同じWi-Fiネットワークに接続されているか確認

3. **ポート番号の変更**
   - 8000番ポートが使用中の場合は、別のポート（例: 8080）を使用
