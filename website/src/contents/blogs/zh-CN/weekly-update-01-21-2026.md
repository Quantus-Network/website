---
title: "Quantus 每周动态：原生资产与量子风险"
description: "资本正按量子风险折价比特币。我们决定不支持包装资产、仅持原生 QUAN；本周推进 Dilithium 阈值签名、ZK 聚合与自定义多签进展。"
pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus 每周动态：原生资产与量子风险"
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

如果你想知道为什么黄金在狂飙、比特币却承压，读这篇就够了。没什么神秘的。

![Nic Carter 采访摘要](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

资本配置者正在按「密码学相关量子计算机（CRQC）是否会在比特币升级到后量子密码学之前问世」的概率，对比特币打折。无论比特币社区接不接受，市场已经定价了。

有些链会及时升级。比特币大概率不会。比如最近 Vitalik 就在敦促做 PQC 升级。

我们无法精确知道截止日期，也无法预知哪些链能赶上。这意味着我们必须在 @QuantusNetwork 是否支持外部资产这件事上做出艰难的设计取舍。

如果包装资产的源链被攻破，持有者也跟着完蛋。所以我们决定 @QuantusNetwork 不支持任何包装资产。

我们正在搭建基础设施，让任何人都能无许可地从任意来源桥接到有史以来最有韧性的量子安全货币。一旦你进入我们的链并持有原生 QUAN，就由 ML-DSA-87（NIST 最高安全等级）保护，再叠加 ZK 聚合带来的极高吞吐。

我不想在这里剧透，但你随时可以打开我们的 GitHub 👀

以下是我们本周还交付的内容——好在 Q-day 到来时我们已就绪：

### GitHub 活动（7 个已合并的拉取请求）：

![Github 统计](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### 核心技术与 ZK

- 将 Dilithium 阈值签名集成到另一协议的 MPC 系统中。
- 基于 Parity 多签 pallet 构建自定义国库管理 POC。
- 实现自定义多签 pallet 首个迭代，含测试与基准。
- 修复导致 ZK-aggregator pallet 无法加载支持 ZK 的电路二进制的漏洞。
- 更新链上 ZK-aggregator 验证器，支持量化输出金额。
- 修复适配新字段元素序列化器的端到端 ZK-aggregator 示例脚本。

### Web 与移动应用更新

- 构建移动端 UX，支持高安全账户的固定延迟与拦截（仍在测试）。
- CLI 增加区块扫描与高安全相关能力，并改进错误处理。
- Subsquid（索引器）更新高安全处理，并修复适配最新 Poseidon 的哈希器。
- 在 Quantus 网站上线支持标签的博客区，并开始上传积压的每周动态。
- 白皮书更新至 v3.1，修正代币经济图表分配数值。

### 内容与合作伙伴

- 播客开始上传至 Apple Podcasts。
- 与 2 个代币启动平台开启对话。
- Quantum Canary 区块链对比页改进。
- 与 AJ 关于生物黑客与自我优化的播客。

### 行业动态

- Quantum Canary 文章讨论 CRQC 如何威胁中本聪币：https://x.com/QuantumCanary_/status/2011706634868047982
