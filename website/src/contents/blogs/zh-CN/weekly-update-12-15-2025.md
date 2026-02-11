---
title: "Quantus 每周动态：GPU 挖矿突破与 ZK 重构"
description: "每周更新，涵盖 GPU 挖矿性能提升 9 倍、ZK 聚合电路重构以及在阿联酋的战略会议。"
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus 每周动态：GPU 挖矿突破与 ZK 重构"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "zero-knowledge-proofs",
    "tokenomics",
    "hardware-wallet",
    "solana-breakpoint",
  ]
---

本周，团队在挖矿性能方面取得了突破。我们新的 GPU 矿机现在的运行速度比 CPU 版本快约 9 倍。

我们还完成了 ZK 聚合电路的重构，从而删除了数千行代码。

在阿联酋期间，团队会见了顾问和投资者。这些会议巩固了我们的产品愿景，并明确了代币经济学和代币发行策略。在支持代币发行方面也取得了有意义的业务发展（BD）进展。

每周 Github 活动报告，包括 10 个已合并的拉取请求：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## 核心技术与 ZK

- 将我们的 ZK 聚合器传输证明迁移到专用托盘，包括对 CLI、电路和 Poseidon 逻辑的更新。这次重构使我们能够删除数千行代码。
- 设计了一个使 Poseidon 存储哈希器通用的解决方案。
- 合并了待处理的更改，并解决了与可逆传输相关的代码质量问题。

## 网络与基础设施

- GPU 矿机现在比 CPU 矿机快约 9 倍。
- 发布了 CLI v0.3.1，统一了最终确定标志并改进了地址格式。
- 执行了运行时升级并更新了链规范。
- 部署了一个新的 BootNode。
- 完成了所有服务器的安全检查和更新。
- 为 Subsquid 索引服务部署了容器化的健康检查。

## Web 与移动应用更新

- 推进了硬件钱包集成。现在可以在 Keystone 中解析二维码并签署虚拟消息。
- 开始在移动应用中实施多钱包（助记词）硬件钱包功能。
- 更新了网站表单并将其与我们的电子邮件提供商集成。
- 优化了 rusx 以进行批量查询，防止速率限制问题。

## 内容与合作伙伴

- 参加了 Solana Breakpoint，并测试了我们的“量子安全比特币”定位/迷因（memes）。
- 在阿联酋会见了顾问，讨论了代币发行、代币经济学和 Quantus 的 GTM 策略。
- 与 Tom Howard 的访谈已上线：https://x.com/QuantusNetwork/status/2000585749914427684

## 行业动态

- Quantum Canary 发布了一个全面的“量子就绪”区块链对比页面：https://www.quantumcanary.org/is-your-blockchain-quantum-ready
