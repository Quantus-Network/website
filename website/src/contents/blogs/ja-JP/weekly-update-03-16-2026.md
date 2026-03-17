---
title: "Quantus Weekly: 量子耐性署名、ZKスケーリング、ワームホール証明2倍高速化"
description: "ML-DSA署名のスケール、ZK集約、ワームホール証明の高速化、セキュリティレビュー、テストネットノード、Quantum Canaryコンテンツに関する週刊アップデート。"
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: 量子耐性署名、ZKスケーリング、ワームホール証明2倍高速化"
featured: false
tags:
  [
    "weekly-update",
    "quantum-safe",
    "ml-dsa",
    "zk-proofs",
    "wormhole",
    "scalability",
    "privacy",
  ]
---

ビットコインの署名は65バイト。

ML-DSA-87の署名1つは4,627バイト。

70倍大きい。

取引のたびにそれが積み重なれば、スケーラビリティの問題になる。

でも心配無用。ビットコインのブロックサイズを上げるのがそんなに物議を醸すとは思えない。

（冗談です）

量子耐性署名はあまりに肥大化している。今日導入すれば、ビットコインのスループットは1 TPSを大きく下回るだろう。

[@QuantusNetwork](https://x.com/QuantusNetwork)は、スケーリング技術なしでブロックあたり約685件の取引を実現できる。

私たちはZKで、これらの大きな取引をオンチェーンに載る小さな証明に集約している。

送信者と受信者のリンクを断つことで、ユーザーにプライバシー保護も提供している［前回アップデートで解説］(https://x.com/YuviLightman/status/2030162754544525495)。

57 TPSが、暗号化された3,500 TPSになる。

新たなブロックチェーン三難問は、量子セキュリティ、スケーラビリティ、プライバシー。

ZKで解決している。

今週、証明時間を半分に短縮した。

ワームホール集約証明の決済が2倍速くなった。

署名は依然として巨大。チェーンは気にしない。

今週つくったその他は以下の通り。

### GitHubアクティビティ（マージされたPR 12件）：

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### コア技術 & ZK:

- ワームホール集約証明が2倍高速化。動的再構築の代わりにシリアライズされたプローバーを使用。
- qp-zk-circuitsの回路ビルダー/プローバーリファクタ分割を完了。
- アグリゲーターAPIを、動的プローバー/回路ビルダーからオーケストレーション・アーティファクト管理へ再設計。
- 新アグリゲーターAPIでquantus-cliを更新。
- チェーン上のqp-zk-circuitsとの暗号/再現ビルド紐付けが欠けていたワームホール検証器blobを修正。
- 全Substrateパレットで複数のセキュリティレビューを実施し、修正PR 8件をマージ。
- Substrateパレットの正式監査を開始。
- Multisig・Treasuryパレットの改善。

### ネットワーク & インフラ:

- 新テストネットプロファイルでPlanckテストネットノードを2台デプロイ。
- Substrate状態プルーニングの調査と修正。
- テストネット faucet を [@QuantusNetwork](https://x.com/QuantusNetwork) のTwitterアカウントに接続。
- Subsquid: クエリ性能向上のためユーザー別イベントマッピングを追加。
- Subsquid: 履歴精度のため可逆転送の集約を更新。
- ブリッジング基盤を構築: Rosetta API実装、統合テスト、MPC署名の更新。

### Web・モバイルアプリ更新:

- モバイルウォレット build 82: コード整理とUI標準化（シート、スキャフォールド、アイコンボタン、アカウントリファクタ）。
- モバイルウォレットのチェーン履歴サービスと取引履歴UIを最新Subsquidデータモデルに対応。
- サイト: ページインデックス最適化、週次アップデートをブログ投稿として追加、ブログ検索にタイトルを含めるよう修正。
- Explorer: 可逆取引ビューを個別イベントタイプ（予定・実行・キャンセル）に再編。
- Quantum Canaryサイト: 記事テーブルをモバイル対応に。

### コンテンツ & パートナーシップ:

- 物理学者・起業家スティーブ・スー氏とのポッドキャスト（量子コンピューティング、AI、量子脅威のタイムライン）。
- マーケティング採用2名を追加。
- Network Schoolで暗号オンボーディングとプライバシー/OPSECセキュリティイベントを開催。

### 業界アップデート:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)
