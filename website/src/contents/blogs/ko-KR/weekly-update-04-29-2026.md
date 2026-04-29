---
title: "Quantus Weekly: 스프링 클리닝, Eiger 감사, 컴팩트 어그리게이터"
description: "Eiger 감사 항목 다수 처리, CLI 리팩터링, 마이너·인덱서 버그 수정, 새 컴팩트 어그리게이터에서 웜홀 통합 테스트. ZK 웜홀 플로우는 지난주 출시한 2x8 컴팩트 어그리게이터를 문제 없이 통과. 모바일 지갑 1.3.4·1.3.5, GPU 버그 수정 Quantus 마이너 v3.1.0, 채굴부터 보상 청구까지 문서 갱신. Network School에서 플랑크 테스트넷 첫 마이너 워크숍 개최."
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly: 스프링 클리닝, Eiger 감사, 컴팩트 어그리게이터"
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

스프링 클리닝 위크입니다.

Eiger와 감사 항목을 정리하고, CLI를 리팩터링했으며, 마이너와 인덱서 전반의 버그를 고치고 새 컴팩트 어그리게이터에서 웜홀 통합 테스트를 돌렸습니다.

ZK에서는 웜홀 플로우가 지난주 배포한 2x8 컴팩트 어그리게이터를 깔끔하게 통과합니다. 프로버 성능을 두 배로 만든 아키텍처이라 더 빠르고 확장 가능한 프라이빗 거래로 이어집니다. 사용자 측면에서는 모바일 지갑 1.3.4와 1.3.5, GPU 버그 수정이 포함된 Quantus 마이너 v3.1.0을 배포했고, 채굴부터 보상 청구까지 전 과정을 다루도록 문서를 업데이트했습니다.

Network School에서 플랑크 테스트넷 첫 마이너 워크숍을 열었습니다.

이번 주에 만든 것들입니다.

### GitHub 활동 (병합된 PR 26개):

![Github Stats](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### Core Tech & ZK

- Eiger 감사 항목 다수 조치.
- 2x8 컴팩트 어그리게이터에서 웜홀 통합 테스트 실행.
- 호환성, 트랜잭션 수명 주기, 수수료 추정 이슈를 다루기 위해 Quantus CLI 리팩터링.

### 네트워크 & 인프라

- 플랑크 테스트넷 스트레스 테스트 실행.
- Subsquid 인덱서 성능 개선 및 CPU 스파이크 수정. 이번 주 Subsquid 때문에 모바일 앱에서 잔액이 안 보이는 등 UX 문제가 있었으며 해결됨.
- GPU 채굴 버그를 고친 Quantus 마이너 v3.1.0 배포.

### 웹 & 모바일 앱

- 모바일 지갑 1.3.4 및 1.3.5 배포.
- 모바일 지갑 디자인 개선. 다음은 온보딩 플로우.
- 지갑용 계정 관리, 설정, 온보딩, 홈 스켈레톤, POS 활성화, 빈 상태, 마이너 보상 플로우 설계.
- 지갑 웜홀 플로우 UX 매핑.
- [docs.quantus.com](https://docs.quantus.com)에 채굴부터 보상 청구까지 엔드투엔드 반영.
- CLI, 모니터링, 체인, 웹사이트, ZK 회로 저장소의 딥위키 갱신.

### 모바일 지갑 분석

- 총 사용자: 2,252
- MAU: 1,048

### 콘텐츠 & 파트너십

- Network School에서 플랑크 테스트넷 첫 마이너 워크숍. 4명 이상이 채굴 제로에서 시작해 완주.
- EthKL 밋업에서 피치.
- Q-Day 스폰서 확정.
- NS 마라톤 후원 및 Quantus 코코넛 제공.
- 새 팟캐스트: [Quantus 아키텍처 소개](https://x.com/QuantusNetwork/status/2047178654396862837).
