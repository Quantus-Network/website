---
title: "Quantus Weekly: POSモードとP2P電子キャッシュ"
description: "ウォレットv1.2.2のモバイルPOS、PolyFriマスキング、Poseidon整理、ZK DDoS防御。P2P電子キャッシュがQuantusにとってなぜ重要かを解説した週次アップデートです。"
pubDate: "2026-03-31"
heroImage: "/blog/covers/weekly-update-03-31-2026.webp"
heroAlt: "Quantus Weekly: POSモードとP2P電子キャッシュ"
featured: false
tags:
  [
    "weekly-update",
    "point-of-sale",
    "mobile",
    "zk-proofs",
    "polyfri",
    "poseidon",
    "privacy",
    "infrastructure",
  ]
---

> A Peer-to-Peer Electronic Cash System.

それが Bitcoin ホワイトペーパーのタイトルです。

17 年後、Bitcoin は好調な日でも秒間 7 トランザクション程度しか処理しません。

銀行的な中央集権サービスではない Bitcoin の「スケーリングソリューション」を最後に見たのがいつだったか、もう覚えていません。

しかし P2P 電子キャッシュは、時代が来たアイデアでした。

Bitcoin コミュニティがチェーンをスケールしない言い訳を探しているあいだ、スーツを着た人たちは「ステーブルコイン」を売り込んでいました。

トークン化された法定通貨。富が溶けていくあいだ、あなたを嫌う人たちがさらに印刷して友人に配る。

お気に入りのブロックチェーン上で！

ステーブルコインの供給量は 3,150 億ドルを超えました。大半は政府債務で裏付けられ、銀行に預けられ、凍結機能付きで、完全に追跡可能です。

それが蔓延するあいだ、業界は歓声を上げていました。

サイファーパンク・マネーへのプロダクトアップグレードの出荷をやめ、今や手渡された電子キャッシュはこういうものです。レール上のドル、多国籍企業が管理し、スーツが承認したもの。

サイファーパンクの道化師マスクを被ったトカゲマネー。

P2P 電子キャッシュはスケールする。プライベートになる。増刷できない。主権を持つ。量子セキュアになる。

法定通貨のゴミは彼らに持たせておけばいい。

今週、Quantus モバイルアプリに POS（販売時点管理）モードを出荷しました。

商人が請求書 QR コードを表示。顧客がスキャン。支払いが即座に確認される。量子セキュアで、ピアツーピアの、電子キャッシュです。

今週のその他の成果は以下のとおりです。

### GitHub アクティビティ（マージ済みプルリクエスト 24件）:

![Github Stats](/blog/assets/github-stats-weekly-update-03-31-2026.webp)

### コア技術 & ZK:

- ネイティブパス上で PolyFri prover 側マスキングを実装し、コストの高い builder 側 row blinding を置き換え。
- Poseidon ハッシャーをリファクタ・整理し、システム全体を更新。

### ネットワーク & インフラ:

- チェーン上の ZK 証明に DDoS 保護を追加。

### Web & モバイルアプリ:

- POS モードと即時確認機能を備えたモバイルアプリ v1.2.2 をアプリストア向けにリリース。
- ウェブサイトリデザインの alpha 版をデプロイ。
- [quantus.com/launch](https://quantus.com/launch) ページのコンテンツを更新。
- ウォレット向けリモート設定システムを実装。

### コンテンツ & パートナーシップ:

- Network School にて「Death of the CEX」イベントを開催。
- State of Quantum レポートを複数の学者とビルダーに配布し、レビュー/コメントを依頼。

### 業界動向:

- Quantum Canary: [Why Is It So Hard to Build a Quantum Computer?](https://x.com/QuantumCanary_/status/2038832028725223690)
