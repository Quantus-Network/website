---
title: "Quantus Weekly: Poseidon2 최적화 및 체인 아키텍처 리팩토링"
description: "8.3배 빨라진 Poseidon2 게이트, 9,000줄의 코드를 제거한 주요 체인 아키텍처 리팩토링, 그리고 Binance Blockchain Week 소식을 포함한 주간 업데이트입니다."
pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Weekly: Poseidon2 최적화 및 체인 아키텍처 리팩토링"
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

아마도 [@EliBenSasson과 Scott Aaronson의 이 인터뷰](https://x.com/Starknet/status/1995865652377395421)를 보셨을 것입니다.

![Nic Carter 인터뷰 요약](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

인터뷰에서 Scott은 "우리는 전 세계 사이버 보안 인프라의 상당 부분을 RSA, Diffie-Hellman, 타원 곡선 암호화와 같은 암호화 코드에 기반하기로 결정했는데, 이들은 공교롭게도 양자 컴퓨터가 악용할 수 있는 수학적 특성을 가지고 있습니다"라고 말했습니다.

그것은 받아들이기 힘든 사실입니다.

특히 설계상 대규모 프로토콜 업그레이드를 쉽게 계획하고 실행할 수 있는 능력이 부족한 비트코인에게는 더욱 그렇습니다.

이는 비트코인 커뮤니티에게 가장 저항이 적은 길은 문제의 존재 자체를 부정하는 것이었음을 의미합니다.

![양자 위협에 대한 Charles Edwards의 게시물](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

하지만 최근 오류 수정, 큐비트 확장 및 충실도(fidelity)의 획기적인 발전으로 인해 양자 컴퓨팅의 발전을 부정하는 것은 비트코인, 나아가 인류의 재산권에 대한 실존적 위험을 나타냅니다.

따라서 우리는 양자 미래의 안개에 맞서야 하며, Q-day가 도래했을 때 많은 블록체인이 행동에 실패했음을 받아들여야 합니다.

행동하는 것이 우리의 의무입니다.

이번 주에 양자 보안 비트코인을 구축하기 위해 우리가 수행한 작업은 다음과 같습니다.

8개의 병합된 풀 리퀘스트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## 코어 테크 및 ZK
- Poseidon2 게이트를 최적화했습니다. 순열당 회로 트레이스 행을 31개에서 1개로 줄였습니다. 이를 통해 게이트 속도가 8.3배 빨라졌으며 대규모 웜홀 증명기(prover)의 전체 속도가 4.5배 향상되었습니다.
- 웜홀 증명을 기록하기 위해 트랜잭션 확장을 사용하도록 체인 아키텍처를 리팩토링했습니다. 이를 통해 balances 팔레트의 커스텀 포크가 필요 없게 되었으며 약 9,000줄의 코드를 제거했습니다.
- 웜홀 전송에 자산 ID(Asset ID) 지원을 추가했습니다.
- qp-rusty-crystals 감사의 지적 사항을 해결했습니다.

## 네트워크 및 인프라
- GPU 마이너 구현을 개선했습니다.
- 원활한 노드 동기화를 위한 피어 브로드캐스팅 수정을 포함하여 sc-network를 업데이트하고 병합했습니다.
- Schrödinger(이전 테스트넷) 네트워크 기록을 보관했습니다.
- Subsquid 아키텍처를 디버깅하고 개선했습니다. 탐색기 및 지갑에 대한 데이터 가동 시간을 개선하기 위해 새로운 모니터 스크립트와 재시작 프로토콜을 추가했습니다.

## 웹 및 모바일 앱 업데이트
- Keystone 통합을 개선하고 PIN 캐시 삭제 및 PIN 안전 기능이 있는 QR 코드를 추가했습니다.
- X OAuth를 모바일 앱에 연결하기 위한 rusx 저장소를 게시하고 트윗 쿼리 및 검색을 지원하도록 백엔드를 업그레이드했습니다.
- 정수 처리 문제 및 오탐(false-positive) 실패 알림을 포함한 다양한 버그를 수정한 업데이트를 출시했습니다.

## 콘텐츠 및 파트너십
- 현재 두바이에서 열리는 Binance Blockchain Week와 Solana Breakpoint에 참석하여 어드바이저, KOL을 만나고 사용자를 온보딩하고 있습니다.
- 목요일로 예정된 주간 X Space를 확인해 주세요.
- Quantus 팀과의 팟캐스트: https://www.youtube.com/watch?v=konWKWrl5hs
