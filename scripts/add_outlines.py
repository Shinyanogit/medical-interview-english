#!/usr/bin/env python3
"""
chest.htmlとneurological.htmlにアウトラインを追加するスクリプト
"""
from pathlib import Path

BASE_DIR = Path("/Users/shinyyama/Documents/医学/臨床実習/エレクラ/野口医学研究所/医療面接対策")

# 胸部診察のアウトライン
chest_outline = """        <!-- 胸部診察（総論） -->
        <div class="section">
            <h2>胸部診察（総論）</h2>
            <p class="description">胸部診察は頸部から前胸部、背部にわたって行います。頸部血管、体表面、心臓、肺を診察します。</p>
            <h3>頸部～前胸部～背部</h3>
            <p class="description">診察の範囲は頸部から前胸部、背部にわたります。</p>
            <h3>頸部血管，体表面，心臓，肺</h3>
            <p class="description">診察する部位は頸部血管、体表面、心臓、肺です。</p>
            <h3>感染防御や患者への配慮など</h3>
            <p class="description">診察時には感染防御や患者への配慮を忘れずに行います。</p>
        </div>

        <!-- 前胸部・背部の視診 -->
        <div class="section">
            <h2>前胸部・背部の視診 (Inspection of Anterior Chest and Back)</h2>
            <p class="description">解剖学的指標を確認し、皮膚所見を観察します。</p>
            <h3>心臓の診察で必要となる</h3>
            <p class="description">胸骨角や剣状突起の特定は心臓の診察で必要となります。</p>
            <h3>解剖学的指標となる</h3>
            <p class="description">隆椎や肩甲骨下角の特定は解剖学的指標となります。</p>
            <h3>皮疹や着色斑など</h3>
            <p class="description">皮膚所見として皮疹や着色斑などを確認します。</p>
        </div>

        <!-- 胸部診察（頸部血管） -->
        <div class="section">
            <h2>胸部診察（頸部血管） (Examination of Neck Vessels)</h2>
            <p class="description">頸静脈を視診し、頸動脈を聴診・触診します。心臓、肺、脳などに関する所見を得ることができます。</p>
            <h3>頸静脈を視診，頸動脈を聴診・触診</h3>
            <p class="description">頸静脈は視診で、頸動脈は聴診と触診で診察します。</p>
            <h3>心臓，肺，脳などに関する所見を得る</h3>
            <p class="description">頸部血管の診察から心臓、肺、脳などに関する所見を得ることができます。</p>
            <h3>外頸静脈，内頸静脈，頸動脈の3つ</h3>
            <p class="description">診察する血管は外頸静脈、内頸静脈、頸動脈の3つです。</p>
        </div>

        <!-- 頸静脈の視診 -->
        <div class="section">
            <h2>頸静脈（外頸静脈・内頸静脈）の視診 (Inspection of Jugular Veins)</h2>
            <p class="description">頸静脈の怒張や拍動を観察し、中心静脈圧を推定します。</p>
            <h3>位置関係が重要</h3>
            <p class="description">頸静脈と頸動脈の位置関係を理解することが重要です。</p>
            <h3>心臓の手前で静脈血がうっ滞すると出現</h3>
            <p class="description">心臓の手前で静脈血がうっ滞すると頸静脈の怒張が出現します。</p>
            <h3>血管が膨らむ・しぼむ</h3>
            <p class="description">血管が膨らむ・しぼむ動きを観察します。</p>
        </div>

        <!-- 頸動脈の聴診・触診 -->
        <div class="section">
            <h2>頸動脈の聴診・触診 (Auscultation and Palpation of Carotid Artery)</h2>
            <p class="description">頸動脈の狭窄や拍動の強さを評価します。</p>
            <h3>聴診→触診の順</h3>
            <p class="description">診察は聴診から始め、その後触診を行います。</p>
            <h3>位置が異なることに注意</h3>
            <p class="description">聴診部位と触診部位の位置が異なることに注意します。</p>
            <h3>狭窄があると雑音が発生</h3>
            <p class="description">狭窄があると雑音が発生します。</p>
        </div>

        <!-- 胸部診察（心臓） -->
        <div class="section">
            <h2>胸部診察（心臓） (Cardiac Examination)</h2>
            <p class="description">心臓の診察は視診、触診、聴診の順で行います。</p>
            <h3>まず視診と触診，その後に聴診</h3>
            <p class="description">まず視診と触診を行い、その後に聴診を行います。</p>
            <h3>視診，触診，聴診</h3>
            <p class="description">診察の基本手技は視診、触診、聴診です。</p>
            <h3>仰臥位，左側臥位，座位</h3>
            <p class="description">診察時には仰臥位、左側臥位、座位などの体位を利用します。</p>
        </div>

        <!-- 心臓の視診・触診 -->
        <div class="section">
            <h2>心臓の視診・触診 (Inspection and Palpation of Heart)</h2>
            <p class="description">心尖拍動や異常な拍動を観察し、触診で確認します。</p>
            <h3>駆出の反作用で心尖部付近が拍動</h3>
            <p class="description">心尖拍動は駆出の反作用で心尖部付近が拍動する現象です。</p>
            <h3>心臓，肺動脈，大動脈瘤などが前胸部を押し上げ拍動</h3>
            <p class="description">心臓、肺動脈、大動脈瘤などが前胸部を押し上げ拍動することがあります。</p>
            <h3>心雑音を手で触れる</h3>
            <p class="description">振戦は心雑音を手で触れることができる現象です。</p>
        </div>

        <!-- 心音 -->
        <div class="section">
            <h2>心音 (Heart Sounds)</h2>
            <p class="description">心臓の聴診で聴こえる音を評価します。</p>
            <h3>心臓の聴診で聴こえる音</h3>
            <p class="description">心音は心臓の聴診で聴こえる音です。</p>
            <h3>全体像を把握</h3>
            <p class="description">まず全体像を把握することが重要です。</p>
            <h3>まずⅠ音とⅡ音を同定</h3>
            <p class="description">心音の評価では、まずⅠ音とⅡ音を同定します。</p>
        </div>

        <!-- 心雑音 -->
        <div class="section">
            <h2>心雑音 (Heart Murmurs)</h2>
            <p class="description">血流の乱れなどによって生じる振動音を評価します。</p>
            <h3>血流の乱れなどによって生じる振動音</h3>
            <p class="description">心雑音は血流の乱れなどによって生じる振動音です。</p>
            <h3>収縮期雑音，拡張期雑音，連続性雑音</h3>
            <p class="description">心雑音は収縮期雑音、拡張期雑音、連続性雑音に分類されます。</p>
            <h3>雑音の名称にも注目</h3>
            <p class="description">雑音の名称にも注目して評価します。</p>
        </div>

        <!-- 胸部診察（肺） -->
        <div class="section">
            <h2>胸部診察（肺） (Pulmonary Examination)</h2>
            <p class="description">呼吸状態を評価し、前胸部全体と背部全体を診察します。</p>
            <h3>呼吸状態を評価する</h3>
            <p class="description">まず呼吸状態を評価します。</p>
            <h3>前胸部全体を診察する</h3>
            <p class="description">前胸部全体を診察します。</p>
            <h3>背部全体を診察する</h3>
            <p class="description">背部全体を診察します。</p>
        </div>"""

# 神経診察のアウトライン
neurological_outline = """        <!-- 神経診察（総論） -->
        <div class="section">
            <h2>神経診察 (Neurological Examination)</h2>
            <p class="description">神経系全体を系統的に診察します。運動神経、感覚神経、自律神経を評価します。</p>
            <h3>系統的に診察を進める</h3>
            <p class="description">神経診察は系統的に診察を進めることが重要です。</p>
            <h3>神経系全体の地図を見てみよう</h3>
            <p class="description">神経系全体の地図を理解することが診察の基礎となります。</p>
            <h3>運動神経・感覚神経・自律神経</h3>
            <p class="description">神経系は運動神経、感覚神経、自律神経に分類されます。</p>
        </div>

        <!-- 脳神経の診察 -->
        <div class="section">
            <h2>脳神経の診察 (Cranial Nerve Examination)</h2>
            <p class="description">脳や脳幹から出る12対の末梢神経を診察します。その診察が脳幹のどの場所をみているかを意識することが重要です。</p>
            <h3>その診察が脳幹のどの場所をみているかを意識する</h3>
            <p class="description">各脳神経の診察が脳幹のどの場所をみているかを意識することが重要です。</p>
            <h3>脳や脳幹から出る12対の末梢神経</h3>
            <p class="description">脳神経は脳や脳幹から出る12対の末梢神経です。</p>
            <h3>対応する脳幹をみている意識をもつ</h3>
            <p class="description">各脳神経の診察では、対応する脳幹をみている意識をもつことが重要です。</p>
        </div>"""

# chest.htmlを更新
chest_file = BASE_DIR / "chest.html"
if chest_file.exists():
    with open(chest_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # CSS変数を更新
    content = content.replace(
        ':root {\n            --bg-color: #f5f5f5;\n            --container-bg: #ffffff;\n            --text-color: #333;\n            --question-bg: #f8f9fa;\n            --heading-color: #2c3e50;\n            --border-color: #3498db;\n            --shadow: rgba(0,0,0,0.1);\n        }',
        ':root {\n            --bg-color: #f5f5f5;\n            --container-bg: #ffffff;\n            --text-color: #333;\n            --text-color-secondary: #555;\n            --text-color-tertiary: #666;\n            --heading-color: #2c3e50;\n            --heading-color-secondary: #34495e;\n            --border-color: #3498db;\n            --question-bg: #f8f9fa;\n            --question-hover-bg: #e8f4f8;\n            --question-playing-bg: #d4edda;\n            --info-box-bg: #e7f3ff;\n            --info-box-text: #1976D2;\n            --shadow: rgba(0,0,0,0.1);\n        }'
    )

    content = content.replace(
        '[data-theme="dark"] {\n            --bg-color: #000000;\n            --container-bg: #0a0a0a;\n            --text-color: #e0e0e0;\n            --question-bg: #1a1a1a;\n            --heading-color: #ffffff;\n            --border-color: #4a9eff;\n            --shadow: rgba(0,0,0,0.8);\n        }',
        '[data-theme="dark"] {\n            --bg-color: #000000;\n            --container-bg: #0a0a0a;\n            --text-color: #e0e0e0;\n            --text-color-secondary: #b0b0b0;\n            --text-color-tertiary: #999;\n            --heading-color: #ffffff;\n            --heading-color-secondary: #e0e0e0;\n            --border-color: #4a9eff;\n            --question-bg: #1a1a1a;\n            --question-hover-bg: #2a2a2a;\n            --question-playing-bg: #1a3a2a;\n            --info-box-bg: #0a1a2a;\n            --info-box-text: #64b5f6;\n            --shadow: rgba(0,0,0,0.8);\n        }'
    )

    # empty-messageを削除してアウトラインを追加
    content = content.replace(
        '<div class="empty-message">\n            このセクションは準備中です。<br>\n            今後、内容を追加予定です。\n        </div>',
        chest_outline
    )

    # CSSスタイルを追加（h2, h3, section, descriptionなどのスタイル）
    # これはabdomen.htmlと同様のスタイルが必要ですが、既にhead-neck.htmlからコピーしたスタイルがあるはずです。
    # まずはアウトラインの追加だけ行います。

    # initSectionToggle関数を追加
    if 'function initSectionToggle()' not in content:
        content = content.replace(
            '        document.addEventListener(\'DOMContentLoaded\', () => {\n            initSettings();\n        });',
            '''        // セクションのトグル機能
        function initSectionToggle() {
            const sectionH2s = document.querySelectorAll('.section > h2');

            sectionH2s.forEach(h2 => {
                const section = h2.parentElement;

                section.classList.add('section-collapsed');
                h2.classList.add('collapsed');

                h2.addEventListener('click', (e) => {
                    e.stopPropagation();
                    section.classList.toggle('section-collapsed');
                    h2.classList.toggle('collapsed');
                });
            });

            const subsectionHeaders = document.querySelectorAll('h3, h4');

            subsectionHeaders.forEach(header => {
                header.classList.add('collapsed');

                let nextElement = header.nextElementSibling;
                let pElement = null;
                let ulElement = null;

                if (nextElement && nextElement.tagName === 'P') {
                    pElement = nextElement;
                    let nextAfterP = pElement.nextElementSibling;
                    if (nextAfterP && nextAfterP.tagName === 'UL') {
                        ulElement = nextAfterP;
                        ulElement.classList.remove('expanded');
                    }
                } else if (nextElement && nextElement.tagName === 'UL') {
                    ulElement = nextElement;
                    ulElement.classList.remove('expanded');
                }

                header.addEventListener('click', (e) => {
                    e.stopPropagation();
                    header.classList.toggle('collapsed');
                    if (ulElement) {
                        ulElement.classList.toggle('expanded');
                    }
                });
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            initSectionToggle();
            initSettings();
        });'''
        )

    with open(chest_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print("chest.htmlを更新しました")

# neurological.htmlを更新
neurological_file = BASE_DIR / "neurological.html"
if neurological_file.exists():
    with open(neurological_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # CSS変数を更新
    content = content.replace(
        ':root {\n            --bg-color: #f5f5f5;\n            --container-bg: #ffffff;\n            --text-color: #333;\n            --question-bg: #f8f9fa;\n            --heading-color: #2c3e50;\n            --border-color: #3498db;\n            --shadow: rgba(0,0,0,0.1);\n        }',
        ':root {\n            --bg-color: #f5f5f5;\n            --container-bg: #ffffff;\n            --text-color: #333;\n            --text-color-secondary: #555;\n            --text-color-tertiary: #666;\n            --heading-color: #2c3e50;\n            --heading-color-secondary: #34495e;\n            --border-color: #3498db;\n            --question-bg: #f8f9fa;\n            --question-hover-bg: #e8f4f8;\n            --question-playing-bg: #d4edda;\n            --info-box-bg: #e7f3ff;\n            --info-box-text: #1976D2;\n            --shadow: rgba(0,0,0,0.1);\n        }'
    )

    content = content.replace(
        '[data-theme="dark"] {\n            --bg-color: #000000;\n            --container-bg: #0a0a0a;\n            --text-color: #e0e0e0;\n            --question-bg: #1a1a1a;\n            --heading-color: #ffffff;\n            --border-color: #4a9eff;\n            --shadow: rgba(0,0,0,0.8);\n        }',
        '[data-theme="dark"] {\n            --bg-color: #000000;\n            --container-bg: #0a0a0a;\n            --text-color: #e0e0e0;\n            --text-color-secondary: #b0b0b0;\n            --text-color-tertiary: #999;\n            --heading-color: #ffffff;\n            --heading-color-secondary: #e0e0e0;\n            --border-color: #4a9eff;\n            --question-bg: #1a1a1a;\n            --question-hover-bg: #2a2a2a;\n            --question-playing-bg: #1a3a2a;\n            --info-box-bg: #0a1a2a;\n            --info-box-text: #64b5f6;\n            --shadow: rgba(0,0,0,0.8);\n        }'
    )

    # empty-messageを削除してアウトラインを追加
    content = content.replace(
        '<div class="empty-message">\n            このセクションは準備中です。<br>\n            今後、内容を追加予定です。\n        </div>',
        neurological_outline
    )

    # initSectionToggle関数を追加
    if 'function initSectionToggle()' not in content:
        content = content.replace(
            '        document.addEventListener(\'DOMContentLoaded\', () => {\n            initSettings();\n        });',
            '''        // セクションのトグル機能
        function initSectionToggle() {
            const sectionH2s = document.querySelectorAll('.section > h2');

            sectionH2s.forEach(h2 => {
                const section = h2.parentElement;

                section.classList.add('section-collapsed');
                h2.classList.add('collapsed');

                h2.addEventListener('click', (e) => {
                    e.stopPropagation();
                    section.classList.toggle('section-collapsed');
                    h2.classList.toggle('collapsed');
                });
            });

            const subsectionHeaders = document.querySelectorAll('h3, h4');

            subsectionHeaders.forEach(header => {
                header.classList.add('collapsed');

                let nextElement = header.nextElementSibling;
                let pElement = null;
                let ulElement = null;

                if (nextElement && nextElement.tagName === 'P') {
                    pElement = nextElement;
                    let nextAfterP = pElement.nextElementSibling;
                    if (nextAfterP && nextAfterP.tagName === 'UL') {
                        ulElement = nextAfterP;
                        ulElement.classList.remove('expanded');
                    }
                } else if (nextElement && nextElement.tagName === 'UL') {
                    ulElement = nextElement;
                    ulElement.classList.remove('expanded');
                }

                header.addEventListener('click', (e) => {
                    e.stopPropagation();
                    header.classList.toggle('collapsed');
                    if (ulElement) {
                        ulElement.classList.toggle('expanded');
                    }
                });
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            initSectionToggle();
            initSettings();
        });'''
        )

    with open(neurological_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print("neurological.htmlを更新しました")

print("完了しました")
