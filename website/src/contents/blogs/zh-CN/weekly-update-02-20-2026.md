---
title: "Quantus 每周动态：开放研究与后量子标准"
description: "research.quantus.com 上线，邀请密码学家公开审视协议决策；本周还推进多机 ZK 证明聚合、多签 pallet 合并与钱包 TestFlight。"
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

后量子密码学太新了，不适合关起门来就塞进区块链。

本周我们上线了 [research.quantus.com](https://research.quantus.com/)。

这是一个公开论坛，供密码学家与开发者拆解我们做过的任何协议决策。研究人员已经在压力测试 Poseidon2 的攻击面。

NIST 去年敲定了后量子标准。那是第一步。第二步是加密领域每个协议团队真正落地实现。量子安全链还没有既定手册，所以我们在建立标准。

如果你在做后量子安全，大门敞开。

以下是我们本周还交付的内容。

### GitHub 活动（4 个已合并的拉取请求）：

![Github 统计](/blog/assets/github-stats-weekly-update-02-20-2026.webp)

### 核心技术与 ZK

- 更新 ZK 电路，支持多机证明聚合与链上验证。
- 合并多签 pallet，为高安全账户提供完整多签支持。

### 网络与基础设施

- 开发 Senoti 通知系统：设备注册服务、区块链观察服务，以及含 CI 与部署的核心 worker。
- 改进 Telegram 水龙头机器人，更好应对活跃度上升。
- 增加 qp-plonky2 与 qp-zk-circuits 的发布管理工作流。

### Web 与移动应用更新

- 上线 [research.quantus.com](https://research.quantus.com/)，基于 Discourse 的密码学研究与技术讨论论坛。
- 更新 Quantus 网站：刷新白皮书页，在 /launch 加入代币分配饼图，接入 CoinGecko，并将全部每周动态发布为博客。
- 更新钱包设计并推送到 TestFlight。新版即将登陆 App Store。
- 修复移动钱包漏洞并优化 UX。
- 在移动钱包集成 FCM 基础，用于推送通知处理。

### 内容与合作伙伴

- Chris 出现在 [Bad Crypto 播客](https://x.com/QuantusNetwork/status/2023752636387012675) 与 [wenaltseason space](https://x.com/wenaltseason/status/2022402584041193831)。
- 团队抵达 Network School，正在设立办公室。

### 行业动态

- Quantum Canary：量子计算机能破解门罗币吗？[链接](https://x.com/QuantumCanary_/status/2024204427159359931)
- Quantum Canary：DeFi 有多去中心化？[链接](https://x.com/QuantumCanary_/status/2021846672834539665)
