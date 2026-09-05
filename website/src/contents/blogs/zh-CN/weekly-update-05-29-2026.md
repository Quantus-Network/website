---
published: true
title: "Quantus 每周动态：量子现状研究报告"
description: "我们的加密量子风险研究报告登上多家主流媒体。本周还有：ZK 审计修复、GPU 矿工限流、钱包更新，以及新版 Q-Day 站点与商店正式上线。"
pubDate: "2026-05-29"
heroImage: "/blog/covers/weekly-update-05-29-2026.webp"
heroAlt: "Quantus 每周动态：量子现状研究报告"
featured: false
tags:
  [
    "weekly-update",
    "quantum",
    "research",
    "bitcoin",
    "post-quantum",
    "zk-proofs",
    "mining",
    "testnet",
    "planck",
    "mobile",
    "infrastructure",
    "subsquid",
    "q-day",
    "network-school",
  ]
---

本周，我们发布了关于加密货币量子风险的研究报告：[The State of Quantum: What Crypto Can't Afford to Ignore](https://x.com/QuantusNetwork/status/2059624449993806039)。

报告被 Blockchain Reporter、MEXC、CoinMarketCap Community、Metaverse Post、crypto (dot) news、Yellow、ForkLog 与 The Coin Headlines 等多家媒体转载。

特别感谢为报告作出贡献的每一位：

- [@NEARProtocol](https://x.com/@NEARProtocol)
- [@near_intents](https://x.com/@near_intents)
- [@quipnetwork](https://x.com/@quipnetwork)
- [@cadillion](https://x.com/@cadillion)
- [@midnightfdn](https://x.com/@midnightfdn)
- [@SebastienGllmt](https://x.com/@SebastienGllmt)
- [@KeystoneWallet](https://x.com/@KeystoneWallet)
- [@gnosisguild](https://x.com/@gnosisguild)
- [@auryn_macmillan](https://x.com/@auryn_macmillan)
- [@terminal3io](https://x.com/@terminal3io)
- [@SwaynesWord](https://x.com/@SwaynesWord)
- [@tx_track](https://x.com/@tx_track)

以及作者与编辑：

- [@defijangle](https://x.com/@defijangle)
- [@j_in_marketing](https://x.com/@j_in_marketing)
- [@YuviLightman](https://x.com/@YuviLightman)
- [@JoeMattia](https://x.com/@JoeMattia)

本周我们还交付了这些：

### 核心技术与 ZK

- 处理 qp-plonky2、qp-poseidon 与 qp-rusty-crystals 中的审计问题。
- 优化 Poseidon2 门电路，收紧 ZK 电路连线配置，并为 qp-zk-circuits 加入内存分析工具。

### 网络与基础设施

- 加入可选的 GPU 矿工限流，使矿工可与 AI 推理负载共享同一块 GPU。
- 修复链难度调整行为，并改进链节点 Docker 镜像支持。
- 在 Subsquid 中加入多签事件数据、矿工总数，并提高 API 速率限制。

### Web 与移动应用更新

- 移动钱包新增多语言支持，并修复下拉刷新与无限滚动。
- 修复移动端 POS 模式与支付/发送意图处理，包括冷启动处理与小数分隔符校验。
- 部署新版 Q-Day 站点，并在 q (dot) day 接入赞助咨询邮件。
- 部署 Quantus 商店，用于活动与 NS 上以 QTC 测试网代币售卖周边。
- Quantus Explorer 挖矿排行榜修复。

### 内容与合作

- 发布 The State of Quantum 报告：[https://x.com/QuantusNetwork/status/2059624449993806039](https://x.com/QuantusNetwork/status/2059624449993806039)
- Blockchain Reporter 报道该报告：[https://x.com/blockchainrptr/status/2059620914300613023](https://x.com/blockchainrptr/status/2059620914300613023)
- Metaverse Post 报道该报告：[https://x.com/mpost_io/status/2059922639926530375](https://x.com/mpost_io/status/2059922639926530375)
- ForkLog 报道该报告：[https://x.com/ForkLog/status/2059917147317444833](https://x.com/ForkLog/status/2059917147317444833)
- MEXC、CoinMarketCap、Yellow、crypto (dot) news 与 The Coin Headlines 亦有报道。
- Quip 分享了对报告中比特币治理章节的看法：[https://x.com/quipnetwork/status/2059663890943013153](https://x.com/quipnetwork/status/2059663890943013153)
- Murtuza Merchant 报道了报告中关于比特币可扩展性与治理的发现：[https://x.com/murtuza_merc/status/2059674137824510023](https://x.com/murtuza_merc/status/2059674137824510023)
- Chris 接受 Blockchain Reporter 创始人访谈，谈及量子风险、比特币、稳定币、隐私工具与区块链迁移：[https://x.com/blockchainrptr/status/2059666209663307921](https://x.com/blockchainrptr/status/2059666209663307921)
- 发布 Metaverse Post 访谈，讨论临时区块链隐私与后量子 ZK 架构：[https://x.com/QuantusNetwork/status/2059274094797893727](https://x.com/QuantusNetwork/status/2059274094797893727)
- 围绕 6 月 6 日在 [@ns](https://x.com/@ns) 举办的 Q-Day 发布社交内容，包括预热、合作伙伴与演讲嘉宾公告。
