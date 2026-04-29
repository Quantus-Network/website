---
title: "Quantus Weekly：春季清理、Eiger 审计与紧凑聚合器"
description: "与 Eiger 推进多项审计整改，重构 CLI，修复矿工与索引器问题，并在新的紧凑聚合器上完成虫洞集成测试；ZK 侧虫洞流程已顺畅跑通上周交付的 2x8 紧凑聚合器；发布移动钱包 1.3.4 / 1.3.5、修复 GPU 问题的 Quantus 矿工 v3.1.0，并更新文档覆盖从挖矿到领奖全流程；在 Network School 举办首场普朗克测试网矿工工作坊。"
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly：春季清理、Eiger 审计与紧凑聚合器"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

春季清理周。

我们与 Eiger 推进多项审计整改，重构了 CLI，修复了矿工与索引器上的问题，并在新的紧凑聚合器上运行了虫洞集成测试。

在 ZK 方面，虫洞流程现已顺畅跑通我们上周交付的 2x8 紧凑聚合器。这一架构将证明器性能翻倍，意味着更快、更可扩展的隐私交易。面向用户，我们发布了移动钱包 1.3.4 与 1.3.5，以及修复 GPU 缺陷的 Quantus 矿工 v3.1.0。文档也已更新，覆盖从挖矿到申领奖励的完整流程。

我们在 Network School 举办了首场普朗克测试网矿工工作坊。

以下是本周交付要点：

### GitHub 动态（已合并 26 个拉取请求）：

![Github Stats](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### 核心技术 & ZK

- 处理来自 Eiger 的多项审计事项。
- 在 2x8 紧凑聚合器上运行虫洞集成测试。
- 重构 Quantus CLI，解决兼容性、交易生命周期与费用估算等问题。

### 网络与基础设施

- 对普朗克测试网进行压力测试。
- 提升 Subsquid 索引器性能并修复 CPU 占用尖峰。本周 Subsquid 曾导致移动应用体验问题（余额无法加载），现已解决。
- 发布 Quantus 矿工 v3.1.0，修复 GPU 挖矿缺陷。

### 网站与移动应用

- 发布移动钱包 1.3.4 与 1.3.5。
- 移动钱包设计改进；下一步上线引导流程。
- 为钱包完成账户管理、设置、引导、首页骨架屏、POS 启用、空状态和矿工奖励等流程设计。
- 梳理钱包中的虫洞流程体验。
- 更新 [docs.quantus.com](https://docs.quantus.com)，覆盖从挖矿到申领奖励的端到端说明。
- 刷新 CLI、监控、链、网站与 ZK 电路等仓库的 deepwiki。

### 移动钱包数据

- 总用户：2,252
- 月活（MAU）：1,048

### 内容与合作伙伴

- 在 Network School 举办首场普朗克测试网矿工工作坊，4 人以上从零完成挖矿上手。
- 在 EthKL 聚会进行宣讲。
- 确认 Q-Day 赞助商。
- 赞助 NS Marathon，现场提供 Quantus 椰子。
- 发布新播客，[解读 Quantus 架构](https://x.com/QuantusNetwork/status/2047178654396862837)。
