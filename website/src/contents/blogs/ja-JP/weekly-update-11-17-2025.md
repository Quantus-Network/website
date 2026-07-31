---
title: "Quantus Weekly: PoW監査完了とDiracローンチ"
description: "EquilibriumによるPoWとPoseidonの監査を完了し、ブロックヘッダー向けZK証明を出荷。Diracテストネットを今週Quantus上でローンチしました。"
pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: PoW監査完了とDiracローンチ"
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

今週、チームはEquilibriumによるPoWアルゴリズムとPoseidonハッシュ関数の監査を完了し、更新アプリを両アプリストアへ出荷しました。

## Development News

- 週次Githubアクティビティレポート（147イベント）: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- 全問題を解決したPoWアルゴリズムとPoseidonハッシュ関数の監査はこちら: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## Core Tech

- dirac testnetに対応するようCLI（コマンドラインインターフェース）を更新しました。
- ブロックヘッダー由来のZK証明生成を実装しました。静的ダミー証明だけでなく動的データで回路ロジックが機能することを証明する大きなマイルストーンです。
- ノードコマンドラインの問題を解決しました。

## Network & Infra

- チェーン向けマルチアーキテクチャDockerワークフローを修正しました。
- 全ノードの更新、旧テストネットの削除、新ダッシュボードとアラートの展開によりDiracリリースを完了しました。grafana.quantus.cat と telemetry.quantus.cat をご覧ください。
- Faucetを新ライブラリと新サーバーで更新し、メトリクスと紹介リーダーボード用の/kingコマンドを追加しました。
- Grafana向けPostgreSQLバックエンドでネットワーク監視を強化し、各種修正と最適化を行いました。
- 新サーバーにIaC（Infrastructure as Code）を構築し、Heisenberg & Diracノードをすべて接続しました。
- SubsquidインデックスサービスをDirac testnet対応に更新し、Prometheusメトリクスを追加しました。

## Web & Mobile App Updates

- モバイルウォレットv1.1.1をアプリストアへリリースしました。Appleから追加情報が求められていますが、まもなく解決予定です。
- モバイルウォレットをDirac testnetへ接続するよう更新しました。
- スケジュール通知、アカウント名更新、生体認証に関する複数のモバイルウォレットバグを修正しました。
- マイナーアプリを新Diracチェーンに対応させ、統計レポートの問題を修正しました。
- マイナーアプリに新設定画面とアプリ内バイナリ更新機能を追加しました。
- Task MasterアプリケーションをDirac testnetへ移行し、Prometheusメトリクスを追加しました。
- 今後の紹介機能向けに、Faucet botにリーダーボード確認コマンドを追加しました。

## Content & Partnerships

- 複数の資金調達契約書を送付し、25万ドルの口頭コミットメントを獲得しました。
- Quantum CanaryとQuantus双方のSEOをThe Quantum Insiderに依頼しました。
- ソーシャルメディア成長追跡用の新n8nフローを作成しました（ポッドキャスト登録者が500人を突破）。
- DeFiビルダーJangle氏とのポッドキャスト: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## Industry Updates

- Quantum Canaryが量子暗号学者Dr. Or Sattath氏へのインタビューを公開。クローン不可能暗号と量子マネー、Bitcoinの速度・セキュリティ・プライバシー向上の可能性を探りました: https://www.quantumcanary.org/insights/or-sattath-interview
- 448量子ビット中性原子コンピュータがフォルトトレランスを達成: https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces

- 木曜11時（香港時間）にQuantum FUDとQuantusについてX Spacesで議論します: https://x.com/i/spaces/1RDGlAZlgPoJL?s=20
