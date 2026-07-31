---
title: "Quantus Weekly: Planck 테스트넷 채굴 보상"
description: "Planck 테스트넷이 초기 마이너를 위해 공개되었습니다. 앱 마이그레이션, GPU 채굴, 코어·인프라·지갑 업데이트를 다룬 Quantus 주간 업데이트입니다."
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly: Planck 테스트넷 채굴 보상"
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

초기 해시레이트가 중요합니다.

2,100만 BTC 공급량의 절반은 아무도 주목하지 않던 처음 4년에 발행되었습니다.

누구나 채굴할 수 있었고, 초기 블록 보상은 50 BTC였습니다.

몇 번의 연산 사이클로 혈통을 은퇴시킬 수 있었습니다.

Quantus는 작업 증명(Proof of Work)입니다. 최대 공급량 2,100만 QUAN.

비트코인과 마찬가지로, 초기 마이너는 네트워크 부트스트래핑에 대한 더 많은 보상을 받습니다.

오늘 Planck 테스트넷을 출시했습니다.

메인넷 전 Quantus를 스트레스 테스트하고 있습니다.

TestFlight에서 앱을 사용 중이라면 원클릭 마이그레이션 안내가 표시됩니다.

iOS 또는 Google Play 스토어에서 앱을 다운로드했다면, 며칠 내 업데이트가 배포됩니다.

Quantus를 채굴 중이라면 지금 Planck 테스트넷 채굴을 시작할 수 있습니다.

GPU 구현(CPU 마이너보다 효율적)을 포함한 업데이트된 채굴 가이드는 체인 repo wiki를 확인하세요.

간단한 UI 마이너 앱은 여전히 업그레이드 중이지만, 기술적인 마이너라면 지금 새 테스트넷 채굴을 시작할 수 있어야 합니다. 문제가 있으면 알려주세요.

이 테스트넷은 리허설입니다. 체인이 라이브되면 해시레이트는 빠르게 올라가며, 첫날을 위해 설정을 다듬어 두고 싶을 것입니다.

이번 주에 출시한 다른 소식은 다음과 같습니다.

### 코어 기술 및 ZK

- 새 테스트넷 출시.
- 메인넷 준비를 위해 sudo 팔렛 제거.
- 네트워크 동기화 수정.
- 단일 상태 mem pool 수정.
- Poseidon을 최신 버전으로 업데이트.

### 네트워크 및 인프라

- 최소 네트워크 요구 사항으로 노드 문서 업데이트.
- Subsquid 인덱서를 최신 체인 버전으로 업데이트하고, 역전송 및 취소 이벤트 extrinsic 유형을 수정했으며, Docker 이미지 v0.6.0을 출시했습니다.
- Task Master 리스크 체커 엔드포인트에 속도 제한을 추가하고 CORS 정책을 업데이트했습니다.

### 웹 및 모바일 앱 업데이트

- 모바일 앱에서 고보안 플로우를 복원하고 UX 수정 사항을 출시했습니다.
- 지갑 홈페이지를 리디자인하고, 버튼·아이콘·트랜잭션 목록 컴포넌트를 업데이트했으며, 최신 Subsquid 인덱서용 새 GraphQL 쿼리를 통합했습니다.
- 모바일 지갑 페이지 애니메이션, 홈페이지 히어로 배너 버그, 비홈페이지 경로의 스크롤 시 navbar 어두워짐을 수정했습니다.

### 콘텐츠 및 파트너십

- Chris의 [@mobymedia](https://x.com/mobymedia) 팟캐스트: [https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- [@ethan*t_c*](https://x.com/ethan_t_c_) 및 [@YuviLightman](https://x.com/YuviLightman)과의 포스트 양자 영지식 증명 팟캐스트 게시: [https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- 싱가포르 GitEx 참석.
- Network School에서 Dr. [@zina_cinker](https://x.com/zina_cinker)와 만석 세션 주최: [https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris, 4월 16일 목요일 UTC 14:00 / 싱가포르 22:00 [@ArcanumVentures](https://x.com/ArcanumVentures) ep. 47 라이브: [https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- State of Quantum 보고서 배포 및 의견 반영을 계속 진행했습니다.
