---
title: "Quantus Weekly: 高速Poseidon2と軽量チェーン"
description: "Poseidon2ゲートを最適化し8.3倍高速化。チェーンをリファクタリングして約9,000行削減。Binance Blockchain Weekでの所感も共有しました。"
pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Weekly: 高速Poseidon2と軽量チェーン"
featured: false
tags:
  [
    "weekly-update",
    "poseidon2",
    "chain-architecture",
    "wormhole",
    "binance-blockchain-week",
    "solana-breakpoint",
  ]
---

[@EliBenSassonとScott Aaronsonのインタビュー](https://x.com/Starknet/status/1995865652377395421)をご覧になった方も多いでしょう。

![Nic Carter interview summary](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

インタビューでScottはこう述べています。「RSA、Diffie-Hellman、楕円曲線暗号といった暗号コードに、世界のサイバーセキュリティ基盤の多くを基づけることにした。たまたま量子コンピュータが悪用できる数学的性質を持っているだけだ。」

飲み込みにくい現実です。

特にBitcoinは、設計上、大規模なプロトコルアップグレードを容易に計画・実行する能力を欠いています。

つまりBitcoinコミュニティにとって抵抗の最小経路は、問題が存在しないと否定することでした。

![Charles Edwards on Quantum Threat](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

しかし、エラー訂正、量子ビットスケーリング、忠実度の最近のブレークスルーにより、量子コンピューティングの進展を否定することは、Bitcoin、ひいては人間の財産権にとって実存的リスクを意味します。

量子の未来という霧と向き合い、Q-Day到来時に多くのブロックチェーンが行動できなかったことを受け入れなければなりません。

私たちの義務は行動することです。

今週、量子セキュアなBitcoinを構築するために行ったことは以下のとおりです。

週次Githubアクティビティレポート（8件のマージ済みプルリクエスト）: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## Core Tech & ZK

- poseidon2ゲートを最適化しました。1パーミュテーションあたりの回路トレース行数を31から1に削減。ゲートは8.3倍高速化し、より大きなwormhole prover全体では4.5倍の速度向上を実現しました。
- wormhole証明の記録にトランザクション拡張を使用するようチェーンアーキテクチャをリファクタリングしました。balancesパレットのカスタムフォークが不要になり、約9,000行のコードを削除しました。
- wormhole転送にAsset ID対応を追加しました。
- qp-rusty-crystals監査で指摘された問題を解決しました。

## Network & Infra

- GPUマイナー実装を改善しました。
- sc-networkを更新・マージし、ピアブロードキャストの修正によりノード同期をスムーズにしました。
- Schrodinger（旧テストネット）のネットワーク履歴をアーカイブしました。
- subsquidアーキテクチャをデバッグ・改善しました。新モニタースクリプトと再起動プロトコルを追加し、Explorerとウォレットへのデータ稼働率を向上させました。

## Web & Mobile App Updates

- Keystone統合を改善し、PINキャッシュ消去とPIN付きQRコードの安全性を追加しました。
- モバイルアプリへのX OAuth接続用rusxリポジトリを公開し、ツイートクエリと検索をサポートするようバックエンドをアップグレードしました。
- 整数処理の問題や誤検知の失敗通知を含む各種バグ修正のアップデートをリリースしました。

## Content & Partnerships

- Binance Blockchain WeekとSolana Breakpointのためドバイに滞在中。顧問、KOL、新規ユーザーとの面会を進めています。
- 木曜予定の週次X Spaceにもご注目ください。
- Quantusチームとのポッドキャスト: https://www.youtube.com/watch?v=konWKWrl5hs
