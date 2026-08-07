---
title: "Quantus 每周动态：绘制量子安全未来蓝图"
description: "本周 Quantus 登陆 CoinGecko 抗量子赛道，并交付多签最终简化版、ZK 聚合器重构隐私增强，以及移动应用 v1.1.5 双端上架。"
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

Fra Mauro 在威尼斯附近一座修道院里，花了数年绘制当时已知世界的地图。

他从未出海。

商人和水手来修道院讲述见闻。Fra Mauro 把每一份叙述与其他叙述交叉核对。站不住脚的说法他拒绝，并不断修订。

结果标出了多数欧洲人从未听过的地方：东非、印度洋、东南亚。那些地方明明存在，但对没去过的人来说并不「真实」。

Quantus 为量子安全货币设立标准。

但我们必须出现在地图上。

本周，Quantus 登陆 [@coingecko](https://x.com/@coingecko)。

有一个叫「抗量子」（quantum resistant）的类别，市值还不到 50 亿美元。

很快整个加密市值都会变成「抗量子」——每条链要么升级，要么归零。

但现在这个类别还很小；即便名单上的链，也仍有大量工作要做。

所以，以下是我们本周还交付的内容。

### GitHub 活动（7 个已合并的拉取请求）：

![Github 统计](/blog/assets/github-stats-weekly-update-02-13-2026.webp)

### 核心技术与 ZK

- 实现并测试最终简化版多签，含优化与权重准确性修复。
- 重构 qp-plonky2，干净分离验证器与证明器。
- 修复 ZK 聚合，并增加额外隐私与灵活性。
- 更新 qp-zk-circuit 发布工作流。
- 改进核对短语的选词，提升易用性。
- CLI 增加随机分区多发。
- 对 Plonky3 证明器与我们的 Poseidon2 实现做基准对比。

### Web 与移动应用更新

- 向两大应用商店发布移动应用 v1.1.5。
- 实现新任务页，并修复等级显示问题。
- 在 quantus.com/launch 发布启动页。
- 简化 ZK 聚合器 UX，现称「加密账户」。

### 内容与合作伙伴

- 登陆 CoinGecko。
- YouTube 发布与 Jangle 和 Chris 的播客。

### 行业动态

- Quantum Canary：「[别再争论过滤器：Vitalik 加速的量子时间线对投资者意味着什么](https://x.com/QuantumCanary_/status/2021092653891486027)」。
