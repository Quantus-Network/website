---
title: "Quantus 每周动态：格子密码学审计与 Keystone 集成"
description: "每周更新：格子密码学库审计圆满完成，Polkadot SDK 网络更新发布，以及 Keystone 硬件钱包新增支持。"
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus 每周动态：格子密码学审计与 Keystone 集成"
featured: false
tags:
  [
    "weekly-update",
    "lattice-cryptography",
    "keystone",
    "polkadot-sdk",
    "hardware-wallet",
    "audit",
  ]
---

上周，团队解决了格子密码学库 (rusty-crystals) 审计中提出的所有问题，并发布了网络更新以适配最新的 Polkadot SDK。我们还在开源的 Keystone 硬件钱包固件上实现了 Quantus 地址支持，并成功入驻市场情报平台“The Quantum Insider”。

每周 Github 活动报告，包括 17 个已合并的拉取请求：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## 核心技术

- 解决了核心格子密码学库 (qp-rusty-crystals) 审计中的所有发现。
- 完成了为即将到来的审计准备的 ZK-Aggregation 证明（电路、基准测试和 QIP 文档）。
- 在 plonky2 poseidon2 门和 zk-trie 中发现了优化方案，以提高证明速度。
- 回滚了 qp-header 并更新了 sc-network，以符合最新的 Polkadot SDK 标准。

## 网络与基础设施

- 发布了适用于 Windows 的桌面 UI 矿机，以及适用于 Linux 和 MacOS 的错误修复：https://github.com/Quantus-Network/quantus-apps/releases/latest
- 修复了一个与节点广播相关的潜在 P2P 安全漏洞，以防止恶意节点使网络过载。
- 在开源的 Keystone 硬件钱包固件上实现了 Quantus 地址支持（目前在模拟器中）。

## 网页与移动应用更新

- 在应用商店发布了移动钱包 v1.1.2，解决了轮询、交易流程和通知方面的问题。
- 为 X API 构建了 Rust SDK (rusx)，并增加了关联 X 和 ETH 账户的端点，用于用户任务。

## 内容与合作伙伴

- 成功入驻 The Quantum Insider，提升了外链质量和在量子分析师中的曝光度。
- 在 Apple、Spotify 和 RSS 上推出了播客：https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112
- 向邮件订阅者发送了首份新闻通讯。
- 预定于本周四举行社区 X Space：https://x.com/i/spaces/1mnGeNXoZOZJX
- 与机器学习研究员 Brian Chau 的播客：https://www.youtube.com/watch?v=m_FPbzAcXEk

## 行业动态

- Quantum Canary 发布了一份关于缓解“现在收集，以后破解”威胁的战略指南，概述了使用新定稿的 NIST 后量子标准的务实迁移路径：https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive
