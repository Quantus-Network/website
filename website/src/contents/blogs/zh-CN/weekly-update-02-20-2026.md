---
title: "Quantus 每周动态：开放研究与后量子标准"
description: "每周更新内容包括 research.quantus.com 的上线、ZK 证明聚合、多重签名托盘合并以及移动钱包更新。"
pubDate: "2026-02-20"
heroImage: "/blog/covers/weekly-update-02-20-2026.webp"
heroAlt: "Quantus 每周动态：开放研究与后量子标准"
featured: false
tags:
  [
    "weekly-update",
    "research",
    "post-quantum-cryptography",
    "multisig",
    "zk-proofs",
    "mobile-wallet",
    "notification-system",
  ]
---

后量子密码学太新了，不适合在不公开的情况下直接应用到区块链中。

本周我们上线了 [research.quantus.com](https://research.quantus.com/)。

这是一个供密码学家和开发人员深入探讨我们做出的任何协议决策的公共论坛。研究人员已经在对 Poseidon2 的攻击面进行压力测试。

NIST 去年敲定了后量子标准。那是第一步。第二步是加密货币领域的每个协议团队实际去实现它们。目前还没有建立量子安全链的既定手册，所以我们正在制定标准。

如果你正在从事后量子安全方面的工作，我们的大门向你敞开。

以下是本周我们交付的其他内容。

### GitHub 活动（合并了 4 个拉取请求）：

![Github 统计](/blog/assets/github-stats-weekly-update-02-20-2026.webp)

### 核心技术与 ZK

- 更新了 ZK 电路，以支持具有链上验证的多机证明聚合。
- 合并了多重签名托盘（multisig pallet），为高安全性账户提供完整的多重签名支持。

### 网络与基础设施

- 开发了 Senoti 通知系统：设备注册服务、区块链观察者服务，以及包含 CI 和部署设置的核心工作程序。
- 改进了 Telegram 中的水龙头（faucet）机器人，以更好地应对日益增长的活跃度。
- 增加了 qp-plonky2 和 qp-zk-circuits 的发布管理工作流。

### Web 与移动应用更新

- 上线了 [research.quantus.com](https://research.quantus.com/)，这是一个基于 Discourse 的论坛，用于密码学研究和技术讨论。
- 更新了 Quantus 网站：刷新了白皮书页面，在 /launch 页面增加了代币分配饼图，增加了 CoinGecko 集成，并将所有每周更新发布为博客文章。
- 更新了钱包设计并发布到 TestFlight。新版本即将登陆 App Store。
- 修复了移动钱包中的漏洞并优化了 UX。
- 在移动钱包中集成了用于推送通知处理的 FCM 基础。

### 内容与合作伙伴

- Chris 出现在 [Bad Crypto 播客](https://x.com/QuantusNetwork/status/2023752636387012675) 和 [wenaltseason space](https://x.com/wenaltseason/status/2022402584041193831) 中。
- 团队抵达 Network School 并正在设立办公室。

### 行业动态

- Quantum Canary：量子计算机能破解门罗币（Monero）吗？[链接](https://x.com/QuantumCanary_/status/2024204427159359931)
- Quantum Canary：DeFi 的去中心化程度如何？[链接](https://x.com/QuantumCanary_/status/2021846672834539665)
