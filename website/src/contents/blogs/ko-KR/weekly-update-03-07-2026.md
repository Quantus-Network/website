---
published: true
title: "Quantus Weekly: 웜홀 트랜잭션"
description: "웜홀 트랜잭션, 마이너용 프라이빗 블록 보상, 컨센서스 버그 수정, 지갑 업데이트를 다룬 주간 업데이트입니다. Quantus의 최신 개발 현황을 전합니다."
pubDate: "2026-03-07"
heroImage: "/blog/covers/weekly-update-03-07-2026.webp"
heroAlt: "Quantus Weekly: 웜홀 트랜잭션"
featured: false
tags:
  [
    "weekly-update",
    "wormhole",
    "zk-proofs",
    "privacy",
    "miner-app",
    "consensus",
    "wallet",
  ]
---

코인을 사용 불가능한 주소로 소각합니다.

ZK 증명이 새로운 곳에서 코인을 민팅합니다.

흔적은 사라집니다.

[@QuantusNetwork](https://x.com/@QuantusNetwork)는 이를 "웜홀(wormhole)" 트랜잭션이라고 부릅니다.

코인을 원장의 다른 계정과 구별할 수 없는 웜홀 주소로 보냅니다. 하지만 그 주소는 수학적으로 사용할 수 없습니다. 출금하려면 ZK 증명으로 비밀 지식을 증명하면, 체인이 동일한 코인을 새로운 출구 주소에 민팅합니다.

입구와 출구를 누구도 연결할 수 없습니다.

마이너에게는 여기서 흥미로운 점이 있습니다.

프로토콜은 마이너가 보상 주소용 32바이트 프리이미지를 제출하도록 요구합니다. 체인은 이를 해시하여 주소를 생성합니다.

Dilithium 공개키는 매우 큽니다. 32바이트에 들어갈 수 없습니다. 따라서 프리이미지는 실제 공개키가 될 수 없고, 결과 주소는 사용 불가능한 웜홀 주소가 됩니다.

프라이버시는 옵트인 없이 프로토콜에 의해 강제됩니다.

이번 주에는 마이너 앱에 이를 구현했습니다. 다음 테스트넷에서는 모든 블록 보상이 기본적으로 웜홀 주소를 통해 라우팅됩니다.

이번 주에 구축한 다른 소식은 다음과 같습니다.

### GitHub 활동 (11개의 병합된 풀 리퀘스트):

![Github 통계](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### 코어 기술 및 ZK:

- 마이너 앱에 웜홀 출금을 구현하여, 마이너가 기본적으로 프라이빗 블록 보상을 받도록 했습니다.
- heaviest/longest chain 컨센서스 버그 및 기타 여러 체인 버그를 수정했습니다.
- 코어 라이브러리 업데이트 출시: qp-poseidon v1.1.0, qp-rusty-crystals-hdwallet v2.0.0, qp-dilithium v0.2.2.

### 네트워크 및 인프라:

- Substrate 의존성을 stable2506에서 stable2512-2로 업데이트했습니다.
- 새 의존성으로 CLI, sc-network 포크, NEAR 포크를 업데이트했습니다.
- 업데이트된 코드베이스와 Tech Collective 거버넌스로 Heisenberg 노드를 테스트했습니다.
- Senoti 알림 시스템: RabbitMQ 시작 오류 수정, 디바이스 등록기에서 인증 레이어 제거, 페일오버 연결 처리 수정.

### 웹 및 모바일 앱 업데이트:

- 업데이트된 그래픽과 함께 지갑 v1.2.0 및 v1.2.1을 모든 앱 스토어에 출시했습니다.
- "스왑" 버튼이 포함된 모바일 앱 버전을 앱 스토어에 푸시하여 심사 절차를 시작했습니다.
- 지갑과 익스플로러 전반에 더 긍정적인 단어 목록이 포함된 happy checkphrase를 출시했습니다.
- Android edge-to-edge 디스플레이 수정.
- 복구 구문 UI 업데이트, 버튼 컴포넌트 수정, 아이콘 버튼 표준화, 리셋 시트 업데이트.
- 원격 알림 통합 업데이트 및 모든 지갑에 대한 알림 지원 확대.

### 콘텐츠 및 파트너십:

- Network School에서 [Tom Howard](https://x.com/_TomHoward), [Chris Smith](https://x.com/YuviLightman), [Kenbak](https://x.com/k6nb4k)(Cipherscan)과 함께 프라이버시 및 양자 보안에 관한 패널 토론을 주최했습니다.

### 업계 업데이트:

- ZK 및 양자 컴퓨팅에 관한 [Quantum Canary 기사](https://x.com/QuantumCanary_/status/2027639894944956645)
