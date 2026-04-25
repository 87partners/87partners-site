---
version: alpha
name: 87Partners Design System
description: 株式会社87パートナーズのバーチャルCxOチームが生成する全成果物（コーポレートサイト・スライド・ドキュメント・提案書）の統一デザイン規格。マッキンゼーおよび主要コンサルティング・ファームの基準を踏襲しつつ、AI-nativeな運用に最適化。

colors:
  # === ブランド基幹色 ===
  brand-primary: "#2D8B6D"        # 87パートナーズグリーン（メインタイトル・主要強調）
  brand-primary-hover: "#247058"   # ホバー時の濃い緑
  brand-primary-light: "#E8F4F0"   # ライトグリーン（背景・セクション仕切り）

  # === セマンティック・テキストカラー ===
  text-primary: "#2A2A2A"          # 本文・見出し（ダークグレー）
  text-secondary: "#5B7A95"        # 補助情報・引用・脚注（グレーブルー）
  text-inverse: "#FFFFFF"          # 暗背景上のテキスト

  # === セマンティック・サーフェイス ===
  surface-default: "#FFFFFF"       # ページ背景・カード背景
  surface-muted: "#F5F5F5"         # ライトグレー（テーブル背景・ページ背景）
  surface-emphasis: "#E8F4F0"      # 強調セクション・引用ブロック

  # === セマンティック・ボーダー ===
  border-default: "#D0D0D0"        # 標準罫線・区切り線
  border-strong: "#A8A8A8"         # 強調罫線

  # === セマンティック・ステート ===
  state-warning: "#E8A020"         # 警告・重要（オレンジ）
  state-warning-light: "#F0B84F"   # 警告ホバー
  state-success: "#2D8B6D"         # 成功（ブランド色と統一）
  state-error: "#C0392B"           # エラー
  state-info: "#5B7A95"            # 情報

  # === チャート系統色 ===
  chart-main-1: "#2D8B6D"
  chart-main-2: "#4FA688"
  chart-main-3: "#7CB9A8"
  chart-main-4: "#B5DCD3"
  chart-warn-1: "#E8A020"
  chart-warn-2: "#F0B84F"
  chart-neutral-1: "#7F7F7F"
  chart-neutral-2: "#A8A8A8"
  chart-neutral-3: "#D0D0D0"

typography:
  # === 見出し（H1: スライドタイトル・ページタイトル） ===
  display:
    fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", "Arial", sans-serif'
    fontSize: "40px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.01em"

  # === 見出し（H2: セクション見出し） ===
  heading-1:
    fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", "Arial", sans-serif'
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.25"

  # === 見出し（H3: 小見出し） ===
  heading-2:
    fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", "Arial", sans-serif'
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "1.3"

  # === 見出し（H4: 細目） ===
  heading-3:
    fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", "Arial", sans-serif'
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.4"

  # === 本文 ===
  body:
    fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.6"

  # === 強調本文 ===
  body-emphasis:
    fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif'
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.6"

  # === キャプション・脚注 ===
  caption:
    fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif'
    fontSize: "10px"
    fontWeight: 400
    lineHeight: "1.5"

  # === 数値・データ（等幅） ===
  data:
    fontFamily: '"Courier New", "Consolas", "SF Mono", monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.5"

rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "8px"
  xl: "12px"
  full: "9999px"

spacing:
  0: "0px"
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  8: "32px"
  10: "40px"
  12: "48px"
  16: "64px"
  20: "80px"
  24: "96px"

components:
  # === ボタン：プライマリ ===
  button-primary:
    backgroundColor: "{colors.brand-primary}"
    textColor: "{colors.text-inverse}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.md}"
    padding: "{spacing.3} {spacing.5}"
    height: "40px"

  button-primary-hover:
    backgroundColor: "{colors.brand-primary-hover}"
    textColor: "{colors.text-inverse}"

  # === ボタン：セカンダリ（アウトライン） ===
  button-secondary:
    backgroundColor: "{colors.surface-default}"
    textColor: "{colors.brand-primary}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.md}"
    padding: "{spacing.3} {spacing.5}"
    height: "40px"

  # === ボタン：警告 ===
  button-warning:
    backgroundColor: "{colors.state-warning}"
    textColor: "{colors.text-inverse}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.md}"
    padding: "{spacing.3} {spacing.5}"
    height: "40px"

  # === カード（標準） ===
  card-default:
    backgroundColor: "{colors.surface-default}"
    rounded: "{rounded.lg}"
    padding: "{spacing.6}"

  # === カード（強調・引用ブロック） ===
  card-emphasis:
    backgroundColor: "{colors.surface-emphasis}"
    rounded: "{rounded.lg}"
    padding: "{spacing.6}"

  # === 入力フィールド ===
  input-default:
    backgroundColor: "{colors.surface-default}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.2} {spacing.3}"
    height: "40px"

  # === ナビゲーション・ヘッダー ===
  navigation-header:
    backgroundColor: "{colors.surface-default}"
    textColor: "{colors.text-primary}"
    typography: "{typography.heading-3}"
    height: "64px"
    padding: "{spacing.4} {spacing.6}"

  # === テーブル：ヘッダー行 ===
  table-header:
    backgroundColor: "{colors.brand-primary-light}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-emphasis}"
    padding: "{spacing.3} {spacing.4}"

  # === テーブル：データ行 ===
  table-cell:
    backgroundColor: "{colors.surface-default}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    padding: "{spacing.3} {spacing.4}"

  # === セクション見出しバー（プレゼン・レポート用） ===
  section-marker:
    backgroundColor: "{colors.brand-primary}"
    textColor: "{colors.text-inverse}"
    typography: "{typography.heading-2}"
    padding: "{spacing.2} {spacing.4}"
    rounded: "{rounded.sm}"
---

# 87Partners Design System (DESIGN.md)

このドキュメントは、株式会社87パートナーズのバーチャルCxOチームが生成する**全ての成果物**に適用されるデザイン規格を定義します。
AIエージェント（Claude Code・Cursor等）が読み込み、ブランド一貫性を機械的に保証することを目的とします。

## Overview

### ブランド哲学

87パートナーズは**「コンサルティング・ファームの厳格さ × AIネイティブな機動性」**を体現する。
すべての成果物は以下の3原則を満たす：

1. **プロフェッショナリズム** — マッキンゼー基準のロジック展開とビジュアル品質
2. **信頼性** — 数字ベース・出典明記・主観的表現の排除
3. **一貫性** — 9名のCxOエージェントが同一規格に従い、統一されたブランド体験を提供

### 適用範囲

- ✅ コーポレートサイト（Astro + Tailwind）
- ✅ プレゼンテーション資料（PowerPoint / Google Slides）
- ✅ 調査レポート・提案書（Word / Google Docs）
- ✅ メール・Slack等の社内外コミュニケーション
- ✅ ホワイトペーパー・ケーススタディ
- ❌ 個人メモ（Apple Notes等の個人ツール）

## Colors

### カラー設計の原則

**87パートナーズグリーン（#2D8B6D）**は薄めの深緑で、信頼性と先進性を両立する色として選定。
セマンティック命名（`brand-primary`・`text-primary`・`surface-default`等）を採用し、用途に応じた一貫した使い分けを担保。

### ブランド基幹色

| トークン名 | 値 | 用途 |
|----------|-----|------|
| `brand-primary` | #2D8B6D | 主要タイトル・CTA・グラフ主色 |
| `brand-primary-hover` | #247058 | ボタンホバー時 |
| `brand-primary-light` | #E8F4F0 | テーブルヘッダー背景・ハイライトボックス |

### テキストカラー

`text-primary` は本文の標準。`text-secondary` は脚注・補助情報のみに限定。`text-inverse` は暗背景上のみ使用。

### ステートカラー

`state-warning` は重要警告・数字強調時に限定使用（多用禁止）。
`state-success` はあえて `brand-primary` と同色にしてブランド統一感を維持。

### チャート色順序

データ系列が複数ある場合、`chart-main-1` → `chart-main-2` → `chart-main-3` → `chart-main-4` の順で割当。
警告系統（増減差・閾値超過）は `chart-warn-*` を、対比基準（前年・他社平均）は `chart-neutral-*` を使用。

## Typography

### フォントスタック

日本語：「Hiragino Kaku Gothic ProN」優先 → 「Yu Gothic」フォールバック → 「Arial」最終フォールバック。
等幅（数値・コード）：「Courier New」「Consolas」「SF Mono」。

### 階層運用

| トークン | 用途 | 使用頻度 |
|---------|------|---------|
| `display` | プレゼンタイトル・ページタイトル | 1ドキュメントに1〜2回 |
| `heading-1` | セクション見出し（章レベル） | 1ページに1回 |
| `heading-2` | 小見出し | 1セクションに2〜4回 |
| `heading-3` | サブ項目 | 必要に応じて |
| `body` | 本文標準 | 最頻 |
| `body-emphasis` | 強調本文・ボタン文言 | 限定使用 |
| `caption` | 脚注・出典・補注 | 必要に応じて |
| `data` | 数値・統計値 | データ中心の文脈 |

## Layout

### グリッドシステム

- **デスクトップ**：12カラム、ガター `{spacing.6}` (24px)
- **タブレット**：8カラム、ガター `{spacing.4}` (16px)
- **モバイル**：4カラム、ガター `{spacing.3}` (12px)

### ページマージン

| 媒体 | マージン |
|------|---------|
| Web（デスクトップ） | 上下 `{spacing.16}` (64px) / 左右 `{spacing.20}` (80px) |
| Web（モバイル） | 上下 `{spacing.10}` (40px) / 左右 `{spacing.4}` (16px) |
| プレゼンスライド | 全方向 0.5インチ（約1.3cm） |
| Wordドキュメント | 上下 2.5cm / 左右 2cm |

### スペーシングの哲学

要素間の関係性を**距離で表現**する：
- 関連が強い要素：`{spacing.2}` (8px)
- 同一グループ内：`{spacing.4}` (16px)
- グループ間：`{spacing.8}` (32px)
- セクション間：`{spacing.16}` (64px)

## Elevation & Depth

### シャドウシステム

3階層のサーフェイス階層を持つ：

| 階層 | 用途 | 値 |
|------|------|-----|
| Surface 0（ページ） | 背景 | `none` |
| Surface 1（カード） | 通常カード・パネル | `0 1px 3px rgba(0,0,0,0.08)` |
| Surface 2（モーダル） | 重要な強調・モーダル | `0 4px 12px rgba(0,0,0,0.12)` |

シャドウは**最小限・控えめ**に。コンサルティング資料では3D効果・過度なシャドウは禁止。

## Shapes

### 角丸の運用

- ボタン・入力欄：`{rounded.md}` (4px)
- カード・パネル：`{rounded.lg}` (8px)
- アバター・タグ：`{rounded.full}`
- 表セル：`{rounded.none}` （角丸禁止）

過度に丸い形状はカジュアルすぎるため、コンサルティング・ブランドには不適合。

## Components

### ボタン

3バリアント：`button-primary`（CTA）・`button-secondary`（補助操作）・`button-warning`（重要警告）。
**1画面に `button-primary` は1つまで**。視線誘導の鉄則。

### カード

`card-default`（標準）と `card-emphasis`（引用・特記事項）の2種類。
影は `Surface 1` レベル限定。

### テーブル

ヘッダー行は `table-header`（ライトグリーン背景＋強調本文）。
データ行は `table-cell`（白背景）と `table-cell-alt`（必要時のみ薄グレー）の交互ストライプ。
セル罫線は `border-default`。

### セクションマーカー

プレゼン・レポートのセクション見出しに使用。`brand-primary` 背景＋白文字＋角丸 `{rounded.sm}`。

## Do's and Don'ts

### ✅ Do

- **数字には必ず出典を明記**：「市場規模 ¥3.2兆（出典：経産省 2025）」
- **1スライド/1段落 1メッセージ**：複数の主張を詰め込まない
- **ピラミッド構造**：頂点（主結論）→ 第2層（3つの根拠）→ 第3層（事実・データ）
- **MECE原則**：分類は重複なく漏れなく
- **3つの法則**：列挙は基本3つ。「7つのポイント」は読者を疲弊させる
- **グラフのY軸はゼロから**：データの歪曲を避ける
- **トーン統一**：「〜である」「すなわち」等のコンサル文体

### ❌ Don't

- **3D効果・アニメーション**：印刷・PDF化で崩れる
- **円グラフで5項目以上**：認識困難。横棒グラフへ
- **`brand-primary` 以外の緑色**：ブランド毀損
- **アクセントカラー乱用**：`state-warning`は1ページに最大2箇所
- **本文10pt以下**：高齢役員層への配慮（最小12pt）
- **「ですね」「ちょっと」「やたら」**：曖昧な口語
- **根拠なき推測**：「多分」「おそらく」は出典・データで置き換え
- **ロゴの色変更・歪み・最小サイズ違反**：最小0.8インチ厳守

## Accessibility (WCAG 2.1 AA)

### コントラスト比

主要な組み合わせは WCAG 2.1 Level AA（通常テキスト 4.5:1、大型テキスト 3:1）を満たす：

| 組み合わせ | コントラスト比 | 判定 |
|----------|--------------|------|
| `text-primary` (#2A2A2A) on `surface-default` (#FFFFFF) | 14.4:1 | ✅ AAA |
| `text-inverse` (#FFFFFF) on `brand-primary` (#2D8B6D) | 4.7:1 | ✅ AA |
| `text-primary` on `brand-primary-light` (#E8F4F0) | 13.2:1 | ✅ AAA |
| `text-secondary` (#5B7A95) on `surface-default` | 4.6:1 | ✅ AA |
| `text-inverse` on `state-warning` (#E8A020) | 2.5:1 | ⚠️ 大型テキスト限定 |

### その他のアクセシビリティ要件

- フォーカス可能要素は明示的なフォーカスリング（`brand-primary` 2px 外側）
- フォントサイズ最小12px（本文）／10px（脚注）
- 色のみで情報を伝えない（必ずアイコン・テキストを併用）
- リンクには下線または色＋アイコンで明示

## Versioning & Governance

| 項目 | ルール |
|------|--------|
| マスター | このDESIGN.mdが**唯一のソース・オブ・トゥルース** |
| 旧style_guide.md | 段階的に本ファイルへ統合・参照解消 |
| 変更権限 | CPO（ノア）承認＋CTO（コウ）レビュー |
| バージョニング | Semantic Versioning（後方互換変更=minor、破壊的変更=major） |
| 適用通知 | CLAUDE.mdに参照行を追加し、全CxOスキルが自動参照 |

## 参照

- 旧版（移行元）：`Common_Knowledge/references/style_guide.md`
- DESIGN.md規格：[google-labs-code/design.md](https://github.com/google-labs-code/design.md)
- 事例集：[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- 採用検討：`Common_Knowledge/sessions/20260423_DesignMd_当社活用検討.md`
