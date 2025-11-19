#!/usr/bin/env python3
"""
1A662F0/B6のHTMLファイルにナビゲーションボタンと見開き機能を追加するスクリプト
"""
import os
import re
import json
from pathlib import Path
from typing import List, Tuple, Optional

BASE_DIR = Path("/Users/shinyyama/Documents/プログラミング/medical-interview-english/local/restored/1A662F0/3.0.2/B6")

def get_all_html_files() -> List[Path]:
    """すべてのHTMLファイル（index.htmlを除く）を取得してソート"""
    html_files = []
    for html_file in BASE_DIR.rglob("*.html"):
        if html_file.name != "index.html" and html_file.name != "topmenu_tentative.html" and html_file.is_file():
            # menuディレクトリとその他の特殊ファイルを除外
            if "menu" not in str(html_file.relative_to(BASE_DIR)):
                html_files.append(html_file)
    # パスでソート
    html_files.sort(key=lambda p: str(p.relative_to(BASE_DIR)))
    return html_files

def get_prev_next_files(current_file: Path, all_files: List[Path]) -> Tuple[Optional[Path], Optional[Path]]:
    """現在のファイルの前後のファイルを取得"""
    try:
        index = all_files.index(current_file)
        prev_file = all_files[index - 1] if index > 0 else None
        next_file = all_files[index + 1] if index < len(all_files) - 1 else None
        return prev_file, next_file
    except ValueError:
        return None, None

def get_relative_path(from_file: Path, to_file: Path) -> str:
    """相対パスを計算"""
    from_dir = from_file.parent
    to_path = to_file.relative_to(BASE_DIR)
    return str(to_path)

def add_navigation_and_spread_mode(html_file: Path, prev_file: Optional[Path], next_file: Optional[Path], all_files: List[Path]):
    """HTMLファイルにナビゲーションと見開き機能を追加"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 既存のナビゲーションコードを削除（更新するため）
    if 'nav-controls' in content:
        # 既存のCSSとJavaScriptを削除
        css_pattern = r'<style>[\s\S]*?\.nav-controls[\s\S]*?</style>'
        content = re.sub(css_pattern, '', content, count=1)
        # JavaScript部分を削除
        js_pattern = r'<script>[\s\S]*?nav-controls[\s\S]*?</script>'
        content = re.sub(js_pattern, '', content, count=1)

    # 前後のファイルの相対パス
    prev_path = get_relative_path(html_file, prev_file) if prev_file else None
    next_path = get_relative_path(html_file, next_file) if next_file else None

    # CSSを追加（1AM2100と同じ）
    nav_css = """
<style>
.nav-controls {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10000;
    display: flex;
    gap: 8px;
    background: rgba(255, 255, 255, 0.95);
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}
body:hover .nav-controls {
    opacity: 1;
    pointer-events: auto;
}
.nav-btn {
    padding: 6px 12px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    transition: background 0.2s;
}
.nav-btn:hover {
    background: #2980b9;
}
.nav-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}
.spread-mode-btn {
    padding: 6px 12px;
    background: #2ecc71;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
}
.spread-mode-btn:hover {
    background: #27ae60;
}
.spread-mode-btn.active {
    background: #e74c3c;
}
.spread-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: #f5f5f5;
}
.spread-container.active {
    display: flex;
}
.spread-pane {
    flex: 1;
    overflow-y: auto;
    border-right: 2px solid #ddd;
    background: white;
}
.spread-pane:last-child {
    border-right: none;
}
.spread-pane iframe {
    width: 100%;
    height: 100%;
    border: none;
}
@media (max-width: 1024px) {
    .spread-container {
        flex-direction: column;
    }
    .spread-pane {
        border-right: none;
        border-bottom: 2px solid #ddd;
    }
    .spread-pane:last-child {
        border-bottom: none;
    }
}
</style>
"""

    # JavaScriptを追加（1AM2100と同じロジックを使用）
    nav_js = f"""
<script>
(function() {{
    // 見開きモードの変数と関数を先に定義
    let spreadContainer = null;
    const currentFileIndex = {all_files.index(html_file) if html_file in all_files else 0};
    // 見開きモードでは偶数インデックスを使用（0, 2, 4, ...）
    let currentIndex = currentFileIndex % 2 === 0 ? currentFileIndex : currentFileIndex - 1;
    const totalFiles = {len(all_files)};
    const allFilePaths = {json.dumps([str(f.relative_to(BASE_DIR)).replace(chr(92), '/') for f in all_files])};

    // 横長判定関数
    function isWideScreen() {{
        return window.innerWidth / window.innerHeight > 1.2;
    }}

    // 見開きモードボタンの参照（後で設定）
    let spreadBtn = null;

    // 自動見開きモードのチェック
    function checkAutoSpreadMode() {{
        if (isWideScreen()) {{
            if (!spreadContainer) {{
                createSpreadContainer();
            }}
            if (!spreadContainer.classList.contains('active')) {{
                enableSpreadMode(false);
            }}
        }} else {{
            if (spreadContainer && spreadContainer.classList.contains('active') && spreadBtn && !spreadBtn.classList.contains('manual-active')) {{
                disableSpreadMode();
            }}
        }}
    }}

    function enableSpreadMode(isManual) {{
        if (!spreadContainer) {{
            createSpreadContainer();
        }}
        adjustSpreadLayout();
        if (window.updateSpreadContent) {{
            window.updateSpreadContent();
        }} else {{
            updateSpreadContent();
        }}
        spreadContainer.classList.add('active');
        if (spreadBtn) {{
            spreadBtn.textContent = '✕ 閉じる';
            spreadBtn.classList.add('active');
            if (isManual) {{
                spreadBtn.classList.add('manual-active');
            }}
        }}
    }}

    function disableSpreadMode() {{
        if (spreadContainer) {{
            spreadContainer.classList.remove('active');
            if (spreadBtn) {{
                spreadBtn.textContent = '📖 見開き';
                spreadBtn.classList.remove('active');
                spreadBtn.classList.remove('manual-active');
            }}
        }}
    }}

    function toggleSpreadMode() {{
        if (!spreadContainer) {{
            createSpreadContainer();
        }}

        if (spreadContainer.classList.contains('active')) {{
            disableSpreadMode();
        }} else {{
            enableSpreadMode(true); // 手動で有効化したことを記録
        }}
    }}

    function createSpreadContainer() {{
        spreadContainer = document.createElement('div');
        spreadContainer.className = 'spread-container';

        const leftPane = document.createElement('div');
        leftPane.className = 'spread-pane';
        leftPane.id = 'spread-left';

        const rightPane = document.createElement('div');
        rightPane.className = 'spread-pane';
        rightPane.id = 'spread-right';

        spreadContainer.appendChild(leftPane);
        spreadContainer.appendChild(rightPane);
        document.body.appendChild(spreadContainer);

        // 初期レイアウトを設定
        adjustSpreadLayout();

        // ウィンドウリサイズ時にレイアウトを調整し、自動見開きもチェック
        window.addEventListener('resize', function() {{
            adjustSpreadLayout();
            checkAutoSpreadMode();
        }});
    }}

    // ナビゲーションコントロールを追加
    const navControls = document.createElement('div');
    navControls.className = 'nav-controls';

    const prevBtn = document.createElement('a');
    prevBtn.className = 'nav-btn';
    prevBtn.textContent = '← 前へ';
    if ('{prev_path or ""}') {{
        prevBtn.href = '{prev_path or "#"}';
    }} else {{
        prevBtn.style.pointerEvents = 'none';
        prevBtn.style.opacity = '0.5';
    }}

    const nextBtn = document.createElement('a');
    nextBtn.className = 'nav-btn';
    nextBtn.textContent = '次へ →';
    if ('{next_path or ""}') {{
        nextBtn.href = '{next_path or "#"}';
    }} else {{
        nextBtn.style.pointerEvents = 'none';
        nextBtn.style.opacity = '0.5';
    }}

    // 見開きモードボタン
    spreadBtn = document.createElement('button');
    spreadBtn.className = 'spread-mode-btn';
    spreadBtn.textContent = '📖 見開き';
    spreadBtn.onclick = function() {{
        toggleSpreadMode();
    }};

    navControls.appendChild(prevBtn);
    navControls.appendChild(spreadBtn);
    navControls.appendChild(nextBtn);
    document.body.appendChild(navControls);

    // navControlsをグローバル変数として保持
    window.navControls = navControls;

    // 前へボタンの動作を上書き
    prevBtn.addEventListener('click', function(e) {{
        if (spreadContainer && spreadContainer.classList.contains('active')) {{
            e.preventDefault();
            // 見開きモードでは2ページ分戻る（偶数インデックスに調整）
            if (currentIndex >= 2) {{
                currentIndex = Math.max(0, currentIndex - 2);
                // 偶数に調整
                if (currentIndex % 2 !== 0) currentIndex--;
                if (window.updateSpreadContent) {{
                    window.updateSpreadContent();
                }} else {{
                    updateSpreadContent();
                }}
            }}
        }}
    }});

    // 次へボタンの動作を上書き
    nextBtn.addEventListener('click', function(e) {{
        if (spreadContainer && spreadContainer.classList.contains('active')) {{
            e.preventDefault();
            // 見開きモードでは2ページ分進む（偶数インデックスに調整）
            if (currentIndex < totalFiles - 2) {{
                currentIndex = Math.min(totalFiles - 2, currentIndex + 2);
                // 偶数に調整
                if (currentIndex % 2 !== 0) currentIndex--;
                if (window.updateSpreadContent) {{
                    window.updateSpreadContent();
                }} else {{
                    updateSpreadContent();
                }}
            }}
        }}
    }});

    // キーボードショートカット
    document.addEventListener('keydown', function(e) {{
        // 入力フィールドにフォーカスがある場合は無視
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {{
            return;
        }}

        if (spreadContainer && spreadContainer.classList.contains('active')) {{
            // 見開きモード時は2ページ分移動
            if (e.key === 'ArrowLeft' && currentIndex >= 2) {{
                e.preventDefault();
                currentIndex = Math.max(0, currentIndex - 2);
                // 偶数に調整
                if (currentIndex % 2 !== 0) currentIndex--;
                if (window.updateSpreadContent) {{
                    window.updateSpreadContent();
                }} else {{
                    updateSpreadContent();
                }}
            }} else if (e.key === 'ArrowRight' && currentIndex < totalFiles - 2) {{
                e.preventDefault();
                currentIndex = Math.min(totalFiles - 2, currentIndex + 2);
                // 偶数に調整
                if (currentIndex % 2 !== 0) currentIndex--;
                if (window.updateSpreadContent) {{
                    window.updateSpreadContent();
                }} else {{
                    updateSpreadContent();
                }}
            }} else if (e.key === 'Escape') {{
                e.preventDefault();
                toggleSpreadMode();
            }}
        }} else {{
            // 通常モード時は1ページずつ移動
            if (e.key === 'ArrowLeft' && prevBtn.href && prevBtn.href !== '#') {{
                e.preventDefault();
                window.location.href = prevBtn.href;
            }} else if (e.key === 'ArrowRight' && nextBtn.href && nextBtn.href !== '#') {{
                e.preventDefault();
                window.location.href = nextBtn.href;
            }}
        }}
    }});

    // ページロード時に横長の場合は自動で見開きモードを有効化
    function initAutoSpreadMode() {{
        // 少し遅延させて、レイアウトが確定してからチェック
        setTimeout(function() {{
            checkAutoSpreadMode();
        }}, 100);
    }}

    window.addEventListener('load', initAutoSpreadMode);

    // DOMContentLoadedでもチェック（より早く実行）
    if (document.readyState === 'loading') {{
        document.addEventListener('DOMContentLoaded', initAutoSpreadMode);
    }} else {{
        initAutoSpreadMode();
    }}

    // リサイズ時にも自動見開きをチェック
    let resizeTimeout;
    window.addEventListener('resize', function() {{
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {{
            checkAutoSpreadMode();
        }}, 150);
    }});

    window.updateSpreadContent = function updateSpreadContent() {{
        if (!spreadContainer) return;

        const leftPane = document.getElementById('spread-left');
        const rightPane = document.getElementById('spread-right');

        if (!leftPane || !rightPane) return;

        // 現在のページのファイル名を取得（アンカー部分を除去）
        const currentUrl = window.location.href || window.location.pathname;
        let currentFileName = currentUrl.split('/').pop();
        // アンカー部分（#以降）を除去
        if (currentFileName.includes('#')) {{
            currentFileName = currentFileName.split('#')[0];
        }}

        // 現在のファイルがallFilePathsのどのインデックスにあるかを特定
        let currentPathInList = null;
        for (let i = 0; i < allFilePaths.length; i++) {{
            const pathParts = allFilePaths[i].split('/');
            const fileName = pathParts[pathParts.length - 1];
            if (fileName === currentFileName) {{
                currentPathInList = allFilePaths[i];
                break;
            }}
        }}

        // 現在のページのディレクトリパスを取得（BASE_DIRからの相対パス）
        if (!currentPathInList) {{
            // 見つからない場合は、currentIndexから推測
            if (currentIndex >= 0 && currentIndex < allFilePaths.length) {{
                currentPathInList = allFilePaths[currentIndex];
            }} else {{
                return; // エラー
            }}
        }}

        // 現在のページの実際のディレクトリパスを取得
        const currentPageUrl = window.location.href || window.location.pathname;
        let currentPagePath = currentPageUrl;
        // file://プロトコルの場合
        if (currentPagePath.startsWith('file://')) {{
            currentPagePath = currentPagePath.replace('file://', '');
        }}
        // アンカー部分を除去
        if (currentPagePath.includes('#')) {{
            currentPagePath = currentPagePath.split('#')[0];
        }}
        // ディレクトリパスを取得（最後の/以降を除去）
        const lastSlashIndex = currentPagePath.lastIndexOf('/');
        const currentActualDir = lastSlashIndex >= 0 ? currentPagePath.substring(0, lastSlashIndex + 1) : '';

        const currentDirParts = currentPathInList.split('/').slice(0, -1); // ファイル名を除く

        // 相対パスを計算する関数
        const getRelativePath = function(targetPath) {{
            const targetDirParts = targetPath.split('/').slice(0, -1); // ファイル名を除く
            const targetFileName = targetPath.split('/').pop();

            // 共通部分を探す
            let commonLength = 0;
            const minLength = Math.min(currentDirParts.length, targetDirParts.length);
            while (commonLength < minLength && currentDirParts[commonLength] === targetDirParts[commonLength]) {{
                commonLength++;
            }}

            // 現在のディレクトリからターゲットへの相対パスを計算
            const upLevels = currentDirParts.length - commonLength;
            const relativeParts = [];

            // 上に上がる必要がある場合
            if (upLevels > 0) {{
                relativeParts.push(...Array(upLevels).fill('..'));
            }}

            // ターゲットの残りのパスを追加
            if (targetDirParts.length > commonLength) {{
                relativeParts.push(...targetDirParts.slice(commonLength));
            }}

            // ファイル名を追加
            relativeParts.push(targetFileName);

            const relativePath = relativeParts.join('/');

            // file://プロトコルの場合、完全なURLを構築
            if (window.location.protocol === 'file:') {{
                // 現在のディレクトリから見た絶対パスを構築
                let basePath = currentActualDir;
                if (!basePath) {{
                    const pathname = window.location.pathname;
                    basePath = pathname.substring(0, pathname.lastIndexOf('/') + 1);
                }}
                // file://プレフィックスを除去してパス部分のみを取得
                if (basePath.startsWith('file://')) {{
                    basePath = basePath.replace('file://', '');
                }}
                // 相対パスを解決
                const pathParts = basePath.split('/').filter(p => p && p !== '');
                const relativeParts2 = relativePath.split('/');
                for (const part of relativeParts2) {{
                    if (part === '..') {{
                        if (pathParts.length > 0) pathParts.pop();
                    }} else if (part !== '.' && part !== '') {{
                        pathParts.push(part);
                    }}
                }}
                // file://プロトコルの完全なURLを構築
                return 'file:///' + pathParts.join('/');
            }}

            return relativePath;
        }};

        // 左ページ（現在のページ）
        const leftIndex = currentIndex;
        const rightIndex = currentIndex + 1;

        if (leftIndex >= 0 && leftIndex < allFilePaths.length) {{
            const leftFile = allFilePaths[leftIndex];
            if (leftFile) {{
                const leftPath = getRelativePath(leftFile);
                // file://プロトコルでも動作するように、現在のディレクトリから相対パスを構築
                const leftIframe = document.createElement('iframe');
                leftIframe.src = leftPath;
                leftIframe.style.width = '100%';
                leftIframe.style.height = '100%';
                leftIframe.style.border = 'none';
                leftPane.innerHTML = '';
                leftPane.appendChild(leftIframe);
            }}
        }}

        if (rightIndex >= 0 && rightIndex < allFilePaths.length) {{
            const rightFile = allFilePaths[rightIndex];
            if (rightFile) {{
                const rightPath = getRelativePath(rightFile);
                // file://プロトコルでも動作するように、現在のディレクトリから相対パスを構築
                const rightIframe = document.createElement('iframe');
                rightIframe.src = rightPath;
                rightIframe.style.width = '100%';
                rightIframe.style.height = '100%';
                rightIframe.style.border = 'none';
                rightPane.innerHTML = '';
                rightPane.appendChild(rightIframe);
            }} else {{
                rightPane.innerHTML = '';
            }}
        }} else {{
            rightPane.innerHTML = '';
        }}
    }};

    function adjustSpreadLayout() {{
        if (!spreadContainer) return;

        // 画面の縦横比を計算
        const aspectRatio = window.innerWidth / window.innerHeight;

        // 横長（アスペクト比 > 1.2）の場合は左右配置、縦長の場合は上下配置
        if (aspectRatio > 1.2) {{
            spreadContainer.style.flexDirection = 'row';
        }} else {{
            spreadContainer.style.flexDirection = 'column';
        }}
    }}
}})();
</script>
"""

    # </body>タグの前に挿入
    if '</body>' in content:
        content = content.replace('</body>', nav_css + nav_js + '</body>')
    else:
        content += nav_css + nav_js

    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"更新: {html_file.name}")

def main():
    """メイン処理"""
    all_files = get_all_html_files()
    print(f"合計 {len(all_files)} 個のHTMLファイルを処理します...")

    for html_file in all_files:
        prev_file, next_file = get_prev_next_files(html_file, all_files)
        add_navigation_and_spread_mode(html_file, prev_file, next_file, all_files)

    print("完了しました！")

if __name__ == '__main__':
    main()
