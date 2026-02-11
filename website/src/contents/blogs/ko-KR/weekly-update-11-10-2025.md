---
title: "Quantus Weekly: Dirac 테스트넷 출시 및 격자 암호 감사"
description: "Dirac 테스트넷 출시, PoW 알고리즘 및 격자 암호 라이브러리 업데이트 완료, 그리고 새로운 인프라 개선 사항을 포함한 주간 업데이트입니다."
pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: Dirac 테스트넷 출시 및 격자 암호 감사"
featured: false
tags:
  [
    "weekly-update",
    "dirac-testnet",
    "lattice-cryptography",
    "pow",
    "libp2p",
    "ghostdag",
    "blue-green-deployment",
  ]
---

이번 주 팀은 Dirac 테스트넷을 출시하여 작업 증명(PoW) 알고리즘과 격자 암호 라이브러리인 qp-rusty-crystals의 체인 전반에 걸친 업데이트를 마무리했습니다. 이 핵심 라이브러리는 현재 외부 감사를 받고 있으며 상수 시간(constant-time) 서명을 포함하고 있습니다. 이 업데이트는 현재 모바일 지갑과 libp2p에 통합되었습니다.

**마이너라면 새로운 DIRAC 테스트넷으로 업데이트해야 합니다**

## 개발 뉴스

- 12개의 풀 리퀘스트와 3개의 병합된 건을 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## 코어 테크

- 상수 시간 키 생성 및 서명이 포함된 qp-rusty-crystals의 전체 참조 구현 출시 및 병합.
- rusty crystals에 대한 모든 KAT 테스트 해결, 상수 시간 적용 및 미해결 릴리스 스크립트 문제 수정.
- qp-rusty-crystals 감사 시작.
- 블록 헤더 검증 회로 구현 완료.
- 회로 패딩을 제거하는 새로운 버전으로 블록 헤더 해셔 업데이트.
- 블록 헤더의 누락된 다이제스트 로그와 관련된 버그 조사 및 해결.
- 더 쉬운 디버깅을 위해 최신 증명을 저장하는 캐싱 기능을 웜홀 예제 바이너리에 추가.
- GHOSTDAG 합의 논문 구현 시작.

## 네트워크 및 인프라

- 모든 서버에 Dirac 0.4.0 릴리스.
- 외부 마이너 빌드 1.0.0 릴리스.
- rusty crystals 업데이트를 위한 체인 업데이트.
- 새로운 Prometheus 및 Grafana 대시보드, 이제 알림을 위한 이메일 알림 기능 구성 완료.
- 새롭게 업데이트된 텔레메트리 서비스.
- Fedora 머신을 위한 참조 설정 생성.
- 새로운 Dirac 테스트넷을 위한 2개의 새로운 보안 VPS 서버 배포.
- Quantus.cat 도메인 보안 강화 및 모든 머신에 대한 Cloudflare 터널 구성.
- 가동 중지 시간 없는 업데이트를 위해 블루-그린 배포를 지원하도록 Subsquid 배포 프로세스 업그레이드.
- Docker 이미지를 자동으로 생성하고 GitHub에 게시하는 워크플로우 생성.
- http://quantu.se/의 인덱싱 문제 수정 및 올바른 노드 URL을 가리키도록 메타데이터 업데이트.

## 웹 및 모바일 앱 업데이트

- 모바일 앱 알림 기능 완료.
- 딥 링크 성능 및 안정성 향상을 위해 루트 인텐트(route intent) 처리 리팩토링.
- 마이너 대시보드 레이아웃이 이제 완전히 반응형으로 작동합니다.
- 검색 기능이 여전히 이전 GraphQL 엔드포인트를 사용하던 Quantus Explorer 버그 수정.
- 더 나은 성능을 위해 최신 훅을 사용하도록 Quantus Explorer API 클라이언트 리팩토링.

## 콘텐츠 및 파트너십

- 9회 보디빌딩 챔피언이자 기업가, 크리에이터인 Remus Boroiu와의 팟캐스트: https://www.youtube.com/watch?v=OtBKnaFAe_8
- Chainwire를 통한 보도 자료 배포.

## Quantum Canary

- 양자 관련 주식 분석: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- 글로벌 정책 수립 및 PQC 마이그레이션 일정 가속화에 있어 RAND Corporation의 영향력 있는 역할에 대한 심층 분석: https://www.quantumcanary.org/insights/rand-quantum-controversy
- 프린스턴 대학교, 45개 사파이어 위 탄탈륨(tantalum-on-sapphire) 큐비트의 결맞음 시간(coherence times) 3배 증가 연구: https://www.nature.com/articles/s41586-025-09687-4
