---
title: "Quantus Weekly: Dilithiumしきい値署名"
description: "今週は分散調整向けのDilithiumしきい値署名をリリースしました。ZK回路の改善、モバイルウォレットのアップデート、コミュニティ向けコンテンツもお届けしています。"
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus Weekly: Dilithiumしきい値署名"
featured: false
tags:
  [
    "weekly-update",
    "threshold-signatures",
    "post-quantum-cryptography",
    "dilithium",
    "zero-knowledge-proofs",
    "quantum-safe",
    "blockchain",
  ]
---

権限と権力は複数の当事者に分散されます。分散型の調整。

しかし、ポスト量子署名はビットコイン署名の20〜80倍のサイズです。従来のマルチシグにも用途はありますが、特定のユースケースでは許容できないオーバーヘッドが生じます。

今週、しきい値Dilithium署名をリリースしました。これにより、分散したグループがトランザクションに署名し、オンチェーンで単一の署名を生成できます。要するに、秘密鍵のシャーディングです。

カストディアン、クロスネットワークアプリケーション、チェーンの安全な自動利用にとって不可欠な機能です。

4件のマージ済みプルリクエストを含む週刊Githubアクティビティレポート：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## Core Tech & ZK

- しきい値署名を実装し、安全な分散署名を可能にしました。
- ZK回路のオーバーヘッドを削減しました。
- wormholeサンプルバイナリに証明集約サポートを追加し、チェーンおよびCLIへの統合を進行中です。
- ZK回路とPoseidonハッシュアルゴリズムをアップグレードし、すべてのデータ型を汎用的に処理（汎用ストレージハッシュ）できるようになり、チェーンとCLIに統合済みです。
- ZK回路内でアセットIDに対する証明集約サポートを追加しました。
- より高速なトランザクション処理のためにCLIを最適化し、高セキュリティリカバリースクリプトを追加しました。

## Web & Mobile App Updates

- CPUおよびGPU使用率を細かく調整できるスライダーと、ハッシュレート報告の修正を含むUI Mining Appの新バージョンをリリースしました。
- モバイルアプリへのハードウェアウォレット完全サポートを完成し、マージしました。
- 単一のモバイルウォレットインスタンス内で複数アカウントを管理するサポートを追加しました。
- 高セキュリティ画面を実装し、「Guardian」リカバリーフローの開発を開始しました。
- 「送金」画面のUXを改善し、エラーハンドリングを強化、認証タイマーのバグを修正、アプリアイコンを統一しました。
- 日次データベースバックアップを設定し、システムサービスを修正、Task Masterコード（ウォレットアプリイベントトラッキング）をクリーンアップしました。

## Content & Partnerships

- 最新のプロトコル詳細でホワイトペーパーを更新し、GitHubバージョン管理システムを確立しました：https://github.com/Quantus-Network/whitepaper
- Loreが起源ストーリー「From the Ground Up」を公開しました：https://x.com/JoeMattia/status/2010619972398297164
- Sina（@hubsmoke）とのポッドキャスト——科学への信頼を取り戻す：https://x.com/QuantusNetwork/status/2009929397579723213

## Industry Updates

- Quantum Canaryが量子耐性暗号ウォレットのガイドを公開しました：https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security
