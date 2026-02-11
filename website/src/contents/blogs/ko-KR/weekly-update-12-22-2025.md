---
title: "Quantus 위클리: GPU 채굴 및 디랙 스트레스 테스트"
description: "GPU 지원 Quantus Miner v2.0.2 출시, 디랙 네트워크 스트레스 테스트 및 체인 아키텍처 업데이트를 다루는 주간 업데이트입니다."
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus 위클리: GPU 채굴 및 디랙 스트레스 테스트"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "dirac-network",
    "blockchain-architecture",
    "tokenomics",
    "hardware-wallet",
    "social-engagement",
  ]
---

이번 주에는 GPU 지원이 포함된 Quantus Miner v2.0.2를 공식 출시하고 디랙(Dirac) 네트워크 스트레스 테스트를 성공적으로 마쳤습니다.

또한 2,100만 개의 코인 공급 상한을 지원하도록 체인 아키텍처를 업데이트했으며, 기존의 베스팅(vesting) 및 트레저리(treasury) 팔렛을 제거하여 코드베이스를 정리했습니다.

6개의 병합된 풀 리퀘스트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## 코어 테크 및 ZK

- 새로운 2,100만 개 코인 공급 상한을 반영하도록 체인 사양을 업데이트했습니다.
- 베스팅 및 트레저리 팔렛을 제거하여 코어 체인 아키텍처를 단순화했습니다.
- 런타임 패닉을 방지하기 위해 범용 Poseidon 스토리지 해싱 지원을 완료했습니다.
- ZK 회로 및 CLI에 에셋 ID 지원을 추가했습니다.

## 네트워크 및 인프라

- 체인 과부하가 블록 시간에 미치는 영향을 관찰하기 위해 디랙 스트레스 테스트를 실시했습니다.
- 이제 GPU 채굴을 공식적으로 지원하는 Quantus Miner v2.0.2를 게시했습니다: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## 웹 및 모바일 앱 업데이트

- QR 코드 서명 전송, 다중 지갑 지원 및 연결 해제 기능을 포함한 모바일 하드웨어 지갑 서명 흐름을 확정했습니다.
- X에서의 커뮤니티 참여를 장려하기 위해 텔레그램, 웹사이트 및 Task Master를 통한 내부 추적 기능이 포함된 "레이드 퀘스트(Raid Quests)"를 구현했습니다. 지갑 구현이 진행 중입니다.
- 백엔드 CORS 오류를 해결하고 소셜 상호작용을 위한 데이터 추적 기능을 개선했습니다.
- 채굴자 보상 보고 및 네트워크 전환에 영향을 미치던 블록 익스플로러 버그를 수정했습니다.

## 콘텐츠 및 파트너십

- 피어 서밋(Peer Summit)에서 만난 두 전략적 파트너로부터 투자를 유치했습니다.
- 출시 전략에 관한 회의를 마무리하고 새로운 토큰노믹스 및 GTM을 반영한 업데이트된 백서를 작성했습니다.
- 베테랑 소프트웨어 아키텍트이자 시스템 엔지니어인 Cezary와의 에피소드: https://www.youtube.com/watch?v=2TDMR7bECR8

## 업계 업데이트

- 비트코인에 대한 국가 수준의 공격 위험을 분석한 Quantum Canary의 기사: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin
