---
title: "Quantus Weekly：Planck 测试网上线与早期挖矿奖励"
description: "为何早期算力至关重要、Planck 测试网已对矿工开放、TestFlight 与应用商店迁移、新链上的 GPU 挖矿，以及本周核心、基础设施、钱包与社区动态。"
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly：Planck 测试网上线与早期挖矿奖励"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

早期算力很重要。

2,100 万枚比特币供应量的一半，是在最初四年里释放的——当时几乎无人关注。

谁都可以挖矿，早期出块奖励是 50 BTC。

几次算力循环，本可能彻底改变一个家族的命运。

Quantus 采用工作量证明，最大供应量为 2,100 万 QUAN。

与比特币一样，早期矿工因帮助网络冷启动而获得更高比例的奖励。

今天我们上线了 Planck 测试网。

我们正在主网之前对 Quantus 进行压力测试。

若你通过 TestFlight 使用应用，将提示一键迁移。

若从 iOS App Store 或 Google Play 下载应用，更新将在未来几天内陆续推送。

若你在挖 Quantus，现在就可以开始挖 Planck 测试网。

请查看链仓库 wiki 中的最新挖矿指南，其中包括我们的 GPU 实现（比 CPU 矿工更高效）。

简易 UI 矿工应用仍在升级，但若你技术能力较强，现在应已能开始挖新测试网。如遇问题请告诉我们。

这次测试网是正式上场前的彩排。主网上线后算力会迅速攀升，你需要在第一天前把环境调通。

本周其余交付如下：

### Core Tech & ZK

- 上线新测试网。
- 为主网准备移除 sudo pallet。
- 修复网络同步。
- 修复单状态内存池。
- 将 Poseidon 更新至最新版本。

### Network & Infra

- 更新节点文档，注明最低网络要求。
- 将 Subsquid 索引器更新至最新链版本，修正可逆与已取消的事件/外部交易类型，并发布 Docker 镜像 v0.6.0。
- 为 Task Master 风险检查接口增加速率限制，并更新 CORS 策略。

### Web & Mobile App Updates

- 恢复移动应用高安全流程并发布体验修复。
- 重新设计钱包首页，更新按钮、图标与交易列表组件，并集成面向最新 Subsquid 索引器的新 GraphQL 查询。
- 修复移动钱包页面动画、首页横幅问题，以及非首页路由下滚动时导航栏变暗的问题。

### Content & Partnerships

- Chris 做客 [@mobymedia](https://x.com/mobymedia) 播客：[https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- 与 [@ethan_t_c_](https://x.com/ethan_t_c_) 和 [@YuviLightman](https://x.com/YuviLightman) 发布后量子零知识证明播客：[https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- 出席新加坡 GitEx。
- 在 Network School 与 Dr. [@zina_cinker](https://x.com/zina_cinker) 举办满座场次：[https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris 参加 [@ArcanumVentures](https://x.com/ArcanumVentures) 第 47 期直播（4 月 16 日周四 14:00 UTC / 新加坡 22:00）：[https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- 继续分发《量子现状》报告并推进评论功能。
