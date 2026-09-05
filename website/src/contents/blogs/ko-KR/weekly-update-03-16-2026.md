---
published: true
title: "Quantus Weekly: 대용량 서명, 더 빠른 웜홀"
description: "ML-DSA 서명은 비트코인보다 70배 큽니다. 이번 주 양자 안전 서명 확장, 웜홀 증명 2배 가속, ZK 애그리게이션 진전을 다룬 Quantus 주간 업데이트입니다."
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: 대용량 서명, 더 빠른 웜홀"
featured: false
tags:
  [
    "weekly-update",
    "quantum-safe",
    "ml-dsa",
    "zk-proofs",
    "wormhole",
    "scalability",
    "privacy",
  ]
---

비트코인 서명은 65바이트입니다.

단일 ML-DSA-87 서명은 4,627바이트입니다.

70배 더 큽니다.

모든 트랜잭션에 곱하면 확장성 문제가 됩니다.

하지만 걱정 마세요. 비트코인 블록 크기를 늘리는 것이 그렇게 논란이 될 리는 없을 겁니다.

(농담이었습니다)

양자 안전 서명이 이렇게 크다면, 오늘 도입된다면 비트코인 처리량은 1 TPS 훨씬 아래로 떨어질 것입니다.

[@QuantusNetwork](https://x.com/QuantusNetwork)는 확장 기법 없이도 블록당 약 685건의 트랜잭션을 처리할 수 있습니다.

하지만 우리는 ZK를 사용해 더 큰 트랜잭션을 더 작은 증명으로 집계하여 온체인에 기록합니다.

또한 송신자와 수신자 간의 연결을 끊어 사용자에게 프라이버시 보호를 제공합니다 [(지난 업데이트에서 다룸)](https://x.com/YuviLightman/status/2030162754544525495).

57 TPS가 암호화된 3,500 TPS가 됩니다.

새로운 블록체인 트릴레마는 양자 보안, 확장성, 프라이버시입니다.

우리는 ZK로 이를 해결하고 있습니다.

이번 주 증명 시간을 절반으로 줄였습니다.

웜홀 애그리게이션 증명이 이제 2배 빠르게 정산됩니다.

서명은 여전히 엄청나게 큽니다. 체인은 상관하지 않습니다.

이번 주에 구축한 다른 소식은 다음과 같습니다.

### GitHub 활동 (12개의 병합된 풀 리퀘스트):

![Github 통계](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### 코어 기술 및 ZK:

- 동적 재구축 대신 직렬화된 prover를 사용하여 웜홀 애그리게이션 증명이 2배 빨라졌습니다.
- qp-zk-circuits용 circuits builder/prover 리팩터 분리를 완료했습니다.
- 동적 prover/circuit builder에서 오케스트레이션 및 아티팩트 관리로 애그리게이터 API를 재설계했습니다.
- 새 애그리게이터 API로 quantus-cli를 업데이트했습니다.
- 체인에서 qp-zk-circuits와 암호학적/재현 가능 빌드 연결이 없던 웜홀 verifier blob을 수정했습니다.
- 모든 Substrate 팔렛에 걸친 여러 보안 검토를 완료하고, 8개 PR의 수정 사항을 병합했습니다.
- Substrate 팔렛 공식 감사를 시작했습니다.
- 멀티시그 및 Treasury 팔렛 개선.

### 네트워크 및 인프라:

- 새 테스트넷 프로필로 Planck 테스트넷 노드 2대를 배포했습니다.
- Substrate 상태 프루닝 조사 및 수정.
- 테스트넷 수도꼭지를 [@QuantusNetwork](https://x.com/QuantusNetwork) Twitter 계정에 연결했습니다.
- Subsquid: 쿼리 성능 향상을 위한 사용자별 이벤트 매핑 추가.
- Subsquid: 역전송 집계를 업데이트하여 역사적 정확성을 개선했습니다.
- 브릿징 인프라 구축: 통합 테스트 및 MPC 서명 업데이트가 포함된 Rosetta API 구현.

### 웹 및 모바일 앱 업데이트:

- 모바일 지갑 빌드 82: 코드 정리 및 UI 표준화(시트, 스캐폴드, 아이콘 버튼, 계정 리팩터).
- 최신 Subsquid 데이터 모델을 지원하도록 모바일 지갑 체인 히스토리 서비스 및 트랜잭션 히스토리 UI 업데이트.
- 웹사이트: 페이지 인덱싱 최적화, 주간 업데이트를 블로그 게시물로 추가, 제목 포함 블로그 검색 수정.
- 익스플로러: 역전송 뷰를 별도 이벤트 유형(예약, 실행, 취소)으로 전면 개편.
- Quantum Canary 웹사이트: 기사 테이블을 모바일 친화적으로 개선.

### 콘텐츠 및 파트너십:

- 물리학자 겸 기업가 Steve Hsu와 양자 컴퓨팅, AI, 양자 위협 타임라인에 관한 팟캐스트.
- 마케팅 인력 2명 추가.
- Network School에서 암호화폐 온보딩 및 프라이버시/OPSEC 보안 이벤트 주최.

### 업계 업데이트:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)
