---
title: "Quantus 每周更新：阈值 Dilithium 签名与分布式协调"
description: "每周更新涵盖阈值签名、ZK 电路改进、移动钱包更新和社区内容。"
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus 每周更新：阈值 Dilithium 签名与分布式协调"
featured: false
tags:
  [
    "weekly-update",
    "threshold-signatures",
    "post-quantum-cryptography",
    "dilithium",
    "zero-knowledge-proofs",
    "quantum-safe",
    "blockchain",
  ]
---

权力与权威在多方之间分配。分布式协调。

但后量子签名比比特币签名大 20 到 80 倍。传统的多次签名解决方案有其地位，但在某些用例中增加了不可接受的开销。

本周我们发布了阈值 Dilithium 签名。这使得分布式小组能够签署交易并在链上生成单个签名。基本上，就是分片私钥。

这对于托管人、跨网络应用以及链的安全自动化使用是必要的。

每周 Github 活动报告，包括 4 个已合并的拉取请求：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## 核心技术与 ZK

- 实现了阈值签名，支持安全的分布式签名。
- 减少了 ZK 电路开销。
- 为 wormhole 示例二进制文件添加了证明聚合支持，正在持续集成到链和 CLI 中。
- 升级了我们的 ZK 电路和 Poseidon 哈希算法，以通用处理所有数据类型（通用存储哈希），现已集成到链和 CLI 中。
- 在 ZK 电路中添加了对资产 ID 证明聚合的支持。
- 优化了 CLI 以实现更快的交易处理，并添加了高安全性恢复脚本。

## Web 与移动应用更新

- 发布了新版本的 UI 挖矿应用，带有 CPU 和 GPU 使用情况的细颗粒度滑块，并修复了算力报告。
- 完成并合并了移动应用对硬件钱包的全支持。
- 添加了在单个移动钱包实例中管理多个账户的支持。
- 实现了高安全性屏幕，并开始开发“卫士 (Guardian)”恢复流程。
- 完善了“发送”屏幕 UX，改进了错误处理，修复了身份验证计时器错误，并统一了应用图标。
- 配置了每日数据库备份，修复了系统服务，并清理了 Task Master 代码（钱包应用事件跟踪）。

## 内容与合作伙伴

- 使用最新的协议详细信息更新了白皮书，并建立了 GitHub 版本控制系统：https://github.com/Quantus-Network/whitepaper
- 发布了我们的起源故事“从头开始 (From the Ground Up)”：https://x.com/JoeMattia/status/2010619972398297164
- 与 Sina (@hubsmoke) 讨论恢复科学信任的播客：https://x.com/QuantusNetwork/status/2009929397579723213

## 行业更新

- Quantum Canary 发布了量子安全加密钱包指南：https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security
