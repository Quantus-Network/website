---
title: "Quantus 每周动态：GPU 挖矿与 Dirac 压力测试"
description: "每周更新，涵盖支持 GPU 的 Quantus Miner v2.0.2 发布、Dirac 网络压力测试以及链架构更新。"
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus 每周动态：GPU 挖矿与 Dirac 压力测试"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "dirac-network",
    "blockchain-architecture",
    "tokenomics",
    "hardware-wallet",
    "social-engagement",
  ]
---

本周，我们正式发布了支持 GPU 的 Quantus Miner v2.0.2，并成功对 Dirac 网络进行了压力测试。

我们还更新了链架构以支持 2100 万枚代币的供应上限，并通过移除旧的归属（vesting）和国库（treasury）托盘清理了代码库。

每周 Github 活动报告，包括 6 个已合并的拉取请求：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## 核心技术与 ZK

- 更新了链规范，以反映新的 2100 万枚代币供应上限。
- 通过移除归属和国库托盘简化了核心链架构。
- 完成了通用的 Poseidon 存储哈希支持，以防止运行时出现 panic。
- 在我们的 ZK 电路和 CLI 中添加了资产 ID（Asset ID）支持。

## 网络与基础设施

- 对 Dirac 进行了压力测试，以观察链超载如何影响出块时间。
- 发布了 Quantus Miner v2.0.2，该版本现在正式支持 GPU 挖矿：https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Web 与移动应用更新

- 完成了移动端硬件钱包签名流程，包括二维码签名传输、多钱包支持和取消链接功能。
- 实施了“突袭任务”（Raid Quests），通过 Telegram、网站和 Task Master 进行内部追踪，以激励社区在 X 上的互动。钱包实施正在进行中。
- 解决了后端 CORS 错误，并改进了社交互动的数据追踪。
- 修复了影响矿工奖励报告和网络切换的区块浏览器错误。

## 内容与合作伙伴

- 获得了在 Peer Summit 上结识的两位战略合作伙伴的投资。
- 结束了关于发布策略的会议，并起草了反映新代币经济学和 GTM 的更新版白皮书。
- 与资深软件架构师和系统工程师 Cezary 的访谈：https://www.youtube.com/watch?v=2TDMR7bECR8

## 行业动态

- 来自 Quantum Canary 的文章，分析了对比特币进行国家级攻击的风险：https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin
