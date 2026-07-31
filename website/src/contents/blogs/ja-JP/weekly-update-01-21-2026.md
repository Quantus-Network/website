---
title: "Quantus Weekly: ネイティブ資産と量子リスク"
description: "資本がビットコインを量子リスクで割り引く理由、ネイティブ資産のみを採用した設計判断、Dilithiumしきい値署名とZK集約の今週の進捗をまとめました。"
pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus Weekly: ネイティブ資産と量子リスク"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "quantum-safe",
    "zk-aggregator",
    "mpc",
    "multisig",
    "indexer",
    "biohacking",
  ]
---

金が急騰しビットコインが苦戦している理由が気になるなら、これを読んでください。神秘性などありません。

![Nic Carterインタビュー要約](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

資本配分者は、暗号学的に意味のある量子コンピュータ（CRQC）がビットコインのポスト量子暗号アップグレードより先に登場する確率に比例して、ビットコインを割り引いています。ビットコインコミュニティがこれを受け入れるかどうかに関わらず、市場はすでにそう判断しています。

一部のチェーンは間に合ううちにアップグレードするでしょう。ビットコインはおそらくそうしない。たとえば最近、VitalikがPQCアップグレードを促しました。

期限がいつなのか、どのチェーンが間に合うのかを正確に知る方法はありません。つまり、Quantusで外部資産をサポートするかどうかについて、厳しい設計判断を迫られました。

ラップ資産の原資チェーンが侵害されれば、ラップ資産保有者も侵害されます。そこでQuantusはラップ資産を一切サポートしない方針を決定しました。

どこからでも、これまでで最も耐性の高い量子セキュアなマネーへ許可不要でブリッジできるインフラを構築しています。チェーン上でネイティブQUANを保有すれば、ML-DSA-87（NIST最高セキュリティレベル）とZK集約による圧倒的なスループットで保護されます。

ここでは何も発表しませんが、GitHubを開いて確認することはいつでもできます 👀

Q-dayに備えて、今週リリースしたその他の内容は以下のとおりです。

### Github Activity（7件のマージ済みプルリクエスト）：

![Github Stats](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### Core Tech & ZK

- Dilithiumしきい値署名を別プロトコルのMPCシステムに統合しました。
- Parityマルチシグパレットを使ったカスタムトレジャリー管理のPOCを構築しました。
- テストとベンチマーク付きのカスタムマルチシグパレットの初版を実装しました。
- ZK-aggregatorパレット上のZK対応回路バイナリを妨げていたバグを修正しました。
- 量子化出力量をサポートするようオンチェーンZK-aggregator検証器を更新しました。
- 新しいフィールド要素シリアライザー向けにエンドツーエンドZK-aggregatorサンプルスクリプトを修正しました。

### Web & Mobile App Updates

- 高セキュリティ口座向けの固定遅延およびインターセプト機能をサポートするモバイルUXを構築しました（テスト中）。
- ブロックスキャナーと高セキュリティ機能をCLIに追加し、エラーハンドリングを改善しました。
- 高セキュリティ処理と最新Poseidon向けハッシャー修正のためSubsquid（インデクサー）を更新しました。
- Quantusウェブサイトにタグサポート付きブログセクションを公開し、週刊アップデートのバックログのアップロードを開始しました。
- ホワイトペーパーをv3.1に更新し、トークノミクスチャートの配分値を修正しました。

### Content & Partnerships

- ポッドキャストのApple Podcastsへのアップロードを開始しました。
- 2つのトークンローンチパッドとの会話を開始しました。
- Quantum Canaryのブロックチェーン比較ページを改善しました。
- AJとのポッドキャスト——バイオハッキングと自己最適化：https://x.com/QuantusNetwork/status/2012526120869286161

### Industry Updates

- Quantum Canaryの記事——CRQCがSatoshiのコインを脅かす：https://x.com/QuantumCanary_/status/2011706634868047982
