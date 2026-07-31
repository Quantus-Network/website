---
title: "Quantus Weekly: Planck報酬請求と2倍高速化"
description: "耐量子プライベートトランザクション向け初のPlanckテストネット。マイナー移行、CLI報酬請求、証明スループットが再び2倍に。Quantusの週次アップデートです。"
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: Planck報酬請求と2倍高速化"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Planck は、Quantus の耐量子プライベートトランザクションをサポートする最初のテストネットです。

今週、マイナーの半数以上が Planck へ移行しました。

他のチェーンが量子脅威が本当かどうか議論しているあいだ、私たちは公開の場でソリューションをストレステストしています。

CLI からマイニング報酬をモバイルウォレットの transparent アドレスへ請求できるようになりました。

Apple Silicon と Linux でエンドツーエンドのマイニングを検証済みです。

現在、モバイル UI は transparent アドレスタイプのみをサポートしています。詳細は近日公開します。

[docs.quantus.com](https://docs.quantus.com) が公開され、ノードのセットアップ、マイナーの実行、モバイルウォレットへの報酬請求までを案内するマイニングガイドをご覧いただけます。

以前の Quantus テストネット版でマイニングまたは利用していた方は、アップデート時に移行を促されます。

残高はリセットされますが、設定の「mining rewards」を表示すれば、以前のテストネットでマイニングしたすべてのブロックのクレジットは保持されています。

Planck で各アカウントがマイニングしたブロック数も追跡しています。

集約 prover 速度も今週 2x8 分割アーキテクチャにより 2 倍になりました。

今週のその他の成果は以下のとおりです。

### GitHub アクティビティ（マージ済みプルリクエスト 27件）:

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### コア技術 & ZK

- 2x8 分割証明アーキテクチャ（各 8-leaf バンドルに ZK なし、ルート証明に ZK ラッパー適用）により集約 prover 性能を 2 倍化。
- ZK 研究論文をプレプリントに提出。
- qp-plonky2 の新 split mask ZK オプションにおけるプライバシーリークバグを発見・修正。
- threshold Dilithium の監査項目に対処。
- CLI 経由でマイニング報酬を請求可能に。
- CLI ハッシャーを blake2-256 使用に更新。
- CLI ワームホール残高リカバリ修正をリリース。
- Tech Collective メンバーがランタイムアップデートを正常に実行。

### ネットワーク & インフラ

- Planck: 新変更をマージ・リリース。内部 Planck テストネット稼働中。
- ストレステスト: 新戦略を実装し、複数回実行。
- Faucet: Twitter 向け例外処理を改善、詳細モニタリング向けメトリクスを拡張。
- Planck と faucet 向けモニタリングダッシュボードを更新・拡張。
- より選択的なアラートを実装。
- A1-Planck ノードをドイツへ、A2-Planck ノードを米国へ移設。
- Planck テストネット向け Subsquid を更新: 残高移動を修正、hasher を blake2b に戻し、マイニング報酬表示を追加。
- エクスプローラーを Planck テストネットに更新し、ワームホールブランチを適切にマージ。
- Apple Silicon と Linux で MVP マイナーをエンドツーエンド実行。Linux GPU マイニングは引き続きトラブルシュート中。
- AI マイニングスキル（SKILL.md）を構築。テスト中 2 分未満でマイニング起動を確認。

### Web & モバイルアプリ

- [docs.quantus.com](https://docs.quantus.com) を公開。
- [q.day](https://q.day) ランディングページをデプロイ。
- 新テストネット向け修正を含むモバイルウォレット v1.3.2 と v1.3.3 をリリース。
- ウォレットにマイニング報酬表示を追加。
- ウォレットのトランザクション詳細、受取、アクティビティ画面をリデザイン実装。
- マイニングガイドを更新。

### コンテンツ & パートナーシップ

- Q-Day 登録が 100 を突破。詳細は [q.day](https://q.day)。
- State of Quantum レポートについて外部コントリビューターからのコメントを受領・反映。
