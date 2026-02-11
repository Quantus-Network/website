---
title: "Quantus 每周动态：Dirac 测试网发布与格子密码学审计"
description: "每周更新：发布 Dirac 测试网，完成 PoW 算法和格子密码学库的整链更新，以及多项基础设施改进。"
pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus 每周动态：Dirac 测试网发布与格子密码学审计"
featured: false
tags:
  [
    "weekly-update",
    "dirac-testnet",
    "lattice-cryptography",
    "pow",
    "libp2p",
    "ghostdag",
    "blue-green-deployment",
  ]
---

本周，团队发布了 Dirac 测试网，完成了全链范围内对工作量证明 (PoW) 算法和格子密码学库 qp-rusty-crystals 的更新。该核心库目前正在接受外部审计，并包含恒定时间 (constant-time) 签名。此次更新现已集成到移动钱包和 libp2p 中。

**如果您是矿工，请务必更新至新的 DIRAC 测试网**

## 开发新闻
- 每周 Github 活动报告，包含 12 个拉取请求，其中 3 个已合并：https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## 核心技术
- 发布并合并了 qp-rusty-crystals 的完整参考实现，支持恒定时间密钥生成和签名。
- 解决了 rusty-crystals 的所有 KAT 测试，实现了恒定时间并修复了遗留的发布脚本问题。
- 启动了对 qp-rusty-crystals 的审计。
- 完成了区块头验证电路的实现。
- 将区块头哈希器更新至新版本，消除了电路填充 (padding)。
- 调查并解决了区块头中缺少摘要日志 (digest logs) 的漏洞。
- 为虫洞 (wormhole) 示例二进制文件增加了缓存功能，以保存最新证明，方便调试。
- 开始实现 GHOSTDAG 共识论文。

## 网络与基础设施
- 在所有服务器上发布 Dirac 0.4.0。
- 发布外部矿机版本 1.0.0。
- 针对 rusty-crystals 更新同步更新链端。
- 新的 Prometheus 和 Grafana 仪表板，现已配置可用的告警邮件通知。
- 新的更新版遥测服务。
- 为 Fedora 机器创建了参考设置。
- 为新的 Dirac 测试网部署了 2 台新的安全 VPS 服务器。
- 加固了 Quantus.cat 域名，并为所有机器配置了 Cloudflare 隧道。
- 升级了 Subsquid 部署流程，支持蓝绿部署以实现零停机更新。
- 创建了自动生成 Docker 镜像并发布到 GitHub 的工作流。
- 修复了 http://quantu.se/ 的索引问题，并更新了元数据以指向正确的节点 URL。

## 网页与移动应用更新
- 完成了移动应用通知功能。
- 重构了路由意图 (route intent) 处理，以提高深度链接 (deep linking) 的性能和可靠性。
- 矿机仪表板布局现已完全实现响应式。
- 修复了 Quantus Explorer 的一个漏洞，即搜索功能仍在使用旧的 GraphQL 端点。
- 重构了 Quantus Explorer API 客户端，使用现代 Hooks 以获得更好的性能。

## 内容与合作伙伴
- 与 Remus Boroiu（9 届健美冠军、企业家和创作者）的播客：https://www.youtube.com/watch?v=OtBKnaFAe_8
- 通过 Chainwire 发布新闻稿。

## Quantum Canary
- 量子股票分析：https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- 深度探讨兰德公司 (RAND Corporation) 在制定全球政策和加速 PQC 迁移时间表中的影响力：https://www.quantumcanary.org/insights/rand-quantum-controversy
- 普林斯顿大学研究人员将 45 个蓝宝石基钽 (tantalum-on-sapphire) 量子比特的相干时间提高了三倍：https://www.nature.com/articles/s41586-025-09687-4
