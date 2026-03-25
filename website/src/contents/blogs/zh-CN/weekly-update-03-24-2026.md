---
title: "Quantus 每周动态：第二次减半 — 两周内 ZK 证明提速 4 倍"
description: "再次将证明器时间减半、Poseidon 哈希、挖矿修复、Senoti 限流、白皮书上线、iOS 兑换审核，以及 Quantum Canary 谈 Solana 量子安全等。"
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus 每周动态：第二次减半 — 两周内 ZK 证明提速 4 倍"
featured: false
tags:
  [
    "weekly-update",
    "zk-proofs",
    "poseidon",
    "privacy",
    "wormhole",
    "performance",
    "scalability",
  ]
---

2 是一个特别的数。

2+2 等于 4。2x2 等于 4。2² 等于 4。

它是唯一一个让加法、乘法和乘方都得到相同结果的数。

两周前，我们在优化 ZK 证明流水线上取得了显著进展。

上周我们将证明器时间减半（除以 2）。

本周再次减半（第二次减半）。

14 天内提速 4 倍。

证明流水线中的每一毫秒都关乎我们隐私交易的速度与体验。

用户点击发送时，希望收款方立刻看到资金。

我们的虫洞交易（切断发送方与接收方关联）需要 ZK 证明。

ZK 证明在结算前增加时间。每过一秒，收款方每次刷新却看不到资金，都是失败。

有些 UI 技巧能改善体验，这很好。

但结算既要感觉极快，也要实际上极快。

我们正在把秒数一点点磨掉。

本周其他交付如下：

### GitHub 活动（已合并 12 个拉取请求）：

![Github Stats](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### 核心技术与 ZK：

- 通过 ZK 友好的数据库优化，证明器时间再降 50%。证明流水线连续第二周实现 2 倍提升。
- 在 Poseidon 中实现非单射哈希，qp-poseidon-constants 发布新的版本化发行。
- 修复挖矿算法边界情况下的难度调整。
- 对所有 pallet 与主 crate 进行 AI 驱动审查，并就已标记问题提交缺陷报告。
- 合并代码库审查中发现问题的清理 PR。

### 网络与基础设施：

- 为 Senoti 通知服务的设备注册接口增加速率限制。
- 浏览器更新：合并最新改动、解决冲突并调整 API。

### 网页与移动应用：

- 在网站发布新版白皮书，样式与内容已更新。
- 将上期周报发布为 [quantus.com/blog](https://quantus.com/blog) 上的博文。
- 实现交易池 peek 订阅功能并完成端到端测试。
- 已启动 iOS 应用中兑换功能在 Apple 的审核流程。

### 内容与合作伙伴：

- 完成「State of Quantum」行业报告 20 页草稿，并开始分发征求意见。若感兴趣欢迎联系。
- 新增一名社交媒体营销岗位。
- Q-Day 活动日期确认：4 月 25 日于 Network School。

### 行业动态：

- Quantum Canary：[Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)
