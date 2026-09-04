---
title: "Quantus Weekly: キラーアプリは「お金」"
description: "今週はMithril向けにDilithium DKGを書き直し、閾値署名の修正を出荷。Wormhole SDKヘルパーを公開し、TestFlightでウォレットv1.4.0をリリースしました。"
pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: キラーアプリは「お金」"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
    "dilithium",
    "wormhole",
    "mithril",
    "network-school",
  ]
---

市場がゆっくりと目覚めつつある、ひとつの確信があります。

キラー級の暗号アプリは、他のどれよりも多くの価値を生み、取り込むでしょう。

それはステーブルコインでも、予測市場でも、DeFiでもありません。

Web3でも、ソーシャルネットワークでも、PFPコレクションでも、間違いなくありません。

それは「お金」です。この業界を生んだアイデアそのもの。

最初の思想は、純粋な思想です。ピアツーピアの電子現金。

安全で、プライベートで、スケーラブルなお金こそ、数兆ドル規模の機会です。

今週、更新されたMithril論文に合わせてDilithium鍵向けのQuantus分散鍵生成（DKG）を書き直し、閾値署名実装全体に修正を出荷しました。

Quantus鍵を複数の当事者間でシャーディングできるようになります。セキュアな統合にとって重要な機能です。

Wormhole仕様の監査項目に対応し、公開Quantus CLI SDKにヘルパーを公開。外部開発者向けにプライベートトランザクションサポートを開放しました。Wormholeは、スケーラブルなポスト量子プライバシーを実現する仕組みです。

また、モバイルアプリ体験をシンプルに美しく整えたフルリスキンのウォレットv1.4.0をリリースしました（現在TestFlightで配信中）。

### Github Activity（マージ済みプルリクエスト16件）:

![Github Stats](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### Core Tech & ZK:

- 更新されたMithril論文に合わせてDilithium鍵向けの分散鍵生成を書き直しました。
- 3件の監査指摘に基づき閾値署名実装を強化しました。
- お釣り出力（change outputs）に関する監査項目に対応するためWormhole仕様を更新しました。
- 公開Quantus CLI SDKにWormholeヘルパーを公開し、deposit-to-mintのエンドツーエンド例ワークフローを追加しました。
- CLIトランザクションライフサイクルを、submitted・included・finalizedの各状態を明確に分離し、正確な小数手数料パース、より厳格なバージョン互換チェック、オーバーフロー対応バッチ転送を備えてリファクタリングしました。
- 難易度調整アルゴリズム改善のためのベンチマークツールを構築しました。
- 各種集約ツリートポロジーとCPU使用量を調査・ベンチマークしました。
- ヒューマンチェックフレーズのスペルミスを修正しました。

### Network & Infra:

- ストレステストスイートにWormholeモードを追加し、Planckテストネットで多数回実行しました。
- Subsquidブロックチェーンインデクサーを本番グレードのサーバーへ移行し、アカウント・チェーン統計データを追加しました。
- Explorerクエリをベンチマークし、コストの高いクエリを削除しました。
- 全VPSのOSを更新し、インフラを文書化しました。
- マイナースタックを更新し、Windows上でマイナーアプリをテストしました。

### Web & Mobile App Updates:

- クレーム機能付きPlanck向けGUIマイナー（v0.4.1）を出荷しました。
- フルUIリスキンとリアルタイム為替レートを備えたウォレットv1.4.0をリリースしました（現在TestFlightで配信中）。
- ウォレットのバグ修正：ホームページ残高スタイル、Activityコンポーネントスタイル、受取画面。
- Task Master：為替レートエンドポイントを追加し、チェックサム依存関係を更新しました。
- Quantusウェブサイトを更新：ドキュメントリンクをdocs (dot) quantus (dot) comへ、TPS表示を更新し、ウィークリーアップデートを掲載しました。

### Content & Partnerships:

- Spotify、Apple、YouTube全体でポッドキャストブランディングを更新しました。
- Network Schoolで初のQuantus Glassesを[$QTC](https://x.com/search?q=%24QUAN&src=cashtag_click)で販売しました。
- QuantusはNSフェアにブースを出展し、アプリユーザーとQ-day登録者をオンボーディングしました。
