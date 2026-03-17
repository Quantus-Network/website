---
title: "Quantus 每周动态：量子安全签名、ZK 扩展与虫洞证明 2 倍速"
description: "每周更新：ML-DSA 签名规模、ZK 聚合、虫洞证明加速、安全审计、测试网节点与 Quantum Canary 内容。"
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus 每周动态：量子安全签名、ZK 扩展与虫洞证明 2 倍速"
featured: false
tags:
  [
    "weekly-update",
    "quantum-safe",
    "ml-dsa",
    "zk-proofs",
    "wormhole",
    "scalability",
    "privacy",
  ]
---

比特币签名只有 65 字节。

单个 ML-DSA-87 签名则有 4,627 字节。

足足大了 70 倍。

若在每笔交易中都如此放大，就会成为扩展性难题。

不过别担心，我觉得把比特币区块大小提高应该不会有什么争议。

（开玩笑的）

量子安全签名体积庞大，若今天就用上，比特币吞吐量将远低于 1 TPS。

[@QuantusNetwork](https://x.com/QuantusNetwork) 在不使用任何扩展技术的情况下，每个区块即可实现约 685 笔交易。

但我们用 ZK 将这些更大的交易聚合成更小的证明，最终上链。

同时通过切断发送方与接收方之间的关联，为用户提供隐私保护 [（上期已介绍）](https://x.com/YuviLightman/status/2030162754544525495)。

57 TPS 变为加密后的 3,500 TPS。

新的区块链三难是：量子安全、可扩展性与隐私。

我们正在用 ZK 解决它。

本周我们将证明时间缩短了一半。

虫洞聚合证明现在结算速度提升 2 倍。

签名依然很大。链不在乎。

以下是本周我们完成的其他工作：

### GitHub 活动（已合并 12 个拉取请求）：

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### 核心技术与 ZK：

- 虫洞聚合证明现提速 2 倍，采用序列化证明器替代动态重建。
- 完成 qp-zk-circuits 的电路构建器/证明器重构与拆分。
- 将聚合器 API 从动态证明器/电路构建器重新设计为编排与制品管理。
- 使用新聚合器 API 更新 quantus-cli。
- 修复虫洞验证器 blob 与链上 qp-zk-circuits 之间缺乏密码学/可复现构建绑定的问题。
- 完成所有 Substrate pallet 的多项安全审计，合并 8 个修复 PR。
- 启动 Substrate pallet 正式审计。
- 多签与 Treasury pallet 改进。

### 网络与基础设施：

- 使用新测试网配置部署两个新的 Planck 测试网节点。
- Substrate 状态剪枝调研与修复。
- 将测试网水龙头连接到 [@QuantusNetwork](https://x.com/QuantusNetwork) 推特账号。
- Subsquid：新增按用户事件映射以提升查询性能。
- Subsquid：更新可逆转账聚合以提升历史准确性。
- 搭建跨链基础设施：Rosetta API 实现及集成测试与 MPC 签名更新。

### 网页与移动应用更新：

- 移动钱包 build 82：代码清理与 UI 标准化（表单、脚手架、图标按钮、账户重构）。
- 更新移动钱包链历史服务与交易历史 UI，以支持最新 Subsquid 数据模型。
- 网站：优化页面索引，将每周更新作为博客发布，修复博客搜索以包含标题。
- 浏览器：将可逆交易视图拆分为独立事件类型（已计划、已执行、已取消）。
- Quantum Canary 网站：文章表格适配移动端。

### 内容与合作伙伴：

- 与物理学家兼创业者 Steve Hsu 就量子计算、AI 与量子威胁时间线录制播客。
- 新增两名市场招聘。
- 在 Network School 举办加密入门与隐私/OPSEC 安全活动。

### 行业动态：

- Quantum Canary：[Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary：[Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary：[The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary：[TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)
