---
title: "Quantus 每周动态：PoW 审计完成与 Dirac 测试网上线"
description: "每周更新：Equilibrium 完成了对我们 PoW 算法和 Poseidon 哈希函数的审计，实现了区块头的 ZK 证明生成，并上线了 Dirac 测试网。"
pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus 每周动态：PoW 审计完成与 Dirac 测试网上线"
featured: false
tags:
  [
    "weekly-update",
    "audit",
    "pow",
    "poseidon",
    "dirac-testnet",
    "zero-knowledge-proofs",
    "mobile-wallet",
    "miner-app",
    "podcast",
  ]
---

本周，团队完成了 Equilibrium 对我们工作量证明 (PoW) 算法和 Poseidon 哈希函数的审计，并向各大应用商店发布了更新后的应用。

## 开发新闻

- 每周 Github 活动报告，包含 147 个总事件：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- 在此处查看我们的 PoW 算法和 Poseidon 哈希函数的审计报告，所有问题均已解决：https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## 核心技术

- 更新了命令行界面 (CLI) 以支持 Dirac 测试网。
- 实现了区块头来源的 ZK 证明生成，这是一个重要的里程碑，因为它证明了我们的电路逻辑可以处理动态数据，而不仅仅是静态的模拟证明。
- 解决了节点命令行的问题。

## 网络与基础设施

- 修复了链端的多架构 Docker 工作流。
- 通过更新所有节点、移除旧测试网并推出新的仪表板和告警，完成了 Dirac 版本的发布。请访问 grafana.quantus.cat 和 telemetry.quantus.cat。
- 使用新库、新服务器更新了 Faucet（水龙头），并增加了指标以及用于推荐排行榜的新 /king 命令。
- 使用 PostgreSQL 作为 Grafana 的后端增强了网络监控，并增加了各种修复和优化。
- 在新服务器上设置了 IaC（基础设施即代码），连接了所有 Heisenberg 和 Dirac 节点。
- 更新了 Subsquid 索引服务以支持 Dirac 测试网，并增加了 Prometheus 指标。

## 网页与移动应用更新

- 向应用商店发布了移动钱包 1.1.1 版本。Apple 要求提供更多信息，但这应该很快就能解决。
- 更新了移动钱包以连接到 Dirac 测试网。
- 修复了多个移动钱包漏洞，包括计划通知、更新账户名称和生物识别身份验证等问题。
- 更新了矿机应用 (Miner App) 以使用新的 Dirac 链，并修复了统计报告。
- 为矿机应用增加了新的设置界面和应用内二进制更新功能。
- 将 Task Master 应用迁移到 Dirac 测试网，并增加了 Prometheus 指标。
- 在 Faucet 机器人中增加了一个新命令，用于查看我们即将推出的推荐功能的排行榜。

## 内容与合作伙伴

- 我们有几份筹款合同正在洽谈中，已有 25 万美元的口头承诺。
- 聘请了 The Quantum Insider 来负责 Quantum Canary 和 Quantus 的 SEO。
- 创建了新的 n8n 流程来追踪社交媒体增长（我们的播客订阅人数刚刚超过 500 人）。
- 与 DeFi 开发者 Jangle 的播客：https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## 行业动态

- Quantum Canary 发布了对量子密码学家 Or Sattath 博士的采访，讨论了不可克隆密码学和量子货币，探讨了其提升比特币速度、安全性和隐私的潜力：https://www.quantumcanary.org/insights/or-sattath-interview
- 448 量子比特中性原子计算机实现容错：https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces

- 我们将于周四香港时间上午 11 点在 X 上讨论量子 FUD 和 Quantus：https://x.com/i/spaces/1RDGlAZlgPoJL?s=20
