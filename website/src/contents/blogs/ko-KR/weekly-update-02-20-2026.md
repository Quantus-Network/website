---
title: "Quantus Weekly: 공개 연구 및 포스트 퀀텀 표준"
description: "research.quantus.com 런칭, ZK 증명 애그리게이션, 멀티시그 팔렛 병합 및 모바일 지갑 업데이트를 포함한 주간 업데이트입니다."
pubDate: "2026-02-20"
heroImage: "/blog/covers/weekly-update-02-20-2026.webp"
heroAlt: "Quantus Weekly: 공개 연구 및 포스트 퀀텀 표준"
featured: false
tags:
  [
    "weekly-update",
    "research",
    "post-quantum-cryptography",
    "multisig",
    "zk-proofs",
    "mobile-wallet",
    "notification-system",
  ]
---

포스트 퀀텀 암호학은 밀실에서 블록체인에 적용하여 출시하기에는 너무나 새로운 분야입니다.

이번 주에 우리는 [research.quantus.com](https://research.quantus.com/)을 런칭했습니다.

이곳은 암호학자와 개발자들이 우리가 내린 모든 프로토콜 결정을 분석할 수 있는 공개 포럼입니다. 연구자들은 이미 Poseidon2의 공격 표면에 대한 스트레스 테스트를 진행하고 있습니다.

NIST는 작년에 포스트 퀀텀 표준을 확정했습니다. 그것이 첫 번째 단계였습니다. 두 번째 단계는 암호화폐 업계의 모든 프로토콜 팀이 이를 실제로 구현하는 것입니다. 양자 보안 체인을 구축하기 위한 확립된 매뉴얼이 없기에, 우리가 그 표준을 만들어가고 있습니다.

포스트 퀀텀 보안 분야에서 일하고 계신다면, 문은 열려 있습니다.

이번 주에 우리가 구축한 다른 소식들은 다음과 같습니다.

### GitHub 활동 (4개의 풀 리퀘스트 병합):

![Github 통계](/blog/assets/github-stats-weekly-update-02-20-2026.webp)

### 코어 기술 및 ZK

- 온체인 검증을 포함한 멀티 머신 증명 애그리게이션을 지원하도록 ZK 회로를 업데이트했습니다.
- 멀티시그 팔렛(multisig pallet)을 병합하여 고보안 계정과 함께 완전한 멀티시그 지원을 제공합니다.

### 네트워크 및 인프라

- Senoti 알림 시스템 개발: 기기 등록 서비스, 블록체인 감시 서비스, CI 및 배포 설정이 포함된 코어 워커.
- 증가한 활동에 더 잘 대응할 수 있도록 텔레그램의 수도꼭지(faucet) 봇을 개선했습니다.
- qp-plonky2 및 qp-zk-circuits를 위한 릴리스 관리 워크플로우를 추가했습니다.

### 웹 및 모바일 앱 업데이트

- 암호학 연구 및 기술 토론을 위한 Discourse 기반 포럼 [research.quantus.com](https://research.quantus.com/)을 런칭했습니다.
- Quantus 웹사이트 업데이트: 백서 페이지 갱신, /launch 페이지에 토큰 할당 파이 차트 추가, CoinGecko 연동 추가, 모든 주간 업데이트를 블로그 포스트로 게시.
- 지갑 디자인을 업데이트하고 TestFlight에 배포했습니다. 새로운 버전이 곧 앱 스토어에 출시될 예정입니다.
- 모바일 지갑의 버그 및 UX 수정.
- 모바일 지갑의 푸시 알림 처리를 위한 FCM 베이스를 통합했습니다.

### 콘텐츠 및 파트너십

- Chris가 [Bad Crypto 팟캐스트](https://x.com/QuantusNetwork/status/2023752636387012675)와 [wenaltseason 스페이스](https://x.com/wenaltseason/status/2022402584041193831)에 출연했습니다.
- 팀이 Network School에 도착하여 사무실을 설정 중입니다.

### 업계 업데이트

- Quantum Canary: 양자 컴퓨터가 모네로(Monero)를 깰 수 있을까? [링크](https://x.com/QuantumCanary_/status/2024204427159359931)
- Quantum Canary: DeFi는 얼마나 탈중앙화되어 있는가? [링크](https://x.com/QuantumCanary_/status/2021846672834539665)
