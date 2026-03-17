---
title: "Quantus 위클리: 양자 안전 서명, ZK 스케일링, 웜홀 증명 2배 속도"
description: "ML-DSA 서명 스케일링, ZK 집계, 웜홀 증명 가속, 보안 검토, 테스트넷 노드, Quantum Canary 콘텐츠 주간 업데이트."
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus 위클리: 양자 안전 서명, ZK 스케일링, 웜홀 증명 2배 속도"
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

ML-DSA-87 서명 하나는 4,627바이트입니다.

70배 더 큽니다.

모든 거래에 그렇게 적용하면 스케일링 문제가 됩니다.

하지만 걱정 마세요. 비트코인 블록 크기를 늘리는 게 그렇게 논란이 되진 않을 거예요.

(농담이었어요)

양자 안전 서명은 너무 커서, 오늘 적용하면 비트코인 처리량은 1 TPS 훨씬 아래로 떨어질 겁니다.

[@QuantusNetwork](https://x.com/QuantusNetwork)는 스케일링 기법 없이 블록당 약 685건의 거래를 달성할 수 있습니다.

하지만 우리는 ZK로 이 더 큰 거래들을 온체인에 올라가는 더 작은 증명으로 집계합니다.

또한 발신자와 수신자 간 연결을 끊어 사용자에게 프라이버시 보호를 제공합니다 [(지난 업데이트에서 다룸)](https://x.com/YuviLightman/status/2030162754544525495).

57 TPS가 암호화된 3,500 TPS가 됩니다.

새 블록체인 삼중 딜레마는 양자 보안, 확장성, 프라이버시입니다.

ZK로 해결하고 있습니다.

이번 주에 증명 시간을 절반으로 줄였습니다.

웜홀 집계 증명이 이제 2배 빠르게 결제됩니다.

서명은 여전히 거대합니다. 체인은 상관하지 않습니다.

이번 주에 만든 다른 것들은 다음과 같습니다.

### GitHub 활동 (머지된 PR 12건):

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### 코어 기술 & ZK:

- 웜홀 집계 증명이 이제 2배 빠릅니다. 동적 재구축 대신 직렬화된 프로버 사용.
- qp-zk-circuits용 회로 빌더/프로버 리팩터 분리 완료.
- 애그리게이터 API를 동적 프로버/회로 빌더에서 오케스트레이션 및 아티팩트 관리로 재설계.
- 새 애그리게이터 API로 quantus-cli 업데이트.
- 체인 내 qp-zk-circuits와의 암호/재현 빌드 연결이 없던 웜홀 검증기 blob 수정.
- 모든 Substrate pallet에 대한 보안 검토 다수 완료, 수정 PR 8건 머지.
- Substrate pallet 정식 감사 착수.
- Multisig·Treasury pallet 개선.

### 네트워크 & 인프라:

- 새 테스트넷 프로필로 Planck 테스트넷 노드 2대 배포.
- Substrate 상태 프루닝 조사 및 수정.
- 테스트넷 faucet을 [@QuantusNetwork](https://x.com/QuantusNetwork) 트위터 계정에 연결.
- Subsquid: 쿼리 성능 향상을 위한 사용자별 이벤트 매핑 추가.
- Subsquid: 역사적 정확성을 위한 가역 전송 집계 업데이트.
- 브리징 인프라 구축: Rosetta API 구현, 통합 테스트, MPC 서명 업데이트.

### 웹·모바일 앱 업데이트:

- 모바일 지갑 빌드 82: 코드 정리 및 UI 표준화(시트, 스캐폴드, 아이콘 버튼, 계정 리팩터).
- 최신 Subsquid 데이터 모델 지원을 위해 모바일 지갑 체인 히스토리 서비스 및 거래 히스토리 UI 업데이트.
- 웹사이트: 페이지 인덱싱 최적화, 주간 업데이트를 블로그 글로 추가, 블로그 검색에 제목 포함하도록 수정.
- Explorer: 가역 거래 뷰를 별도 이벤트 유형(예정, 실행, 취소)으로 개편.
- Quantum Canary 웹사이트: 글 테이블 모바일 대응.

### 콘텐츠 & 파트너십:

- 물리학자이자 기업가 스티브 수와 양자 컴퓨팅, AI, 양자 위협 타임라인에 대한 팟캐스트.
- 마케팅 인력 2명 영입.
- Network School에서 크립토 온보딩 및 프라이버시/OPSEC 보안 이벤트 개최.

### 업계 업데이트:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)
