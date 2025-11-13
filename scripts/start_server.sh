#!/bin/bash
# ローカルHTTPサーバーを起動するスクリプト

PORT=8000

echo "=========================================="
echo "医療面接対策 - ローカルサーバー起動"
echo "=========================================="
echo ""
echo "サーバーを起動しています..."
echo ""

# 現在のディレクトリを取得
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# IPアドレスを取得（macOS用）
IP_ADDRESS=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "localhost")

echo "📱 Androidデバイスで以下のURLにアクセスしてください:"
echo ""
echo "   http://${IP_ADDRESS}:${PORT}/index.html"
echo ""
echo "または、PCのブラウザで以下にアクセス:"
echo ""
echo "   http://localhost:${PORT}/index.html"
echo ""
echo "⚠️  同じWi-Fiネットワークに接続されている必要があります"
echo ""
echo "サーバーを停止するには Ctrl+C を押してください"
echo "=========================================="
echo ""

# Python 3でHTTPサーバーを起動
python3 -m http.server $PORT --bind 0.0.0.0
