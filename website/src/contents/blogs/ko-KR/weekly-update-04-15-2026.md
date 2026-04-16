---
title: "Quantus Weekly: 플랑크 테스트넷 출시 및 초기 채굴 보상"
description: "초기 해시레이트가 중요한 이유, 채굴자를 위한 플랑크 테스트넷 가동, TestFlight 및 스토어 앱 마이그레이션, 새 체인에서의 GPU 채굴, 그리고 이번 주 코어·인프라·지갑·커뮤니티 업데이트."
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly: 플랑크 테스트넷 출시 및 초기 채굴 보상"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

초기 해시레이트가 중요하다.

2,100만 BTC 공급의 절반은 아무도 주목하지 않던 처음 4년 안에 발행되었다.

누구나 채굴할 수 있었고, 초기 블록 보상은 50 BTC였다.

몇 사이클의 연산만으로도 가문의 운명이 바뀌었을 수 있다.

Quantus는 작업 증명(PoW)이다. 최대 공급량은 2,100만 QUAN.

비트코인과 마찬가지로, 네트워크 부트스트랩에 참여한 이른 채굴자가 더 많은 보상을 받는다.

오늘 우리는 플랑크 테스트넷을 출시했다.

메인넷 전에 Quantus를 스트레스 테스트하고 있다.

TestFlight에서 앱을 쓰고 있다면 원클릭 마이그레이션 안내가 뜬다.

iOS 또는 Google Play 스토어에서 앱을 받았다면, 며칠 안에 업데이트가 순차 배포된다.

Quantus를 채굴 중이라면 지금 바로 플랑크 테스트넷 채굴을 시작할 수 있다.

체인 저장소 위키에서 GPU 구현(CPU 마이너보다 효율적)을 포함한 최신 채굴 가이드를 확인해 달라.

단순 UI 마이너 앱은 아직 업그레이드 중이지만, 기술에 익숙한 채굴자라면 새 테스트넷 채굴을 지금 시작할 수 있을 것이다. 문제가 있으면 알려 달라.

이 테스트넷은 리허설이다. 체인이 라이브가 되면 해시레이트는 빠르게 오를 것이고, 첫날을 위해 설정을 미리 맞춰 두고 싶을 것이다.

이번 주에 추가로 배포한 내용은 다음과 같다.

### Core Tech & ZK

- 새 테스트넷 출시.
- 메인넷 준비를 위해 sudo 팔렛 제거.
- 네트워크 동기화 수정.
- 단일 상태 메모리 풀 수정.
- Poseidon을 최신 버전으로 업데이트.

### Network & Infra

- 최소 네트워크 요구사항이 반영된 노드 문서 업데이트.
- Subsquid 인덱서를 최신 체인 버전에 맞게 업데이트하고, 가역 및 취소 이벤트·익스트린식 타입을 수정했으며 Docker 이미지 v0.6.0 배포.
- Task Master 리스크 체커 엔드포인트에 속도 제한을 추가하고 CORS 정책 업데이트.

### Web & Mobile App Updates

- 모바일 앱의 고보안 플로우를 복구하고 UX 수정 사항 배포.
- 지갑 홈을 재설계하고 버튼·아이콘·거래 목록 컴포넌트를 업데이트했으며 최신 Subsquid 인덱서용 새 GraphQL 쿼리 통합.
- 모바일 지갑 페이지 애니메이션, 홈 히어로 배너 버그, 홈이 아닌 경로에서 스크롤 시 내비게이션 바 어둡게 하기 문제 수정.

### Content & Partnerships

- Chris, [@mobymedia](https://x.com/mobymedia) 팟캐스트: [https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- [@ethan_t_c_](https://x.com/ethan_t_c_) 및 [@YuviLightman](https://x.com/YuviLightman)과 포스트 퀀텀 영지식 증명 팟캐스트 공개: [https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- 싱가포르 GitEx 참석.
- Dr. [@zina_cinker](https://x.com/zina_cinker)와 Network School에서 만석 세션 진행: [https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris, [@ArcanumVentures](https://x.com/ArcanumVentures) 47화 라이브(4월 16일 목요일 14:00 UTC / 싱가포르 22:00): [https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- State of Quantum 보고서 배포 및 댓글 기능 구현 지속.
