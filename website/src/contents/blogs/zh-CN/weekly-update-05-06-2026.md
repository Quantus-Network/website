---
title: "Quantus 每周动态：杀手级应用是货币"
description: "本周重写 Dilithium DKG 以对齐 Mithril，修复门限签名，开放 Wormhole SDK 辅助接口，并发布钱包 v1.4.0（TestFlight）。"
pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus 每周动态：杀手级应用是货币"
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
    "dilithium",
    "wormhole",
    "mithril",
    "network-school",
  ]
---

我相信市场正慢慢醒悟到一件事。

有一款杀手级加密应用，将创造并捕获比其他任何应用都更多的价值。

它不是稳定币、预测市场，也不是 DeFi。

更不是 web3、社交网络，或头像 NFT 合集。

它是货币——催生整个行业的那个念头。

最初的想法是纯粹的想法：点对点电子现金。

安全、私密、可扩展的货币，才是万亿美元级的机会。

本周，我们重写了 Quantus 的 Dilithium 密钥分布式密钥生成（DKG），以对齐更新后的 Mithril 论文，并在门限签名实现中修复了多项问题。

这样你就能把一把 Quantus 密钥分片到多方。这对我们的安全集成很重要。

我们处理了 Wormhole 规范中的一项审计问题，并在公开的 Quantus CLI SDK 中暴露了辅助接口，向外部开发者开放隐私交易支持。Wormhole 是我们实现可扩展后量子隐私的方式。

我们还发布了钱包 v1.4.0，全面换肤，简化并美化了移动端体验（目前在 TestFlight）。

### Github 动态（合并 16 个拉取请求）：

![Github Stats](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### 核心技术与 ZK：

- 重写 Dilithium 密钥的分布式密钥生成，以对齐更新后的 Mithril 论文。
- 针对三项审计发现加固门限签名实现。
- 更新 Wormhole 规范，处理找零输出相关的审计项。
- 在公开 Quantus CLI SDK 中暴露 Wormhole 辅助接口，并加入端到端 deposit-to-mint 示例工作流。
- 重构 CLI 交易生命周期：区分已提交、已包含、已最终确认状态，精确小数手续费解析，更严格的版本兼容检查，以及溢出感知的批量转账。
- 构建基准测试工具，改进难度调整算法。
- 调研并基准测试不同聚合树拓扑及其 CPU 占用。
- 修正人工校验短语中的拼写错误。

### 网络与基础设施：

- 扩展压力测试套件，加入 wormhole 模式，并在 Planck 测试网上多次运行。
- 将 Subsquid 区块链索引器迁至生产级服务器，并增加账户与链统计数据。
- 对 Explorer 查询做基准测试，移除高成本查询。
- 更新全部 VPS 操作系统并完善基础设施文档。
- 更新 miner-stack，并在 Windows 上测试 miner-app。

### Web 与移动应用更新：

- 发布 Planck GUI 矿工（v0.4.1），支持领取功能。
- 发布钱包 v1.4.0（目前在 TestFlight）：全面 UI 换肤，并接入真实汇率。
- 钱包 bug 修复：首页余额样式、活动组件样式，以及收款页。
- Task Master：新增汇率端点，并更新校验和依赖。
- 更新 Quantus 官网：文档链接指向 docs (dot) quantus (dot) com，更新 TPS 展示，并发布周报。

### 内容与合作：

- 更新 Spotify、Apple 与 YouTube 上的播客品牌形象。
- 在 Network School 用 [$QUAN](https://x.com/search?q=%24QUAN&src=cashtag_click) 售出第一副 Quantus 眼镜。
- Quantus 在 NS 市集设展位，引导应用用户与 Q-Day 报名者。
