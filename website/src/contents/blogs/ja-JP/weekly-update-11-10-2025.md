---
title: "Quantus Weekly: Diracテストネットのリリースと格子暗号の監査"
description: "今週のアップデート：Diracテストネットのリリース、PoWアルゴリズムと格子暗号ライブラリの更新完了、新しいインフラの改善など。"
pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: Diracテストネットのリリースと格子暗号の監査"
featured: false
tags:
  [
    "weekly-update",
    "dirac-testnet",
    "lattice-cryptography",
    "pow",
    "libp2p",
    "ghostdag",
    "blue-green-deployment",
  ]
---

今週、チームはDiracテストネットをリリースし、プルーフ・オブ・ワーク（PoW）アルゴリズムと格子暗号ライブラリ「qp-rusty-crystals」のチェーン全体にわたる更新を完了しました。このコアライブラリは現在外部監査を受けており、コンスタントタイム署名が含まれています。この更新は現在、モバイルウォレットとlibp2pに統合されています。

**マイナーの方は、新しいDIRACテストネットに更新してください**

## 開発ニュース
- 12件のプルリクエスト（3件マージ済み）を含む週刊Github活動レポート：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## コア技術
- コンスタントタイムのキー生成と署名を備えたqp-rusty-crystalsの完全なリファレンス実装をリリースし、マージしました。
- rusty-crystalsのすべてのKATテストを解決し、コンスタントタイム化し、未解決のリリーススクリプトの問題を修正しました。
- qp-rusty-crystalsの監査を開始しました。
- ブロックヘッダー検証回路の実装を完了しました。
- ブロックヘッダーハッシャーを、回路のパディングを排除する新しいバージョンに更新しました。
- ブロックヘッダーのダイジェストログの欠落に関するバグを調査し、解決しました。
- デバッグを容易にするために最新の証明を保存するキャッシュ機能をワームホールサンプルバイナリに追加しました。
- GHOSTDAGコンセンサスペーパーの実装を開始しました。

## ネットワーク & インフラ
- すべてのサーバーでDirac 0.4.0をリリース。
- 外部マイナービルド1.0.0をリリース。
- rusty-crystalsの更新に合わせてチェーンを更新。
- 新しいPrometheusおよびGrafanaダッシュボード。アラート用のメール通知が機能するように構成されました。
- 新しく更新されたテレメトリサービス。
- Fedoraマシン用のリファレンスセットアップを作成しました。
- 新しいDiracテストネット用に2つの新しいセキュリティ保護されたVPSサーバーをデプロイしました。
- Quantus.catドメインを保護し、すべてのマシンにCloudflareトンネルを構成しました。
- ゼロダウンタイム更新のためのブルーグリーンデプロイメントをサポートするようにSubsquidのデプロイプロセスをアップグレードしました。
- Dockerイメージを自動生成してGitHubに公開するワークフローを作成しました。
- http://quantu.se/ でのインデックス作成の問題を修正し、正しいノードURLを指すようにメタデータを更新しました。

## ウェブ & モバイルアプリのアップデート
- モバイルアプリの通知機能を完了しました。
- ディープリンクのパフォーマンスと信頼性を向上させるために、ルートインテントの処理をリファクタリングしました。
- マイナーダッシュボードのレイアウトが完全にレスポンシブになりました。
- Quantus Explorerで検索機能が古いGraphQLエンドポイントをまだ使用していたバグを修正しました。
- パフォーマンス向上のために、モダンなフックを使用するようにQuantus Explorer APIクライアントをリファクタリングしました。

## コンテンツ & パートナーシップ
- 9回のボディビルチャンピオン、起業家、クリエイターであるRemus Boroiu氏とのポッドキャスト：https://www.youtube.com/watch?v=OtBKnaFAe_8
- Chainwire経由のプレスリリース。

## Quantum Canary
- 量子関連銘柄の分析：https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- グローバルポリシーの形成とPQC移行のタイムライン加速におけるRAND Corporationの影響力のある役割についてのディープダイブ：https://www.quantumcanary.org/insights/rand-quantum-controversy
- プリンストン大学が45個のサファイア上タンタル量子ビットのコヒーレンス時間を3倍にする研究を発表：https://www.nature.com/articles/s41586-025-09687-4
