---
title: "Quantus Weekly: ZKトランザクション集約とマイナーアプリのリリース"
description: "今週のアップデート：ZKトランザクション集約の第一段階完了、マイナーアプリv0.1.0のリリース、GPUマイニング実装の進捗状況など。"
pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Weekly: ZKトランザクション集約とマイナーアプリのリリース"
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

今週、チームはチェーンとCLIの両方でZKトランザクション集約の第一段階を完了し、モックテストを実際の送金検証に置き換えました。また、マイナーアプリv0.1.0のバイナリをリリースし、現在利用可能となっています。

## 開発ニュース

- 150件以上のイベントを含む週刊Github活動レポート：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## コア技術

- Substrateの汎用ヘッダーに代わる、ワームホール回路とフィールド調整された新しいqp-headerプリミティブをチェーン上に作成しました。
- ブロックヘッダーの検証と隣接するブロック間の接続をサポートするように集約回路を更新しました。
- マイニングアルゴリズムのGPU実装は約80%完了しています。
- rusty-crystals監査の第一段階が完了し、問題の大部分は対処されました。
- ランタイムでのパニックに関する内部監査を実施しました（最近のCloudflareのunwrapバグに触発されたものです）。
- 標準のSubstrateパレット用にベスティングコマンドをCLIに追加しました。

## ネットワーク & インフラ

- Subsquidのデプロイを1つのスクリプトに合理化しました。
- Quantus-MinerのDockerイメージ作成とリリースプロセスを構築しました。
- マイナースタック（Docker Compose + モニタリングスタック + ドキュメント）をデプロイしました。
- ExplorerとTask Master用のモニタリングダッシュボードとアラートを追加しました。

## ウェブ & モバイルアプリのアップデート

- アプリ内リファラルシステムとユーザー向けイベントトラッキング指標（Quantus Quests）を開始しました。
- 全プラットフォーム向けにマイナーアプリのバイナリをリリースしました：https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0（ただし、徹底的にテストされているのはMacのみです）。
- モバイルウォレットの移行問題やその他のさまざまなバグ報告を修正しました。
- 送金画面のウィジェットをテスト可能にするためにリファクタリングし、ユニット/ウィジェットテストを追加しました。
- ウェブサイトのQuestsページを検索機能付きで更新しました。
- Task Masterのリーダーボードエンドポイントを検索対応に更新し、結果にランクを追加しました。

## コンテンツ & パートナーシップ

- X spaceによる初のコミュニティAMA：https://x.com/QuantusNetwork/status/1991341042390692210
- Ârcの創設者James氏とのポッドキャスト：https://www.youtube.com/watch?v=eac4aRF50qU
- 2名の新しいアドバイザー/KOLを迎えました。

## 業界の最新動向

- Scott Anderson氏が、ショアのアルゴリズムを実行する耐故障性量子コンピュータのタイムラインを「次回の米大統領選挙前」に更新しました：https://scottaaronson.blog/?p=9325
