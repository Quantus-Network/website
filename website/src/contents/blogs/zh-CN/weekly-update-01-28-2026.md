---
title: "Quantus 每周动态：可否认 RPC 与 Neodyme 安全审计"
description: "每周更新：我们推出了用于增强隐私的新型可否认 RPC，完成了 Rusty Crystals 的 Neodyme 安全审计，并为所有代币启用了私有 ZK 地址。"
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus 每周动态：可否认 RPC 与 Neodyme 安全审计"
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

99% 的隐私基础设施都是在演戏。你的信息正在堆栈的某个地方泄露。你的钱包与一个名为 RPC 的服务器通信。该 RPC 服务器将信息发送回你的钱包。但为了做到这一点，RPC 通常需要了解一些关于你的信息。

例如，为了查询余额，它可能需要你的交易历史。它可能会将其与你的 IP 地址、大致位置、使用习惯等关联起来。这一切只是为了让你在钱包中看到余额。

因此，当你最喜欢的链上隐私工具的新营销人员 Stacy 在 X space 上吹嘘他们有多么“私密和安全”时，那些穿西装的人只是在窃听 RPC 连接。

你被盯上了。

我们构建了一些不同的东西。可否认 RPC (Deniable RPCs) 使用类似于不经意查找 (oblivious lookup) 的哈希前缀过滤器。你可以向服务器查询你的交易，而它不知道你在寻找什么。RPC 无法确定你请求的具体是哪些交易。

因此，[@QuantusNetwork](https://x.com/@QuantusNetwork) 在链上以及钱包/RPC 基础设施中保护隐私。我们在堆栈的每一层都对你想保持秘密的内容保密。

本周我们还[宣布](https://x.com/QuantusNetwork/status/2016390125626773871)完成了 [@Neodyme](https://x.com/@Neodyme) 对我们的 Rusty Crystals Dilithium 签名库的安全审计。所有问题均已解决并应用了加固技术。Rusty Crystals 是 Rust 中最好的 Dilithium 签名库，具有完整的 HD 钱包支持。

以上是本周亮点。以下是我们在过去一周发布的其他内容：

### GitHub 活动（19 个已合并的拉取请求）：

![Github 统计](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### 核心技术与 ZK

- 完成了 [@Neodyme](https://x.com/@Neodyme) 审计，所有问题均已解决。应用了包括使用后内存清零在内的加固技术。[在此发布](https://x.com/QuantusNetwork/status/2016390125626773871)。
- 通过前缀哈希发布了可否认 RPC。用户现在在连接到 RPC 节点时具有合理否认性（不经意查找）。
- 在创世阶段为所有代币启用了私有 ZK 地址。
- 持续出块将交易包含的平均时间缩短了 50% 以上。
- 删除了不必要的 pallet，简化了运行时 (runtime)。
- 多重签名 (Multisig) pallet 功能完备，并更新了文档。链和 CLI 集成正在等待审查。
- 改进了 ZK-aggregator 电路的模糊测试器 (fuzzer)，并扩大了矿工费和销毁费的测试覆盖范围。

### 网页与移动应用更新

- 发布了移动应用 v1.1.5（内部版本 65），具有高安全提取功能。
- 制作了高安全功能的演示视频。
- 区块浏览器和水龙头改进：在区块详情中增加了错误和高安全事件，支持按错误类型搜索，并增强了群组消息过滤。
- 修复了 Task Master 在排行榜、突袭提交和指标方面的漏洞。
- 修复了 Subsquid dockerfile 和用于生成 docker 镜像的 GitHub action。
- 更新了网站博客 UX 并修复了 SEO 问题。

### 内容与合作伙伴

- Telegram 成员突破 1,000 人。
- 预订了 Token2049 迪拜周边活动的场地。
- 团队决定在下一个冲刺阶段回归 [@ns](https://x.com/@ns)。
- 聘请了新设计师进行移动应用重新设计。
- 聘请了我们的第一位中型内容创作者进行视频合作。正在建立我们的创作者名单。

### 行业动态

- [@QuantumCanary\_](https://x.com/@QuantumCanary_) 发布的[深入研究 Zcash](https://x.com/QuantumCanary_/status/2016327421797294286) 的文章。
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) 发布了他们的“[区块链对比表](https://x.com/QuantumCanary_/status/2015734605450731824)”。
