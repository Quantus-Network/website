---
title: "Quantus Weekly: Diracテストネットと格子暗号監査"
description: "Diracテストネットをリリースし、PoWアルゴリズムと格子暗号ライブラリを更新。外部監査を開始し、モバイルウォレットとlibp2pにも統合済みです。マイナーはアップグレードを推奨します。"
pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: Diracテストネットと格子暗号監査"
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

今週、チームはDiracテストネットをリリースし、PoWアルゴリズムと格子暗号ライブラリqp-rusty-crystalsのチェーン全体更新を完了しました。このコアライブラリは現在外部監査中で、定数時間署名を含みます。更新はモバイルウォレットとlibp2pに統合済みです。

**マイナーの方は新しいDiracテストネットへアップデートしてください**

## Development News

- 週次Githubアクティビティレポート（12件のプルリクエスト、3件マージ）: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## Core Tech

- 定数時間鍵生成と署名を備えたqp-rusty-crystalsの完全なリファレンス実装をリリース・マージしました。
- rusty crystalsの全KATテストを解決し、定数時間化と未解決のリリーススクリプト問題を修正しました。
- qp-rusty-crystalsの監査を開始しました。
- ブロックヘッダー検証回路の実装を完了しました。
- 回路パディングを排除する新バージョンのブロックヘッダーハッシャーに更新しました。
- ブロックヘッダー内の欠落digestログに関するバグを調査・解決しました。
- wormholeサンプルバイナリにキャッシュ機能を追加し、最新の証明を保存してデバッグを容易にしました。
- GHOSTDAGコンセンサス論文の実装を開始しました。

## Network & Infra

- 全サーバーでDirac 0.4.0をリリースしました。
- 外部マイナービルド1.0.0をリリースしました。
- rusty crystals更新に合わせてチェーンを更新しました。
- 新しいPrometheus & Grafanaダッシュボードを追加し、アラート用のメール通知を設定しました。
- 更新されたテレメトリーサービスを導入しました。
- Fedoraマシン向けのリファレンスセットアップを作成しました。
- 新Diracテストネット向けに2台の新しいセキュアVPSサーバーをデプロイしました。
- Quantus.catドメインを確保し、全マシンにCloudflareトンネルを設定しました。
- Subsquidデプロイプロセスをblue-greenデプロイメント対応にアップグレードし、ゼロダウンタイム更新を実現しました。
- Dockerイメージを自動生成・GitHubへ公開するワークフローを作成しました。
- http://quantu.se/ のインデックス問題を修正し、正しいノードURLを指すメタデータに更新しました。

## Web & Mobile App Updates

- モバイルアプリの通知機能を完了しました。
- ルートインテント処理をリファクタリングし、ディープリンクのパフォーマンスと信頼性を改善しました。
- マイナーダッシュボードのレイアウトを完全レスポンシブ化しました。
- Quantus Explorerの検索機能が古いGraphQLエンドポイントを使用していたバグを修正しました。
- Quantus Explorer APIクライアントをモダンなフックにリファクタリングし、パフォーマンスを改善しました。

## Content & Partnerships

- 9度のボディビルチャンピオン、起業家、クリエイターRemus Boroiu氏とのポッドキャスト。
- Chainwire経由でプレスリリースを配信しました。

## Quantum Canary

- 量子関連株の分析: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- RAND Corporationが世界政策形成とPQC移行タイムライン加速に果たす影響力の深掘り: https://www.quantumcanary.org/insights/rand-quantum-controversy
- Princetonが45量子ビットのタンタルム・サファイア量子ビットのコヒーレンス時間を3倍に延長: https://www.nature.com/articles/s41586-025-09687-4
