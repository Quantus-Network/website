---
published: true
title: "Quantus Weekly: ZK集約とマイナーアプリ"
description: "チェーンとCLI向けの初のZKトランザクション集約を完了し、モックテストを実際の転送検証に置き換えました。Miner App v0.1.0もリリースし、GPUマイニング開発を継続中です。"
pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Weekly: ZK集約とマイナーアプリ"
featured: false
tags:
  [
    "weekly-update",
    "zero-knowledge-proofs",
    "gpu-mining",
    "miner-app",
    "ama",
    "substrate",
  ]
---

今週、チームはチェーンとCLI双方でZKトランザクション集約の第一段階を完了し、モックテストを実際の転送検証に置き換えました。Miner App v0.1.0バイナリもリリースしました。

## Development News

- 週次Githubアクティビティレポート（150件以上のイベント）: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## Core Tech

- wormhole回路とフィールド整合する新qp-headerプリミティブをチェーン上に作成し、Substrateの汎用ヘッダーを置き換えました。
- 集約回路をブロックヘッダー検証と隣接ブロック間の接続に対応するよう更新しました。
- マイニングアルゴリズムのGPU実装はおおよそ80%完了しています。
- rusty-crystals監査の第一段階を完了し、問題の大半に対応しました。
- runtime内のpanicに関する内部監査を実施しました（最近のCloudflare unwrapバグに触発されて）。
- 標準Substrateパレット向けにCLIへvestingコマンドを追加しました。

## Network & Infra

- Subsquidデプロイを1スクリプトに集約しました。
- Quantus-Miner向けDockerイメージとリリースプロセスを作成しました。
- Miner-stack（Docker Compose + 監視スタック + ドキュメント）をデプロイしました。
- Explorer & Task Master向けの監視ダッシュボードとアラートを追加しました。

## Web & Mobile App Updates

- アプリ内紹介システムとユーザー向けイベント追跡メトリクス（Quantus Quests）をローンチしました。
- 全プラットフォーム向けマイナーアプリバイナリをリリースしました: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 （macのみ徹底的にテスト済み）。
- モバイルウォレットの移行問題と各種バグ報告を修正しました。
- 送信画面ウィジェットをテスト可能にリファクタリングし、ユニット/ウィジェットテストを追加しました。
- ウェブサイトのQuestsページに検索機能を追加しました。
- Task Masterリーダーボードエンドポイントに検索対応と結果へのランク表示を追加しました。

## Content & Partnerships

- 初のコミュニティAMAをX Spacesで開催: https://x.com/QuantusNetwork/status/1991341042390692210
- Ârc創設者James氏とのポッドキャスト。
- 新たに2名の顧問/KOLを獲得しました。

## Industry Updates

- Scott AaronsonがShorのアルゴリズムを実行するフォルトトレラント量子コンピュータのタイムラインを「次回の米大統領選挙前」に更新: https://scottaaronson.blog/?p=9325
