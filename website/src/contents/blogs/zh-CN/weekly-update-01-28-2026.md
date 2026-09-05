---
published: true
title: "Quantus 每周动态：可否认 RPC 与 Neodyme 审计"
description: "本周我们推出可否认 RPC，让钱包查询交易时 RPC 无从得知目标；并完成 Rusty Crystals 的 Neodyme 审计，创世代币启用私有 ZK 地址。"
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus 每周动态：可否认 RPC 与 Neodyme 审计"
featured: false
tags:
  [
    "weekly-update",
    "rpc",
    "privacy",
    "audit",
    "security",
    "dilithium",
    "zk-aggregator",
    "multisig",
  ]
---

你的钱包正在告发你。

99% 的隐私基础设施都是在演戏。信息会在堆栈某处泄露。钱包连到一个叫 RPC 的服务器，RPC 再把信息回传。而为了做到这一点，RPC 通常得知道一些关于你的事。

比如拉余额，它可能需要你的交易历史，再把它和你的 IP、大致位置、使用习惯等绑在一起——只为了让你在钱包里看到余额。

于是当你最爱的链上隐私工具新招的营销 Stacy 在 X Space 上吹「多么私密安全」时，西装们只是在窃听 RPC 连接。

你已经被拿下了。

我们做了不一样的东西。可否认 RPC（Deniable RPCs）使用类似不经意查找（oblivious lookup）的哈希前缀过滤。你可以向服务器要交易，而它不知道你在找什么。RPC 无法判断你具体请求了哪些交易。

因此 [@QuantusNetwork](https://x.com/@QuantusNetwork) 在链上与钱包/RPC 基础设施两端都守护隐私。你想保密的，我们在堆栈每一层都帮你保密。

本周我们还[宣布](https://x.com/QuantusNetwork/status/2016390125626773871)完成了 [@Neodyme](https://x.com/@Neodyme) 对我们 Rusty Crystals Dilithium 签名库的安全审计。所有问题已解决并应用加固。Rusty Crystals 是 Rust 里最好的 Dilithium 签名库，完整支持 HD 钱包。

以上是亮点。以下是我们过去一周还交付的内容：

### GitHub 活动（19 个已合并的拉取请求）：

![Github 统计](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### 核心技术与 ZK

- 完成 [@Neodyme](https://x.com/@Neodyme) 审计，所有问题已解决。应用加固技术，包括使用后内存清零。[帖子在此](https://x.com/QuantusNetwork/status/2016390125626773871)。
- 通过前缀哈希上线可否认 RPC。用户连接 RPC 节点时具备合理可否认性（不经意查找）。
- 在创世为所有代币启用私有 ZK 地址。
- 持续出块将交易纳入平均时间缩短逾 50%。
- 移除不必要的 pallet，简化 runtime。
- 多签 pallet 功能完备并更新文档。链与 CLI 集成待审。
- 重做 ZK-aggregator 电路 fuzzer，扩大矿工费与销毁费测试覆盖。

### Web 与移动应用更新

- 发布移动应用 v1.1.5（build 65），含高安全拉取能力。
- 制作高安全功能演示视频。
- 浏览器与水龙头改进：区块详情加入错误与高安全事件，支持按错误类型搜索，增强群组消息过滤。
- 修复 Task Master 排行榜、突袭提交与指标相关问题。
- 修复 Subsquid Dockerfile 与生成 Docker 镜像的 GitHub Action。
- 更新网站博客 UX 并修复 SEO 问题。

### 内容与合作伙伴

- Telegram 成员突破 1,000。
- 预订 Token2049 迪拜周边活动场地。
- 团队决定下一冲刺回归 [@ns](https://x.com/@ns)。
- 新聘设计师重做移动应用视觉。
- 签约首位中型内容创作者做视频合作，正在扩充创作者阵容。

### 行业动态

- [@QuantumCanary\_](https://x.com/@QuantumCanary_) 文章[深入 Zcash](https://x.com/QuantumCanary_/status/2016327421797294286)。
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) 发布「[区块链对比表](https://x.com/QuantumCanary_/status/2015734605450731824)」。
