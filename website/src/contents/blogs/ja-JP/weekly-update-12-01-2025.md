---
title: "Quantus Weekly: 格子暗号監査とKeystone"
description: "Rusty Crystals格子暗号監査の指摘事項をすべて解決し、Polkadot SDKネットワークを更新。QuantusアドレスをKeystoneオープンソースハードウェアウォレットに実装しました。"
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: 格子暗号監査とKeystone"
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

先週、チームは格子暗号ライブラリ（rusty-crystals）の監査で指摘された全問題に対応し、最新Polkadot SDKに合わせたネットワーク更新を出荷しました。オープンソースKeystoneハードウェアウォレットファームウェアへのQuantusアドレス対応も実装し、市場インテリジェンスプラットフォーム「The Quantum Insider」への掲載も完了しました。

週次Githubアクティビティレポート（17件のマージ済みプルリクエスト）: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## Core Tech

- コア格子暗号ライブラリ（qp-rusty-crystals）の監査指摘事項をすべて解決しました。
- 今後の監査に向けZK-Aggregation証明の準備（回路、ベンチマーク、QIPドキュメント）を完了しました。
- plonky2 poseidon2ゲートとzk-trieで証明速度向上の最適化を発見しました。
- qp-headerをロールバックし、sc-networkを最新Polkadot SDK標準に合わせて更新しました。

## Network & Infra

- Windows向けDesktop UI Minerをリリースし、LinuxとMacOSのバグ修正を行いました: https://github.com/Quantus-Network/quantus-apps/releases/latest
- ピアブロードキャストに関する潜在的P2Pセキュリティ脆弱性をパッチし、悪意あるピアによるネットワーク過負荷を防止しました。
- オープンソースKeystoneハードウェアウォレットファームウェアにQuantusアドレス対応を実装しました（現在シミュレーター上）。

## Web & Mobile App Updates

- モバイルウォレットv1.1.2をアプリストアへリリースし、ポーリング、取引フロー、通知の問題を解決しました。
- X API向けRust SDK（rusx）を構築し、ユーザーQuests用にXとETHアカウントを紐付けるエンドポイントを追加しました。

## Content & Partnerships

- The Quantum Insiderへの掲載を確保し、量子アナリスト向けのバックリンクと可視性を向上させました。
- Apple、Spotify、RSSでポッドキャストをローンチしました: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112
- 初回ニュースレターをメール登録者へ送信しました。
- 今週木曜のコミュニティX Spaceを予定: https://x.com/i/spaces/1mnGeNXoZOZJX
- ML研究者Brian Chau氏とのポッドキャスト: https://www.youtube.com/watch?v=m_FPbzAcXEk

## Industry Updates

- Quantum Canaryが「Harvest Now, Crack Later」脅威の緩和に関する戦略ガイドを公開。新たに確定したNISTポスト量子標準を用いた実践的移行パスを概説: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive
