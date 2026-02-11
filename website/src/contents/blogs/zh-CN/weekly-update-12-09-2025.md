---
title: "Quantus 每周动态：Poseidon2 优化与链架构重构"
description: "每周更新：Poseidon2 门电路提速 8.3 倍，重大链架构重构移除 9,000 行代码，以及来自币安区块链周的最新消息。"
pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus 每周动态：Poseidon2 优化与链架构重构"
featured: false
tags:
  [
    "weekly-update",
    "poseidon2",
    "chain-architecture",
    "wormhole",
    "binance-blockchain-week",
    "solana-breakpoint",
  ]
---

你可能已经看过了 [@EliBenSasson 和 Scott Aaronson 的这段采访](https://x.com/Starknet/status/1995865652377395421)

![Nic Carter 采访总结](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

在采访中，Scott 说道：“我们决定将世界上如此多的网络安全基础设施建立在 RSA、Diffie-Hellman 和椭圆曲线密码学等加密代码之上，而这些代码恰好具有量子计算机能够利用的数学特性。”

这是一个难以接受的事实。

特别是对于比特币而言，由于其设计原因，缺乏轻松规划和执行大型协议升级的能力。

这意味着对比特币社区来说，阻力最小的路径一直是否认问题的存在。

![Charles Edwards 论量子威胁](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

但随着最近在纠错、量子比特扩展和保真度方面的突破，否认量子计算的进展对比特币乃至人类财产权利都构成了生存风险。

因此，我们必须面对量子未来的迷雾，并接受当 Q 日到来时，许多区块链将因未能采取行动而失败。

我们的职责是采取行动。

以下是我们本周为构建量子安全比特币所做的工作：

每周 Github 活动报告，包括 8 个已合并的拉取请求：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## 核心技术与 ZK

- 优化了 Poseidon2 门电路。将每次置换的电路追踪行数从 31 行减少到 1 行。这使门电路提速 8.3 倍，并使大型虫洞证明器（wormhole prover）的总速度提升了 4.5 倍。
- 重构了链架构，使用交易扩展（transaction extensions）来记录虫洞证明。这消除了对 balances pallet 自定义分支的需求，移除了约 9,000 行代码。
- 为虫洞转账增加了资产 ID（Asset ID）支持。
- 解决了 qp-rusty-crystals 审计中提出的问题。

## 网络与基础设施

- 改进了 GPU 矿机实现。
- 更新并合并了 sc-network，包括对对等节点广播的修复，以实现更顺畅的节点同步。
- 归档了 Schrödinger（旧测试网）的网络历史记录。
- 调试并改进了我们的 subsquid 架构。增加了新的监控脚本和重启协议，以提高浏览器和钱包的数据运行时间。

## 网页与移动应用更新

- 改进了 Keystone 集成，增加了 PIN 缓存擦除和带 PIN 安全保护的二维码。
- 发布了我们的 rusx 仓库，用于将 X OAuth 连接到移动应用，并升级了后端以支持推文查询和搜索。
- 发布了修复各种错误的更新，包括整数处理问题和误报失败通知。

## 内容与合作伙伴

- 我们正在迪拜参加币安区块链周（Binance Blockchain Week）和 Solana Breakpoint，与顾问、KOL 会面并引导新用户。
- 请关注我们预定于周四举行的每周 X Space。
- Quantus 团队播客：https://www.youtube.com/watch?v=konWKWrl5hs
