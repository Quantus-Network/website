---
title: "Quantus 周报：杀手级应用是货币"
description: "本周我们为 Mithril 重写了 Dilithium DKG，发布了阈值签名修复程序，公开了 Wormhole SDK 助手，并在 TestFlight 上发布了美化后的钱包 v1.4.0。"
pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus 周报：杀手级应用是货币"
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

我相信市场正在慢慢意识到一些事情。

一个杀手级的加密应用将比任何其他应用创造并捕获更多的价值。

它不是稳定币、预测市场或 DeFi。

它绝对不是 Web3、社交网络或 PFP 收藏品。

它是货币。这个行业诞生的初衷。

最初的想法是纯粹的想法。点对点电子现金。

安全、私密且可扩展的货币是数万亿美元的机会。

本周，我们重写了 Quantus 针对 Dilithium 密钥的分布式密钥生成（DKG），以匹配更新后的 Mithril 论文，并发布了阈值签名实现的修复程序。

因此，您将能够在多个参与方之间分片（shard）Quantus 密钥。这对于我们的安全集成至关重要。

我们解决了 Wormhole 规范中的一个审计项，并公开了 Quantus CLI SDK 中的助手工具，向外部开发人员开放了私有交易支持。Wormhole 是我们实现可扩展后量子隐私的方式。

我们还发布了钱包 v1.4.0，通过全新的皮肤简化并美化了移动应用体验（目前已在 TestFlight 上线）。

### Github 活动（16 个已合并的拉取请求）：

![Github 统计](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### 核心技术与 ZK：

- 重写了 Dilithium 密钥的分布式密钥生成，以匹配更新后的 Mithril 论文。
- 针对三项审计发现加固了阈值签名实现。
- 更新了 Wormhole 规范，以解决关于找零输出（change outputs）的审计项。
- 公开了 Quantus CLI SDK 中的 Wormhole 助手，并添加了端到端的 deposit-to-mint 示例工作流。
- 重构了 CLI 交易生命周期，具有明确的已提交、已包含和已完成状态，精确的小数费用解析，更严格的版本兼容性检查，以及感知溢出的批量转账。
- 构建了基准测试工具以改进难度调整算法。
- 研究并测试了不同的聚合树拓扑及其 CPU 使用情况。
- 修复了人类助记词（checkphrase）中的拼写错误。

### 网络与基础设施：

- 扩展了带有 Wormhole 模式的压力测试套件，并在 Planck 测试网上运行了多次。
- 将 Subsquid 区块链索引器迁移到生产级服务器，并添加了账户和链统计数据。
- 对 Explorer 查询进行了基准测试，并删除了耗时较长的查询。
- 更新了所有 VPS 操作系统并记录了基础设施文档。
- 更新了矿工栈（miner-stack）并在 Windows 上测试了矿工应用。

### 网页与移动应用更新：

- 发布了具有提取（claim）功能的 Planck GUI 矿工（v0.4.1）。
- 发布了钱包 v1.4.0（目前在 TestFlight 上），具有全新的 UI 皮肤和实时汇率。
- 钱包错误修复：首页余额样式、活动组件样式和接收屏幕。
- Task Master：添加了汇率端点并更新了校验和依赖项。
- 更新了 Quantus 网站：将文档链接指向 docs (dot) quantus (dot) com，更新了 TPS 显示，并发布了周报。

### 内容与合作伙伴：

- 更新了 Spotify、Apple 和 YouTube 上的播客品牌。
- 在 Network School 以 [$QUAN](https://x.com/search?q=%24QUAN&src=cashtag_click) 的价格售出了第一副 Quantus 眼镜。
- Quantus 在 NS 集市设有展位，引导应用用户和 Q-day 注册者。
