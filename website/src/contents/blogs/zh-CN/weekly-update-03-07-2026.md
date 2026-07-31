---
title: "Quantus 每周动态：虫洞交易与矿工隐私奖励"
description: "本周将虫洞提现写入矿工应用，区块奖励默认走虫洞地址；修复最长链共识等漏洞，并发布钱包 v1.2.0/v1.2.1、核心库与 Senoti 更新。"
pubDate: "2026-03-07"
heroImage: "/blog/covers/weekly-update-03-07-2026.webp"
heroAlt: "Quantus 每周动态：虫洞交易与矿工隐私奖励"
featured: false
tags:
  [
    "weekly-update",
    "wormhole",
    "zk-proofs",
    "privacy",
    "miner-app",
    "consensus",
    "wallet",
  ]
---

你将币销毁到一个不可花费的地址。

零知识证明在新的地方将其铸造出来。

痕迹消失了。

[@QuantusNetwork](https://x.com/@QuantusNetwork) 将这些称为「虫洞」交易。

你把币发到一个虫洞地址，它看起来和账本上任何其他账户一模一样。但该地址在数学上不可花费。要提取，你用零知识证明证明自己掌握某个秘密，链就会在全新的出口地址铸造等量的币。

没有人能把入口和出口联系起来。

对矿工来说，事情开始变得有趣。

协议要求矿工为其奖励地址提交一个 32 字节的原像。链对其进行哈希以生成地址。

Dilithium 公钥体积巨大，塞不进 32 字节。因此原像不可能是真实公钥，由此生成的地址必然是不可花费的虫洞地址。

隐私由协议强制执行，无需主动选择。

本周，我们把这一机制写进了矿工应用。下一个测试网中，所有区块奖励默认经虫洞地址路由。

以下是本周我们完成的其他工作。

### GitHub 活动（已合并 11 个拉取请求）：

![Github Stats](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### 核心技术与 ZK：

- 在矿工应用中内置虫洞提现，默认给予矿工私密区块奖励。
- 修复最重/最长链共识漏洞以及其他若干链端漏洞。
- 发布更新的核心库：qp-poseidon v1.1.0、qp-rusty-crystals-hdwallet v2.0.0、qp-dilithium v0.2.2。

### 网络与基础设施：

- 将 Substrate 依赖从 stable2506 更新到 stable2512-2。
- 使用新依赖更新了 CLI、sc-network 分叉和 NEAR 分叉。
- 使用更新的代码库与技术集体治理测试了 Heisenberg 节点。
- Senoti 通知系统：修复 RabbitMQ 启动故障，移除设备注册器认证层，修复故障转移连接处理。

### 网页与移动应用更新：

- 向所有应用商店发布钱包 v1.2.0 和 v1.2.1，并更新图形素材。
- 向应用商店推送带有「兑换」按钮的移动应用版本，以启动审核流程。
- 在钱包与浏览器中推出含更积极词汇列表的快乐助记词检查。
- 修复 Android 端边到边（edge-to-edge）显示问题。
- 更新恢复助记词界面，修复按钮组件，标准化图标按钮，并更新重置面板。
- 更新远程通知集成，并将通知支持扩展到所有钱包。

### 内容与合作伙伴：

- 在 Network School 主持关于隐私与量子安全的专题讨论，嘉宾包括 [Tom Howard](https://x.com/_TomHoward)、[Chris Smith](https://x.com/YuviLightman) 和 [Kenbak](https://x.com/k6nb4k)（Cipherscan）。

### 行业动态：

- [Quantum Canary 文章](https://x.com/QuantumCanary_/status/2027639894944956645) 探讨零知识证明与量子计算
