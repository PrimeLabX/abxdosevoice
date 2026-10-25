// data.js
const antibioticsData = [
  {
    "drug_id": "pcg",
    "drug_name": "ベンジルペニシリン",
    "category": "ペニシリン系",
    "aliases": ["ペニシリンG", "PCG"],
    "loading_dose": "通常量（200万〜400万IU）",
    "hd_dose": "50万〜200万IU / 6時間ごと ＋透析後に50万IU追加",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "200万〜400万IU", "interval": "4時間ごと", "notes": "通常量" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "200万〜400万IU", "interval": "4時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 50, "dose": "100万〜200万IU", "interval": "4時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "100万IU", "interval": "8時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "abpc",
    "drug_name": "アンピシリン",
    "category": "ペニシリン系",
    "aliases": ["ビクシリン", "ABPC"],
    "loading_dose": "通常量（1〜2g）",
    "hd_dose": "1〜2g / 12時間ごと（透析日は透析後に投与）",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "1〜2g", "interval": "4〜6時間ごと", "notes": "通常量" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "1〜2g", "interval": "4〜6時間ごと", "notes": "" },
      { "min_ccr": 30, "max_ccr": 50, "dose": "1〜2g", "interval": "6〜8時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "1〜2g", "interval": "8〜12時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "1〜2g", "interval": "12時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "pipc",
    "drug_name": "ピペラシリン",
    "category": "ペニシリン系",
    "aliases": ["ペントシリン", "PIPC"],
    "loading_dose": "通常量（2〜4g）",
    "hd_dose": "2g / 8時間ごと ＋透析後に1g追加",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "2〜4g", "interval": "6時間ごと", "notes": "緑膿菌重症感染では4g/6h" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "3〜4g", "interval": "4〜6時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 50, "dose": "3〜4g", "interval": "6〜8時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "3〜4g", "interval": "8時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "abpc_sbt",
    "drug_name": "アンピシリンスルバクタム",
    "category": "ペニシリン系",
    "aliases": ["ユナシン", "スルバシリン", "ABPC/SBT", "ABPC-SBT"],
    "loading_dose": "通常量（1.5〜3g）",
    "hd_dose": "1.5〜3g / 24時間ごと（透析日は透析後に投与）",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "1.5〜3g", "interval": "6時間ごと", "notes": "通常量" },
      { "min_ccr": 30, "max_ccr": 80, "dose": "1.5〜3g", "interval": "6時間ごと", "notes": "" },
      { "min_ccr": 15, "max_ccr": 30, "dose": "1.5g", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 15, "dose": "1.5g", "interval": "24時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "pipc_taz",
    "drug_name": "ピペラシリンタゾバクタム",
    "category": "ペニシリン系",
    "aliases": ["ゾシン", "タゾピペ", "PIPC/TAZ", "PIPC-TAZ"],
    "loading_dose": "通常量（4.5g）",
    "hd_dose": "2.25g / 8〜12時間ごと ＋透析後に0.75g追加",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "4.5g", "interval": "6〜8時間ごと", "notes": "緑膿菌肺炎・重症例は4.5g/6h" },
      { "min_ccr": 40, "max_ccr": 80, "dose": "4.5g", "interval": "6時間ごと", "notes": "" },
      { "min_ccr": 20, "max_ccr": 40, "dose": "2.25g", "interval": "6時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 20, "dose": "2.25g", "interval": "8時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "ampc",
    "drug_name": "アモキシシリン",
    "category": "ペニシリン系",
    "aliases": ["サワシリン", "パセトシン", "AMPC"],
    "loading_dose": "通常量（500mg）",
    "hd_dose": "500mg / 1日1回（透析日は透析後に内服）",
    "dosing_guidelines": [
      { "min_ccr": 30, "max_ccr": 999, "dose": "500mg", "interval": "1日3回", "notes": "調節不要" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "500mg", "interval": "1日2回", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "500mg", "interval": "1日1回", "notes": "" }
    ]
  },
  {
    "drug_id": "ampc_cva",
    "drug_name": "アモキシシリンクラブラン酸",
    "category": "ペニシリン系",
    "aliases": ["オーグメンチン", "クラバモックス", "AMPC/CVA", "AMPC-CVA"],
    "loading_dose": "AMPC/CVA (375 mg) 1錠 + AMPC 250 mg 1 cap 1日3回",
    "hd_dose": "AMPC/CVA(375mg) 1錠 ＋ AMPC 250mg 1cap / 1日1回（透析日は透析後）",
    "dosing_guidelines": [
      { "min_ccr": 30, "max_ccr": 999, "dose": "AMPC/CVA(375mg) 1錠 ＋ AMPC 250mg 1cap", "interval": "1日3回", "notes": "調節不要（オグサワ療法）" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "AMPC/CVA(375mg) 1錠 ＋ AMPC 250mg 1cap", "interval": "1日2回", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "AMPC/CVA(375mg) 1錠 ＋ AMPC 250mg 1cap", "interval": "1日1回", "notes": "" }
    ]
  },
  {
    "drug_id": "cez",
    "drug_name": "セファゾリン",
    "category": "セフェム系",
    "aliases": ["セファメジン", "CEZ"],
    "loading_dose": "通常量（1〜2g）",
    "hd_dose": "0.5〜1g / 24時間ごと ＋透析後に1g追加",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "1〜2g", "interval": "8時間ごと", "notes": "" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "1〜2g", "interval": "8時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 50, "dose": "0.5〜2g", "interval": "8〜12時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "0.5〜1g", "interval": "24時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "cmz",
    "drug_name": "セフメタゾール",
    "category": "セフェム系",
    "aliases": ["セフメタゾン", "CMZ"],
    "loading_dose": "通常量（1〜2g）",
    "hd_dose": "透析後に1〜2g / 48時間ごと",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "1〜2g", "interval": "6〜12時間ごと", "notes": "通常2g/12hまたは1g/6h" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "1〜2g", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 50, "dose": "1〜2g", "interval": "24時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "1〜2g", "interval": "48時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "ctrx",
    "drug_name": "セフトリアキソン",
    "category": "セフェム系",
    "aliases": ["ロセフィン", "CTRX"],
    "loading_dose": "通常量（1〜2g）",
    "hd_dose": "1〜2g / 24時間ごと（原則調節不要）",
    "dosing_guidelines": [
      { "min_ccr": 0, "max_ccr": 999, "dose": "1〜2g", "interval": "24時間ごと", "notes": "原則調節不要（髄膜炎は2g/12h）。高度腎不全や透析患者で脳症予防のため減量考慮" }
    ]
  },
  {
    "drug_id": "caz",
    "drug_name": "セフタジジム",
    "category": "セフェム系",
    "aliases": ["モダシン", "CAZ"],
    "loading_dose": "通常量（1〜2g）",
    "hd_dose": "1g / 24時間ごと ＋透析後に1g追加",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "1〜2g", "interval": "8時間ごと", "notes": "" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "1〜2g", "interval": "8〜12時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 50, "dose": "1g", "interval": "12〜24時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "1g", "interval": "24時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "cfpm",
    "drug_name": "セフェピム",
    "category": "セフェム系",
    "aliases": ["マキシピーム", "CFPM"],
    "loading_dose": "通常量（1〜2g）",
    "hd_dose": "0.5g / 24時間ごと ＋透析後に1g追加",
    "dosing_guidelines": [
      { "min_ccr": 60, "max_ccr": 999, "dose": "1〜2g", "interval": "8〜12時間ごと", "notes": "多剤耐性菌は2g/8h" },
      { "min_ccr": 30, "max_ccr": 60, "dose": "1〜2g", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "1〜2g", "interval": "24時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "0.5〜1g", "interval": "24時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "cfdc",
    "drug_name": "セフィデロコル",
    "category": "セフェム系",
    "aliases": ["フェトロージャ", "CFDC"],
    "loading_dose": "通常量（2g）",
    "hd_dose": "0.75g / 12時間ごと（3時間点滴）",
    "dosing_guidelines": [
      { "min_ccr": 120, "max_ccr": 999, "dose": "2g", "interval": "6時間ごと", "notes": "腎機能亢進患者（3時間点滴）" },
      { "min_ccr": 60, "max_ccr": 120, "dose": "2g", "interval": "8時間ごと", "notes": "通常量（3時間点滴）" },
      { "min_ccr": 30, "max_ccr": 60, "dose": "1.5g", "interval": "8時間ごと", "notes": "3時間点滴" },
      { "min_ccr": 15, "max_ccr": 30, "dose": "1g", "interval": "8時間ごと", "notes": "3時間点滴" },
      { "min_ccr": 0, "max_ccr": 15, "dose": "0.75g", "interval": "12時間ごと", "notes": "3時間点滴" }
    ]
  },
  {
    "drug_id": "ctlz_taz",
    "drug_name": "セフトロザンタゾバクタム",
    "category": "セフェム系",
    "aliases": ["ザルビデ", "CTLZ/TAZ", "CTLZ-TAZ"],
    "loading_dose": "初回ローディング（HD患者のみ: 0.75g / 肺炎・敗血症 2.25g）",
    "hd_dose": "初回0.75g（肺炎2.25g）ローディング後、以降0.15g（肺炎0.45g）/ 8時間ごと",
    "dosing_guidelines": [
      { "min_ccr": 50, "max_ccr": 999, "dose": "1.5g", "interval": "8時間ごと", "notes": "肺炎・敗血症は3g/8h" },
      { "min_ccr": 30, "max_ccr": 50, "dose": "0.75g", "interval": "8時間ごと", "notes": "肺炎・敗血症は1.5g/8h" },
      { "min_ccr": 15, "max_ccr": 30, "dose": "0.37g", "interval": "8時間ごと", "notes": "肺炎・敗血症は0.75g/8h" },
      { "min_ccr": 0, "max_ccr": 15, "dose": "不明（専門医相談）", "interval": "-", "notes": "透析用量を使用" }
    ]
  },
  {
    "drug_id": "caz_avi",
    "drug_name": "セフタジジムアビバクタム",
    "category": "セフェム系",
    "aliases": ["ザビセフタ", "CAZ/AVI", "CAZ-AVI"],
    "loading_dose": "通常量（2.5g）",
    "hd_dose": "0.9375g / 48時間ごと（2時間点滴）",
    "dosing_guidelines": [
      { "min_ccr": 50, "max_ccr": 999, "dose": "2.5g", "interval": "8時間ごと", "notes": "2時間かけて点滴" },
      { "min_ccr": 31, "max_ccr": 50, "dose": "1.25g", "interval": "8時間ごと", "notes": "2時間かけて点滴" },
      { "min_ccr": 16, "max_ccr": 31, "dose": "0.9375g", "interval": "12時間ごと", "notes": "2時間かけて点滴" },
      { "min_ccr": 6, "max_ccr": 16, "dose": "0.9375g", "interval": "24時間ごと", "notes": "2時間かけて点滴" },
      { "min_ccr": 0, "max_ccr": 6, "dose": "0.9375g", "interval": "48時間ごと", "notes": "透析用量に準ずる" }
    ]
  },
  {
    "drug_id": "cex",
    "drug_name": "セファレキシン",
    "category": "セフェム系",
    "aliases": ["ケフレックス", "CEX"],
    "loading_dose": "通常量（250〜500mg）",
    "hd_dose": "250mg 2カプセル / 1日1回（透析日は透析後に内服）",
    "dosing_guidelines": [
      { "min_ccr": 30, "max_ccr": 999, "dose": "250〜500mg", "interval": "1日3〜4回", "notes": "調節不要" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "250mg 2カプセル", "interval": "1日2回", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "250mg 2カプセル", "interval": "1日1回", "notes": "" }
    ]
  },
  {
    "drug_id": "azt",
    "drug_name": "アズトレオナム",
    "category": "モノバクタム系",
    "aliases": ["アザクタム", "AZT"],
    "loading_dose": "通常量（1〜2g）",
    "hd_dose": "0.5g / 8時間ごと ＋透析後に0.5g追加",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "1〜2g", "interval": "8時間ごと", "notes": "" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "1〜2g", "interval": "8時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 50, "dose": "1g", "interval": "8時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "0.5g", "interval": "8時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "mepm",
    "drug_name": "メロペネム",
    "category": "カルバペネム系",
    "aliases": ["メロペン", "MEPM"],
    "loading_dose": "通常量（1g）",
    "hd_dose": "0.5g / 24時間ごと ＋透析後に0.5g追加",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "1g", "interval": "8時間ごと", "notes": "耐性菌・髄膜炎は2g/8h" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "1g", "interval": "8時間ごと", "notes": "中枢神経系感染では2g/8h" },
      { "min_ccr": 25, "max_ccr": 50, "dose": "1g", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 25, "dose": "0.5g", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "0.5g", "interval": "24時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "ipm_cs_rel",
    "drug_name": "イミペネムシラスタチンレレバクタム",
    "category": "カルバペネム系",
    "aliases": ["レカルブリオ", "IPM/CS/REL", "IPM-CS-REL"],
    "loading_dose": "通常量（1.25g）",
    "hd_dose": "500mg / 6時間ごと",
    "dosing_guidelines": [
      { "min_ccr": 89, "max_ccr": 999, "dose": "1.25g", "interval": "6時間ごと", "notes": "" },
      { "min_ccr": 60, "max_ccr": 89, "dose": "1g", "interval": "6時間ごと", "notes": "" },
      { "min_ccr": 30, "max_ccr": 59, "dose": "0.75g", "interval": "6時間ごと", "notes": "" },
      { "min_ccr": 15, "max_ccr": 29, "dose": "0.5g", "interval": "6時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 15, "dose": "推奨されず", "interval": "-", "notes": "48時間以内に透析導入されない場合は非推奨" }
    ]
  },
  {
    "drug_id": "gm",
    "drug_name": "ゲンタマイシン",
    "category": "アミノグリコシド系",
    "aliases": ["ゲンタシン", "GM"],
    "loading_dose": "通常量（1日1回法 5mg/kg等、理想体重使用）",
    "hd_dose": "1.25mg/kg / 48時間ごと ＋透析後に1mg/kg追加",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "5mg/kg（1日1回法）または 1〜2mg/kg（複数回法）", "interval": "24時間ごと（複数回法は8時間ごと）", "notes": "理想体重を使用。TDM必須" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "2.5mg/kg / 24h または 0.5〜1mg/kg / 12h", "interval": "24時間ごと（0.5〜1mg/kgは12hごと）", "notes": "TDM実施" },
      { "min_ccr": 10, "max_ccr": 50, "dose": "2.5mg/kg / 48h または 0.5〜1mg/kg / 24h", "interval": "48時間ごと（0.5〜1mg/kgは24hごと）", "notes": "TDM実施" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "1.25mg/kg", "interval": "48時間ごと", "notes": "TDM実施" }
    ]
  },
  {
    "drug_id": "amk",
    "drug_name": "アミカシン",
    "category": "アミノグリコシド系",
    "aliases": ["AMK"],
    "loading_dose": "通常量（15mg/kg 1日1回法または7.5mg/kg、理想体重使用）",
    "hd_dose": "2mg/kg / 48〜72時間ごと ＋透析後に2.5mg/kg追加",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "15mg/kg（1日1回法）または 7.5mg/kg（複数回法）", "interval": "24時間ごと（複数回法は12時間ごと）", "notes": "理想体重を使用。TDM必須" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "7.5mg/kg", "interval": "12時間ごと", "notes": "TDM実施" },
      { "min_ccr": 10, "max_ccr": 50, "dose": "7.5mg/kg", "interval": "24時間ごと", "notes": "TDM実施" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "7.5mg/kg", "interval": "48時間ごと", "notes": "TDM実施" }
    ]
  },
  {
    "drug_id": "cpfx",
    "drug_name": "シプロフロキサシン",
    "category": "ニューキノロン系",
    "aliases": ["シプロキサン", "CPFX"],
    "loading_dose": "通常量（400mg）",
    "hd_dose": "点滴200〜400mg / 24時間ごと（透析後投与）",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "400mg", "interval": "8時間ごと", "notes": "最大1,200mg/日" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "200〜400mg", "interval": "8〜12時間ごと", "notes": "" },
      { "min_ccr": 30, "max_ccr": 50, "dose": "200〜400mg", "interval": "8〜12時間ごと", "notes": "" },
      { "min_ccr": 5, "max_ccr": 30, "dose": "200〜400mg", "interval": "18〜24時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 5, "dose": "200〜400mg", "interval": "24時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "lvfx",
    "drug_name": "レボフロキサシン",
    "category": "ニューキノロン系",
    "aliases": ["クラビット", "LVFX"],
    "loading_dose": "初回500mg（腎機能障害時でも初回は必ず500mgを投与）",
    "hd_dose": "250mg / 48時間ごと（透析日は透析後に投与）",
    "dosing_guidelines": [
      { "min_ccr": 50, "max_ccr": 999, "dose": "500mg", "interval": "24時間ごと", "notes": "調節不要" },
      { "min_ccr": 20, "max_ccr": 50, "dose": "初回500mg、以降250mg", "interval": "24時間ごと", "notes": "初回ローディング必須" },
      { "min_ccr": 0, "max_ccr": 20, "dose": "初回500mg、以降250mg", "interval": "48時間ごと", "notes": "初回ローディング必須" }
    ]
  },
  {
    "drug_id": "vcm",
    "drug_name": "バンコマイシン",
    "category": "抗MRSA薬",
    "aliases": ["塩酸バンコマイシン", "VCM"],
    "loading_dose": "初回負荷量 20〜35mg/kg(実測体重)（上限3g/回）",
    "hd_dose": "初回負荷量投与後、透析後に7.5〜10mg/kg追加投与",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "15〜20mg/kg(実測体重)", "interval": "8〜12時間ごと", "notes": "初回負荷量20〜35mg/kg投与後。AUC/MIC 400〜600目標" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "15〜20mg/kg", "interval": "12時間ごと", "notes": "初回負荷量後。TDM実施" },
      { "min_ccr": 20, "max_ccr": 50, "dose": "15〜20mg/kg", "interval": "24時間ごと", "notes": "初回負荷量後。TDM実施" },
      { "min_ccr": 0, "max_ccr": 20, "dose": "15〜20mg/kg", "interval": "48時間ごと", "notes": "初回負荷量後。TDMおよび血中濃度測定を行い追加投与設定" }
    ]
  },
  {
    "drug_id": "lzd",
    "drug_name": "リネゾリド",
    "category": "抗MRSA薬",
    "aliases": ["ザイボックス", "LZD"],
    "loading_dose": "通常量（600mg）",
    "hd_dose": "600mg / 12時間ごと（調節不要）",
    "dosing_guidelines": [
      { "min_ccr": 0, "max_ccr": 999, "dose": "600mg", "interval": "12時間ごと", "notes": "全腎機能段階で調節不要" }
    ]
  },
  {
    "drug_id": "dap",
    "drug_name": "ダプトマイシン",
    "category": "抗MRSA薬",
    "aliases": ["キュビシン", "DAP"],
    "loading_dose": "通常量（4〜6mg/kg、重症菌血症 8〜10mg/kg、理想体重使用）",
    "hd_dose": "4〜6mg/kg（重症 8〜10mg/kg） / 48時間ごと（透析後に投与）",
    "dosing_guidelines": [
      { "min_ccr": 30, "max_ccr": 999, "dose": "4〜6mg/kg（皮膚軟部組織 4mg/kg, 菌血症 6mg/kg, 重症 8〜10mg/kg）", "interval": "24時間ごと", "notes": "理想体重を使用" },
      { "min_ccr": 0, "max_ccr": 30, "dose": "4〜6mg/kg（重症 8〜10mg/kg）", "interval": "48時間ごと", "notes": "投与間隔を48時間ごとに延長" }
    ]
  },
  {
    "drug_id": "cam",
    "drug_name": "クラリスロマイシン",
    "category": "マクロライド系",
    "aliases": ["クラリス", "クラリシッド", "CAM"],
    "loading_dose": "通常量（200〜400mg）",
    "hd_dose": "200〜400mg / 1日1回",
    "dosing_guidelines": [
      { "min_ccr": 30, "max_ccr": 999, "dose": "200〜400mg", "interval": "1日2回", "notes": "食間内服で吸収改善" },
      { "min_ccr": 0, "max_ccr": 30, "dose": "200〜400mg", "interval": "1日1回", "notes": "" }
    ]
  },
  {
    "drug_id": "azm",
    "drug_name": "アジスロマイシン",
    "category": "マクロライド系",
    "aliases": ["ジスロマック", "AZM"],
    "loading_dose": "通常量（静注500mg, 経口500mg）",
    "hd_dose": "500mg / 24時間ごと（調節不要）",
    "dosing_guidelines": [
      { "min_ccr": 0, "max_ccr": 999, "dose": "静注: 500mg / 24h, 経口: 500mg 1日1回 3日間", "interval": "24時間ごと", "notes": "全腎機能段階で調節不要" }
    ]
  },
  {
    "drug_id": "st",
    "drug_name": "ST合剤",
    "category": "スルホンアミド系",
    "aliases": ["バクトラミン", "バクタ", "ダイフェン"],
    "loading_dose": "尿路感染や感染性腸炎：2錠1日2回　PCPやノカルジア感染症：5 mg/kg（静注）*を8時間ごと、または4錠1日3回",
    "hd_dose": "透析後に5mg/kg追加投与",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "尿路感染 2錠 1日2回, PCP/ノカルジア 5mg/kg(静注) / 8h または 4錠 1日3回", "interval": "疾患による", "notes": "トリメトプリム(T)量で計算" },
      { "min_ccr": 30, "max_ccr": 80, "dose": "通常量", "interval": "疾患による", "notes": "調節不要" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "3mg/kg / 12h（経口薬は通常量の1/2）", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "基本不使用（PCP時は2mg/kg(静注) / 12h または 2錠 1日2回）", "interval": "12時間ごと", "notes": "基本的には使用しない" }
    ]
  },
  {
    "drug_id": "cl",
    "drug_name": "コリスチン",
    "category": "ポリペプチド系",
    "aliases": ["オルドレブ", "CL"],
    "loading_dose": "通常量（1.25〜2.5mg/kg、理想体重使用）",
    "hd_dose": "データ不足（専門医へ相談）",
    "dosing_guidelines": [
      { "min_ccr": 80, "max_ccr": 999, "dose": "1.25〜2.5mg/kg", "interval": "12時間ごと", "notes": "理想体重を使用" },
      { "min_ccr": 50, "max_ccr": 80, "dose": "1.25〜1.9mg/kg", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 30, "max_ccr": 50, "dose": "1.25mg/kg / 12h または 2.5mg/kg / 24h", "interval": "12hまたは24hごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "1.5mg/kg", "interval": "36時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "データ不足（専門医へ相談）", "interval": "-", "notes": "" }
    ]
  },
  {
    "drug_id": "rfp",
    "drug_name": "リファンピシン",
    "category": "リファマイシン系",
    "aliases": ["リマクタン", "アプテシン", "RFP"],
    "loading_dose": "通常量（450〜600mg）",
    "hd_dose": "450〜600mg / 1日1回（調節不要）",
    "dosing_guidelines": [
      { "min_ccr": 0, "max_ccr": 999, "dose": "450〜600mg（結核では10mg/kg）", "interval": "1日1回", "notes": "全腎機能段階で調節不要" }
    ]
  },
  {
    "drug_id": "pza",
    "drug_name": "ピラジナミド",
    "category": "抗結核薬",
    "aliases": ["ピラマイド", "PZA"],
    "loading_dose": "通常量（25mg/kg、最大1,500mg）",
    "hd_dose": "25mg/kg / 48時間ごと（透析日は透析後に投与）",
    "dosing_guidelines": [
      { "min_ccr": 20, "max_ccr": 999, "dose": "25mg/kg（最大1,500mg）", "interval": "1日1回", "notes": "" },
      { "min_ccr": 0, "max_ccr": 20, "dose": "25mg/kg", "interval": "48時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "eb",
    "drug_name": "エタンブトール",
    "category": "抗結核薬",
    "aliases": ["エブトール", "EB"],
    "loading_dose": "通常量（15〜25mg/kg）",
    "hd_dose": "15〜25mg/kg / 48時間ごと（透析日は透析後に投与）",
    "dosing_guidelines": [
      { "min_ccr": 50, "max_ccr": 999, "dose": "15〜25mg/kg", "interval": "24時間ごと", "notes": "調節不要" },
      { "min_ccr": 30, "max_ccr": 50, "dose": "15〜25mg/kg", "interval": "24〜36時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "15〜25mg/kg", "interval": "36〜48時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "15〜25mg/kg", "interval": "48時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "flcz",
    "drug_name": "フルコナゾール",
    "category": "抗真菌薬（アゾール系）",
    "aliases": ["ジフルカン", "FLCZ"],
    "loading_dose": "通常量（100〜400mg、最大800mg）",
    "hd_dose": "通常投与量の50% ＋ 透析後に200mg追加",
    "dosing_guidelines": [
      { "min_ccr": 50, "max_ccr": 999, "dose": "100〜400mg", "interval": "24時間ごと", "notes": "調節不要" },
      { "min_ccr": 10, "max_ccr": 50, "dose": "50〜200mg（通常量の1/2）", "interval": "24時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "50〜200mg（通常量の1/2）", "interval": "24時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "vrcz",
    "drug_name": "ボリコナゾール",
    "category": "抗真菌薬（アゾール系）",
    "aliases": ["ブイフェンド", "VRCZ"],
    "loading_dose": "初日ローディング必須（静注: 6mg/kg/12h×2回、経口: 400mg/12h×2回[体重>=40kg]）",
    "hd_dose": "経口は通常量（200mg/12h）。静注は添加剤蓄積のため回避",
    "dosing_guidelines": [
      { "min_ccr": 50, "max_ccr": 999, "dose": "静注: 4mg/kg / 12h, 経口: 200mg / 12h", "interval": "12時間ごと", "notes": "初日ローディング後。TDM推奨" },
      { "min_ccr": 0, "max_ccr": 50, "dose": "経口は通常量（200mg/12h）。静注は不可（シクロデキストリン蓄積）", "interval": "12時間ごと", "notes": "Ccr<50では静注回避" }
    ]
  },
  {
    "drug_id": "mcfg",
    "drug_name": "ミカファンギン",
    "category": "抗真菌薬（キャンディン系）",
    "aliases": ["ファンガード", "MCFG"],
    "loading_dose": "通常量（100〜150mg/日）",
    "hd_dose": "100〜150mg / 1日1回（調節不要）",
    "dosing_guidelines": [
      { "min_ccr": 0, "max_ccr": 999, "dose": "100〜150mg（予防は50mg）", "interval": "1日1回", "notes": "全腎機能段階で調節不要" }
    ]
  },
  {
    "drug_id": "acv",
    "drug_name": "アシクロビル",
    "category": "抗ウイルス薬",
    "aliases": ["ゾビラックス", "ACV"],
    "loading_dose": "通常量（5〜12.5mg/kg、理想体重使用）",
    "hd_dose": "2.5〜6.25mg/kg / 24時間ごと（透析日は透析後投与）",
    "dosing_guidelines": [
      { "min_ccr": 50, "max_ccr": 999, "dose": "5〜12.5mg/kg（脳炎は10mg/kg）", "interval": "8時間ごと", "notes": "理想体重を使用" },
      { "min_ccr": 25, "max_ccr": 50, "dose": "5〜12.5mg/kg", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 25, "dose": "5〜12.5mg/kg", "interval": "24時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "2.5〜6.25mg/kg", "interval": "24時間ごと", "notes": "" }
    ]
  },
  {
    "drug_id": "vacv",
    "drug_name": "バラシクロビル",
    "category": "抗ウイルス薬",
    "aliases": ["バルトレックス", "VACV"],
    "loading_dose": "通常量（1000mg）",
    "hd_dose": "500mg / 1日1回（透析日は透析後内服）",
    "dosing_guidelines": [
      { "min_ccr": 50, "max_ccr": 999, "dose": "1000mg（帯状疱疹）", "interval": "1日3回", "notes": "HSVは500mg 1日2回" },
      { "min_ccr": 30, "max_ccr": 50, "dose": "1000mg", "interval": "1日2回", "notes": "" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "1000mg", "interval": "1日1回", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "500mg", "interval": "1日1回", "notes": "" }
    ]
  },
  {
    "drug_id": "gcv",
    "drug_name": "ガンシクロビル",
    "category": "抗ウイルス薬",
    "aliases": ["デノシン", "GCV"],
    "loading_dose": "通常量（5mg/kg）",
    "hd_dose": "1.25mg/kg / 週3回（透析後投与）",
    "dosing_guidelines": [
      { "min_ccr": 70, "max_ccr": 999, "dose": "5mg/kg", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 50, "max_ccr": 70, "dose": "2.5mg/kg", "interval": "12時間ごと", "notes": "" },
      { "min_ccr": 25, "max_ccr": 50, "dose": "2.5mg/kg", "interval": "24時間ごと", "notes": "" },
      { "min_ccr": 10, "max_ccr": 25, "dose": "1.25mg/kg", "interval": "24時間ごと", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "1.25mg/kg", "interval": "週3回", "notes": "" }
    ]
  },
  {
    "drug_id": "oseltamivir",
    "drug_name": "オセルタミビル",
    "category": "抗ウイルス薬",
    "aliases": ["タミフル"],
    "loading_dose": "通常量（75mg）",
    "hd_dose": "非推奨（使用時は75mg単回投与）",
    "dosing_guidelines": [
      { "min_ccr": 30, "max_ccr": 999, "dose": "75mg", "interval": "1日2回（5日間）", "notes": "調節不要" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "75mg", "interval": "1日1回", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "非推奨（75mg単回）", "interval": "単回", "notes": "" }
    ]
  },
  {
    "drug_id": "peramivir",
    "drug_name": "ペラミビル",
    "category": "抗ウイルス薬",
    "aliases": ["ラピアクタ"],
    "loading_dose": "通常量（300〜600mg）",
    "hd_dose": "50〜100mg 単回投与（追加時は透析2時間後に50〜100mg）",
    "dosing_guidelines": [
      { "min_ccr": 50, "max_ccr": 999, "dose": "300〜600mg", "interval": "単回投与", "notes": "調節不要" },
      { "min_ccr": 30, "max_ccr": 50, "dose": "100〜200mg", "interval": "単回投与", "notes": "" },
      { "min_ccr": 10, "max_ccr": 30, "dose": "50〜100mg", "interval": "単回投与", "notes": "" },
      { "min_ccr": 0, "max_ccr": 10, "dose": "50〜100mg", "interval": "単回投与", "notes": "" }
    ]
  }
];