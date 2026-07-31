---
title: "Quantus Weekly: Planckテストネット報酬"
description: "Planckテストネットが早期マイナー向けに公開。TestFlightとストア向けアプリ移行、GPUマイニング、コア・インフラ・ウォレット更新をまとめた週次アップデートです。"
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly: Planckテストネット報酬"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

早期のハッシュレートは重要です。

2,100 万 BTC 供給量の半分は、誰も気にしていなかった最初の 4 年間に放出されました。

誰でもマイニングでき、初期のブロック報酬は 50 BTC でした。

わずかな計算サイクルで、血統を引退させられたかもしれません。

Quantus はプルーフ・オブ・ワークです。最大供給量は 2,100 万 QUAN。

Bitcoin と同様、早期マイナーはネットワーク立ち上げの見返りとしてより多くの報酬を得ます。

本日、Planck テストネットをローンチしました。

メインネット前に Quantus をストレステストしています。

TestFlight でアプリをお使いの方は、ワンクリック移行のプロンプトが表示されます。

iOS または Google Play ストアからアプリをダウンロードした方は、今後数日以内にアップデートが展開されます。

Quantus をマイニングしている方は、今すぐ Planck テストネットのマイニングを開始できます。

チェーンリポジトリの wiki で、GPU 実装（CPU マイナーより効率的）を含む更新されたマイニングガイドをご確認ください。

シンプル UI のマイナーアプリはまだアップグレード中ですが、技術的なマイナーであれば新テストネットのマイニングを今すぐ始められるはずです。問題があればお知らせください。

このテストネットはリハーサルです。チェーンが本番稼働すればハッシュレートは急速に上がり、初日に備えてセットアップを整えておきたいはずです。

今週のその他の成果は以下のとおりです。

### コア技術 & ZK

- 新テストネットをローンチ。
- メインネット準備のため sudo パレットを削除。
- ネットワーク同期を修正。
- single state mem pool を修正。
- Poseidon を最新版に更新。

### ネットワーク & インフラ

- 最小ネットワーク要件を含むノードドキュメントを更新。
- Subsquid インデクサーを最新チェーンバージョンに更新し、可逆およびキャンセルイベント extrinsic タイプを修正、Docker イメージ v0.6.0 をリリース。
- Task Master リスクチェッカーエンドポイントにレート制限を追加し、CORS ポリシーを更新。

### Web & モバイルアプリ

- モバイルアプリの高セキュリティフローを復元し、UX 修正をリリース。
- ウォレットホームページをリデザインし、ボタン・アイコン・トランザクションリストコンポーネントを更新、最新 Subsquid インデクサー向け新 GraphQL クエリを統合。
- モバイルウォレットのページアニメーション、ホームページヒーローバナーのバグ、非ホームページルートでのスクロール時ナビバー暗転を修正。

### コンテンツ & パートナーシップ

- Chris が [@mobymedia](https://x.com/mobymedia) ポッドキャストに出演: [https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- 耐量子ゼロ知識証明ポッドキャストを公開（[@ethan_t_c_](https://x.com/ethan_t_c_) と [@YuviLightman](https://x.com/YuviLightman)）: [https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- シンガポールの GitEx に参加。
- Network School にて Dr. [@zina_cinker](https://x.com/zina_cinker) との満席セッションを開催: [https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris が [@ArcanumVentures](https://x.com/ArcanumVentures) ep. 47 に 4 月 16 日（木）14:00 UTC / 22:00 シンガポール時間にライブ出演: [https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- State of Quantum レポートの配布とコメント反映を継続。
