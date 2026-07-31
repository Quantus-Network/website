---
title: "Quantus 위클리: Dirac 테스트넷과 격자 암호 감사"
description: "PoW 알고리즘과 격자 암호 라이브러리를 업데이트한 Dirac 테스트넷을 출시했습니다. qp-rusty-crystals가 외부 감사 중이며, 마이너는 업그레이드가 필요합니다."
pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus 위클리: Dirac 테스트넷과 격자 암호 감사"
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

이번 주 팀은 Dirac 테스트넷을 출시하여 PoW 알고리즘과 격자 암호 라이브러리 qp-rusty-crystals의 체인 전반 업데이트를 마무리했습니다. 이 핵심 라이브러리는 현재 외부 감사 중이며 상수 시간(constant-time) 서명을 포함합니다. 업데이트는 모바일 지갑과 libp2p에 통합되었습니다.

**마이너라면 새 Dirac 테스트넷으로 업데이트해야 합니다**

## 개발 뉴스

- 12개의 풀 리퀘스트와 3개의 병합을 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## 코어 테크

- 상수 시간 키 생성 및 서명이 포함된 qp-rusty-crystals 전체 참조 구현을 출시·병합했습니다.
- rusty crystals의 모든 KAT 테스트를 해결하고 상수 시간을 적용했으며, 미해결 릴리스 스크립트 문제를 수정했습니다.
- qp-rusty-crystals 감사를 시작했습니다.
- 블록 헤더 검증 회로 구현을 완료했습니다.
- 회로 패딩을 제거하는 새 버전으로 블록 헤더 해셔를 업데이트했습니다.
- 블록 헤더의 누락된 다이제스트 로그 관련 버그를 조사·해결했습니다.
- 디버깅 편의를 위해 최신 증명을 저장하는 캐싱 기능을 wormhole 예제 바이너리에 추가했습니다.
- GHOSTDAG 합의 논문 구현을 시작했습니다.

## 네트워크 및 인프라

- 모든 서버에 Dirac 0.4.0을 릴리스했습니다.
- 외부 마이너 빌드 1.0.0을 릴리스했습니다.
- rusty crystals 업데이트를 위한 체인 업데이트를 진행했습니다.
- 이메일 알림이 구성된 새 Prometheus 및 Grafana 대시보드를 배포했습니다.
- 텔레메트리 서비스를 업데이트했습니다.
- Fedora 머신용 참조 설정을 구성했습니다.
- 새 Dirac 테스트넷용 보안 VPS 서버 2대를 배포했습니다.
- Quantus.cat 도메인을 확보하고 모든 머신에 Cloudflare 터널을 구성했습니다.
- 무중단 업데이트를 위해 Subsquid 배포 프로세스에 블루-그린 배포를 지원하도록 업그레이드했습니다.
- Docker 이미지를 자동 생성·게시하는 워크플로우를 만들었습니다.
- http://quantu.se/ 인덱싱 문제를 수정하고 올바른 노드 URL을 가리키도록 메타데이터를 업데이트했습니다.

## 웹 및 모바일 앱 업데이트

- 모바일 앱 알림 기능을 완료했습니다.
- 딥 링크 성능·안정성 향상을 위해 route intent 처리를 리팩토링했습니다.
- 마이너 대시보드 레이아웃을 완전 반응형으로 만들었습니다.
- 검색 기능이 이전 GraphQL 엔드포인트를 사용하던 Quantus Explorer 버그를 수정했습니다.
- 성능 향상을 위해 Quantus Explorer API 클라이언트를 최신 훅 기반으로 리팩토링했습니다.

## 콘텐츠 및 파트너십

- 9회 보디빌딩 챔피언이자 기업가·크리에이터 Remus Boroiu와의 팟캐스트: https://www.youtube.com/watch?v=OtBKnaFAe_8
- Chainwire를 통해 보도자료를 배포했습니다.

## 업계 업데이트

- 양자 관련 주식 분석: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- 글로벌 정책 수립과 PQC 마이그레이션 일정 가속화에서 RAND Corporation의 영향력에 대한 심층 분석: https://www.quantumcanary.org/insights/rand-quantum-controversy
- 프린스턴, 45개 사파이어 위 탄탈륨(tantalum-on-sapphire) 큐비트의 결맞음 시간(coherence times) 3배 연구: https://www.nature.com/articles/s41586-025-09687-4
