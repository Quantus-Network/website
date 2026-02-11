---
title: "Quantus Weekly: 格子暗号の監査とKeystoneの統合"
description: "格子暗号ライブラリの監査完了、Polkadot SDKへの対応、Keystoneハードウェアウォレットのサポート開始など、今週のアップデートをお届けします。"
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: 格子暗号の監査とKeystoneの統合"
featured: false
tags:
  [
    "weekly-update",
    "lattice-cryptography",
    "keystone",
    "polkadot-sdk",
    "hardware-wallet",
    "audit",
  ]
---

先週、チームは格子暗号ライブラリ（rusty-crystals）の監査で指摘されたすべての事項に対処し、最新のPolkadot SDKに合わせたネットワークアップデートをリリースしました。また、オープンソースのKeystoneハードウェアウォレットのファームウェアにQuantusアドレスのサポートを実装し、市場インテリジェンスプラットフォーム「The Quantum Insider」に当社のプロフィールが掲載されました。

17件のマージされたプルリクエストを含む週刊Github活動レポート：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## コア技術

- コア格子暗号ライブラリ（qp-rusty-crystals）の監査におけるすべての指摘事項を解決しました。
- 次回の監査に向けたZK-Aggregation証明の準備（回路、ベンチマーク、QIPドキュメント）を完了しました。
- 証明速度を向上させるため、plonky2のposeidon2ゲートとzk-trieの最適化を行いました。
- qp-headerをロールバックし、最新のPolkadot SDK標準に合わせてsc-networkを更新しました。

## ネットワーク & インフラ

- Windows用デスクトップUIマイナーをリリース。LinuxおよびMacOS用のバグ修正も実施：https://github.com/Quantus-Network/quantus-apps/releases/latest
- 悪意のあるピアがネットワークに過負荷をかけるのを防ぐため、ピアブロードキャストに関連する潜在的なP2Pセキュリティの脆弱性を修正しました。
- オープンソースのKeystoneハードウェアウォレットファームウェアにQuantusアドレスのサポートを実装しました（現在はシミュレーター内）。

## ウェブ & モバイルアプリのアップデート

- モバイルウォレットv1.1.2をアプリストアにリリースし、ポーリング、トランザクションフロー、通知に関する問題を解決しました。
- X API用のRust SDK（rusx）を構築し、ユーザーのクエスト用にXアカウントとETHアカウントを関連付けるエンドポイントを追加しました。

## コンテンツ & パートナーシップ

- The Quantum Insiderへの掲載を確保し、被リンクと量子アナリストへの認知度を向上させました。
- Apple、Spotify、RSSでポッドキャストを開始：https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112
- メール購読者に創刊号のニュースレターを送信しました。
- 今週木曜日にコミュニティX Spaceを予定：https://x.com/i/spaces/1mnGeNXoZOZJX
- ML研究者のBrian Chau氏とのポッドキャスト：https://www.youtube.com/watch?v=m_FPbzAcXEk

## 業界の最新動向

- Quantum Canaryが「Harvest Now, Crack Later（今収集し、後で解読する）」脅威の緩和に関する戦略ガイドを公開し、新たに最終決定されたNISTポスト量子標準を使用した実用的な移行パスを提示しました：https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive
