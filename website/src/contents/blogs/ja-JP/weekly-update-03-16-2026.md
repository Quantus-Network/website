---
published: true
title: "Quantus Weekly: 巨大署名と高速ワームホール"
description: "ML-DSA署名はBitcoinの70倍。量子耐性署名のスケール、ワームホール証明の2倍高速化、ZK集約の前進をまとめた週次アップデート。Quantusの最新開発をお届けします。"
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: 巨大署名と高速ワームホール"
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

Bitcoin の署名は 65 バイトです。

ML-DSA-87 署名ひとつで 4,627 バイト。

70 倍のサイズです。

すべてのトランザクションに掛け合わせると、それはスケーリングの問題になります。

でも心配ないでしょう。Bitcoin のブロックサイズを大きくするのは、そんなに議論にならないはずです。

（冗談です）

量子耐性署名はとても巨大で、今日そのまま実装すれば Bitcoin のスループットは 1 TPS をはるかに下回るでしょう。

[@QuantusNetwork](https://x.com/QuantusNetwork) は、スケーリング手法なしでブロックあたり約 685 トランザクションを処理できます。

しかし私たちは ZK を使い、これらの大きなトランザクションをより小さな証明に集約し、オンチェーンに載せます。

また、送信者と受信者のリンクを切ることで、ユーザーにプライバシー保護も提供します[（前回のアップデートで解説）](https://x.com/YuviLightman/status/2030162754544525495)。

57 TPS が、暗号化された 3,500 TPS になります。

新しいブロックチェーンの三つ巴は、量子セキュリティ、スケーラビリティ、プライバシーです。

私たちは ZK でそれを解いています。

今週、証明時間を半分に短縮しました。

ワームホール集約証明の決済が 2 倍速くなりました。

署名は相変わらず巨大です。チェーンは気にしません。

今週のその他の成果は以下のとおりです。

### GitHub アクティビティ（マージ済みプルリクエスト 12件）:

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### コア技術 & ZK:

- 動的再構築の代わりにシリアライズされた prover を使用し、ワームホール集約証明を 2 倍高速化。
- qp-zk-circuits の circuits builder/prover リファクタ分割を完了。
- 動的 prover/circuit builder からオーケストレーションとアーティファクト管理へ、aggregator API を再設計。
- 新しい aggregator API で quantus-cli を更新。
- チェーン上の wormhole verifier blobs が qp-zk-circuits との暗号的/再現可能ビルドの紐付けを欠いていた問題を修正。
- すべての Substrate パレットにわたる複数のセキュリティレビューを完了し、修正 PR 8 件をマージ。
- Substrate パレットの正式監査を開始。
- Multisig および Treasury パレットの改善。

### ネットワーク & インフラ:

- 新しいテストネットプロファイルで Planck テストネットノードを 2 台デプロイ。
- Substrate ステートプルーニングの調査と修正。
- テストネット faucet を [@QuantusNetwork](https://x.com/QuantusNetwork) の Twitter アカウントに接続。
- Subsquid: クエリ性能向上のためユーザー別イベントマッピングを追加。
- Subsquid: 履歴精度のため可逆送金集約を更新。
- ブリッジインフラを構築: Rosetta API 実装、統合テスト、MPC 署名の更新。

### Web & モバイルアプリ:

- モバイルウォレット build 82: コード整理と UI 標準化（シート、scaffold、アイコンボタン、アカウントリファクタ）。
- 最新の Subsquid データモデルに対応するため、モバイルウォレットのチェーン履歴サービスとトランザクション履歴 UI を更新。
- ウェブサイト: ページインデックスを最適化、週次アップデートをブログ記事として追加、タイトルを含むブログ検索を修正。
- エクスプローラー: 可逆トランザクション表示を個別イベントタイプ（scheduled、executed、cancelled）へ全面改修。
- Quantum Canary ウェブサイト: 記事テーブルをモバイル対応に。

### コンテンツ & パートナーシップ:

- 物理学者兼起業家 Steve Hsu とのポッドキャスト（量子コンピューティング、AI、量子脅威のタイムライン）。
- マーケティング担当を 2 名追加。
- Network School にて暗号オンボーディングとプライバシー/OPSEC セキュリティイベントを開催。

### 業界動向:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)
