---
published: true
title: "Quantus Weekly: GPUマイニングとZKリファクタ"
description: "GPUマイニングで9倍の性能向上を達成し、ZK集約回路をリファクタリングして数千行のコードを削除。UAEでの戦略的ミーティングの内容も共有しました。"
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Weekly: GPUマイニングとZKリファクタ"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "zero-knowledge-proofs",
    "tokenomics",
    "hardware-wallet",
    "solana-breakpoint",
  ]
---

今週、チームはマイニング性能におけるブレークスルーを達成しました。新GPUマイナーはCPU版より約9倍高速に動作しています。

ZK集約回路のリファクタリングも完了し、数千行のコードを削除しました。

UAE滞在中、チームは顧問や投資家と面会しました。これらのミーティングでプロダクトビジョンが固まり、トークノミクスとトークンローンチ戦略が明確になりました。トークンローンチを支援するBD面でも有意な進展がありました。

週次Githubアクティビティレポート（10件のマージ済みプルリクエスト）: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## Core Tech & ZK

- ZK-aggregator転送証明を専用パレットへ移行し、CLI、回路、Poseidonロジックを更新しました。このリファクタリングにより数千行のコードを削除しました。
- Poseidonストレージハッシャーを汎用化するソリューションを設計しました。
- 保留中の変更をマージし、可逆転送に関するコード品質問題を解決しました。

## Network & Infra

- GPUマイナーはCPUマイナーより約9倍高速です。
- CLI v0.3.1をリリースし、ファイナリゼーションフラグを統一し、アドレスフォーマットを改善しました。
- runtimeアップグレードを実行し、チェーン仕様を更新しました。
- 新BootNodeをデプロイしました。
- 全サーバーでセキュリティチェックと更新を完了しました。
- Subsquidインデックスサービス向けコンテナ化ヘルスチェックをデプロイしました。

## Web & Mobile App Updates

- ハードウェアウォレット統合を進めました。KeystoneでQRコードを解析し、ダミーメッセージに署名できるようになりました。
- モバイルアプリへのマルチウォレット（ニーモニック）ハードウェアウォレット機能の実装を開始しました。
- ウェブサイトフォームを更新し、メールプロバイダーと統合しました。
- rusxを最適化し、クエリをバッチ処理してレート制限問題を防止しました。

## Content & Partnerships

- Solana Breakpointに参加し、「Quantum Secure Bitcoin」のポジショニング/ミームをテストしました。
- UAEで顧問と面会し、トークンローンチ、トークノミクス、Quantus GTM戦略について議論しました。
- Tom Howard氏とのエピソードを公開: https://x.com/QuantusNetwork/status/2000585749914427684

## Industry Updates

- Quantum Canaryが包括的な「Quantum Ready」ブロックチェーン比較ページを公開: https://www.quantumcanary.org/is-your-blockchain-quantum-ready
