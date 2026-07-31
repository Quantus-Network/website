---
title: "Quantus 위클리: PoW 감사 완료와 Dirac 런칭"
description: "Equilibrium의 PoW·Poseidon 감사를 완료하고 블록 헤더 ZK 증명을 출시했습니다. Dirac 테스트넷을 런칭하고 업데이트된 앱을 양대 앱 스토어에 배포했습니다."
pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus 위클리: PoW 감사 완료와 Dirac 런칭"
featured: false
tags:
  [
    "weekly-update",
    "audit",
    "pow",
    "poseidon",
    "dirac-testnet",
    "zero-knowledge-proofs",
    "mobile-wallet",
    "miner-app",
    "podcast",
  ]
---

이번 주 팀은 Equilibrium의 PoW 알고리즘 및 Poseidon 해시 함수 감사를 완료했으며, 업데이트된 앱을 양대 앱 스토어에 출시했습니다.

## 개발 뉴스

- 147개의 총 이벤트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- 모든 이슈가 해결된 PoW 알고리즘 및 Poseidon 해시 함수 감사 결과: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## 코어 테크

- Dirac 테스트넷과 연동되도록 CLI(명령줄 인터페이스)를 업데이트했습니다.
- 블록 헤더 출처 ZK 증명 생성을 구현했습니다. 정적 더미 증명뿐 아니라 동적 데이터에서도 회로 로직이 작동함을 증명하는 중요한 이정표입니다.
- 노드 명령줄 관련 이슈를 해결했습니다.

## 네트워크 및 인프라

- 체인용 멀티 아키텍처 Docker 워크플로우를 수정했습니다.
- 모든 노드를 업데이트하고 이전 테스트넷을 제거하며 새 대시보드·알림을 배포해 Dirac 릴리스를 마무리했습니다. grafana.quantus.cat 및 telemetry.quantus.cat을 참조하세요.
- 새 라이브러리·서버로 Faucet을 업데이트하고 메트릭과 추천 리더보드용 /king 명령을 추가했습니다.
- Grafana용 PostgreSQL 백엔드로 네트워크 모니터링을 강화하고 다양한 수정·최적화를 적용했습니다.
- 새 서버에 IaC(코드형 인프라)를 구성하고 모든 Heisenberg·Dirac 노드를 연결했습니다.
- Dirac 테스트넷을 지원하도록 Subsquid 인덱싱 서비스를 업데이트하고 Prometheus 메트릭을 추가했습니다.

## 웹 및 모바일 앱 업데이트

- 모바일 지갑 v1.1.1을 앱 스토어에 출시했습니다. Apple에서 추가 정보를 요청 중이나 곧 해결될 예정입니다.
- 모바일 지갑을 Dirac 테스트넷에 연결하도록 업데이트했습니다.
- 예약 알림, 계정 이름 업데이트, 생체 인증 관련 모바일 지갑 버그를 수정했습니다.
- 마이너 앱을 새 Dirac 체인에 맞게 업데이트하고 통계 보고를 수정했습니다.
- 마이너 앱에 새 설정 화면과 인앱 바이너리 업데이트 기능을 추가했습니다.
- Task Master 애플리케이션을 Dirac 테스트넷으로 마이그레이션하고 Prometheus 메트릭을 추가했습니다.
- 곧 출시될 추천 기능용 리더보드 확인 명령을 Faucet 봇에 추가했습니다.

## 콘텐츠 및 파트너십

- 여러 펀드레이징 계약이 진행 중이며 25만 달러의 구두 약속을 받았습니다.
- Quantum Canary와 Quantus 모두의 SEO를 The Quantum Insider에 위임했습니다.
- 소셜 미디어 성장 추적용 n8n 플로우를 만들었습니다(팟캐스트 구독자 500명 돌파).
- DeFi 빌더 Jangle과의 팟캐스트: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## 업계 업데이트

- Quantum Canary, 양자 암호학자 Dr. Or Sattath와 복제 불가능 암호·양자 화폐 인터뷰를 공개했습니다. Bitcoin의 속도·보안·프라이버시 업그레이드 가능성을 탐구합니다: https://www.quantumcanary.org/insights/or-sattath-interview
- 448 큐비트 중성 원자 컴퓨터가 결함 허용(fault tolerance)을 달성했습니다: https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces

- 목요일 HK 시간 오전 11시 X에서 Quantum FUD와 Quantus를 논의합니다: https://x.com/i/spaces/1RDGlAZlgPoJL?s=20
