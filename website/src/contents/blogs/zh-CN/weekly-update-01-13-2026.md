---
title: "Quantus 每周动态：Dilithium 阈值签名"
description: "本周我们上线 Dilithium 阈值签名，让分布式多方协调生成链上单签，服务托管与跨链场景；并推进 ZK 电路优化、移动钱包硬件支持与白皮书更新。"
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus 每周动态：Dilithium 阈值签名"
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

但后量子签名比比特币签名大 20 到 80 倍。传统多重签名方案有其用武之地，但在某些场景下会带来难以接受的开销。

本周我们上线了 Dilithium 阈值签名。分布式群体可以签署交易，并在链上生成单个签名——本质上是对私钥做分片。

这对托管方、跨网络应用，以及链上安全自动化都至关重要。

本周 GitHub 活动报告（含 4 个已合并的拉取请求）：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## 核心技术与 ZK

- 实现阈值签名，支持安全的分布式签署。
- 降低 ZK 电路开销。
- 为 wormhole 示例二进制加入证明聚合支持，正在持续集成到链与 CLI。
- 升级 ZK 电路与 Poseidon 哈希算法，可通用处理所有数据类型（通用存储哈希），现已集成到链与 CLI。
- 在 ZK 电路中加入按资产 ID 的证明聚合支持。
- 优化 CLI 以加快交易处理，并添加高安全恢复脚本。

## Web 与移动应用更新

- 发布新版 UI 挖矿应用，提供 CPU/GPU 用量细粒度滑块，并修复算力上报。
- 完成并合并移动端完整硬件钱包支持。
- 支持在单个移动钱包实例中管理多个账户。
- 实现高安全相关界面，并开始开发「Guardian」守护者恢复流程。
- 打磨「发送」页 UX，改进错误处理，修复认证计时器问题，并统一应用图标。
- 配置每日数据库备份，修复系统服务，并清理 Task Master 代码（钱包应用事件追踪）。

## 内容与合作伙伴

- 用最新协议细节更新白皮书，并建立 GitHub 版本管理：https://github.com/Quantus-Network/whitepaper
- Lore 发布起源故事《From the Ground Up》：https://x.com/JoeMattia/status/2010619972398297164
- 与 Sina (@hubsmoke) 关于重建科学信任的播客：https://x.com/QuantusNetwork/status/2009929397579723213

## 行业动态

- Quantum Canary 发布量子安全加密钱包指南：https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security
