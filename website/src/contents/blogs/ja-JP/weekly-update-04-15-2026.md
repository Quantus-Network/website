---
title: "Quantus Weekly：プランク・テストネット公開と初期マイニング報酬"
description: "早期ハッシュレートが重要な理由、マイナー向けにプランク・テストネットが稼働、TestFlight とストア経由のアプリ移行、新チェーンでの GPU マイニング、そして今週のコア・インフラ・ウォレット・コミュニティの更新。"
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly：プランク・テストネット公開と初期マイニング報酬"
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

早期のハッシュレートが物を言う。

2,100 万 BTC の半分は、誰も注目していなかった最初の 4 年で発行された。

誰でもマイニングでき、初期のブロック報酬は 50 BTC だった。

わずかな計算サイクルで、血統すら塗り替えられたかもしれない。

Quantus はプルーフ・オブ・ワーク。最大供給量は 2,100 万 QUAN。

ビットコインと同様、ネットワーク立ち上げに貢献した初期マイナーほど報酬の割合が大きい。

本日、プランク・テストネットをローンチした。

メインネット前に Quantus をストレステストしている。

TestFlight 版アプリを使っている場合は、ワンクリック移行のプロンプトが表示される。

iOS または Google Play ストアからアプリを入れた場合は、数日以内にアップデートが展開される。

Quantus をマイニングしているなら、いまからプランク・テストネットのマイニングを始められる。

チェーンリポジトリの Wiki で、GPU 実装（CPU マイナーより効率的）を含む最新のマイニングガイドを確認してほしい。

シンプルな UI のマイナーアプリはまだアップグレード中だが、より技術に明るいマイナーなら、すでに新テストネットをマイニングできるはず。問題があれば連絡してほしい。

このテストネットは本番前のリハーサルだ。チェーンが本番になればハッシュレートはすぐに伸びる。初日に備えてセットアップを仕上げておきたい。

今週のその他のリリースは次のとおり。

### Core Tech & ZK

- 新しいテストネットをローンチ。
- メインネットに向け sudo パレットを削除。
- ネットワーク同期を修正。
- シングルステートメモリプールを修正。
- Poseidon を最新版に更新。

### Network & Infra

- ノード文書を最小ネットワーク要件付きで更新。
- Subsquid インデクサを最新チェーン版に合わせて更新し、リバーシブルおよびキャンセル済みのイベント・エクストリンシック型を修正、Docker イメージ v0.6.0 をリリース。
- Task Master リスクチェッカー API にレート制限を追加し、CORS ポリシーを更新。

### Web & Mobile App Updates

- モバイルアプリの高セキュリティフローを復元し、UX 修正をリリース。
- ウォレットホームを再設計し、ボタン・アイコン・トランザクションリストコンポーネントを更新、最新 Subsquid インデクサ向けの新 GraphQL クエリを統合。
- モバイルウォレットページのアニメーション、ホームヒーローバナーの不具合、ホーム以外のルートでのスクロール時ナビバーの暗転を修正。

### Content & Partnerships

- Chris が [@mobymedia](https://x.com/mobymedia) のポッドキャストに出演: [https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- [@ethan_t_c_](https://x.com/ethan_t_c_) と [@YuviLightman](https://x.com/YuviLightman) とのポスト量子ゼロ知識証明ポッドキャストを公開: [https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- シンガポールの GitEx に参加。
- Dr. [@zina_cinker](https://x.com/zina_cinker) との満席セッションを Network School で開催: [https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris が [@ArcanumVentures](https://x.com/ArcanumVentures) ep. 47 に出演（4 月 16 日木曜 14:00 UTC / シンガポール 22:00）: [https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- State of Quantum レポートの配布とコメント機能の実装を継続。
