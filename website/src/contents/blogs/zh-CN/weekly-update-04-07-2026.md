---
title: "Quantus Weekly：Q 日估算、链上花费攻击风险与永久经济自由"
description: "Google 与 Oratomic 对攻破 ECC 的量子比特估算、相对比特币 10 分钟出块的链上花费攻击、Google 将后量子迁移截止延至 2029 年，以及 Quantus 以「永久经济自由」为核心的品牌重塑，另含 ZK、基础设施与应用更新。"
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly：Q 日估算、链上花费攻击风险与永久经济自由"
featured: false
tags:
  [
    "weekly-update",
    "quantum",
    "bitcoin",
    "post-quantum",
    "ecc",
    "zk-proofs",
    "rebrand",
    "infrastructure",
    "mobile",
  ]
---

攻破比特币密码学所需的物理量子比特数量，刚从 2000 万降至 50 万以下。

Google 于上周公布新数字。这就是你的时间线上全是量子话题的原因。

Oratomic 的另一篇论文给出的数字是 1.9 万。

一年之内，差了四个数量级。

Google 团队结合预计算，估计攻击窗口为 9 分钟。

比特币每 10 分钟确认一个区块。

这意味着攻击者可以拦截进行中的交易、破解发送方密钥，并在网络确认原始交易之前广播欺诈性替换交易。这被称为链上花费（on-spend）攻击。

当链上花费攻击成为现实时，即使对量子攻击者隐藏公钥，也不足以防止你的聪（sats）被盗。

Google 将自身后量子迁移截止日期推迟到 2029 年。更有趣的是，他们公布了攻破 ECC-256 的资源估算（量子比特数量、时间），却未公开执行密码破解本身的详细技术方案。

上一次科学家在如此规模上自我审查，早于曼哈顿计划。

就像 1945 年一样，不会有公开路线图，也不会有一连串「渐进进展」公告让你清楚知道还剩 X 个月。Q 日到来时不会有通知。那将是国家机密。

论文的表述是：攻破 32 位椭圆曲线与攻破 256 位椭圆曲线相比，「难度并非显著更高」。一旦有人演示了小密钥规模的破解，公链迁移窗口便已经关闭。

过去十年比特币只发布过三次重大协议更新。紧急后量子迁移至少需要 1–3 年；有序迁移则需要 5 年以上。

有序迁移的窗口正在关闭，甚至可能已经过去。现在已是存亡问题。

因此我们在本周锁定了北极星：永久经济自由。这三个词是 Quantus 所做一切的基石。全新 [quantus.com](https://quantus.com) 已上线，完成全面品牌重塑，并以这一使命为核心构建视觉识别。

永久，因为密码学采用 NIST 第五级后量子标准。

经济，因为加密资产的意义正在于此——颠覆央行。

自由，因为我们反抗那些企图控制你的人。

[@QuantusNetwork](https://x.com/QuantusNetwork) 是量子安全的加密货币。以下是我们本周交付的其他内容。

### GitHub 动态（已合并 13 个拉取请求）：

![Github Stats](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### 核心技术 & ZK

- qp-plonky2 采用新的盲化策略，使 ZK 叶子证明速度提升 6 倍，且不增加原生 trace 长度。
- 重构 CLI，使移动应用与矿工应用共享同一套 ZK 代码。
- 矿工应用已在新测试网上配合更新后的 ZK 系统运行。
- 处理安全审计中发现的问题。
- 修复链上与 CLI 的密钥生成。

### 网络与基础设施

- 扩展监控：新仪表盘与告警渠道，并接入 Telegram 通知。
- 更新日志栈并支持历史轮转。
- 各仓库依赖更新与新版本发布。
- 遥测与 Grafana 品牌更新以匹配新视觉识别。
- 修复 CLI 构建与发布流程。

### 网站与移动应用

- 上线重设计的 [quantus.com](https://quantus.com)，基于 Astro 重建并支持本地化。
- 移动应用新 Logo 与启动画面。
- 改进移动应用发送性能。
- 发布移动应用版本 1.2.3、1.3.0 与 1.3.1。

### 内容与合作伙伴

- 在 [@QuantusNetwork](https://x.com/QuantusNetwork) 发布品牌重塑公告。
- 在 [@QuantusNetwork](https://x.com/QuantusNetwork) 发布白皮书公告。
- Scaling & Privacy with Post-Quantum ZK-Proofs：Ethan 与 Chris 在 Quantus Youtube 的白板视频。
- 出席 Network School 四月开幕活动，包括 NS Fair 展位与 Crypto Payments & Privacy 工作坊。
