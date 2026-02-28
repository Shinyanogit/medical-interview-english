// =============================================================================
// Case Presentation Data — converted from Obsidian markdown notes
// =============================================================================

// ---------------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------------

export interface AudioSection {
  id: string;
  title: string;
  description?: string;
  text: string;
  audioFile: string;
  timestampFile: string;
  tip?: { title: string; items: string[] };
}

export interface CaseData {
  title: string;
  intro: string;
  fullCaseAudio: string;
  sections: AudioSection[];
}

export interface FormatInfo {
  name: string;
  purpose: string;
  when: string;
  elements: number;
  background?: string;
}

export interface VocabEntry {
  jp: string;
  en: string;
  example: string;
  extra?: string;
}

export interface VocabSection {
  id: string;
  title: string;
  columns: string[];
  entries: VocabEntry[];
}

export interface TemplateBlock {
  id: string;
  title: string;
  sectionTitle: string;
  blocks: {
    type: "note" | "example" | "info" | "warning";
    label: string;
    content: string;
  }[];
}

// ---------------------------------------------------------------------------
// 1. overviewData — from 01_全体像.md
// ---------------------------------------------------------------------------

export const overviewData = {
  intro: "英語症例プレゼンテーションは **型・議論・定型表現** の3本柱で構成される。",

  sadPrinciples: [
    { letter: "S", name: "Structure", meaning: "型を守る", point: "12項目を決まった順序で" },
    { letter: "A", name: "Argument", meaning: "議論のための情報提供", point: "Pertinent positives & negatives" },
    { letter: "D", name: "Delivery", meaning: "定型表現を使う", point: "自作英語ではなく定型表現" },
  ],

  twelveItems: [
    "Patient Information ← one-liner",
    "HPI ← ★最重要・最大ボリューム",
    "PMH", "PSH", "Medications", "Allergies", "FH", "SH", "ROS",
    "Physical Examination",
    "Summary ← one-liner + pertinent positives",
    "DDx & Plan",
  ],

  badPatterns: [
    { name: "Random-Walk", summary: "順序バラバラ。OPQRSTをそのまま読み上げ", detail: "語呂合わせ（OPQRST、かきくけこさしすせそ）を問診の順にそのまま述べる。\"Where did you learn that?\" と軽蔑される可能性あり。" },
    { name: "Cherry-Picking", summary: "都合のいい情報だけ。pertinent negatives省略", detail: "症例プレゼンの目的は「患者情報の並列化」。自己判断で情報を削るのではなく、系統的に全項目を提示する。" },
    { name: "Parrot-Style", summary: "オウム返し。臨床的意味づけゼロ", detail: "情報に優先順位がなく、聴衆に大きな認知的負荷。「診断は指導医がしてください」という印象を与える。" },
  ],

  diagnosticFraming: [
    { step: 1, content: "Patient Information", point: "Semantic qualifiersで修飾したone-liner" },
    { step: 2, content: "HPI", point: "Pertinent positives & negativesで鑑別を導く" },
    { step: 3, content: "PMH〜ROS & PE", point: "系統的に全項目提示（Cherry-Picking回避）" },
    { step: 4, content: "Summary", point: "One-liner + key pertinent positives" },
  ],

  diagnosticFramingNote: "Summaryから逆算して構築を始めるのが推奨。",

  diagnosticFramingExample: {
    step1: "\"Ms. Davis is a 28-year-old African American woman with no significant past medical history, who presented with a 3-week history of progressive bilateral joint pain associated with fatigue and a new-onset facial rash.\"\n→ \"bilateral\" \"progressive\" \"photosensitive\" 等のsemantic qualifiersでSLEを示唆",
    step4: "\"In summary, Ms. Davis is a 28-year-old African American woman with a family history of SLE, who presented with a 3-week history of progressive, symmetric, inflammatory polyarthralgia affecting bilateral MCP and PIP joints with prolonged morning stiffness exceeding 2 hours, associated with a photosensitive malar rash sparing the nasolabial folds, painless oral ulcers on the hard palate, diffuse non-scarring alopecia, fatigue, and low-grade fevers, with physical findings of bilateral MCP and PIP synovitis and borderline hypertension.\"\n→ Patient Info + pertinent positives + 身体所見を統合。聴けばSLE一択と分かる密度。",
  },

  hpiConstruction: {
    principles: [
      "History Takingの **50%以上**（最低でも1/3以上）をHPIに",
      "OPQRSTの項目順ではなく **時系列** で述べる：発症前 → 発症時 → 発症後",
      "**\"Draw the picture of the patient's story\"**",
      "原稿暗記ではなく、要点メモから **自分の言葉で話す**",
    ],
    opqrstNote: "OPQRST（Onset, Provoking & Palliating Factors, Quality, Region & Radiation, Severity, Timing）は問診の漏れ防止ツールとしては有効。しかしプレゼンではこの順に読み上げない。時系列の流れの中に自然に織り込む。",
    rheumatologyPoints: [
      "**関節症状の時間経過**: acute vs insidious onset、持続期間",
      "**Morning stiffness**: >1 hour → inflammatory",
      "**関節の分布**: symmetric/asymmetric、small/large、mono/oligo/poly",
      "**関節外症状の出現順序**: rash → oral ulcers → fatigue etc.",
      "**増悪・寛解因子**: activity vs rest、日光曝露、寒冷",
    ],
  },

  pertinentPosNeg: {
    criterion: "\"Is this information necessary for clinical decision making? If so, how?\"",
    successCondition: "聴衆から追加の質問をされないこと。",
  },

  semanticQualifiers: [
    { general: "joint pain", qualifier: "symmetric inflammatory polyarthralgia with prolonged morning stiffness", suggests: "RA" },
    { general: "joint pain", qualifier: "migratory polyarthralgia", suggests: "rheumatic fever, gonococcal" },
    { general: "rash on face", qualifier: "photosensitive malar rash sparing the nasolabial folds", suggests: "SLE" },
    { general: "muscle weakness", qualifier: "progressive symmetric proximal muscle weakness", suggests: "DM/PM" },
    { general: "finger color change", qualifier: "episodic triphasic digital color change (white→blue→red)", suggests: "Raynaud's" },
  ],

  languageUse: [
    { section: "CC・HPI", language: "患者の言葉", reason: "診断バイアスを避ける" },
    { section: "PMH 以降", language: "医学英語", reason: "正確な情報伝達" },
  ],

  learningRoadmap: [
    "**35症候** の臨床推論を準備（モデル・コア・カリキュラムからショック・心停止を除外）",
    "**First Aid for the USMLE Step 2 CS** のPractical CasesからPatient Noteを選出",
    "定型表現を繰り返し **音読**",
    "要点メモから **自分の言葉で話す** 練習",
  ],
  learningMistake: "「自分で英作文をする」こと。定型表現は教材から吸収する。\n✗ \"no abnormal breathing sounds\" → ✓ \"Clear to auscultation bilaterally\"\n✗ \"no stiff neck\" → ✓ \"The neck is supple.\"",
};

// ---------------------------------------------------------------------------
// 2. SLE Case Data
// ---------------------------------------------------------------------------

export const sleCaseData: CaseData = {
  title: "実践例: SLE（Full Case Presentation）",
  intro: "テキストをクリック → 音声再生＋色変化。もう一度クリックで停止。\n**太字** = キー表現 ／ （日本語）= パラフレーズ",
  fullCaseAudio: "audio/case-presentation/sle_full_case.mp3",
  sections: [
    {
      id: "sle-patient-info",
      title: "Patient Information",
      description: "Diagnostic Framing / テンプレート",
      text: "Ms. Davis is a **28-year-old African American woman** with **no significant past medical history**,（特記すべき既往なし） who **presented with** a 3-week history of **progressive bilateral joint pain** associated with **fatigue** and a **new-onset facial rash**.",
      audioFile: "audio/case-presentation/sle_01_patient_info.mp3",
      timestampFile: "timestamps/case-presentation/sle_01_patient_info.json",
    },
    {
      id: "sle-hpi",
      title: "History of Present Illness",
      description: "HPIの構築法 / Pertinent Negatives",
      text: `The patient **had been in her usual state of health** until approximately 3 weeks prior to presentation, when she noticed **gradual-onset** stiffness and pain in bilateral hands, predominantly in the **metacarpophalangeal and proximal interphalangeal joints**.（MCP・PIP関節） The **morning stiffness** lasted approximately 2 hours and **improved with activity** throughout the day.

Two weeks prior to presentation, she developed worsening fatigue, **intermittent low-grade fevers**（間欠的微熱） up to 37.8 degrees Celsius, and noticed several **painless sores on her hard palate**.（硬口蓋の無痛性潰瘍） She also noted progressive hair thinning over the preceding month, which was **diffuse** and **without associated scalp lesions**.

One week prior to presentation, she developed a rash on both cheeks that **worsened with sun exposure**. The rash was **non-pruritic**（非掻痒性） and **spared the nasolabial folds**.（鼻唇溝を避ける）

**She denies** Raynaud's phenomenon, dry eyes, dry mouth, dyspnea, chest pain, cough, hemoptysis, abdominal pain, dysuria, or **foamy urine**.（泡沫尿→蛋白尿を示唆） She denies recent travel, tick bites, new medications, or preceding viral illness. She has **no history of similar episodes**.`,
      audioFile: "audio/case-presentation/sle_02_hpi.mp3",
      timestampFile: "timestamps/case-presentation/sle_02_hpi.json",
      tip: {
        title: "注目ポイント",
        items: [
          "時系列で症状の変化を追っている（3週前→2週前→1週前）",
          "Pertinent negatives を系統的に述べている（Raynaud's, sicca, pulmonary, renal etc.）",
          "Semantic qualifiers: \"gradual-onset\" \"bilateral\" \"symmetric\" \"non-pruritic\" \"spared the nasolabial folds\"",
        ],
      },
    },
    {
      id: "sle-pmh-ros",
      title: "PMH〜ROS",
      description: "一般英語 vs 医学英語 / テンプレート",
      text: `Her past medical history is **unremarkable**.（特記事項なし） She has **no prior surgeries**. She is currently on a **combined oral contraceptive pill**. She takes no other medications or supplements. The patient has **no known drug allergies**.

Her **family history is significant for** systemic lupus erythematosus in her maternal aunt and hypothyroidism in her mother. Her father is **alive and well**.

The patient is a graduate student. She is single and lives alone. She **does not smoke**. She drinks alcohol **on a social basis**, approximately 2 glasses of wine per week. She **denies any illicit drug use**. She is sexually active with one male partner and uses oral contraceptive pills for contraception.

**Review of systems is negative except as mentioned in the history of present illness**.`,
      audioFile: "audio/case-presentation/sle_03_pmh_to_ros.mp3",
      timestampFile: "timestamps/case-presentation/sle_03_pmh_to_ros.json",
    },
    {
      id: "sle-pe",
      title: "Physical Examination",
      description: "膠原病の身体診察 / テンプレート",
      text: `Her temperature is 37.8 degrees Celsius. Her blood pressure is 142 over 88 millimeters of mercury. Her heart rate is 88 per minute with a **sinus rhythm**. Her respiratory rate is 16 per minute. Her oxygen saturation is 99 percent **on room air**.

The patient is a well-developed young woman **in no acute distress**. She is **alert, awake, and oriented times four**.

**The head is normocephalic and atraumatic**. A **malar rash**（蝶形紅斑） is present on bilateral cheeks, **erythematous and slightly raised**, **sparing the nasolabial folds**. Two **painless ulcers** are noted on the hard palate. **Diffuse non-scarring alopecia**（びまん性非瘢痕性脱毛） is present. The **mucous membranes are moist**. **The neck is supple**. No **cervical lymphadenopathy**.

**Cardiovascular exam reveals** a **regular rate and rhythm**, **normal S1 and S2**, **no murmurs, rubs, or gallops**.

Chest is **clear to auscultation bilaterally**. No wheezes, rhonchi, or crackles.

The abdomen is **soft, non-distended, and non-tender**. **Positive bowel sounds in all four quadrants**. No **hepatosplenomegaly**.

**Musculoskeletal exam** reveals bilateral symmetric **swelling and tenderness** of the second through fourth metacarpophalangeal joints and second and third proximal interphalangeal joints bilaterally. **No joint deformity**. **No dactylitis**.（指趾炎なし）

The extremities show **no cyanosis, clubbing, or edema**. No **palpable purpura**.（触知可能な紫斑） No **livedo reticularis**.（網状皮斑） No digital ulcers.

**Cranial nerves II through XII are intact**. **No focal neurological deficits**.`,
      audioFile: "audio/case-presentation/sle_04_pe.mp3",
      timestampFile: "timestamps/case-presentation/sle_04_pe.json",
      tip: {
        title: "注目ポイント",
        items: [
          "バイタルは全項目を具体的に（BP 142/88 → 腎障害の示唆）",
          "膠原病特有の所見を系統的にカバー（malar rash, oral ulcers, alopecia, synovitis, purpura, livedo）",
          "陰性所見も明記",
        ],
      },
    },
    {
      id: "sle-summary",
      title: "Summary",
      description: "Semantic Qualifiers / Diagnostic Framing Step 4",
      text: "In summary, Ms. Davis is a 28-year-old African American woman with a family history of systemic lupus erythematosus, who **presented with** a 3-week history of **progressive, symmetric, inflammatory polyarthralgia**（進行性・対称性・炎症性多関節痛） affecting bilateral MCP and PIP joints with **prolonged morning stiffness exceeding 2 hours**, associated with a **photosensitive malar rash sparing the nasolabial folds**, **painless oral ulcers** on the hard palate, **diffuse non-scarring alopecia**, fatigue, and low-grade fevers, with physical findings of bilateral MCP and PIP **synovitis**（滑膜炎） and **borderline hypertension**.（境界域高血圧→腎障害を示唆）",
      audioFile: "audio/case-presentation/sle_05_summary.mp3",
      timestampFile: "timestamps/case-presentation/sle_05_summary.json",
      tip: {
        title: "注目ポイント",
        items: [
          "Patient Information + pertinent positives の統合",
          "Semantic qualifiers が鑑別を強く示唆: \"photosensitive malar rash sparing the nasolabial folds\" → SLE",
          "身体所見も統合: \"borderline hypertension\" → 腎障害の可能性",
        ],
      },
    },
    {
      id: "sle-ddx",
      title: "Differential Diagnosis",
      description: "Pertinent Positives & Negatives / テンプレート",
      text: `**My top differential diagnosis at this time would be** systemic lupus erythematosus, **because** the patient is a young African American woman presenting with **multiple organ system involvement** including arthritis, **malar rash with nasolabial fold sparing**, oral ulcers, alopecia, and possible **renal involvement** suggested by borderline hypertension, along with a family history of SLE.

**Mixed connective tissue disease**（混合性結合組織病） **is a diagnosis we would need to consider**, because of the **overlapping features** of inflammatory arthritis and systemic symptoms, though the presence of SLE-specific findings makes this **less likely**.

**Drug-induced lupus**（薬剤性ループス） is a diagnosis **we would need to exclude**, as the patient is on an oral contraceptive pill, though this typically presents with **anti-histone antibodies** and **rarely causes renal or dermatologic involvement**.

**Rheumatoid arthritis** is **less likely** given the prominent **extra-articular manifestations**（関節外症状） including the malar rash and oral ulcers, **which are not characteristic of RA**.`,
      audioFile: "audio/case-presentation/sle_06_ddx.mp3",
      timestampFile: "timestamps/case-presentation/sle_06_ddx.json",
    },
    {
      id: "sle-plan",
      title: "Plan",
      description: "テンプレート",
      text: "**I would like to order** a **CBC with differential**,（血算＋分画） **comprehensive metabolic panel**, **ESR**, and **CRP**. I would also like to check **ANA**,（抗核抗体） **anti-dsDNA**, **anti-Smith**, complement **C3 and C4**, **anti-Ro SSA**, **anti-La SSB**, and **anti-RNP** antibodies. I would like to obtain a **urinalysis with microscopy**（尿検査＋鏡検） to evaluate for **renal involvement**, given the borderline hypertension. I would also like to order a chest X-ray to evaluate for **pleural effusion or pericardial disease**.（胸水・心膜疾患） If the urinalysis reveals **proteinuria** or an **active sediment**,（活動性沈渣） I would recommend a **24-hour urine collection** for protein and consider **nephrology consultation** for possible **renal biopsy**.",
      audioFile: "audio/case-presentation/sle_07_plan.mp3",
      timestampFile: "timestamps/case-presentation/sle_07_plan.json",
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. RA Case Data
// ---------------------------------------------------------------------------

export const raCaseData: CaseData = {
  title: "実践例: RA（Full Case Presentation）",
  intro: "テキストをクリック → 音声再生＋色変化。もう一度クリックで停止。\n**太字** = キー表現 ／ （日本語）= パラフレーズ",
  fullCaseAudio: "audio/case-presentation/ra_full_case.mp3",
  sections: [
    {
      id: "ra-patient-info",
      title: "Patient Information",
      description: "Diagnostic Framing / テンプレート",
      text: "Ms. Thompson is a **52-year-old Caucasian woman** with a history of **hypothyroidism**, who **presented with** a **6-week history** of progressive **bilateral symmetric small joint pain and swelling** with **prolonged morning stiffness**.",
      audioFile: "audio/case-presentation/ra_01_patient_info.mp3",
      timestampFile: "timestamps/case-presentation/ra_01_patient_info.json",
    },
    {
      id: "ra-hpi",
      title: "History of Present Illness",
      description: "HPIの構築法 / Pertinent Negatives",
      text: `The patient **had been in her usual state of health** until approximately **6 weeks prior to presentation**, when she noticed **gradual-onset stiffness and aching** in bilateral hands, predominantly in the **metacarpophalangeal and proximal interphalangeal joints**.（MCP・PIP関節） The **morning stiffness** lasted approximately **2 to 3 hours** daily and **improved with activity**.

Over the following 2 weeks, she noted **progressive swelling** of the affected joints and increasing **difficulty with fine motor tasks**,（巧緻運動障害） such as **buttoning clothes and opening jars**. She rated the pain as 5 out of 10 at onset, progressing to 7 out of 10 at presentation.

**Four weeks prior to presentation**, she developed similar stiffness and swelling in bilateral wrists. The symptoms have been **persistent and additive**,（持続性かつ加算的） **without migratory pattern**.（移動性なし→RAを示唆）

She reports associated fatigue and **general malaise**. Over-the-counter ibuprofen provided **minimal relief**.

**She denies** rash, **photosensitivity**, oral or nasal ulcers, Raynaud's phenomenon, dry eyes, dry mouth, hair loss, **back pain or morning back stiffness**,（→SpA除外） eye redness, **skin thickening**,（皮膚硬化→SSc除外） muscle weakness, dyspnea, chest pain, fever, or weight loss. She denies recent viral illness, tick bites, **preceding pharyngitis**,（先行咽頭炎→リウマチ熱除外） or new sexual contacts.`,
      audioFile: "audio/case-presentation/ra_02_hpi.mp3",
      timestampFile: "timestamps/case-presentation/ra_02_hpi.json",
      tip: {
        title: "注目ポイント",
        items: [
          "\"additive, without migratory pattern\" → RA を示唆（migratory ならrheumatic fever等）",
          "機能障害の具体例（buttoning, opening jars）→ 臨床的な重症度を伝える",
          "Pertinent negatives が広い: rash, Raynaud's, sicca, back pain, nail, skin → SLE/PsA/SpA を系統的に除外",
        ],
      },
    },
    {
      id: "ra-pmh-ros",
      title: "PMH〜ROS",
      description: "一般英語 vs 医学英語 / テンプレート",
      text: `Her past medical history **is significant for** 5 years of hypothyroidism, **well controlled**. She has **no prior surgeries**. She is currently on **levothyroxine** 75 micrograms per day. The patient has **no known drug allergies**.

Her **family history is significant for** **rheumatoid arthritis** in her mother and **type 2 diabetes mellitus** in her father. **No family history of** psoriasis or **inflammatory bowel disease**.（乾癬・IBDの家族歴なし→PsA/腸炎性関節炎除外）

The patient works as a high school teacher. She is married and lives with her husband and two children. She has **never smoked**. She drinks one glass of wine on weekends **on a social basis**. She **denies illicit drug use**.

**Review of systems is negative except as mentioned in the history of present illness**.`,
      audioFile: "audio/case-presentation/ra_03_pmh_to_ros.mp3",
      timestampFile: "timestamps/case-presentation/ra_03_pmh_to_ros.json",
      tip: {
        title: "注目ポイント",
        items: [
          "母親のRA → 遺伝的リスク",
          "psoriasis / IBD の家族歴否定 → PsA / enteropathic arthritis の除外",
        ],
      },
    },
    {
      id: "ra-pe",
      title: "Physical Examination",
      description: "膠原病の身体診察 / テンプレート",
      text: `Her temperature is 36.8 degrees Celsius. Her blood pressure is 128 over 78 millimeters of mercury. Her heart rate is 72 per minute with a **sinus rhythm**. Her respiratory rate is 14 per minute. Her oxygen saturation is 99 percent **on room air**.

The patient is a well-developed woman **in no acute distress**. She is **alert, awake, and oriented times four**.

**The head is normocephalic and atraumatic**. **No malar rash**.（蝶形紅斑なし→SLE除外） **No oral or nasal ulcers**. **No alopecia**. The **mucous membranes are moist**. **The neck is supple**. No **cervical lymphadenopathy**.

**Cardiovascular exam reveals** a **regular rate and rhythm**, **normal S1 and S2**, **no murmurs, rubs, or gallops**.

Chest is **clear to auscultation bilaterally**. No wheezes, rhonchi, or crackles.

The abdomen is **soft, non-distended, and non-tender**. **Positive bowel sounds in all four quadrants**. No **hepatosplenomegaly**.

**Musculoskeletal exam** reveals bilateral symmetric **swelling and tenderness** of the second through fourth metacarpophalangeal joints, second and third proximal interphalangeal joints, and bilateral wrists. **Positive squeeze test**（スクイーズテスト陽性→MCP炎症） of bilateral MCP joints. **Warm joints on palpation**.（触診で温感→炎症を示唆） **No DIP joint involvement**.（DIP関節なし→PsA除外） **No joint deformity**. No **swan neck** or **boutonniere deformity**.（スワンネック・ボタン穴変形なし→早期RA） No **ulnar deviation**.（尺側偏位なし） No **subcutaneous nodules**. **No dactylitis**.（指趾炎なし→PsA除外）

The extremities show **no cyanosis, clubbing, or edema**. No **psoriatic plaques**.（乾癬局面なし） No **nail pitting**.（爪点状陥凹なし→PsA除外） No **livedo reticularis**.

**Cranial nerves II through XII are intact**. **No focal neurological deficits**. **Manual muscle test: 5 out of 5** in all extremities.`,
      audioFile: "audio/case-presentation/ra_04_pe.mp3",
      timestampFile: "timestamps/case-presentation/ra_04_pe.json",
      tip: {
        title: "注目ポイント",
        items: [
          "MSK所見が最も詳細（膠原病の要）",
          "squeeze test → RA の初期診察で重要",
          "変形の否定（swan neck, boutonniere, ulnar deviation）→ 早期RA",
          "PsA 除外: no DIP involvement, no psoriatic plaques, no nail pitting, no dactylitis",
        ],
      },
    },
    {
      id: "ra-summary",
      title: "Summary",
      description: "Semantic Qualifiers / Diagnostic Framing Step 4",
      text: "In summary, Ms. Thompson is a 52-year-old woman with hypothyroidism and a family history of rheumatoid arthritis, who presented with a **6-week history** of **progressive, symmetric, inflammatory polyarthralgia** predominantly affecting **bilateral MCP, PIP joints, and wrists**, with **prolonged morning stiffness exceeding 2 hours**, **functional impairment in fine motor tasks**,（巧緻運動の機能障害） fatigue, and physical findings of bilateral symmetric **synovitis** with **positive squeeze test**, **notably without**（特筆すべき陰性所見として） DIP involvement, rash, oral ulcers, nail changes, or **psoriatic features**.",
      audioFile: "audio/case-presentation/ra_05_summary.mp3",
      timestampFile: "timestamps/case-presentation/ra_05_summary.json",
      tip: {
        title: "注目ポイント",
        items: [
          "\"6-week history\" → ACR/EULAR分類基準の6週を意識",
          "\"notably without...\" → pertinent negatives をSummaryに統合し鑑別を明示",
        ],
      },
    },
    {
      id: "ra-ddx",
      title: "Differential Diagnosis",
      description: "Pertinent Positives & Negatives / テンプレート",
      text: `**My top differential diagnosis at this time would be** rheumatoid arthritis, **because** the patient presents with **symmetric inflammatory polyarthritis** affecting the MCP, PIP, and wrist joints with **prolonged morning stiffness**, a **positive squeeze test**, family history of RA, and the absence of DIP involvement or **extra-articular features** suggesting other connective tissue diseases. The **duration of symptoms exceeding 6 weeks**（6週超の症状持続→ACR/EULAR基準） further supports this diagnosis.

**Systemic lupus erythematosus** is a diagnosis **we would need to consider**, given the symmetric small joint involvement, though the absence of rash, oral ulcers, photosensitivity, alopecia, and **serositis**（漿膜炎） makes this **less likely**.

**Psoriatic arthritis** in its **polyarticular form** is a diagnosis **we would need to exclude**, though the absence of psoriatic skin lesions, nail pitting, DIP involvement, and dactylitis **argues against it**.

**Viral arthritis**, particularly from **parvovirus B19** or hepatitis, should be excluded given the acute-onset symmetric small joint involvement, though the 6-week duration and progressive nature are **more consistent with RA**.`,
      audioFile: "audio/case-presentation/ra_06_ddx.mp3",
      timestampFile: "timestamps/case-presentation/ra_06_ddx.json",
    },
    {
      id: "ra-plan",
      title: "Plan",
      description: "テンプレート",
      text: "**I would like to order** a **CBC with differential**, **comprehensive metabolic panel**, **ESR**, and **CRP**. I would like to check **rheumatoid factor**（リウマチ因子） and **anti-CCP antibodies**.（抗CCP抗体） I would also like to order **ANA** to evaluate for SLE. I would like to obtain **X-rays of bilateral hands and wrists** to evaluate for **erosive changes**.（びらん性変化） I would also check hepatitis B and C serologies and **parvovirus B19 IgM** to exclude viral etiologies. If the diagnosis is confirmed, I would discuss initiating **disease-modifying therapy**（DMARD） with the rheumatology team.",
      audioFile: "audio/case-presentation/ra_07_plan.mp3",
      timestampFile: "timestamps/case-presentation/ra_07_plan.json",
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. Alternative Formats Data (場面別フォーマット)
// ---------------------------------------------------------------------------

export const formatComparison: FormatInfo[] = [
  { name: "Full Case", purpose: "教育・初回報告", when: "指導医への初回症例報告", elements: 12 },
  { name: "SNAPPS", purpose: "臨床推論トレーニング", when: "外来実習、教育回診", elements: 6, background: "1990年代、米国医学教育で Learner-Centered Education が重視される中、Case Western Reserve大学のWolpaw教授らが開発。2003年 Academic Medicine誌で発表。学生の主体的思考と臨床推論スキルの深化を目的とする。" },
  { name: "I-PASS", purpose: "患者引き継ぎ", when: "シフト交代時のhandoff", elements: 5, background: "2000年前後の米国で医療事故の多くがコミュニケーションエラーに起因。2003年の研修医勤務時間制限で交代勤務が増加し、handoff の標準化が急務に。Boston Children's Hospital を中心に開発。2014年のlandmark studyで医療過誤を約23%、予防可能な有害事象を約30%減少させた。" },
  { name: "SBAR", purpose: "緊急報告", when: "急変時、コンサルトcall", elements: 4, background: "米国海軍の潜水艦・原子力空母で使用されていた報告様式が起源。重大情報を短時間で伝達する必要から生まれ、医療現場に導入。医師間・医療者間の緊急時コミュニケーション様式として国際的に普及。" },
];

export const alternativeFormatSections: AudioSection[] = [
  {
    id: "gpa-snapps",
    title: "SNAPPS（臨床推論トレーニング用）",
    text: `**S — Summarize the Case:**
This is a 58-year-old man with a history of **chronic sinusitis** on amlodipine for hypertension, who presented with a 4-week history of progressively worsening **hemoptysis**,（血痰） bilateral joint pain affecting the knees and ankles, and **elevated creatinine** found on routine labs. On exam, he has bilateral **nasal crusting**,（鼻腔痂皮） scattered **crackles** in bilateral lower lung fields, bilateral knee and ankle tenderness without effusion, and **palpable purpura**（触知可能な紫斑） on the lower extremities. Vital signs show blood pressure of 148 over 92 millimeters of mercury and oxygen saturation of 94 percent on room air.

**N — Narrow the Differential:**
The **most likely diagnosis** is **granulomatosis with polyangiitis**,（多発血管炎性肉芽腫症） formerly known as Wegener's granulomatosis. **Differential diagnoses include** **microscopic polyangiitis**（顕微鏡的多発血管炎） and **Goodpasture syndrome**.

**A — Analyze the Differential:**
Granulomatosis with polyangiitis **fits best because of** the triad of **upper airway involvement** with chronic sinusitis and nasal crusting, **lower airway involvement** with hemoptysis and crackles, and **renal involvement** with rising creatinine, along with palpable purpura suggesting **small vessel vasculitis**.（小血管炎） Microscopic polyangiitis is possible but **less likely because** it typically **lacks the upper airway involvement** such as sinusitis and nasal crusting. Goodpasture syndrome **should be considered** given the **pulmonary-renal presentation**,（肺腎症候群） but the upper airway involvement and palpable purpura are **not typical features**.

**P — Probe the Preceptor:**
I am unsure about the timing of **initiating immunosuppressive therapy**. Should we wait for the ANCA results and possible renal biopsy confirmation, or would it be appropriate to start **empiric treatment**（経験的治療） with cyclophosphamide and glucocorticoids given the **severity of the presentation**?

**P — Plan the Management:**
I would order **c-ANCA and p-ANCA** with **PR3 and MPO antibodies**, **urinalysis with microscopy**, **anti-GBM antibodies**, CBC, CMP, ESR, CRP, and **chest CT**. I would consider urgent **nephrology consultation** for possible **renal biopsy**. If GPA is confirmed, I would initiate **induction therapy**（寛解導入療法） with **high-dose glucocorticoids** and either **cyclophosphamide or rituximab**.

**S — Select a Case-Related Topic:**
For **self-directed learning**, I will review the current ACR EULAR guidelines on the management of **ANCA-associated vasculitis**, particularly the evidence comparing **rituximab versus cyclophosphamide** for induction therapy.`,
    audioFile: "audio/case-presentation/gpa_snapps.mp3",
    timestampFile: "timestamps/case-presentation/gpa_snapps.json",
  },
  {
    id: "gpa-ipass",
    title: "I-PASS（患者引き継ぎ用）",
    text: `**I — Illness Severity:**
This is a 58-year-old man with suspected **granulomatosis with polyangiitis**. Differential diagnoses include microscopic polyangiitis and Goodpasture syndrome. Given the **active hemoptysis** and **worsening renal function**, the illness severity is classified as **unstable**.

**P — Patient Summary:**
This is a 58-year-old man with a history of chronic sinusitis and hypertension on amlodipine, who presented with a 4-week history of **progressive hemoptysis**, bilateral knee and ankle pain, and **rising creatinine**. On exam, he has nasal crusting, bilateral lower lobe crackles, joint tenderness without effusion, and **palpable purpura** on the lower extremities. Blood pressure is 148 over 92, saturation 94 percent on room air.

**A — Action List:**
We have sent **ANCA with PR3 and MPO**, **anti-GBM antibodies**, urinalysis, CBC, CMP, ESR, and CRP. **Chest CT has been ordered**. Nephrology has been consulted for evaluation and possible renal biopsy. We have started **methylprednisolone 500 milligrams IV** while awaiting **confirmatory results**.

**S — Situation Awareness and Contingency Plan:**
The most likely diagnosis is GPA. If hemoptysis worsens or **oxygen requirements increase**, we should obtain urgent **pulmonary consultation** and consider **ICU transfer**. If creatinine continues to rise, we may need to proceed with **emergent renal biopsy**（緊急腎生検） and initiation of cyclophosphamide or rituximab. Watch for **rapidly progressive glomerulonephritis**.（急速進行性糸球体腎炎）

**S — Synthesis by Receiver:**
Please confirm this summary and let me know if you have **additional recommendations**.`,
    audioFile: "audio/case-presentation/gpa_ipass.mp3",
    timestampFile: "timestamps/case-presentation/gpa_ipass.json",
  },
  {
    id: "gpa-sbar",
    title: "SBAR（緊急時用）",
    text: `**S — Situation:**
This is a 58-year-old man with **worsening hemoptysis** and **acute kidney injury**. He was **admitted yesterday** for suspected **ANCA-associated vasculitis**.

**B — Background:**
He has a history of chronic sinusitis and hypertension on amlodipine. He presented with hemoptysis, joint pain, palpable purpura, and creatinine **rising from 1.8 to 2.6** over the past 24 hours. **ANCA results are pending**.

**A — Assessment:**
**Most likely** granulomatosis with polyangiitis with **rapidly progressive renal involvement**. **Concerned for**（懸念されるのは） **pulmonary hemorrhage**（肺出血） given increased hemoptysis and **new drop in oxygen saturation** to 91 percent.

**R — Recommendation:**
I recommend urgent nephrology and pulmonary consultation, **stat chest CT**,（緊急CT） and consideration of initiating **pulse-dose steroids**（ステロイドパルス療法） and rituximab or cyclophosphamide **before biopsy results return** given the **clinical trajectory**.`,
    audioFile: "audio/case-presentation/gpa_sbar.mp3",
    timestampFile: "timestamps/case-presentation/gpa_sbar.json",
  },
];

export const formatComparisonNote = "同じ患者でも目的によって情報の粒度が全く異なる:\n- **SNAPPS**: 臨床推論の過程を見せる → 自分の思考を言語化\n- **I-PASS**: 引き継ぎの安全性 → contingency plan が必須\n- **SBAR**: 最短で判断を仰ぐ → 4文で完結してもよい";

export const alternativeFormatCaseIntro = "58歳男性、慢性副鼻腔炎の既往。血痰・関節痛・腎機能悪化で紹介受診。→ ANCA関連血管炎（GPA）疑い。";

// ---------------------------------------------------------------------------
// 5. Vocabulary Data
// ---------------------------------------------------------------------------

export const vocabularySections: VocabSection[] = [
  // --- A. プレゼン定型句 ---
  {
    id: "vocab-a",
    title: "A. プレゼン定型句",
    columns: ["日本語", "英語", "例文"],
    entries: [
      { jp: "〜を主訴に来院した", en: "presented with", example: "Ms. Davis is a 28-year-old woman who presented with a 3-week history of progressive bilateral joint pain." },
      { jp: "特記すべき既往なし", en: "no significant past medical history", example: "Ms. Davis is a 28-year-old woman with no significant past medical history, who presented with joint pain." },
      { jp: "既往に〜がある", en: "with a history of", example: "This is a 58-year-old man with a history of chronic sinusitis on amlodipine for hypertension." },
      { jp: "既往歴として特記すべきは", en: "past medical history is significant for", example: "Her past medical history is significant for 5 years of hypothyroidism." },
      { jp: "既往は特記事項なし", en: "past medical history is unremarkable", example: "Her past medical history is unremarkable." },
      { jp: "家族歴として特記すべきは", en: "family history is significant for", example: "Her family history is significant for SLE in her maternal aunt." },
      { jp: "手術歴なし", en: "no prior surgeries", example: "She has no prior surgeries." },
      { jp: "既知の薬物アレルギーなし", en: "no known drug allergies (NKDA)", example: "The patient has no known drug allergies." },
      { jp: "健在である", en: "alive and well", example: "Her father is alive and well." },
      { jp: "社交的に飲酒する", en: "drinks on a social basis", example: "She drinks alcohol on a social basis, approximately 2 glasses of wine per week." },
      { jp: "違法薬物使用を否定", en: "denies illicit drug use", example: "She denies any illicit drug use." },
      { jp: "HPIで述べた以外は陰性", en: "review of systems is negative except as mentioned in the HPI", example: "Review of systems is negative except as mentioned in the history of present illness." },
      { jp: "要約すると", en: "in summary", example: "In summary, Ms. Davis is a 28-year-old woman who presented with..." },
      { jp: "現時点で最も考えられる鑑別は", en: "my top differential diagnosis at this time would be", example: "My top differential diagnosis at this time would be rheumatoid arthritis, because..." },
      { jp: "鑑別に挙げるべき疾患", en: "is a diagnosis we would need to consider", example: "Mixed connective tissue disease is a diagnosis we would need to consider." },
      { jp: "除外すべき疾患", en: "is a diagnosis we would need to exclude", example: "Drug-induced lupus is a diagnosis we would need to exclude." },
      { jp: "以下のオーダーを希望します", en: "I would like to order", example: "I would like to order a CBC with differential, CMP, ESR, and CRP." },
      { jp: "精査加療目的で紹介された", en: "was referred for further evaluation and treatment of", example: "Mr. Jones is a 58-year-old man who was referred to our department for further evaluation and treatment of hemoptysis and elevated creatinine." },
      { jp: "搬送された", en: "was transferred to", example: "The patient was transferred to our facility from an outside hospital for a higher level of care." },
    ],
  },
  // --- B. 身体診察コロケーション ---
  {
    id: "vocab-b",
    title: "B. 身体診察コロケーション",
    columns: ["日本語", "英語", "例文"],
    entries: [
      { jp: "急性苦悶なし", en: "in no acute distress", example: "The patient is a well-developed woman in no acute distress." },
      { jp: "意識清明・見当識4項目正常", en: "alert, awake, and oriented times four", example: "She is alert, awake, and oriented times four." },
      { jp: "頭部正常・外傷なし", en: "normocephalic and atraumatic", example: "The head is normocephalic and atraumatic." },
      { jp: "粘膜湿潤", en: "mucous membranes are moist", example: "The mucous membranes are moist." },
      { jp: "頸部柔軟", en: "the neck is supple", example: "The neck is supple. No cervical lymphadenopathy." },
      { jp: "頸部リンパ節腫脹なし", en: "no cervical lymphadenopathy", example: "No cervical lymphadenopathy." },
      { jp: "整・規則的な心拍", en: "regular rate and rhythm", example: "Cardiovascular exam reveals a regular rate and rhythm." },
      { jp: "I音・II音正常", en: "normal S1 and S2", example: "Normal S1 and S2. No murmurs, rubs, or gallops." },
      { jp: "雑音・摩擦音・奔馬調なし", en: "no murmurs, rubs, or gallops", example: "No murmurs, rubs, or gallops." },
      { jp: "両側呼吸音清明", en: "clear to auscultation bilaterally", example: "Chest is clear to auscultation bilaterally." },
      { jp: "喘鳴・類鼾音・断続性ラ音なし", en: "no wheezes, rhonchi, or crackles", example: "No wheezes, rhonchi, or crackles." },
      { jp: "腹部：軟・膨隆なし・圧痛なし", en: "soft, non-distended, and non-tender", example: "The abdomen is soft, non-distended, and non-tender." },
      { jp: "全4象限で腸蠕動音聴取", en: "positive bowel sounds in all four quadrants", example: "Positive bowel sounds in all four quadrants." },
      { jp: "肝脾腫なし", en: "no hepatosplenomegaly", example: "No hepatosplenomegaly." },
      { jp: "チアノーゼ・ばち指・浮腫なし", en: "no cyanosis, clubbing, or edema", example: "The extremities show no cyanosis, clubbing, or edema." },
      { jp: "脳神経II〜XII正常", en: "cranial nerves II through XII are intact", example: "Cranial nerves II through XII are intact." },
      { jp: "局所神経学的異常なし", en: "no focal neurological deficits", example: "No focal neurological deficits." },
      { jp: "腫脹・圧痛", en: "swelling and tenderness", example: "Musculoskeletal exam reveals bilateral symmetric swelling and tenderness of the MCP joints." },
      { jp: "関節変形なし", en: "no joint deformity", example: "No joint deformity. No swan neck or boutonniere deformity." },
      { jp: "触診で関節温感あり", en: "warm joints on palpation", example: "Warm joints on palpation." },
      { jp: "全関節で可動域正常", en: "full range of motion in all joints", example: "Full range of motion in all joints." },
      { jp: "徒手筋力テスト5/5", en: "manual muscle test: 5 out of 5", example: "Manual muscle test: 5 out of 5 in all extremities." },
      { jp: "反跳痛・筋性防御なし", en: "no rebound or guarding", example: "No rebound or guarding." },
      { jp: "肋骨脊柱角叩打痛なし", en: "no costovertebral angle tenderness", example: "No costovertebral angle tenderness." },
      { jp: "毛細血管再充填時間2秒未満", en: "capillary refill time less than 2 seconds", example: "Capillary refill time is less than 2 seconds." },
      { jp: "室内気で", en: "on room air", example: "Her oxygen saturation is 99 percent on room air." },
      { jp: "洞調律", en: "sinus rhythm", example: "Her heart rate is 72 per minute with a sinus rhythm." },
    ],
  },
  // --- C. 時間・経過の表現 ---
  {
    id: "vocab-c",
    title: "C. 時間・経過の表現",
    columns: ["日本語", "英語", "例文"],
    entries: [
      { jp: "普段通りの健康状態であった", en: "had been in her/his usual state of health", example: "The patient had been in her usual state of health until approximately 6 weeks prior to presentation." },
      { jp: "来院の〇週間前", en: "__ weeks prior to presentation", example: "Three weeks prior to presentation, she noticed gradual-onset stiffness." },
      { jp: "その後〇週間にわたり", en: "over the following __ weeks", example: "Over the following 2 weeks, she noted progressive swelling of the affected joints." },
      { jp: "前月にわたり", en: "over the preceding month", example: "She noted progressive hair thinning over the preceding month." },
      { jp: "過去24時間で", en: "over the past 24 hours", example: "Creatinine rising from 1.8 to 2.6 over the past 24 hours." },
      { jp: "1日を通して", en: "throughout the day", example: "The morning stiffness improved with activity throughout the day." },
      { jp: "活動により改善", en: "improved with activity", example: "The stiffness improved with activity." },
      { jp: "日光曝露で増悪", en: "worsened with sun exposure", example: "She developed a rash on both cheeks that worsened with sun exposure." },
      { jp: "発症時は5/10、来院時は7/10に増悪", en: "initially 5 out of 10, progressed to 7 out of 10", example: "She rated the pain as 5 out of 10 at onset, progressing to 7 out of 10 at presentation." },
      { jp: "持続性かつ加算的", en: "persistent and additive", example: "The symptoms have been persistent and additive, without migratory pattern." },
      { jp: "移動性なし", en: "without migratory pattern", example: "The joint involvement has been additive, without migratory pattern." },
      { jp: "昨日入院", en: "admitted yesterday", example: "He was admitted yesterday for suspected ANCA-associated vasculitis." },
      { jp: "良好にコントロールされている", en: "well controlled", example: "...5 years of hypothyroidism, well controlled." },
      { jp: "最小限の効果しかなかった", en: "provided minimal relief", example: "Over-the-counter ibuprofen provided minimal relief." },
    ],
  },
  // --- D. 所見の動詞パターン ---
  {
    id: "vocab-d",
    title: "D. 所見の動詞パターン",
    columns: ["日本語", "英語", "例文"],
    entries: [
      { jp: "〜を否定する", en: "denies", example: "She denies Raynaud's phenomenon, dry eyes, dry mouth, and foamy urine." },
      { jp: "診察で〜が認められる", en: "reveals", example: "Musculoskeletal exam reveals bilateral symmetric swelling and tenderness of the MCP joints." },
      { jp: "〜が認められた", en: "is present / is noted", example: "Diffuse non-scarring alopecia is present. Two painless ulcers are noted on the hard palate." },
      { jp: "〜と報告している", en: "reports", example: "She reports associated fatigue and general malaise." },
      { jp: "〜に特記すべきは", en: "is notable for", example: "The exam is notable for bilateral MCP synovitis with a positive squeeze test." },
      { jp: "〜の身体所見を伴い", en: "with physical findings of", example: "She presented with inflammatory polyarthralgia, with physical findings of bilateral MCP and PIP synovitis and borderline hypertension." },
      { jp: "〜として分類される", en: "is classified as", example: "The illness severity is classified as unstable." },
      { jp: "特筆すべき陰性所見として", en: "notably without", example: "...notably without DIP involvement, rash, oral ulcers, or psoriatic features." },
      { jp: "〜から疑われる", en: "suggested by", example: "The patient has possible renal involvement suggested by borderline hypertension." },
      { jp: "〜を評価するために", en: "to evaluate for", example: "I would like to obtain a urinalysis with microscopy to evaluate for renal involvement." },
      { jp: "〜の除外目的", en: "to exclude", example: "I would check parvovirus B19 IgM to exclude viral etiologies." },
      { jp: "〜に対する評価", en: "evaluation for", example: "Nephrology has been consulted for evaluation and possible renal biopsy." },
    ],
  },
  // --- E. 鑑別の論理表現 ---
  {
    id: "vocab-e",
    title: "E. 鑑別の論理表現",
    columns: ["日本語", "英語", "例文"],
    entries: [
      { jp: "最も合致する（理由は〜）", en: "fits best because of", example: "GPA fits best because of the triad of upper airway, lower airway, and renal involvement." },
      { jp: "可能性は低い", en: "less likely", example: "SLE is less likely given the absence of rash, oral ulcers, and photosensitivity." },
      { jp: "〜を考慮すると", en: "given", example: "RA is less likely given the prominent extra-articular manifestations." },
      { jp: "〜に否定的所見となる", en: "argues against it", example: "The absence of psoriatic skin lesions, nail pitting, and dactylitis argues against it." },
      { jp: "〜には典型的でない", en: "not typical features / not characteristic of", example: "The malar rash and oral ulcers are not characteristic of RA." },
      { jp: "〜により合致する", en: "more consistent with", example: "The 6-week duration and progressive nature are more consistent with RA." },
      { jp: "〜を示唆する", en: "suggesting", example: "Palpable purpura suggesting small vessel vasculitis." },
      { jp: "〜が懸念される", en: "concerned for", example: "I am concerned for pulmonary hemorrhage given increased hemoptysis." },
      { jp: "考慮すべきである", en: "should be considered", example: "Goodpasture syndrome should be considered given the pulmonary-renal presentation." },
      { jp: "重複する特徴", en: "overlapping features", example: "MCTD should be considered because of the overlapping features of inflammatory arthritis." },
      { jp: "多臓器障害", en: "multiple organ system involvement", example: "The patient presents with multiple organ system involvement including arthritis and malar rash." },
      { jp: "関節外症状", en: "extra-articular manifestations", example: "RA is less likely given the prominent extra-articular manifestations." },
      { jp: "病態の重症度", en: "severity of the presentation", example: "We should start empiric treatment given the severity of the presentation." },
      { jp: "臨床経過の推移", en: "clinical trajectory", example: "I recommend initiating pulse-dose steroids given the clinical trajectory." },
    ],
  },
  // --- F. 医学修飾語（Semantic Qualifiers） ---
  {
    id: "vocab-f",
    title: "F. 医学修飾語（Semantic Qualifiers）",
    columns: ["日本語", "英語", "例文"],
    entries: [
      { jp: "進行性の", en: "progressive", example: "She presented with a 3-week history of progressive bilateral joint pain." },
      { jp: "両側性の", en: "bilateral", example: "She noticed bilateral symmetric swelling of the MCP joints." },
      { jp: "対称性の", en: "symmetric", example: "The joint involvement is symmetric, affecting bilateral wrists and hands." },
      { jp: "緩徐発症の", en: "gradual-onset", example: "She noticed gradual-onset stiffness and aching in bilateral hands." },
      { jp: "急性発症の", en: "acute-onset", example: "Viral arthritis should be excluded given the acute-onset symmetric small joint involvement." },
      { jp: "非掻痒性の", en: "non-pruritic", example: "The rash was non-pruritic and spared the nasolabial folds." },
      { jp: "非瘢痕性の", en: "non-scarring", example: "Diffuse non-scarring alopecia is present." },
      { jp: "びまん性の", en: "diffuse", example: "She noted diffuse hair thinning without associated scalp lesions." },
      { jp: "限局性の", en: "focal / localized", example: "No focal neurological deficits." },
      { jp: "間欠的な", en: "intermittent", example: "She developed intermittent low-grade fevers up to 37.8 degrees Celsius." },
      { jp: "触知可能な", en: "palpable", example: "He has palpable purpura on the lower extremities." },
      { jp: "遷延する", en: "prolonged", example: "She presented with prolonged morning stiffness exceeding 2 hours." },
      { jp: "炎症性の", en: "inflammatory", example: "She has progressive, symmetric, inflammatory polyarthralgia." },
      { jp: "急速進行性の", en: "rapidly progressive", example: "I am concerned for GPA with rapidly progressive renal involvement." },
      { jp: "多関節の", en: "polyarticular", example: "Psoriatic arthritis in its polyarticular form is a diagnosis we would need to exclude." },
      { jp: "少関節の", en: "oligoarticular", example: "The patient presents with an oligoarticular pattern affecting the knees and ankles." },
      { jp: "単関節の", en: "monoarticular", example: "He presented with acute monoarticular arthritis of the first MTP joint." },
      { jp: "近位の", en: "proximal", example: "She has proximal muscle weakness in bilateral upper and lower extremities." },
      { jp: "遠位の", en: "distal", example: "No distal interphalangeal joint involvement." },
      { jp: "境界域の", en: "borderline", example: "Physical findings include bilateral synovitis and borderline hypertension." },
    ],
  },
  // --- G. 検査・治療オーダー ---
  {
    id: "vocab-g",
    title: "G. 検査・治療オーダー",
    columns: ["日本語", "英語", "例文"],
    entries: [
      { jp: "血算＋分画", en: "CBC with differential", example: "I would like to order a CBC with differential, CMP, ESR, and CRP." },
      { jp: "総合代謝パネル", en: "comprehensive metabolic panel (CMP)", example: "I would like to order a CBC with differential and a comprehensive metabolic panel." },
      { jp: "赤沈", en: "ESR (erythrocyte sedimentation rate)", example: "I would like to check ESR and CRP as inflammatory markers." },
      { jp: "尿検査＋鏡検", en: "urinalysis with microscopy", example: "I would like to obtain a urinalysis with microscopy to evaluate for renal involvement." },
      { jp: "24時間蓄尿", en: "24-hour urine collection", example: "If proteinuria is found, I would recommend a 24-hour urine collection for protein." },
      { jp: "活動性沈渣", en: "active sediment", example: "If the urinalysis reveals proteinuria or an active sediment, I would consult nephrology." },
      { jp: "びらん性変化（の評価）", en: "erosive changes", example: "I would obtain X-rays of bilateral hands and wrists to evaluate for erosive changes." },
      { jp: "胸水・心膜疾患", en: "pleural effusion or pericardial disease", example: "I would order a chest X-ray to evaluate for pleural effusion or pericardial disease." },
      { jp: "〜のコンサルテーションを検討", en: "consider __ consultation", example: "I would consider nephrology consultation for possible renal biopsy." },
      { jp: "確定診断結果を待つ間", en: "while awaiting confirmatory results", example: "We have started methylprednisolone 500 mg IV while awaiting confirmatory results." },
      { jp: "生検結果判明前に", en: "before biopsy results return", example: "I recommend initiating pulse-dose steroids before biopsy results return." },
      { jp: "経験的治療", en: "empiric treatment", example: "We should start empiric treatment with cyclophosphamide and glucocorticoids." },
      { jp: "寛解導入療法", en: "induction therapy", example: "I would initiate induction therapy with high-dose glucocorticoids and rituximab." },
      { jp: "維持療法", en: "maintenance therapy", example: "After remission, we would transition to maintenance therapy with azathioprine." },
      { jp: "疾患修飾療法", en: "disease-modifying therapy", example: "I would discuss initiating disease-modifying therapy with the rheumatology team." },
      { jp: "ステロイドパルス療法", en: "pulse-dose steroids", example: "I recommend pulse-dose steroids and rituximab given the clinical trajectory." },
      { jp: "緊急CT", en: "stat chest CT", example: "I recommend urgent consultation and a stat chest CT." },
    ],
  },
  // --- H-1. 疾患名 ---
  {
    id: "vocab-h1",
    title: "H-1. 疾患名",
    columns: ["日本語", "英語", "例文", "鑑別キー"],
    entries: [
      { jp: "関節リウマチ", en: "rheumatoid arthritis (RA)", example: "My top differential would be rheumatoid arthritis.", extra: "対称性MCP/PIP/手関節、朝のこわばり>1h、RF/抗CCP陽性" },
      { jp: "全身性エリテマトーデス", en: "systemic lupus erythematosus (SLE)", example: "The most likely diagnosis is systemic lupus erythematosus.", extra: "若年女性、蝶形紅斑、多臓器障害、ANA/抗dsDNA陽性、補体低下" },
      { jp: "全身性強皮症", en: "systemic sclerosis (SSc) / scleroderma", example: "I would also consider systemic sclerosis given the skin tightening and Raynaud's.", extra: "皮膚硬化、Raynaud's、ILD/PAH、抗Scl-70/抗セントロメア" },
      { jp: "限局皮膚硬化型SSc", en: "limited cutaneous SSc (lcSSc)", example: "The skin changes limited to the distal extremities suggest limited cutaneous SSc.", extra: "肘・膝より遠位の皮膚硬化、CREST所見、抗セントロメア、PAHリスク高" },
      { jp: "びまん皮膚硬化型SSc", en: "diffuse cutaneous SSc (dcSSc)", example: "The rapidly progressive proximal skin thickening is concerning for diffuse cutaneous SSc.", extra: "体幹に及ぶ皮膚硬化、抗Scl-70/抗RNAポリメラーゼIII、腎クリーゼリスク" },
      { jp: "CREST症候群", en: "CREST syndrome", example: "The patient has features consistent with CREST syndrome.", extra: "Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyly, Telangiectasia" },
      { jp: "皮膚筋炎", en: "dermatomyositis (DM)", example: "Dermatomyositis should be considered given the proximal weakness and heliotrope rash.", extra: "Gottron丘疹、ヘリオトロープ疹、近位筋力低下、CK上昇、悪性腫瘍合併注意" },
      { jp: "多発性筋炎", en: "polymyositis (PM)", example: "Polymyositis is less likely in the absence of skin findings.", extra: "近位筋力低下、CK上昇、皮膚所見なし（DMとの鑑別）" },
      { jp: "抗合成酵素症候群", en: "antisynthetase syndrome", example: "The triad of ILD, arthritis, and mechanic's hands raises concern for antisynthetase syndrome.", extra: "ILD＋関節炎＋mechanic's hands＋Raynaud's＋発熱、抗Jo-1等" },
      { jp: "シェーグレン症候群", en: "Sjögren's syndrome", example: "Sjögren's syndrome should be considered given the dry eyes and dry mouth.", extra: "乾燥症状(眼・口)、耳下腺腫大、抗Ro/SSA・抗La/SSB、リンパ腫リスク" },
      { jp: "混合性結合組織病", en: "mixed connective tissue disease (MCTD)", example: "MCTD is a diagnosis we would need to consider because of the overlapping features.", extra: "SLE＋SSc＋PM様の重複所見、抗RNP高値、Raynaud's高頻度" },
      { jp: "抗リン脂質抗体症候群", en: "antiphospholipid syndrome (APS)", example: "We should evaluate for antiphospholipid syndrome given the history of recurrent thrombosis.", extra: "動静脈血栓＋習慣流産、ループスAC/抗カルジオリピン/抗β2GP1" },
      { jp: "薬剤性ループス", en: "drug-induced lupus", example: "Drug-induced lupus is a diagnosis we would need to exclude.", extra: "ヒドララジン/プロカインアミド/INH、抗ヒストン抗体、腎・皮膚障害は稀" },
      { jp: "乾癬性関節炎", en: "psoriatic arthritis (PsA)", example: "Psoriatic arthritis in its polyarticular form should be excluded.", extra: "DIP関節、dactylitis、爪点状陥凹、乾癬皮膚病変、付着部炎" },
      { jp: "強直性脊椎炎", en: "ankylosing spondylitis (AS)", example: "The inflammatory back pain and sacroiliitis are consistent with ankylosing spondylitis.", extra: "若年男性、炎症性腰背部痛、仙腸関節炎、HLA-B27、ぶどう膜炎" },
      { jp: "反応性関節炎", en: "reactive arthritis", example: "Reactive arthritis should be considered given the preceding GI infection.", extra: "先行感染(尿道炎/腸炎)後の非対称性少関節炎、結膜炎、HLA-B27" },
      { jp: "多発血管炎性肉芽腫症", en: "granulomatosis with polyangiitis (GPA)", example: "The most likely diagnosis is granulomatosis with polyangiitis.", extra: "上気道(副鼻腔炎/鼻出血)＋下気道(血痰)＋腎、c-ANCA/PR3" },
      { jp: "顕微鏡的多発血管炎", en: "microscopic polyangiitis (MPA)", example: "Microscopic polyangiitis is possible but less likely because it lacks upper airway involvement.", extra: "腎(RPGN)＋肺(出血/ILD)、上気道障害なし、p-ANCA/MPO" },
      { jp: "好酸球性多発血管炎性肉芽腫症", en: "eosinophilic granulomatosis with polyangiitis (EGPA)", example: "EGPA should be considered given the asthma and eosinophilia.", extra: "喘息＋好酸球増多＋血管炎、末梢神経障害、p-ANCA/MPO(40%)" },
      { jp: "結節性多発動脈炎", en: "polyarteritis nodosa (PAN)", example: "Polyarteritis nodosa should be excluded given the medium vessel involvement.", extra: "中型血管炎、ANCA陰性、HBV関連、腎動脈瘤、肺病変なし" },
      { jp: "巨細胞性動脈炎", en: "giant cell arteritis (GCA)", example: "I am concerned for giant cell arteritis given the new-onset headache and jaw claudication.", extra: ">50歳、側頭部頭痛、顎跛行、視力障害、ESR著明上昇、PMR合併" },
      { jp: "高安動脈炎", en: "Takayasu arteritis", example: "The absent radial pulse and bruit suggest Takayasu arteritis.", extra: "若年女性、大動脈＋分枝の狭窄、脈なし病、血圧左右差" },
      { jp: "IgA血管炎", en: "IgA vasculitis (Henoch-Schönlein purpura)", example: "The palpable purpura, abdominal pain, and hematuria are consistent with IgA vasculitis.", extra: "小児に多い、触知可能な紫斑＋腹痛＋関節痛＋血尿、IgA沈着" },
      { jp: "ベーチェット病", en: "Behçet's disease", example: "Behçet's disease should be considered given the recurrent oral and genital ulcers.", extra: "反復性口腔潰瘍＋外陰部潰瘍＋ぶどう膜炎＋皮膚症状、シルクロード" },
      { jp: "グッドパスチャー症候群", en: "Goodpasture syndrome (anti-GBM disease)", example: "Goodpasture syndrome should be considered given the pulmonary-renal presentation.", extra: "肺出血＋RPGN、抗GBM抗体、上気道障害なし(GPAとの鑑別)" },
      { jp: "急速進行性糸球体腎炎", en: "rapidly progressive glomerulonephritis (RPGN)", example: "We should watch for rapidly progressive glomerulonephritis.", extra: "週〜月単位のCr上昇、活動性沈渣(赤血球円柱)、緊急腎生検の適応" },
      { jp: "成人Still病", en: "adult-onset Still's disease (AOSD)", example: "Adult-onset Still's disease should be considered given the quotidian fever and salmon-colored rash.", extra: "弛張熱＋サーモンピンク疹＋関節炎＋咽頭痛、フェリチン著明上昇" },
      { jp: "痛風", en: "gout", example: "The acute monoarticular arthritis of the first MTP joint is consistent with gout.", extra: "第1MTP急性単関節炎、尿酸結晶(針状・負の複屈折)、tophi" },
      { jp: "偽痛風", en: "pseudogout (CPPD disease)", example: "Pseudogout should be considered given the acute knee arthritis and chondrocalcinosis.", extra: "大関節(膝)急性単関節炎、CPPD結晶(菱形・正の複屈折)、X線石灰化" },
      { jp: "リウマチ熱", en: "rheumatic fever", example: "Rheumatic fever should be excluded given the preceding pharyngitis and migratory polyarthritis.", extra: "A群溶連菌先行感染、移動性多関節炎、心炎、Jones基準" },
      { jp: "線維筋痛症", en: "fibromyalgia", example: "Fibromyalgia is a diagnosis of exclusion after ruling out inflammatory etiologies.", extra: "広範囲疼痛＋疲労＋睡眠障害＋認知障害、検査正常、除外診断" },
      { jp: "ループス腎炎", en: "lupus nephritis", example: "We should evaluate for lupus nephritis given the proteinuria and active sediment.", extra: "SLEの腎病変、ISN/RPS分類(I-VI)、抗dsDNA上昇＋補体低下で活動性" },
    ],
  },
  // --- H-2. 症状・身体所見 ---
  {
    id: "vocab-h2",
    title: "H-2. 症状・身体所見",
    columns: ["日本語", "英語", "例文", "鑑別"],
    entries: [
      { jp: "朝のこわばり", en: "morning stiffness", example: "She reports morning stiffness lasting approximately 2 to 3 hours daily.", extra: ">1h: RA/SLE等の炎症性、<30min: OA" },
      { jp: "蝶形紅斑", en: "malar rash / butterfly rash", example: "A malar rash is present on bilateral cheeks, erythematous and slightly raised.", extra: "SLE（鼻唇溝回避が特徴）、酒さとの鑑別" },
      { jp: "鼻唇溝を避ける", en: "sparing the nasolabial folds", example: "The rash is sparing the nasolabial folds.", extra: "SLE蝶形紅斑の特徴、酒さは鼻唇溝も侵す" },
      { jp: "円板状皮疹", en: "discoid rash", example: "She has a discoid rash with central scarring on the scalp.", extra: "SLE（慢性皮膚型）、瘢痕性脱毛を伴う" },
      { jp: "光線過敏", en: "photosensitivity", example: "The rash worsened with sun exposure, consistent with photosensitivity.", extra: "SLE、DM、薬剤性" },
      { jp: "口腔潰瘍", en: "oral ulcers", example: "Two painless oral ulcers are noted on the hard palate.", extra: "SLE（通常無痛）、ベーチェット（有痛）" },
      { jp: "硬口蓋の無痛性潰瘍", en: "painless ulcers on the hard palate", example: "Painless ulcers are noted on the hard palate.", extra: "SLE（硬口蓋に好発、無痛性が特徴）" },
      { jp: "びまん性非瘢痕性脱毛", en: "diffuse non-scarring alopecia", example: "Diffuse non-scarring alopecia is present.", extra: "SLE、甲状腺疾患、鉄欠乏。瘢痕性→円板状ループス" },
      { jp: "レイノー現象", en: "Raynaud's phenomenon", example: "She denies Raynaud's phenomenon.", extra: "SSc(95%)、SLE、MCTD、DM。単独でも原発性あり" },
      { jp: "三相性の指の色調変化", en: "triphasic digital color change (white→blue→red)", example: "She reports episodic triphasic digital color change, turning white then blue then red.", extra: "Raynaud's現象の定型的記述" },
      { jp: "滑膜炎", en: "synovitis", example: "Physical findings include bilateral MCP and PIP synovitis.", extra: "RA、SLE、PsA、反応性関節炎" },
      { jp: "多関節痛", en: "polyarthralgia", example: "She presented with progressive symmetric inflammatory polyarthralgia.", extra: "RA、SLE、ウイルス性。関節「痛」であり「炎」との区別" },
      { jp: "多関節炎", en: "polyarthritis", example: "The patient presents with symmetric inflammatory polyarthritis affecting the MCP and PIP joints.", extra: "RA、SLE、PsA。腫脹を伴う=「炎」" },
      { jp: "指趾炎", en: "dactylitis (sausage digits)", example: "No dactylitis is noted on exam.", extra: "PsA、反応性関節炎、SpA。指全体の腫脹" },
      { jp: "触知可能な紫斑", en: "palpable purpura", example: "He has palpable purpura on the lower extremities.", extra: "小血管炎(GPA/MPA/IgA血管炎)、白血球破砕性血管炎" },
      { jp: "網状皮斑", en: "livedo reticularis", example: "No livedo reticularis is noted on exam.", extra: "APS、SLE、PAN、クリオグロブリン血症" },
      { jp: "皮下結節", en: "subcutaneous nodules / rheumatoid nodules", example: "No subcutaneous nodules are palpated.", extra: "RA（RF高値例）、リウマチ熱、痛風結節(tophi)" },
      { jp: "スワンネック変形", en: "swan neck deformity", example: "No swan neck or boutonniere deformity is noted.", extra: "RA進行期（PIP過伸展＋DIP屈曲）" },
      { jp: "ボタン穴変形", en: "boutonniere deformity", example: "No swan neck or boutonniere deformity is noted.", extra: "RA進行期（PIP屈曲＋DIP過伸展）" },
      { jp: "尺側偏位", en: "ulnar deviation", example: "No ulnar deviation is present.", extra: "RA進行期のMCP関節変形" },
      { jp: "スクイーズテスト陽性", en: "positive squeeze test", example: "Positive squeeze test of bilateral MCP joints.", extra: "RA初期のMCP炎症スクリーニング" },
      { jp: "爪点状陥凹", en: "nail pitting", example: "No nail pitting is noted on exam.", extra: "PsA、乾癬" },
      { jp: "乾癬局面", en: "psoriatic plaques", example: "No psoriatic plaques are noted on skin exam.", extra: "PsA、乾癬。肘・膝・頭皮・臍周囲に好発" },
      { jp: "血痰", en: "hemoptysis", example: "He presented with progressively worsening hemoptysis.", extra: "GPA、MPA、Goodpasture、肺出血" },
      { jp: "泡沫尿", en: "foamy urine", example: "She denies foamy urine.", extra: "蛋白尿の示唆→ループス腎炎、RPGN" },
      { jp: "漿膜炎", en: "serositis", example: "We should evaluate for serositis including pleuritis and pericarditis.", extra: "SLE、RA、FMF。胸膜炎＋心膜炎" },
      { jp: "肺出血", en: "pulmonary hemorrhage", example: "I am concerned for pulmonary hemorrhage given increased hemoptysis.", extra: "GPA、MPA、Goodpasture、SLE" },
      { jp: "小血管炎", en: "small vessel vasculitis", example: "Palpable purpura suggests small vessel vasculitis.", extra: "ANCA関連(GPA/MPA/EGPA)、IgA血管炎、クリオグロブリン" },
      { jp: "鼻腔痂皮", en: "nasal crusting", example: "On exam, he has bilateral nasal crusting.", extra: "GPA（上気道病変の特徴）" },
      { jp: "鼻中隔穿孔", en: "nasal septal perforation", example: "She has nasal septal perforation on anterior rhinoscopy.", extra: "GPA、コカイン、外傷" },
      { jp: "巧緻運動障害", en: "difficulty with fine motor tasks", example: "She has increasing difficulty with fine motor tasks such as buttoning clothes and opening jars.", extra: "RA、SSc（手指硬化）。機能障害の具体例で重症度を伝える" },
      { jp: "乾燥症状", en: "sicca symptoms (dry eyes, dry mouth)", example: "She denies sicca symptoms including dry eyes and dry mouth.", extra: "Sjögren's（原発性/続発性）、薬剤性、加齢" },
      { jp: "皮膚硬化", en: "skin thickening / skin tightening", example: "She denies skin thickening or tightening.", extra: "SSc。modified Rodnan skin score で評価" },
      { jp: "強指症", en: "sclerodactyly", example: "No sclerodactyly is noted on hand exam.", extra: "SSc(lcSSc/dcSSc)、CREST症候群" },
      { jp: "ゴットロン丘疹", en: "Gottron's papules", example: "Gottron's papules are noted over the MCP and PIP joints.", extra: "DM（病理学的所見、MCP/PIP/肘/膝伸側）" },
      { jp: "ヘリオトロープ疹", en: "heliotrope rash", example: "A violaceous heliotrope rash is noted on the upper eyelids.", extra: "DM（上眼瞼の紫紅色浮腫性紅斑）" },
      { jp: "機械工の手", en: "mechanic's hands", example: "She has hyperkeratotic fissuring of the lateral fingers consistent with mechanic's hands.", extra: "抗合成酵素症候群、DM" },
      { jp: "ショール徴候", en: "shawl sign", example: "An erythematous rash is noted over the upper back in a shawl sign distribution.", extra: "DM（上背部〜肩のV字型紅斑）" },
      { jp: "V徴候", en: "V sign", example: "A photosensitive rash is noted on the anterior chest in a V sign pattern.", extra: "DM（前胸部V字型紅斑）" },
      { jp: "石灰沈着", en: "calcinosis", example: "Subcutaneous calcinosis is palpated over the elbows and fingertips.", extra: "SSc(CREST)、DM、腎不全" },
      { jp: "毛細血管拡張", en: "telangiectasia", example: "Multiple telangiectasias are noted on the face and hands.", extra: "SSc(CREST)、肝硬変、遺伝性出血性毛細血管拡張症" },
      { jp: "食道蠕動障害", en: "esophageal dysmotility", example: "She reports dysphagia consistent with esophageal dysmotility.", extra: "SSc（下部2/3食道の平滑筋障害、GERD合併）" },
      { jp: "間質性肺疾患", en: "interstitial lung disease (ILD)", example: "High-resolution CT shows findings consistent with interstitial lung disease.", extra: "SSc、DM/PM(抗合成酵素)、RA、SLE" },
      { jp: "肺動脈性肺高血圧症", en: "pulmonary arterial hypertension (PAH)", example: "We should screen for pulmonary arterial hypertension with echocardiography.", extra: "SSc(特にlcSSc)、SLE、MCTD" },
      { jp: "強膜炎", en: "scleritis", example: "Slit-lamp exam reveals scleritis with scleral thinning.", extra: "RA、GPA、SLE。深部痛を伴い視力障害リスク" },
      { jp: "上強膜炎", en: "episcleritis", example: "She has mild episcleritis in the right eye.", extra: "RA、SLE、IBD。強膜炎より軽症" },
      { jp: "ぶどう膜炎", en: "uveitis", example: "She has anterior uveitis with photophobia and blurred vision.", extra: "AS/SpA、ベーチェット、サルコイドーシス、JIA" },
      { jp: "多発単神経炎", en: "mononeuritis multiplex", example: "He has foot drop and wrist drop consistent with mononeuritis multiplex.", extra: "PAN、EGPA、GPA、クリオグロブリン血症" },
      { jp: "結節性紅斑", en: "erythema nodosum", example: "She has tender nodules on bilateral shins consistent with erythema nodosum.", extra: "サルコイドーシス、IBD、ベーチェット、感染症、薬剤" },
      { jp: "壊疽性膿皮症", en: "pyoderma gangrenosum", example: "A rapidly enlarging ulcer with undermined borders suggests pyoderma gangrenosum.", extra: "IBD、RA、MDS。外傷で増悪(pathergy)" },
      { jp: "心膜摩擦音", en: "pericardial friction rub", example: "No pericardial friction rub is auscultated.", extra: "SLE、RA、感染性心膜炎。漿膜炎の聴診所見" },
      { jp: "仙腸関節炎", en: "sacroiliitis", example: "MRI shows bilateral sacroiliitis with bone marrow edema.", extra: "AS、SpA、PsA、反応性関節炎、IBD関連" },
      { jp: "付着部炎", en: "enthesitis", example: "He has tenderness at the Achilles insertion consistent with enthesitis.", extra: "SpA、PsA、反応性関節炎。腱・靱帯付着部の炎症" },
      { jp: "近位筋力低下", en: "proximal muscle weakness", example: "She has proximal muscle weakness with difficulty rising from a chair.", extra: "DM/PM、甲状腺機能異常、ステロイドミオパチー" },
      { jp: "嚥下障害", en: "dysphagia", example: "She reports progressive dysphagia for solids and liquids.", extra: "SSc（食道）、DM/PM（咽頭筋）、ベーチェット" },
      { jp: "腎クリーゼ", en: "scleroderma renal crisis", example: "The acute hypertension and rising creatinine are concerning for scleroderma renal crisis.", extra: "dcSSc、抗RNAポリメラーゼIII、ACE阻害薬で治療" },
    ],
  },
  // --- H-3. 検査・自己抗体 ---
  {
    id: "vocab-h3",
    title: "H-3. 検査・自己抗体",
    columns: ["日本語", "英語", "例文", "関連疾患・臨床的意義"],
    entries: [
      { jp: "抗核抗体", en: "ANA (antinuclear antibody)", example: "I would like to order an ANA as an initial screening test.", extra: "SLE(感度95%)、SSc、Sjögren's、DM/PM。スクリーニング用。特異度低い" },
      { jp: "抗ds-DNA抗体", en: "anti-dsDNA antibody", example: "Her anti-dsDNA antibody was elevated at 1:320.", extra: "SLE（高特異度）。活動性・ループス腎炎と相関。補体低下と連動" },
      { jp: "抗Smith抗体", en: "anti-Smith antibody", example: "Anti-Smith antibody was positive, which is highly specific for lupus.", extra: "SLE（最高特異度、感度30%）。陽性ならほぼ確定的" },
      { jp: "補体（C3, C4）", en: "complement C3 and C4", example: "Complement C3 and C4 levels were both decreased.", extra: "SLE活動性（消費↑で低下）。C4単独低下→クリオグロブリン、遺伝性補体欠損" },
      { jp: "リウマチ因子", en: "rheumatoid factor (RF)", example: "Rheumatoid factor was positive at 85 international units per milliliter.", extra: "RA（感度70-80%、特異度低い）。Sjögren's、HCV、感染性心内膜炎でも陽性" },
      { jp: "抗CCP抗体", en: "anti-CCP antibody", example: "Anti-CCP antibody was strongly positive, supporting the diagnosis of rheumatoid arthritis.", extra: "RA（特異度95%）。RF陰性RAでも陽性あり。早期診断・予後予測に有用" },
      { jp: "抗Ro/SSA抗体", en: "anti-Ro/SSA antibody", example: "Anti-Ro/SSA antibody was positive.", extra: "Sjögren's、SLE、新生児ループス（胎盤通過→CHB）。亜急性皮膚ループス" },
      { jp: "抗La/SSB抗体", en: "anti-La/SSB antibody", example: "Anti-La/SSB antibody was also positive.", extra: "Sjögren's（Ro/SSAと共陽性で高特異度）。SLE" },
      { jp: "抗RNP抗体", en: "anti-RNP antibody", example: "Anti-RNP antibody was positive at a high titer.", extra: "MCTD（高力価で診断的）。SLE（低力価）。オーバーラップ症候群" },
      { jp: "抗ヒストン抗体", en: "anti-histone antibody", example: "Anti-histone antibody was positive, consistent with drug-induced lupus.", extra: "薬剤性ループス（ヒドララジン、プロカインアミド、INH）。抗dsDNA通常陰性" },
      { jp: "抗Scl-70抗体", en: "anti-Scl-70 (anti-topoisomerase I) antibody", example: "Anti-Scl-70 antibody was positive.", extra: "dcSSc（ILD・広範囲皮膚硬化と関連）。抗セントロメアと相互排他的" },
      { jp: "抗セントロメア抗体", en: "anti-centromere antibody", example: "Anti-centromere antibody was positive.", extra: "lcSSc / CREST症候群（PAH・食道障害と関連）。PBC合併あり" },
      { jp: "抗RNA ポリメラーゼIII抗体", en: "anti-RNA polymerase III antibody", example: "We should check anti-RNA polymerase III antibody given the rapid skin progression.", extra: "dcSSc（腎クリーゼのリスク↑）。急速な皮膚硬化" },
      { jp: "抗Jo-1抗体", en: "anti-Jo-1 antibody", example: "Anti-Jo-1 antibody was positive, raising concern for antisynthetase syndrome.", extra: "抗合成酵素症候群（ILD + 筋炎 + mechanic's hands + 関節炎 + Raynaud's + 発熱）" },
      { jp: "抗MDA5抗体", en: "anti-MDA5 antibody", example: "Anti-MDA5 antibody was positive.", extra: "CADM（clinically amyopathic DM）。急速進行性ILDのリスク高い" },
      { jp: "抗Mi-2抗体", en: "anti-Mi-2 antibody", example: "Anti-Mi-2 antibody was positive.", extra: "DM（典型的皮膚筋炎、治療反応良好、悪性腫瘍リスク低い）" },
      { jp: "抗SRP抗体", en: "anti-SRP antibody", example: "Anti-SRP antibody was positive, suggesting immune-mediated necrotizing myopathy.", extra: "IMNM（免疫介在性壊死性ミオパチー）。重症筋炎、治療抵抗性" },
      { jp: "c-ANCA / 抗PR3抗体", en: "c-ANCA / anti-PR3 antibody", example: "c-ANCA with anti-PR3 antibody was positive.", extra: "GPA（感度90%活動期）。上下気道＋腎の三徴" },
      { jp: "p-ANCA / 抗MPO抗体", en: "p-ANCA / anti-MPO antibody", example: "p-ANCA with anti-MPO antibody was positive.", extra: "MPA、EGPA、一部GPA。腎限局型ANCA血管炎" },
      { jp: "抗GBM抗体", en: "anti-GBM antibody", example: "Anti-GBM antibody should be sent to rule out Goodpasture syndrome.", extra: "Goodpasture（肺腎症候群）。線状IgG沈着。ANCA二重陽性あり" },
      { jp: "抗リン脂質抗体", en: "antiphospholipid antibodies", example: "I would like to check antiphospholipid antibodies given the recurrent thrombosis.", extra: "APS（動静脈血栓＋習慣性流産）。SLE合併30-40%" },
      { jp: "ループスアンチコアグラント", en: "lupus anticoagulant", example: "Lupus anticoagulant was positive.", extra: "APS（最も血栓リスクが高い抗リン脂質抗体）。APTT延長するが出血ではなく血栓" },
      { jp: "抗カルジオリピン抗体", en: "anti-cardiolipin antibody", example: "Anti-cardiolipin antibody IgG was elevated.", extra: "APS。梅毒検査偽陽性の原因にもなる" },
      { jp: "抗β2GP1抗体", en: "anti-β2 glycoprotein I antibody", example: "Anti-β2 glycoprotein I antibody was positive.", extra: "APS（独立した血栓リスク因子）。3種陽性(triple positive)は最高リスク" },
      { jp: "CK / アルドラーゼ", en: "CPK / aldolase", example: "CPK was elevated at 5,200 units per liter with elevated aldolase.", extra: "DM/PM/IMNM（筋障害マーカー）。アルドラーゼはCK正常の筋炎でも上昇しうる" },
      { jp: "フェリチン", en: "ferritin", example: "Ferritin was markedly elevated at 15,000 nanograms per milliliter.", extra: "MAS/HLH（著明高値）、成人Still病（>10,000で示唆的）。鉄過剰、炎症" },
      { jp: "直接クームス試験", en: "direct Coombs test", example: "Direct Coombs test was positive, indicating autoimmune hemolytic anemia.", extra: "AIHA（SLE、CLL、薬剤性）。SLEの血液学的基準の一つ" },
      { jp: "腎生検", en: "renal biopsy", example: "Nephrology was consulted for renal biopsy to classify the lupus nephritis.", extra: "ループス腎炎のISN/RPS分類（Class I-VI）、ANCA血管炎（pauci-immune GN）、Goodpasture" },
      { jp: "皮膚生検", en: "skin biopsy", example: "A skin biopsy of the purpuric lesion showed leukocytoclastic vasculitis.", extra: "血管炎（白血球破砕性）、ループスバンドテスト、DM皮疹の確認" },
      { jp: "筋生検", en: "muscle biopsy", example: "Muscle biopsy showed perifascicular atrophy consistent with dermatomyositis.", extra: "DM（束周囲萎縮）、PM（CD8+ T細胞浸潤）、IMNM（壊死＋再生、炎症乏しい）" },
      { jp: "唾液腺生検", en: "salivary gland biopsy", example: "A minor salivary gland biopsy showed focal lymphocytic sialadenitis with a focus score of 3.", extra: "Sjögren's（focus score ≥1で陽性）。IgG4関連疾患との鑑別" },
      { jp: "シルマーテスト", en: "Schirmer's test", example: "Schirmer's test showed less than 5 millimeters of wetting in 5 minutes bilaterally.", extra: "Sjögren's（≤5mm/5minで陽性）。乾燥性角結膜炎の客観的評価" },
      { jp: "爪郭毛細血管鏡検査", en: "nailfold capillaroscopy", example: "Nailfold capillaroscopy showed enlarged capillary loops with areas of dropout.", extra: "SSc（巨大毛細血管＋脱落）、DM。Raynaud's の二次性vs原発性鑑別" },
    ],
  },
  // --- H-4. 治療薬 ---
  {
    id: "vocab-h4",
    title: "H-4. 治療薬",
    columns: ["日本語", "英語", "例文", "機序・適応・副作用"],
    entries: [
      { jp: "メトトレキサート", en: "methotrexate (MTX)", example: "She was started on methotrexate 15 milligrams weekly with folic acid supplementation.", extra: "葉酸代謝拮抗。RA第一選択DMARD。副作用: 肝障害、骨髄抑制、ILD、催奇形性。葉酸併用必須" },
      { jp: "ヒドロキシクロロキン", en: "hydroxychloroquine (HCQ)", example: "She is currently on hydroxychloroquine 200 milligrams twice daily.", extra: "免疫調節（TLR阻害）。SLE全例に推奨（フレア予防・生存改善）。副作用: 網膜毒性（年1回眼科検査）、QT延長" },
      { jp: "サラゾスルファピリジン", en: "sulfasalazine", example: "Sulfasalazine was added as a second DMARD.", extra: "5-ASA + スルファピリジン。RA（MTX不耐時）、SpA末梢関節。副作用: 消化器症状、肝障害、サルファアレルギー" },
      { jp: "レフルノミド", en: "leflunomide", example: "We switched to leflunomide after MTX intolerance.", extra: "ピリミジン合成阻害。RA（MTX代替）。副作用: 肝障害、下痢、催奇形性（半減期長い→コレスチラミン洗い出し）" },
      { jp: "プレドニゾン / プレドニゾロン", en: "prednisone / prednisolone", example: "She is on prednisone 10 milligrams daily, which we plan to taper.", extra: "糖質コルチコイド。広範な抗炎症・免疫抑制。副作用: 骨粗鬆症、糖尿病、感染症、AVN、副腎抑制。最少量・最短期間が原則" },
      { jp: "メチルプレドニゾロン（パルス）", en: "methylprednisolone (pulse therapy)", example: "We initiated methylprednisolone 1 gram IV daily for 3 days as pulse therapy.", extra: "超高用量ステロイド（500-1000mg/日×3日）。重症ループス腎炎、ANCA血管炎、重症筋炎の急性期。リンパ球アポトーシス誘導" },
      { jp: "シクロホスファミド", en: "cyclophosphamide", example: "Induction therapy with cyclophosphamide was initiated for class IV lupus nephritis.", extra: "アルキル化剤。重症ループス腎炎・ANCA血管炎の寛解導入。副作用: 出血性膀胱炎（メスナ併用）、不妊、骨髄抑制、悪性腫瘍リスク" },
      { jp: "アザチオプリン", en: "azathioprine", example: "She was transitioned to azathioprine for maintenance therapy.", extra: "プリン合成阻害。SLE・ANCA血管炎の維持療法。副作用: 骨髄抑制（TPMT検査推奨）、肝障害、膵炎。妊娠中使用可" },
      { jp: "ミコフェノール酸モフェチル", en: "mycophenolate mofetil (MMF)", example: "Mycophenolate mofetil 1 gram twice daily was started for lupus nephritis.", extra: "プリン合成阻害（IMPDH）。ループス腎炎（導入＋維持）、SSc-ILD。副作用: 消化器症状、骨髄抑制、催奇形性" },
      { jp: "タクロリムス", en: "tacrolimus", example: "Low-dose tacrolimus was added as part of a multitarget therapy regimen.", extra: "カルシニューリン阻害。ループス腎炎（multi-target療法）、DM/PM。副作用: 腎毒性、高血糖、振戦、高K" },
      { jp: "リツキシマブ", en: "rituximab", example: "Rituximab was administered for refractory ANCA-associated vasculitis.", extra: "抗CD20（B細胞除去）。ANCA血管炎（CYCと同等の導入）、難治性RA、SLE。副作用: infusion reaction、PML（稀）、低γグロブリン" },
      { jp: "ベリムマブ", en: "belimumab", example: "Belimumab was added to her lupus regimen given persistent serologic activity.", extra: "抗BLyS/BAFF。SLE（標準治療に上乗せ、フレア減少）。FDA承認のSLE専用生物製剤。副作用: 感染症、infusion reaction" },
      { jp: "アニフロルマブ", en: "anifrolumab", example: "Anifrolumab was initiated for moderate-to-severe SLE with skin involvement.", extra: "抗IFNAR1（I型IFN受容体阻害）。SLE（皮膚・関節症状に有効）。副作用: 帯状疱疹リスク↑、上気道感染" },
      { jp: "トシリズマブ", en: "tocilizumab", example: "Tocilizumab was started for refractory rheumatoid arthritis.", extra: "抗IL-6受容体。RA、GCA（ステロイド減量効果）、成人Still病。副作用: 感染症、消化管穿孔、脂質上昇。CRP抑制するため感染マスク注意" },
      { jp: "アバタセプト", en: "abatacept", example: "She was switched to abatacept after inadequate response to TNF inhibitors.", extra: "T細胞共刺激阻害（CTLA-4 Ig）。RA（抗CCP陽性で特に有効）。副作用: 感染症、infusion reaction。TNF阻害薬と併用しない" },
      { jp: "アダリムマブ", en: "adalimumab", example: "Adalimumab 40 milligrams subcutaneously every 2 weeks was prescribed.", extra: "抗TNF-αモノクローナル抗体（ヒト型）。RA、PsA、AS、IBD。副作用: 感染症（結核スクリーニング必須）、脱髄、ループス様症候群" },
      { jp: "エタネルセプト", en: "etanercept", example: "Etanercept was chosen as a first-line biologic for her rheumatoid arthritis.", extra: "TNF受容体融合蛋白。RA、PsA、AS。副作用: 注射部位反応、感染症。IBDには無効（アダリムマブと異なる）。GPA禁忌" },
      { jp: "セクキヌマブ", en: "secukinumab", example: "Secukinumab was initiated for psoriatic arthritis with axial involvement.", extra: "抗IL-17A。PsA、AS、乾癬。副作用: カンジダ症、IBD増悪リスク。軸性SpAにも有効" },
      { jp: "アプレミラスト", en: "apremilast", example: "Apremilast was started for mild psoriatic arthritis.", extra: "PDE4阻害（経口）。PsA、乾癬、ベーチェット口腔潰瘍。副作用: 下痢、悪心、体重減少、うつ。生物製剤前の選択肢" },
      { jp: "ニンテダニブ", en: "nintedanib", example: "Nintedanib was prescribed for progressive SSc-associated interstitial lung disease.", extra: "トリプルキナーゼ阻害（VEGFR/FGFR/PDGFR）。SSc-ILD（肺機能低下抑制）、IPF。副作用: 下痢（高頻度）、肝障害" },
      { jp: "コルヒチン", en: "colchicine", example: "Colchicine 0.6 milligrams twice daily was started for acute gout.", extra: "微小管重合阻害（好中球遊走抑制）。痛風発作、FMF、心膜炎。副作用: 下痢、骨髄抑制（過量）。腎機能で用量調整" },
      { jp: "アロプリノール", en: "allopurinol", example: "Allopurinol 100 milligrams daily was initiated for urate-lowering therapy.", extra: "キサンチンオキシダーゼ阻害（尿酸生成抑制）。痛風（尿酸降下）。副作用: DRESS/SJS（HLA-B*5801検査推奨、特にアジア人）、肝障害" },
      { jp: "フェブキソスタット", en: "febuxostat", example: "He was switched to febuxostat due to allopurinol hypersensitivity.", extra: "選択的XO阻害。痛風（アロプリノール不耐時）。副作用: 心血管リスク（CARES trial）、肝障害。腎機能での用量調整不要" },
    ],
  },
];

// ---------------------------------------------------------------------------
// 6. Template Data — from 00_テンプレート.md
// ---------------------------------------------------------------------------

export const templateData: TemplateBlock[] = [
  {
    id: "tpl-patient-info",
    title: "1. Patient Information",
    sectionTitle: "Patient Information",
    blocks: [
      {
        type: "note",
        label: "患者情報: 年齢・性別・(リスク)・主訴・期間を1文で",
        content: "\"Mr./Ms. ___ is a/an (age)-year-old (man/woman) with (risk factors), who presented with a (duration)-history of (chief complaint).\"\n- リスクファクターなし → with... 省略\n- 紹介 → \"who was referred to our department for further evaluation and treatment of...\"\n- 搬送 → \"who was transferred to...\"",
      },
      {
        type: "example",
        label: "例文（膠原病）",
        content: "\"Ms. Smith is a 28-year-old African American woman with no significant medical history, who presented with a 3-week history of progressive bilateral symmetric small joint pain associated with fatigue and a photosensitive facial rash.\"\n\n\"Mr. Jones is a 58-year-old man with a history of chronic sinusitis, who was referred to our department for further evaluation of hemoptysis and elevated creatinine.\"",
      },
      {
        type: "info",
        label: "解説: One-linerとSemantic Qualifiers",
        content: "One-linerではchief complaintを semantic qualifiers（臨床的意義を与える医学用語）で修飾し、聴衆にどの鑑別疾患を考えているか示唆する。\n- \"bilateral symmetric small joint pain\" → RA/SLE方向\n- \"photosensitive facial rash\" → SLE方向\n\nこの1文で聴衆の頭に鑑別リストが浮かぶのが理想。",
      },
    ],
  },
  {
    id: "tpl-hpi",
    title: "2. HPI（現病歴）",
    sectionTitle: "HPI",
    blocks: [
      {
        type: "note",
        label: "発症の起点",
        content: "\"The patient had been in her/his usual state of health until (　) prior to the presentation, when she/he noticed (　).\"",
      },
      {
        type: "note",
        label: "増悪・緩和因子",
        content: "\"The (symptom) is aggravated/alleviated by (　).\"",
      },
      {
        type: "note",
        label: "性質・部位・重症度・期間",
        content: "Quality: \"The patient describes the pain as (　).\"\nRegion: \"The pain is located in (　).\" 放散 → \"...and moves to (　).\"\nSeverity: \"...rates the pain as (　) out of 10.\" 変化 → \"initially (　), progressed to (　).\"\nTime: \"The pain lasted for (　).\"",
      },
      {
        type: "example",
        label: "例文: 膠原病でよく使うHPI表現",
        content: "Morning stiffness:\n\"She reports morning stiffness lasting approximately (　) hours, which improves with activity.\"\n\n関節の分布:\n\"The joint symptoms are bilateral and symmetric, predominantly affecting the (MCP/PIP/wrist) joints.\"\n\"The joint involvement has been migratory/additive over the past (　) weeks.\"\n\n関節外症状:\n\"She also noticed (a rash on her cheeks / oral ulcers / hair thinning / dry eyes and dry mouth) approximately (　) weeks ago.\"\n\nRaynaud's:\n\"She reports episodic color changes in her fingers, turning white then blue then red, triggered by cold exposure.\"\n\n機能障害:\n\"She has difficulty with (buttoning clothes / opening jars / gripping objects / climbing stairs).\"",
      },
      {
        type: "info",
        label: "解説: HPIの構築ルール",
        content: "- History Takingの 50%以上（最低1/3以上）をHPIに割く\n- OPQRSTの項目順に並べない → 時系列 で述べる（発症前→発症時→発症後）\n- \"Draw the picture of the patient's story\" を意識\n- 原稿暗記ではなく要点メモから自分の言葉で話す\n- 膠原病では特に重要: morning stiffnessの持続時間、関節分布（symmetric/asymmetric, small/large, mono/oligo/poly）、関節外症状の出現順序",
      },
    ],
  },
  {
    id: "tpl-pmh",
    title: "3–6. PMH / PSH / Meds / Allergies",
    sectionTitle: "PMH / PSH / Meds / Allergies",
    blocks: [
      {
        type: "note",
        label: "既往歴（PMH）",
        content: "\"Her/His past medical history is unremarkable.\"\n\"...is significant for (　) years of (disease).\"",
      },
      {
        type: "note",
        label: "手術歴（PSH）",
        content: "\"The patient underwent (　) at the age of (　).\"",
      },
      {
        type: "note",
        label: "内服薬（Meds）",
        content: "\"She/He is currently on (　) mg per day of (drug name).\"\n\"The patient takes no medications.\"",
      },
      {
        type: "note",
        label: "アレルギー",
        content: "\"NKDA.\" / \"...known allergies to (　), which caused (　).\"",
      },
      {
        type: "info",
        label: "解説: 薬剤・バイタル・検査は具体的に",
        content: "薬剤は具体名で:\n✗ \"on immunosuppressants\" → ✓ \"on methotrexate 15 mg weekly and folic acid 1 mg daily\"\n\n膠原病頻出: MTX, HCQ, sulfasalazine, prednisone（用量必須）, mycophenolate, azathioprine, cyclophosphamide, adalimumab, etanercept, rituximab, tocilizumab, belimumab\n\nバイタルも省略NG: \"Vital signs are within normal limits\" ではなく各項目の数値を述べる。\n\n検査も同様: \"Blood tests\" → CBC, CMP, ESR, CRP のように項目名で。",
      },
    ],
  },
  {
    id: "tpl-fh-sh-ros",
    title: "7–9. FH / SH / ROS",
    sectionTitle: "FH / SH / ROS",
    blocks: [
      {
        type: "note",
        label: "家族歴（FH）",
        content: "\"Her/His family history is significant for (disease) in her/his (family member).\"\n\"...is unremarkable.\"",
      },
      {
        type: "note",
        label: "社会歴（SH）: 婚姻→職業→飲酒→喫煙の順",
        content: "\"The patient is married and lives with her/his (husband/wife).\"\n\"The patient works as a (　).\"\n\"The patient does not drink alcohol.\" / \"...drinks (　) on a social basis.\"\n\"The patient has a (　) pack-year history of smoking.\" / \"...does not smoke.\"",
      },
      {
        type: "note",
        label: "システムレビュー（ROS）",
        content: "\"Review of systems is negative except as mentioned in the HPI.\"",
      },
      {
        type: "info",
        label: "解説: 膠原病での家族歴とROS",
        content: "家族歴: 自己免疫疾患の家族歴は鑑別に直結。\n例: \"Her family history is significant for SLE in her maternal aunt and hypothyroidism in her mother.\"\n\nROS — 膠原病で漏れなく確認すべき項目:\n- Constitutional: fever, weight loss, fatigue, night sweats\n- Skin: rash, photosensitivity, oral/nasal ulcers, hair loss, Raynaud's, skin tightening\n- Eyes: dry eyes, red eyes, visual changes (uveitis/scleritis)\n- Oral: dry mouth, oral ulcers\n- Pulmonary: dyspnea, cough, hemoptysis, pleuritic chest pain\n- Cardiac: pericardial chest pain, dyspnea on exertion\n- GI: dysphagia (scleroderma), abdominal pain\n- Renal: foamy urine, hematuria, edema\n- MSK: joint pain/swelling, morning stiffness, back pain, muscle weakness\n- Neuro: headache, seizures, numbness/tingling, cognitive changes",
      },
    ],
  },
  {
    id: "tpl-summary",
    title: "11. Summary",
    sectionTitle: "Summary",
    blocks: [
      {
        type: "note",
        label: "定型文: Patient Infoに鑑別上重要な所見を統合した1文",
        content: "\"In summary, the patient is a/an (age)-year-old (man/woman) with (risk factors), who presented with a (duration)-history of (CC + significant HPI), associated with (pertinent positives).\"",
      },
      {
        type: "example",
        label: "例文（膠原病）",
        content: "\"In summary, this is a 28-year-old African American woman with a family history of SLE, who presented with a 3-week history of progressive, symmetric, inflammatory small joint pain with prolonged morning stiffness, associated with a photosensitive malar rash sparing the nasolabial folds, painless oral ulcers, non-scarring alopecia, and low-grade fevers, with physical findings of bilateral MCP and PIP synovitis and borderline hypertension.\"",
      },
      {
        type: "info",
        label: "解説: Summaryの構築法",
        content: "- Patient Informationとの違いは「鑑別に重要な項目を加えている」こと\n- 症例プレゼン作成時は Summaryから逆算 して構築を始めるのが推奨\n- Semantic qualifiersを効かせて、この1文で最も可能性の高い鑑別が浮かぶように\n- Pertinent positives を身体所見も含めて統合する",
      },
    ],
  },
  {
    id: "tpl-ddx-plan",
    title: "12. DDx & Plan",
    sectionTitle: "DDx & Plan",
    blocks: [
      {
        type: "note",
        label: "定型文: 鑑別診断",
        content: "\"My top differential at this time would be (#1), because...\"\n\"(#2) is a diagnosis we would need to consider, because...\"\n\"(#3) is a diagnosis we would need to exclude, because...\"",
      },
      {
        type: "note",
        label: "定型文: 検査・治療計画",
        content: "\"I would like to order (　), because...\"",
      },
      {
        type: "info",
        label: "解説: 膠原病で頻用する検査オーダー",
        content: "自己抗体: ANA, anti-dsDNA, anti-Smith, C3/C4, RF, anti-CCP, ANCA (PR3/MPO), CPK/aldolase, anti-Ro/SSA, anti-La/SSB\n\n基本検査: CBC with differential, CMP, ESR, CRP\n\n尿検査: urinalysis with microscopy（腎障害評価）\n\n画像: X-rays of bilateral hands and wrists / chest X-ray（胸水・ILD評価）\n\n判断基準: \"Is this information necessary for clinical decision making? If so, how?\" を自問する。",
      },
    ],
  },
  {
    id: "tpl-grammar",
    title: "文法の注意点",
    sectionTitle: "文法の注意点",
    blocks: [
      {
        type: "warning",
        label: "文法の注意点",
        content: "- ハイフン形容詞は単数形: ✓ 48-year-old ✗ 48-years-old\n- Vital signs は複数形: \"vital signs are within normal limits\"\n- 単位は1以外で複数形: 67 kilograms, 2 hours\n- 身体診察は現在形: ✓ \"The abdomen is soft\" ✗ \"was soft\"（変化した印象を与える）\n- WNL は数値のみ: 画像には使えない → \"unremarkable for pathology\"",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 7. PE Template Data — from 02_身体診察_膠原病.md
// ---------------------------------------------------------------------------

export const peTemplateData: { section: string; expressions: string[]; rheumatologyAdditions?: string[] }[] = [
  {
    section: "Vital Signs",
    expressions: [
      "\"Her/his temperature is (　) degrees Celsius.\"",
      "\"Her/his blood pressure is (　) over (　) millimeters of mercury.\"",
      "\"Her/his heart rate is (　) per minute with a sinus rhythm.\"",
      "\"Her/his respiratory rate is (　) per minute.\"",
      "\"Her/his oxygen saturation is (　) percent on room air.\"",
    ],
  },
  {
    section: "General Appearance (GA)",
    expressions: [
      "\"The patient is in no acute distress (NAD).\"",
      "\"The patient is in acute distress.\"",
    ],
  },
  {
    section: "Mental Status",
    expressions: [
      "\"She/He is alert, awake, and oriented times four (AAOx4).\"",
    ],
  },
  {
    section: "HEENT",
    expressions: [
      "\"The head is normocephalic and atraumatic (NC/AT).\"",
      "\"The extraocular muscles are intact (EOMI) bilaterally.\"",
      "\"The pupils are equal and round, react to light and accommodation (PERRLA) bilaterally.\"",
      "\"No conjunctival pallor.\"",
      "\"No conjunctival icterus.\"",
      "\"The mucous membranes are moist (MMM).\"",
      "\"The neck is supple.\"",
      "\"No jugular venous distention (JVD).\"",
      "\"No cervical lymphadenopathy (LAD).\"",
      "\"No carotid bruits.\"",
    ],
    rheumatologyAdditions: [
      "\"Malar rash present/absent, sparing the nasolabial folds.\"",
      "\"No oral or nasal ulcers.\" / \"Painless ulcers noted on the hard palate.\"",
      "\"No alopecia.\" / \"Diffuse non-scarring alopecia noted.\"",
      "\"No scleritis or episcleritis.\"",
      "\"No parotid gland enlargement.\"",
      "\"No nasal crusting or septal perforation.\"",
    ],
  },
  {
    section: "Cardiovascular (CV)",
    expressions: [
      "\"Regular rate and rhythm (RRR).\"",
      "\"Normal S1 and S2.\"",
      "\"No murmurs, rubs, or gallops (m/r/g).\"",
      "\"Point of maximal intensity (PMI) is not displaced.\"",
      "\"Capillary refill time (CRT) is less than 2 seconds.\"",
      "\"No hepatojugular reflux (HJR).\"",
    ],
    rheumatologyAdditions: [
      "\"No pericardial friction rub.\" (serositis評価)",
    ],
  },
  {
    section: "Pulmonary (Chest)",
    expressions: [
      "\"Clear to auscultation bilaterally (CTAB).\"",
      "\"No wheezes, rhonchi, or crackles (w/r/c).\"",
      "\"No egophony.\"",
      "\"Resonant to percussion.\"",
    ],
    rheumatologyAdditions: [
      "\"No bibasilar crackles.\" (ILD評価)",
      "\"No decreased breath sounds at the bases.\" (胸水評価)",
      "\"No pleural friction rub.\"",
    ],
  },
  {
    section: "Abdomen",
    expressions: [
      "\"Soft, non-distended, non-tender.\"",
      "\"No rebound or guarding.\"",
      "\"Positive bowel sounds in all four quadrants.\"",
      "\"No hepatosplenomegaly (HSM).\"",
      "\"No costovertebral angle (CVA) tenderness.\"",
    ],
  },
  {
    section: "Musculoskeletal（★膠原病の要）",
    expressions: [
      "\"Bilateral symmetric swelling and tenderness of (MCP 2-4 / PIP 2-3 / wrists / knees / ankles).\"",
      "\"Positive squeeze test of bilateral MCP joints.\"",
      "\"Warm joints on palpation.\"",
      "\"No DIP joint involvement.\"",
      "\"No joint deformity.\"",
      "\"No swan neck or boutonnière deformity.\"",
      "\"No ulnar deviation.\"",
      "\"Full range of motion in all joints.\" / \"Limited range of motion in (　) due to (pain/swelling).\"",
      "\"No dactylitis (sausage digits).\"",
      "\"No sclerodactyly.\"",
      "\"No Heberden's or Bouchard's nodes.\"",
      "\"No calcinosis.\"",
      "\"No digital ulcers.\"",
      "\"No subcutaneous nodules.\" / \"Rheumatoid nodules present at (location).\"",
      "\"No Gottron's papules.\"",
      "\"No heliotrope rash.\"",
      "\"No mechanic's hands.\"",
      "\"Proximal muscle strength is 5/5 in bilateral upper and lower extremities.\"",
      "\"Manual muscle test (MMT): 5 out of 5 in all extremities.\"",
    ],
  },
  {
    section: "Skin",
    expressions: [
      "\"Intact, no lesions.\"",
      "\"No palpable purpura.\"",
      "\"No livedo reticularis.\"",
      "\"No psoriatic plaques.\"",
      "\"No nail pitting.\"",
      "\"No skin thickening or tightening.\"",
      "\"No erythema nodosum.\"",
      "\"No pyoderma gangrenosum.\"",
    ],
  },
  {
    section: "Neurological (Neuro)",
    expressions: [
      "\"Cranial Nerve II through XII are intact.\"",
      "\"No focal deficit.\"",
      "\"Deep tendon reflexes: symmetric 2+ in all extremities.\"",
      "\"Sensation: intact to pinprick and soft touch.\"",
    ],
    rheumatologyAdditions: [
      "\"No mononeuritis multiplex.\" (血管炎評価)",
      "\"No peripheral neuropathy.\"",
    ],
  },
  {
    section: "Extremities (EXT)",
    expressions: [
      "\"No cyanosis, clubbing, or edema.\"",
      "\"Normal range of motion (ROM).\"",
    ],
  },
];
