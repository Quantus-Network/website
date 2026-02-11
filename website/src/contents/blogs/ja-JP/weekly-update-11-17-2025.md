---
title: "Quantus Weekly: PoWの監査完了とDiracテストネットの開始"
description: "今週のアップデート：EquilibriumによるPoWおよびPoseidonハッシュの監査完了、ブロックヘッダーのZK証明生成、Diracテストネットの開始など。"
pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: PoWの監査完了とDiracテストネットの開始"
featured: false
tags:
  [
    "weekly-update",
    "audit",
    "pow",
    "poseidon",
    "dirac-testnet",
    "zero-knowledge-proofs",
    "mobile-wallet",
    "miner-app",
    "podcast",
  ]
---

今週、チームはEquilibriumによるプルーフ・オブ・ワーク（PoW）アルゴリズムとPoseidonハッシュ関数の監査を完了し、更新されたアプリを両方のアプリストアにリリースしました。

## 開発ニュース

- 147件のイベントを含む週刊Github活動レポート：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- すべての問題が解決されたPoWアルゴリズムとPoseidonハッシュ関数の監査結果はこちらで確認できます：https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## コア技術

- コマンドラインインターフェース（CLI）をDiracテストネットに対応するように更新しました。
- ブロックヘッダーの出所に関するZK証明の生成。これは、当社の回路ロジックが静的なダミープルーフだけでなく、動的なデータでも機能することを証明する重要なマイルストーンです。
- ノードのコマンドラインに関する問題を解決しました。

## ネットワーク & インフラ

- チェーンのマルチアーキテクチャDockerワークフローを修正しました。
- すべてのノードを更新し、古いテストネットを削除し、新しいダッシュボードとアラートを導入することで、Diracリリースを完了しました。grafana.quantus.catおよびtelemetry.quantus.catを参照してください。
- 新しいライブラリ、新しいサーバーでFaucetを更新し、メトリクスと紹介リーダーボード用の新しい/kingコマンドを追加しました。
- GrafanaのPostgreSQLバックエンドによりネットワーク監視を強化し、さまざまな修正と最適化を追加しました。
- 新しいサーバーにIaC（Infrastructure as Code）をセットアップし、すべてのHeisenbergおよびDiracノードを接続しました。
- DiracテストネットをサポートするようにSubsquidインデックスサービスを更新し、Prometheusメトリクスを追加しました。

## ウェブ & モバイルアプリのアップデート

- モバイルウォレットのバージョン1.1.1をアプリストアにリリースしました。Appleからはさらに情報を求められていますが、まもなく解決される予定です。
- モバイルウォレットをDiracテストネットに接続するように更新しました。
- スケジュールされた通知、アカウント名の更新、生体認証に関する問題など、モバイルウォレットのいくつかのバグを修正しました。
- 新しいDiracチェーンを使用するようにマイナーアプリを更新し、統計レポートを修正しました。
- マイナーアプリに新しい設定画面とアプリ内バイナリアップデート機能を追加しました。
- Task MasterアプリケーションをDiracテストネットに移行し、Prometheusメトリクスを追加しました。
- 今後の紹介機能のために、リーダーボードを確認するための新しいコマンドをFaucetボットに追加しました。

## コンテンツ & パートナーシップ

- 複数の資金調達契約が進行中で、25万ドルの口頭でのコミットメントを得ています。
- Quantum CanaryとQuantusの両方のSEOを担当するためにThe Quantum Insiderを雇用しました。
- ソーシャルメディアの成長を追跡するための新しいn8nフローを作成しました（ポッドキャストの購読者が500人を超えました）。
- DeFiビルダーのJangle氏とのポッドキャスト：https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## 業界の最新動向

- Quantum Canaryが、量子暗号学者のOr Sattath博士による、クローン不可能な暗号と量子マネーに関するインタビューを公開しました。ビットコインの速度、セキュリティ、プライバシーをアップグレードする可能性を探っています：https://www.quantumcanary.org/insights/or-sattath-interview
- 448量子ビットの中性原子コンピュータが耐故障性を達成：https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces

- 今週木曜日の香港時間午前11時に、Xで量子FUDとQuantusについて議論します：https://x.com/i/spaces/1RDGlAZlgPoJL?s=20
