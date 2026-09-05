---
published: true
title: "Quantus Weekly: 否認可能RPCとNeodyme監査"
description: "プライバシーを強化する否認可能RPC、NeodymeによるRusty Crystals監査の完了、全トークン向けプライベートZKアドレスの提供など、今週のQuantusアップデートをお届けします。"
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: 否認可能RPCとNeodyme監査"
featured: false
tags:
  [
    "weekly-update",
    "rpc",
    "privacy",
    "audit",
    "security",
    "dilithium",
    "zk-aggregator",
    "multisig",
  ]
---

ウォレットがあなたの情報を漏らしています。

プライバシーインフラの99%は見せかけです。スタックのどこかで情報が漏れています。ウォレットはRPCと呼ばれるサーバーと通信します。RPCサーバーはウォレットに情報を返しますが、そのためにRPCは通常、あなたに関する情報を把握する必要があります。

たとえば残高を取得するには、トランザクション履歴が必要な場合があります。おそらくIPアドレス、おおよその位置情報、利用習慣などと紐づけられます。すべて、ウォレットで残高を表示するためだけに。

お気に入りのオンチェーンプライバシーツールの新マーケ担当StacyがXスペースで「プライベートで安全」と自慢している一方、裏ではRPC接続を盗み聞きしているわけです。

完全に漏洩しています。

私たちは別のアプローチを構築しました。否認可能RPCは、oblivious lookupに似たハッシュプレフィックスフィルターを使用します。サーバーに何を探しているか知られずに、自分のトランザクションを問い合わせられます。RPCは、どの特定のトランザクションをリクエストしているかを特定できません。

[@QuantusNetwork](https://x.com/@QuantusNetwork)はオンチェーンとウォレット/RPCインフラの両方でプライバシーを守ります。秘密にしたいものは、スタックのすべてのレイヤーで秘密のままにします。

今週、Rusty Crystals Dilithium署名ライブラリの[@Neodyme](https://x.com/@Neodyme)セキュリティ監査完了も[発表](https://x.com/QuantusNetwork/status/2016390125626773871)しました。すべての問題が解決され、ハードニング手法が適用されています。Rusty CrystalsはRust最高のDilithium署名ライブラリで、完全なHDウォレットサポートを備えています。

ハイライトは以上です。先週リリースしたその他の内容は以下のとおりです。

### GitHub Activity（19件のマージ済みプルリクエスト）：

![Github Stats](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Core Tech & ZK

- [@Neodyme](https://x.com/@Neodyme)監査を完了し、すべての問題を解決。使用後のメモリゼロ化を含むハードニング手法を適用。[投稿はこちら](https://x.com/QuantusNetwork/status/2016390125626773871)。
- プレフィックスハッシュによる否認可能RPCをリリース。RPCノード接続時にユーザーは合理的否認性を得られます（oblivious lookup）。
- ジェネシス時点ですべてのトークンでプライベートZKアドレスを有効化しました。
- 連続ブロック構築により、トランザクション包含までの平均時間を50%以上短縮しました。
- 不要なパレットを削除し、ランタイムを簡素化しました。
- マルチシグパレットが機能完成し、ドキュメントを更新。チェーンとCLIへの統合はレビュー待ちです。
- ZK-aggregator回路向けファザーを刷新し、マイナー手数料とバーン手数料のテストカバレッジを拡大しました。

### Web & Mobile App Updates

- 高セキュリティプル機能を備えたMobile App v1.1.5（ビルド65）をリリースしました。
- 高セキュリティ機能のデモ動画を作成しました。
- エクスプローラーとフォーセットの改善：ブロック詳細へのエラーと高セキュリティイベントの追加、エラータイプによる検索、グループメッセージフィルタリングの強化。
- リーダーボード、レイド提出、メトリクス向けTask Masterバグ修正。
- Subsquid dockerfileとDockerイメージ生成用GitHub actionを修正。
- ウェブサイトブログUXを更新し、SEO問題を修正しました。

### Content & Partnerships

- Telegramメンバーが1,000人を突破しました。
- Token2049 Dubaiサイドイベントの会場を予約しました。
- チームは次のスプリントのために[@ns](https://x.com/@ns)に戻ることを決定しました。
- モバイルアプリ再設計のため新デザイナーを採用しました。
- 動画コラボ向けに初の中規模コンテンツクリエイターを採用。クリエイターロスターを構築中です。

### Industry Updates

- [@QuantumCanary\_](https://x.com/@QuantumCanary_)の[Zcash深掘り記事](https://x.com/QuantumCanary_/status/2016327421797294286)。
- [@QuantumCanary\_](https://x.com/@QuantumCanary_)が「[Blockchain Comparison Table](https://x.com/QuantumCanary_/status/2015734605450731824)」を公開。
