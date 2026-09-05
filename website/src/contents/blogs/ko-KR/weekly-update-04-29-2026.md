---
published: true
title: "Quantus Weekly: 감사 및 컴팩트 애그리게이터"
description: "Eiger 감사 항목 정리, CLI 리팩터, 마이너·인덱서 수정, prover 속도 2배를 낸 컴팩트 애그리게이터 웜홀 테스트를 다룬 Quantus 주간 업데이트입니다."
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly: 감사 및 컴팩트 애그리게이터"
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

봄 대청소 주간입니다.

Eiger와 함께 감사 항목을 정리하고, CLI를 리팩터했으며, 마이너와 인덱서 전반의 버그를 수정하고, 새 컴팩트 애그리게이터에서 웜홀 통합 테스트를 실행했습니다.

ZK 측면에서, 웜홀 플로우가 지난주 출시한 2×8 컴팩트 애그리게이터를 통해 깔끔하게 실행됩니다. prover 성능을 2배 높인 아키텍처로, 더 빠르고 확장 가능한 프라이빗 트랜잭션이 가능합니다. 사용자 측면에서는 모바일 지갑 릴리스 2건(1.3.4, 1.3.5)과 GPU 버그 수정이 포함된 Quantus 마이너 v3.1.0을 출시했습니다. 채굴부터 보상 클레임까지 전체 플로우를 다루도록 문서도 업데이트했습니다.

Network School에서 첫 Planck 테스트넷 마이너 워크숍을 주최했습니다.

이번 주에 구축한 모든 소식은 다음과 같습니다.

### GitHub 활동 (26개의 병합된 풀 리퀘스트):

![Github 통계](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### 코어 기술 및 ZK

- Eiger의 여러 감사 항목을 해결했습니다.
- 2×8 컴팩트 애그리게이터에서 웜홀 통합 테스트를 실행했습니다.
- 호환성, 트랜잭션 라이프사이클, 수수료 추정 이슈를 해결하기 위해 Quantus CLI를 리팩터했습니다.

### 네트워크 및 인프라

- Planck 테스트넷에서 스트레스 테스트를 실행했습니다.
- Subsquid 인덱서 성능을 개선하고 CPU 사용량 급증을 수정했습니다. Subsquid가 이번 주 모바일 앱 UX(잔액 미로딩)에 문제를 일으켰으나, 현재 해결되었습니다.
- GPU 채굴 버그를 수정한 Quantus 마이너 v3.1.0 출시.

### 웹 및 모바일 앱 업데이트

- 모바일 지갑 1.3.4 및 1.3.5 출시.
- 모바일 지갑 디자인 개선. 온보딩 플로우가 다음에 출시됩니다.
- 지갑용 Account Management, Settings, Onboarding, Home Screen Skeleton, POS Enable, Empty State, Miner Rewards 플로우 설계.
- 지갑용 Wormhole 플로우 UX 매핑.
- 채굴부터 보상 클레임까지 end-to-end를 다루도록 [docs.quantus.com](https://docs.quantus.com) 업데이트.
- CLI, 모니터링, 체인, 웹사이트, ZK circuits repo 전반의 deepwiki 갱신.

### 모바일 지갑 분석

- 총 사용자: 2,252
- MAU: 1,048

### 콘텐츠 및 파트너십

- Network School에서 첫 Planck 테스트넷 마이너 워크숍 주최. 4명 이상이 제로에서 채굴까지 도달.
- EthKL 밋업에서 피칭.
- Q-Day 스폰서 확정.
- Quantus 코코넛으로 NS Marathon 후원.
- Quantus 아키텍처에 관한 [새 팟캐스트](https://x.com/QuantusNetwork/status/2047178654396862837) 출시.
