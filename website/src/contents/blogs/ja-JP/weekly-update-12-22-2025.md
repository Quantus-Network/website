---
title: "Quantus Weekly: GPUマイニングとDiracストレステスト"
description: "GPUサポートを備えたQuantus Miner v2.0.2のリリース、Diracネットワークのストレステスト、およびチェーンアーキテクチャのアップデートを網羅した週刊アップデート。"
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Weekly: GPUマイニングとDiracストレステスト"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "dirac-network",
    "blockchain-architecture",
    "tokenomics",
    "hardware-wallet",
    "social-engagement",
  ]
---

今週、GPUサポートを備えたQuantus Miner v2.0.2を正式にリリースし、Diracネットワークのストレステストに成功しました。

また、2,100万枚のコイン供給上限をサポートするためにチェーンアーキテクチャを更新し、レガシーなベスティングおよびトレジャリーパレットを削除してコードベースをクリーンアップしました。

6つのマージされたプルリクエストを含む週刊Githubアクティビティレポート：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## Core Tech & ZK

- 新しい2,100万枚のコイン供給上限を反映するためにチェーン仕様を更新しました。
- ベスティングおよびトレジャリーパレットを削除することで、コアチェーンアーキテクチャを簡素化しました。
- ランタイムでのパニックを防ぐため、汎用的なPoseidonストレージハッシュサポートを完了しました。
- ZKサーキットおよびCLIにアセットIDサポートを追加しました。

## Network & Infra

- チェーンの過負荷がブロック時間にどのように影響するかを観察するために、Diracのストレステストを実施しました。
- GPUマイニングを正式にサポートしたQuantus Miner v2.0.2を公開しました：https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Web & Mobile App Updates

- QRコードによる署名送信、マルチウォレットサポート、リンク解除機能を含む、モバイル上でのハードウェアウォレット署名フローを完成させました。
- Xでのコミュニティエンゲージメントを促進するため、Telegram、ウェブサイト、およびTask Masterによる内部トラッキングを備えた「レイドクエスト」を実装しました。ウォレットの実装は進行中です。
- バックエンドのCORSエラーを解決し、ソーシャルインタラクションのデータトラッキングを改善しました。
- マイナー報酬の報告とネットワークの切り替えに影響を与えていたブロックエクスプローラーのバグを修正しました。

## Content & Partnerships

- Peer Summitで出会った2社の戦略的パートナーからの投資を確保しました。
- ローンチ戦略に関する会議を終了し、新しいトークノミクスとGTMを反映した更新版のホワイトペーパーを起草しました。
- ベテランのソフトウェアアーキテクト兼システムエンジニアであるCezary氏とのエピソード：https://www.youtube.com/watch?v=2TDMR7bECR8

## Industry Updates

- ビットコインに対する国家レベルの攻撃のリスクを分析したQuantum Canaryの記事：https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin
