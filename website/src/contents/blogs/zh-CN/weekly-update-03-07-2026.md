---
title: "Quantus 每周动态：虫洞交易"
description: "每周更新，涵盖虫洞交易、矿工私人区块奖励、共识漏洞修复和钱包更新。"
pubDate: "2026-03-07"
heroImage: "/blog/covers/weekly-update-03-07-2026.webp"
heroAlt: "Quantus 每周动态：虫洞交易"
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

你将代币销毁到一个不可花费的地址。

零知识证明（ZK proof）在新的地方将其铸造出来。

痕迹消失了。

[@QuantusNetwork](https://x.com/@QuantusNetwork) 将这些称为“虫洞”交易。

你将代币发送到一个虫洞地址，该地址看起来与账本上的任何其他账户完全相同。但该地址在数学上是不可花费的。要提取代币，你只需通过零知识证明来证明你掌握某个秘密，链就会在一个全新的出口地址铸造等量的代币。

没有人能将入口和出口联系起来。

矿工们会发现这非常有趣。

协议要求矿工为其奖励地址提交一个 32 字节的原像（preimage）。链对其进行哈希处理以创建地址。

Dilithium 公钥非常庞大，无法放入 32 字节中。因此，该原像不可能是一个真实的公钥，由此产生的地址保证是一个不可花费的虫洞地址。

隐私由协议强制执行，无需主动选择。

本周，我们将此功能内置到了矿工应用中。在下一个测试网中，所有区块奖励将默认通过虫洞地址路由。

以下是本周我们完成的其他工作。

### Github 活动（已合并 11 个拉取请求）：

![Github Stats](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### 核心技术与 ZK：

- 在矿工应用中内置了虫洞提现功能，默认给予矿工私密的区块奖励。
- 修复了最重/最长链共识漏洞以及其他几个链端漏洞。
- 发布了更新的核心库：qp-poseidon v1.1.0、qp-rusty-crystals-hdwallet v2.0.0、qp-dilithium v0.2.2。

### 网络与基础设施：

- 将 Substrate 依赖项从 stable2506 更新到 stable2512-2。
- 使用新依赖项更新了 CLI、sc-network 分叉和 NEAR 分叉。
- 使用更新的代码库和技术集体治理测试了 Heisenberg 节点。
- Senoti 通知系统：修复了 RabbitMQ 启动故障，移除了设备注册器的认证层，修复了故障转移连接处理。

### 网页与移动应用更新：

- 向所有应用商店发布了钱包 v1.2.0 和 v1.2.1，并更新了图形界面。
- 向应用商店推送了带有“兑换”按钮的移动应用版本，以开始审核流程。
- 在钱包和浏览器中推出了带有更积极词汇列表的快乐助记词检查（happy checkphrase）。
- 修复了 Android 端的边到边（edge-to-edge）显示问题。
- 更新了恢复助记词界面，修复了按钮组件，标准化了图标按钮，并更新了重置表单。
- 更新了远程通知集成，并将通知支持扩展到所有钱包。

### 内容与合作伙伴：

- 在 Network School 主持了关于隐私和量子安全的专题讨论，嘉宾包括 [Tom Howard](https://x.com/_TomHoward)、[Chris Smith](https://x.com/YuviLightman) 和 [Kenbak](https://x.com/k6nb4k) (Cipherscan)。

### 行业动态：

- [Quantum Canary 文章](https://x.com/QuantumCanary_/status/2027639894944956645) 探讨零知识证明与量子计算
