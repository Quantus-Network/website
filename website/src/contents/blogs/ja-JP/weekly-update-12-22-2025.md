---
title: "Quantus Weekly: GPUマイニングとDirac負荷試験"
description: "GPU対応Quantus Miner v2.0.2をリリースし、Diracネットワークのストレステストに成功。2100万枚供給上限とチェーンアーキテクチャの更新も完了しました。"
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Weekly: GPUマイニングとDirac負荷試験"
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

今週、GPU対応のQuantus Miner v2.0.2を正式リリースし、Diracネットワークのストレステストに成功しました。

2100万枚の供給上限をサポートするようチェーンアーキテクチャを更新し、レガシーのvestingとtreasuryパレットを削除してコードベースを整理しました。

週次Githubアクティビティレポート（6件のマージ済みプルリクエスト）: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## Core Tech & ZK

- 新2100万枚供給上限を反映するようチェーン仕様を更新しました。
- vestingとtreasuryパレットを削除し、コアチェーンアーキテクチャを簡素化しました。
- runtime内のpanicを防止するため、汎用Poseidonストレージハッシュ対応を完了しました。
- ZK回路とCLIにAsset ID対応を追加しました。

## Network & Infra

- Diracをストレステストし、チェーン過負荷がブロック時間に与える影響を観察しました。
- GPUマイニングを正式サポートするQuantus Miner v2.0.2を公開しました: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Web & Mobile App Updates

- モバイルでのハードウェアウォレット署名フローを完成させました（QRコード署名送信、マルチウォレット対応、リンク解除機能を含む）。
- Telegram、ウェブサイト、Task Master経由の内部追跡で「Raid Quests」を実装し、X上のコミュニティエンゲージメントを促進しました。ウォレット実装は進行中です。
- バックエンドCORSエラーを解決し、ソーシャルインタラクションのデータ追跡を改善しました。
- マイナー報酬レポートとネットワーク切り替えに影響するブロックExplorerのバグを修正しました。

## Content & Partnerships

- Peer Summitで出会った2社の戦略的パートナーから投資を確保しました。
- ローンチ戦略に関するミーティングを完了し、新トークノミクスとGTMを反映した更新版ホワイトペーパーを起草しました。
- ベテランソフトウェアアーキテクト兼システムエンジニアCezary氏とのエピソード: https://www.youtube.com/watch?v=2TDMR7bECR8

## Industry Updates

- Quantum Canaryが国家レベルのBitcoin攻撃リスクを分析する記事を公開: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin
