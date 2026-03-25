---
title: "Quantus Weekly: 두 번째 반감 — 2주 만에 ZK 증명 4배 빠르게"
description: "프로버 시간 추가 2배 단축, Poseidon 해싱, 마이닝 수정, Senoti 속도 제한, 백서 공개, iOS 스왑 심사, Solana 양자 보안 관련 Quantum Canary 등."
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus Weekly: 두 번째 반감 — 2주 만에 ZK 증명 4배 빠르게"
featured: false
tags:
  [
    "weekly-update",
    "zk-proofs",
    "poseidon",
    "privacy",
    "wormhole",
    "performance",
    "scalability",
  ]
---

2는 특별한 숫자다.

2+2는 4. 2x2는 4. 2²는 4.

덧셈, 곱셈, 거듭제곱이 모두 같은 답이 나오는 유일한 수다.

2주 전에 ZK 증명 파이프라인을 최적화하며 큰 진전을 냈다.

지난주에는 프로버 시간을 절반으로 줄였다(2로 나눔).

이번 주에는 다시 절반으로 줄였다(두 번째 반감).

14일 만에 4배 빠르게.

증명 파이프라인의 밀리초마다가 프라이빗 거래의 속도와 UX에 영향을 준다.

사용자가 보내기를 누르면 수신자는 즉시 자금을 보고 싶어 한다.

보낸 사람과 받는 사람 사이의 연결을 끊는 웜홀 거래에는 ZK 증명이 필요하다.

ZK 증명은 정산 전에 시간을 더한다. 시간이 흐르고, 수신자가 화면을 새로고침해도 자금이 안 보이면 그건 실패다.

UI 트릭으로 경험을 나아지게 할 수 있고, 그건 좋다.

하지만 정산은 느낌과 실제 모두 극도로 빨라야 한다.

그 초들을 계속 깎아 내고 있다.

이번 주에 추가로 배포한 내용은 다음과 같다.

### GitHub 활동 (병합된 PR 12개):

![Github Stats](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### 코어 기술 & ZK:

- ZK 친화적 DB 최적화로 프로버 시간을 또 50% 줄임. 증명 파이프라인은 2주 연속 2배 개선.
- Poseidon에 비단사 해싱 구현, qp-poseidon-constants의 새 버전 릴리스.
- 마이닝 알고리즘의 엣지 케이스에 대한 난이도 조정 수정.
- 모든 팔렛과 주요 크레이트에 대한 AI 기반 검토, 표시된 이슈에 버그 리포트 제출.
- 코드베이스 검토에서 확인된 이슈에 대한 정리 PR 병합.

### 네트워크 & 인프라:

- Senoti 알림 서비스 디바이스 등록기에 속도 제한 추가.
- 익스플로러 업데이트: 최신 변경 병합, 충돌 해결, API 조정.

### 웹 & 모바일 앱:

- 사이트에 새 백서 공개(스타일 및 콘텐츠 갱신).
- 지난 주간 업데이트를 [quantus.com/blog](https://quantus.com/blog)에 블로그로 게시.
- 트랜잭션 풀 peek 구독 기능 구현 및 E2E 테스트.
- iOS 앱 스왑 기능에 대한 Apple 심사 시작.

### 콘텐츠 & 파트너십:

- 「State of Quantum」 산업 보고서 20페이지 초안 완료, 의견 수렴을 위해 배포 시작. 관심 있으면 연락 바란다.
- 소셜 미디어용 마케팅 채용 추가.
- Q-Day 행사: 4월 25일, Network School에서 확정.

### 업계 동향:

- Quantum Canary: [Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)
