---
title: "Quantus Weekly：普朗克测试网、CLI 领取奖励与证明器吞吐翻倍"
description: "普朗克是首个支持 Quantus 后量子隐私交易的测试网；多数矿工本周完成迁移，可通过 CLI 将挖矿奖励申领至移动钱包的透明地址；docs.quantus.com 提供节点、矿工与领奖指南；2x8 分片架构使聚合证明器速度翻倍。"
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly：普朗克测试网、CLI 领取奖励与证明器吞吐翻倍"
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

普朗克是我们首个支持 Quantus 后量子隐私交易的测试网。

本周已有超过半数矿工迁移到普朗克。

当其他链还在争论量子威胁是否真实时，我们已在公开场合对解决方案进行压力测试。

你现在可以通过 CLI 将挖矿奖励申领到移动钱包中的透明地址。

我们已在 Apple Silicon 与 Linux 上完成端到端挖矿验证。

目前移动端界面仅支持我们的透明地址类型，更多进展将很快公布。

[docs.quantus.com](https://docs.quantus.com) 已上线，提供从搭建节点、运行矿工到向移动钱包申领奖励的挖矿指南。

若你曾在早期 Quantus 测试网上挖矿或使用，更新应用时会提示迁移。

余额会重置，但在设置的「mining rewards」中仍可查看你在以往测试网上挖出的每个区块的记账。

我们也在统计各账户在普朗克上挖出的区块数量。

本周通过 2x8 分片架构，聚合证明器速度也实现翻倍。

本周还有更多交付。

### GitHub 动态（已合并 27 个拉取请求）：

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### 核心技术 & ZK

- 通过 2x8 分片证明架构将聚合证明器性能翻倍（每个 8 叶 bundle 不做 ZK，在根证明上套 ZK 封装）。
- 已提交 ZK 研究论文预印本。
- 发现并修复 qp-plonky2 新 split mask ZK 选项中的隐私泄漏问题。
- 推进阈值 Dilithium 相关审计项。
- 支持通过 CLI 申领挖矿奖励。
- CLI 哈希器更新为 blake2-256。
- 发布 CLI 虫洞余额恢复修复。
- Tech Collective 成员成功执行一次运行时更新。

### 网络与基础设施

- 普朗克：新变更已合并发布；内部普朗克测试网运行中。
- 压力测试：实施新策略并完成多轮运行。
- 水龙头：改进 Twitter 相关异常处理，扩展指标以便更细粒度监控。
- 刷新并扩展普朗克与水龙头的监控面板。
- 实现更精细的告警策略。
- A1-Planck 节点迁至德国；A2-Planck 节点迁至美国。
- 面向普朗克测试网更新 Subsquid：修复余额变动、哈希器改回 blake2b、增加挖矿奖励展示。
- 浏览器更新至普朗克测试网并正确合并虫洞分支。
- 在 Apple Silicon 与 Linux 上端到端跑通 MVP 矿工；Linux GPU 挖矿仍在排查。
- 编写 AI 挖矿技能（SKILL.md）；测试中约两分钟内跑通挖矿。

### 网站与移动应用

- [docs.quantus.com](https://docs.quantus.com) 上线。
- 部署 [q.day](https://q.day) 落地页。
- 发布移动钱包 v1.3.2 与 v1.3.3，适配新测试网。
- 钱包内展示挖矿奖励。
- 重做交易详情、收款与活动界面。
- 更新挖矿指南。

### 内容与合作伙伴

- Q-Day 注册突破 100，详见 [q.day](https://q.day)。
- 收到并落实外部贡献者对《量子现状》报告的评论。
