---
title: "Quantus Weekly: PoW 감사 완료 및 Dirac 테스트넷 런칭"
description: "Equilibrium의 PoW 및 Poseidon 해시 감사 완료, 블록 헤더를 위한 ZK 증명 생성, 그리고 Dirac 테스트넷 런칭 소식을 포함한 주간 업데이트입니다."
pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: PoW 감사 완료 및 Dirac 테스트넷 런칭"
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

이번 주 팀은 Equilibrium으로부터 작업 증명(PoW) 알고리즘과 Poseidon 해시 함수에 대한 감사를 완료했으며, 업데이트된 앱을 양대 앱 스토어에 출시했습니다.

## 개발 뉴스
- 147개의 총 이벤트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- 모든 문제가 해결된 PoW 알고리즘 및 Poseidon 해시 함수 감사 결과 검토: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## 코어 테크
- Dirac 테스트넷과 연동되도록 명령줄 인터페이스(CLI)를 업데이트했습니다.
- 블록 헤더 출처에 대한 ZK 증명 생성. 이는 우리 회로 로직이 정적 더미 증명뿐만 아니라 동적 데이터에서도 작동함을 증명하는 중요한 이정표입니다.
- 노드 명령줄 관련 문제를 해결했습니다.

## 네트워크 및 인프라
- 체인을 위한 멀티 아키텍처 Docker 워크플로우를 수정했습니다.
- 모든 노드를 업데이트하고, 이전 테스트넷을 제거하며, 새로운 대시보드와 알림을 배포하여 Dirac 릴리스를 마무리했습니다. grafana.quantus.cat 및 telemetry.quantus.cat을 참조하세요.
- 새로운 라이브러리와 서버로 Faucet을 업데이트하고 메트릭 및 추천 리더보드를 위한 새로운 /king 명령을 추가했습니다.
- Grafana를 위한 PostgreSQL 백엔드로 네트워크 모니터링을 강화하고 다양한 수정 및 최적화를 추가했습니다.
- 새 서버에 IaC(코드형 인프라)를 설정하여 모든 Heisenberg 및 Dirac 노드를 연결했습니다.
- Dirac 테스트넷을 지원하도록 Subsquid 인덱싱 서비스를 업데이트하고 Prometheus 메트릭을 추가했습니다.

## 웹 및 모바일 앱 업데이트
- 모바일 지갑 버전 1.1.1을 앱 스토어에 출시했습니다. Apple에서 추가 정보를 요청 중이지만 곧 해결될 예정입니다.
- Dirac 테스트넷에 연결되도록 모바일 지갑을 업데이트했습니다.
- 예약 알림, 계정 이름 업데이트, 생체 인식 인증 관련 문제를 포함한 여러 모바일 지갑 버그를 수정했습니다.
- 새로운 Dirac 체인을 사용하도록 마이너 앱을 업데이트하고 통계 보고를 수정했습니다.
- 마이너 앱에 새로운 설정 화면과 인앱 바이너리 업데이트 기능을 추가했습니다.
- Task Master 애플리케이션을 Dirac 테스트넷으로 마이그레이션하고 Prometheus 메트릭을 추가했습니다.
- 곧 출시될 추천 기능을 위해 리더보드를 확인하는 새로운 명령을 Faucet 봇에 추가했습니다.

## 콘텐츠 및 파트너십
- 여러 펀드레이징 계약이 진행 중이며 25만 달러의 구두 약속을 받았습니다.
- Quantum Canary와 Quantus 모두의 SEO를 담당할 The Quantum Insider를 고용했습니다.
- 소셜 미디어 성장을 추적하기 위한 새로운 n8n 플로우를 생성했습니다(팟캐스트 구독자 500명을 돌파했습니다).
- DeFi 빌더 Jangle과의 팟캐스트: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## 업계 업데이트
- Quantum Canary는 양자 암호학자 Dr. Or Sattath와 복제 불가능한 암호화 및 양자 화폐에 대한 인터뷰를 발표하여 비트코인의 속도, 보안 및 개인정보 보호를 업그레이드할 수 있는 잠재력을 탐구했습니다: https://www.quantumcanary.org/insights/or-sattath-interview
- 448 큐비트 중성 원자 컴퓨터가 결함 허용(fault tolerance)을 달성했습니다: https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces
- 이번 주 목요일 HK 시간 오전 11시에 X에서 Quantum FUD와 Quantus에 대해 논의할 예정입니다: https://x.com/i/spaces/1RDGlAZlgPoJL?s=20
