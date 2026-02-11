---
title: "Quantus 每周动态：ZK 交易聚合与矿机应用发布"
description: "每周更新：完成 ZK 交易聚合第一步，发布矿机应用 v0.1.0，以及 GPU 挖矿实现的最新进展。"
pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus 每周动态：ZK 交易聚合与矿机应用发布"
featured: false
tags:
  [
    "weekly-update",
    "zero-knowledge-proofs",
    "gpu-mining",
    "miner-app",
    "ama",
    "substrate",
  ]
---

本周，团队完成了链端和 CLI 的 ZK 交易聚合第一步，用真实的转账验证取代了模拟测试。我们还发布了矿机应用 (Miner App) v0.1.0 二进制文件，现已可用。

## 开发新闻
- 每周 Github 活动报告，包含 150 多个总事件：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## 核心技术
- 在链上创建了新的 qp-header 原语，该原语与我们的虫洞电路字段对齐，取代了 Substrate 的通用区块头。
- 更新了聚合电路，以支持区块头验证和相邻区块之间的连接。
- 挖矿算法的 GPU 实现已完成约 80%。 
- 完成了 rusty-crystals 审计的第一阶段，大部分问题已得到解决。
- 对运行时 (runtime) 的 panic 进行了内部审计（受近期 Cloudflare unwrap 漏洞启发）。
- 在 CLI 中为标准 Substrate pallet 增加了归属 (vesting) 命令。

## 网络与基础设施
- 将 Subsquid 部署简化为仅需一个脚本。
- 为 Quantus-Miner 创建了 Docker 镜像和发布流程。
- 部署了矿机堆栈（Docker Compose + 监控堆栈 + 文档）。
- 为浏览器 (Explorer) 和 Task Master 增加了监控仪表板和告警。

## 网页与移动应用更新
- 上线了应用内推荐系统和面向用户的事件追踪指标 (Quantus Quests)。 
- 发布了适用于所有平台的矿机应用二进制文件：https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0（目前仅在 Mac 上进行了彻底测试）。
- 修复了移动钱包中的迁移问题和其他各种错误报告。
- 重构了发送界面组件以提高可测试性，并增加了单元测试和组件测试。
- 更新了网站上的任务 (Quests) 页面，增加了搜索功能。
- 更新了 Task Master 排行榜端点以支持搜索，并在结果中增加了排名。

## 内容与合作伙伴
- 通过 X space 举行了首场社区 AMA：https://x.com/QuantusNetwork/status/1991341042390692210
- 与 Ârc 创始人 James 的播客：https://www.youtube.com/watch?v=eac4aRF50qU
- 签约了两名新的顾问 / KOL。

## 行业动态
- Scott Anderson 更新了他对运行 Shor 算法的容错量子计算机的时间线预测，调整为“在下届美国总统大选之前”：https://scottaaronson.blog/?p=9325
