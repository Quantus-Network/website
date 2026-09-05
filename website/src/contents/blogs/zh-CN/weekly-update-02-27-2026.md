---
published: true
title: "Quantus 每周动态：钱包应当保持简单"
description: "钱包 v1.2.0 上线 App Store：打开即见余额，无广告无社交噪音。本周还有多签国库、Heisenberg 测试网与历史加载提速。"
pubDate: "2026-02-27"
heroImage: "/blog/covers/weekly-update-02-27-2026.webp"
heroAlt: "Quantus 每周动态：钱包应当保持简单"
featured: false
tags:
  [
    "weekly-update",
    "mobile-wallet",
    "treasury",
    "multisig",
    "heisenberg-testnet",
    "zk-proofs",
    "performance",
  ]
---

每一个主流加密钱包都在加我不想要的垃圾功能。

我不想要一个既能社交又能存钱的 App。

你有没有发现：为什么没有一个高度主见、易用、自托管的「官方」比特币钱包？

以太坊和 Solana 也一样。

基金会建链，界面留给第三方。第三方要收入。收入意味着功能。功能意味着噪音。

于是你的钱包里有了兑换聚合器、社交动态、热门代币、NFT 画廊，以及关于你从没听过的币的推送。

我们构建了 Quantus，也构建了钱包。

同一个团队，同一个产品。本周上架 App Store 的应用：没有广告、没有代币动态、没有社交功能、没有可领取用户名。

打开它，你看到余额，发送或接收。

我们从头重做界面，高度主见，默认设置尽可能卸掉用户的认知负担。

我们也大幅缩短了钱包交易历史加载时间。打开 App 后，不再干等余额和过往交易加载。

量子安全的私人货币应该好用，理想情况下甚至有点无聊。

刺激留给 Q-day 之前的前量子链。

一切开源。任何人都可以做自己的钱包。但总会有一个官方的、就是好用的。

### GitHub 活动（4 个已合并的拉取请求）：

![Github Stats](/blog/assets/github-stats-weekly-update-02-27-2026.webp)

### 核心技术与 ZK

- 带多签的国库已合并，并纳入新的 Heisenberg 测试网发布。
- 所有待合并变更已合并并发布。新 Heisenberg 创世已创建、发布并部署。
- 移除与国库管理相关的旧治理规则。
- CLI 扩展新的多签与国库命令。高安全账户详情现可在钱包视图中查看。
- 增加证明混洗与重复退出账户清零，提升聚合 wormhole 交易隐私。
- 将 wormhole 拆为电路构建器与证明器，加快证明聚合。
- 更新 ZK 电路发布工作流，并发布新构件。
- 解决 Revive pallet 依赖问题。

### 网络与基础设施

- 通知系统（Senoti）：为区块观察器加入故障转移，以选择最佳网络。
- 更新 Senoti，支持每设备多地址。
- 为 Subsquid 服务器加入 RPC 故障转移。
- 更新监控告警并重定向到合适频道。

### Web 与移动应用更新

- 将钱包 v1.2.0 发布到 iOS App Store。
- 将平均交易历史加载时间从逾 1 分钟缩短到 5 秒以内。
- 发布钱包 build 75、76、77，修复 Android 启动屏及其他问题。
- 为钱包构建增加发布构件工作流。
- 更新 toaster 组件并清理旧版。
- 增加远程通知支持：注册已有地址、重置时注销 FCM 设备、移除新钱包地址通知。
- 为核对短语加入「快乐词汇」列表。
- 重构 Subsquid，更聚焦 extrinsics，支持隐私分数计算与 wormhole 交易。
- 重构浏览器以匹配更新后的 Subsquid 架构。

### 内容与合作伙伴

- 与 Nik Heger 的播客：《Building A New Sound Money System》

### 行业动态

- Quantum Canary 分析 [Stripe 的 Tempo 区块链是否量子安全。](https://x.com/QuantumCanary_/status/2024797352616509754)
