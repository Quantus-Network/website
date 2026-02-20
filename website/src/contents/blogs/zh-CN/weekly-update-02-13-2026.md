---
title: "Quantus 每周动态：绘制量子安全未来蓝图"
description: "每周更新内容包括 CoinGecko 上线、多重签名优化、ZK 聚合器重构以及移动应用 v1.1.5 版本发布。"
pubDate: "2026-02-13"
heroImage: "/blog/covers/weekly-update-02-13-2026.webp"
heroAlt: "Quantus 每周动态：绘制量子安全未来蓝图"
featured: false
tags:
  [
    "weekly-update",
    "coingecko",
    "multisig",
    "plonky2",
    "plonky3",
    "quantum-resistant",
    "zk-proofs",
  ]
---

Fra Mauro 在威尼斯附近的一座修道院里花了数年时间绘制了一幅当时已知世界的地图。

他从未去过任何地方航行。

商人和水手们拜访修道院，描述他们的见闻。Fra Mauro 将每一个叙述与其他所有叙述进行交叉比对。他拒绝了那些站不住脚的说法，并不断进行修订。

结果展示了大多数欧洲人从未听说过的地方。东非、印度洋、东南亚。这些领土虽然存在，但对于没有去过那里的人来说并不真实。

Quantus 为量子安全货币设定了标准。

但我们必须出现在地图上。

本周，Quantus 在 [@coingecko](https://x.com/@coingecko) 上线了。

有一个名为“抗量子”（quantum resistant）的类别，其市值不足 50 亿美元。

很快，整个加密货币市值都将变成“抗量子”的，因为每个链要么升级，要么归零。

但目前这个类别还很小，即使在名单上的链中，也仍有大量工作要做。

所以，以下是本周我们交付的其他内容。

### GitHub 活动（合并了 7 个拉取请求）：

![Github 统计](/blog/assets/github-stats-weekly-update-02-13-2026.webp)

### 核心技术与 ZK

- 实现并测试了最终简化版的多重签名，包含优化和权重准确性修复。
- 重构了 qp-plonky2，将验证器与证明器完全分离。
- 修复了 ZK 聚合，并增加了额外的隐私性和灵活性。
- 更新了 qp-zk-circuit 发布工作流。
- 改进了核对短语的单词选择，提升了易用性。
- 在 CLI 中增加了随机分区多重发送功能。
- 对 Plonky3 的证明器与我们的 Poseidon2 实现进行了基准测试。

### Web 与移动应用更新

- 向两大应用商店发布了移动应用 v1.1.5 版本。
- 实现了新的任务（Quests）界面，并修复了等级显示的错误。
- 在 [quantus.com/launch](https://quantus.com/launch) 发布了启动页面。
- 简化了 ZK 聚合器的 UX 设计，现更名为“加密账户”。

### 内容与合作伙伴

- 在 CoinGecko 上线。
- 在我们的 Youtube 频道上发布了与 Jangle 和 Chris 的播客。

### 行业动态

- Quantum Canary：“[停止争论过滤器：维塔利克加速的量子时间线对投资者意味着什么](https://x.com/QuantumCanary_/status/2021092653891486027)”。
