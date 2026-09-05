---
published: true
title: "Quantus 위클리: 빠른 Poseidon2, 경량 체인"
description: "Poseidon2 게이트를 최적화해 8.3배 빨라지고 체인 리팩토링으로 약 9,000줄을 제거했습니다. Binance Blockchain Week 현장 소식도 전합니다."
pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus 위클리: 빠른 Poseidon2, 경량 체인"
featured: false
tags:
  [
    "weekly-update",
    "poseidon2",
    "chain-architecture",
    "wormhole",
    "binance-blockchain-week",
    "solana-breakpoint",
  ]
---

[@EliBenSasson과 Scott Aaronson의 인터뷰](https://x.com/Starknet/status/1995865652377395421)를 보셨을 것입니다.

![Nic Carter interview summary](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

인터뷰에서 Scott은 "RSA, Diffie-Hellman, 타원 곡선 암호 같은 암호 코드에 전 세계 사이버보안 인프라 상당 부분을 기반하기로 했는데, 공교롭게도 양자 컴퓨터가 악용할 수 있는 수학적 특성을 가지고 있다"고 말했습니다.

받아들이기 어려운 현실입니다.

특히 Bitcoin은 설계상 대규모 프로토콜 업그레이드를 쉽게 계획·실행할 수 없습니다.

즉 Bitcoin 커뮤니티에 가장 저항이 적은 길은 문제 존재를 부정하는 것이었습니다.

![Charles Edwards on Quantum Threat](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

하지만 최근 오류 수정, 큐비트 확장, 충실도(fidelity)의 획기적 진전으로 양자 컴퓨팅 발전을 부정하는 것은 Bitcoin, 나아가 인간의 재산권에 실존적 위험입니다.

양자 미래의 안개와 맞서 Q-Day가 왔을 때 많은 블록체인이 행동하지 못했음을 받아들여야 합니다.

행동하는 것이 우리의 의무입니다.

이번 주 양자 보안 Bitcoin을 구축하기 위해 수행한 작업은 다음과 같습니다.

8개의 병합된 풀 리퀘스트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## 코어 테크 및 ZK

- Poseidon2 게이트를 최적화했습니다. 순열당 회로 트레이스 행을 31개에서 1개로 줄여 게이트를 8.3배, 대규모 wormhole prover 전체를 4.5배 빠르게 했습니다.
- wormhole 증명 기록에 트랜잭션 확장을 사용하도록 체인 아키텍처를 리팩토링했습니다. balances 팔레트 커스텀 포크가 불필요해져 약 9,000줄을 제거했습니다.
- wormhole 전송에 Asset ID 지원을 추가했습니다.
- qp-rusty-crystals 감사 지적 사항을 해결했습니다.

## 네트워크 및 인프라

- GPU 마이너 구현을 개선했습니다.
- 피어 브로드캐스트 수정을 포함해 sc-network를 업데이트·병합하여 노드 동기화를 개선했습니다.
- Schrodinger(구 테스트넷) 네트워크 기록을 아카이브했습니다.
- Subsquid 아키텍처를 디버깅·개선했습니다. Explorer·지갑 데이터 가동 시간 향상을 위해 모니터 스크립트와 재시작 프로토콜을 추가했습니다.

## 웹 및 모바일 앱 업데이트

- Keystone 통합을 개선하고 PIN 캐시 삭제 및 PIN 안전 QR 코드를 추가했습니다.
- 모바일 앱 X OAuth 연결용 rusx 저장소를 공개하고 트윗 쿼리·검색을 지원하도록 백엔드를 업그레이드했습니다.
- 정수 처리 이슈와 오탐(false-positive) 실패 알림 등 버그 수정 업데이트를 출시했습니다.

## 콘텐츠 및 파트너십

- Dubai에서 Binance Blockchain Week와 Solana Breakpoint에 참석하며 어드바이저, KOL, 사용자 온보딩을 진행 중입니다.
- 목요일 예정 주간 X Space도 기대해 주세요.
- Quantus 팀과의 팟캐스트: https://www.youtube.com/watch?v=konWKWrl5hs
