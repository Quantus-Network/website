---
title: "Quantus 每周动态：原生资产、ZK 聚合与比特币的量子风险"
description: "每周更新：我们决定仅支持原生资产以确保量子安全，Dilithium 门限签名，以及 ZK 聚合和自定义多重签名 pallet 的进展。"
pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus 每周动态：原生资产、ZK 聚合与比特币的量子风险"
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

如果你想知道为什么黄金在飙升而比特币在挣扎，请读读这篇文章。这其中并没有什么神秘之处。

![Nic Carter 采访摘要](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

资本配置者正在对比特币进行折价，其比例与在比特币升级到后量子密码学之前，具有密码学相关性的量子计算机 (CRQC) 问世的可能性成正比。无论比特币社区是否接受这一点，市场已经接受了。

一些链会及时升级。比特币可能不会。例如，最近 Vitalik 敦促进行 PQC 升级。

我们无法准确知道截止日期是什么时候，或者哪些链会及时升级。这意味着我们必须在 @QuantusNetwork 支持外部资产方面做出艰难的设计决策。

如果包装资产 (wrapped asset) 的源链遭到破坏，包装资产持有者也会受到影响。因此，我们决定 @QuantusNetwork 不支持任何包装资产。

我们正在构建基础设施，允许从任何地方无许可地桥接到有史以来最具弹性的量子安全货币。一旦你进入我们的链并持有原生 QUAN，你将受到 ML-DSA-87（NIST 的最高安全级别）的保护，并通过 ZK 聚合获得极高的吞吐量。

我不想在这里宣布任何事情，但你总是可以打开我们的 GitHub 查看 👀

以下是我们本周发布的其他内容，以便当 Q-day 到来时，我们已做好准备：

### Github 活动（7 个已合并的拉取请求）：
![Github 统计](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### 核心技术与 ZK
- 将 Dilithium 门限签名集成到另一个协议的 MPC 系统中。
- 使用 Parity 多重签名 pallet 构建了自定义国库管理的 POC。
- 实现了自定义多重签名 pallet 的第一个迭代，并进行了测试和基准测试。
- 修复了导致 ZK-aggregator pallet 上无法运行支持 ZK 的电路二进制文件的漏洞。
- 更新了链上 ZK-aggregator 验证器以支持量化的输出金额。
- 修复了针对新字段元素序列化器的端到端 ZK-aggregator 示例脚本。

### 网页与移动应用更新
- 构建了移动端 UX，以支持高安全账户的固定延迟和拦截功能（仍在测试中）。
- CLI 中增加了区块扫描器和高安全功能，并改进了错误处理。
- Subsquid（索引器）更新，用于高安全处理，并修复了针对最新 Poseidon 的哈希器。
- 在 Quantus 网站上发布了支持标签的博客部分，并开始上传每周动态的历史记录。
- 白皮书更新至 v3.1，修复了代币经济图表的分配值。

### 内容与合作伙伴
- 播客现在正上传到 Apple Podcasts。
- 开始与 2 个代币启动平台 (launchpads) 进行对话。
- Quantum Canary 区块链对比页面的改进。
- 与 AJ 关于生物黑客和自我优化的播客：https://x.com/QuantusNetwork/status/2012526120869286161

### 行业动态
- Quantum Canary 文章讨论 CRQC 如何威胁中本聪的代币：https://x.com/QuantumCanary_/status/2011706634868047982
