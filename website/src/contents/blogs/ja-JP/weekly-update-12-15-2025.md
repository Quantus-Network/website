---
title: "Quantus Weekly: GPUマイニングの画期的進歩とZKリファクタリング"
description: "GPUマイニングの9倍のパフォーマンス向上、ZK集約サーキットのリファクタリング、およびUAEでの戦略的会議を網羅した週刊アップデート。"
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Weekly: GPUマイニングの画期的進歩とZKリファクタリング"
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

今週、チームはマイニングパフォーマンスにおいて画期的な進歩を遂げました。新しいGPUマイナーは、CPUバージョンの約9倍の速さで動作しています。

また、ZK集約サーキットのリファクタリングを完了し、数千行のコードを削除することができました。

UAE滞在中、チームはアドバイザーや投資家と面会しました。これらの会議により、当社の製品ビジョンが確固たるものになり、トークノミクスとトークンローンチ戦略が明確になりました。また、トークンローンチをサポートするための有意義なBD（事業開発）の進展もありました。

10個のマージされたプルリクエストを含む週刊Githubアクティビティレポート：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## Core Tech & ZK

- ZKアグリゲーターの転送証明を専用パレットに移行しました。これには、CLI、サーキット、およびPoseidonロジックのアップデートが含まれます。このリファクタリングにより、数千行のコードを削除することができました。
- Poseidonストレージハッシャーを汎用化するためのソリューションを設計しました。
- 保留中の変更をマージし、リバーシブルな転送に関連するコード品質の問題を解決しました。

## Network & Infra

- GPUマイナーがCPUマイナーより約9倍高速になりました。
- CLI v0.3.1をリリースし、ファイナライズフラグを統一し、アドレス形式を改善しました。
- ランタイムアップグレードを実行し、チェーン仕様を更新しました。
- 新しいBootNodeをデプロイしました。
- すべてのサーバーでセキュリティチェックとアップデートを完了しました。
- Subsquidインデックスサービスのコンテナ化されたヘルスチェックをデプロイしました。

## Web & Mobile App Updates

- ハードウェアウォレットの統合を前進させました。現在、KeystoneでQRコードを解析し、ダミーメッセージに署名しています。
- マルチウォレット（ニーモニック）ハードウェアウォレット機能をモバイルアプリに実装し始めました。
- ウェブサイトのフォームを更新し、メールプロバイダーと統合しました。
- rusxを最適化してクエリをバッチ処理し、レート制限の問題を防止しました。

## Content & Partnerships

- Solana Breakpointに参加し、当社の「量子安全なビットコイン」のポジショニングとミームをテストしました。
- UAEでアドバイザーと会い、トークンローンチ、トークノミクス、およびQuantusのGTM戦略について話し合いました。
- Tom Howard氏とのエピソードが公開されました：https://x.com/QuantusNetwork/status/2000585749914427684

## Industry Updates

- Quantum Canaryが包括的な「量子対応」ブロックチェーン比較ページを公開しました：https://www.quantumcanary.org/is-your-blockchain-quantum-ready
