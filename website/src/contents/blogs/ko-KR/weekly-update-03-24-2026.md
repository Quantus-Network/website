---
published: true
title: "Quantus Weekly: 두 번째 반감기, 4배 빠른 증명"
description: "2주 만에 ZK 증명 4배 가속, Poseidon 작업, 채굴 수정, Senoti 제한, 백서 출시, Quantum Canary 소식을 담은 Quantus 주간 업데이트입니다."
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus Weekly: 두 번째 반감기, 4배 빠른 증명"
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

2는 특별한 숫자입니다.

2+2는 4. 2×2는 4. 2²는 4.

덧셈, 곱셈, 거듭제곱이 모두 같은 답을 주는 유일한 숫자입니다.

2주 전 ZK 증명 파이프라인 최적화에서 큰 진전을 이뤘습니다.

지난주 증명 시간을 절반으로 줄였습니다(2로 나눔).

이번 주 다시 절반으로 줄였습니다(두 번째 반감기).

14일 만에 4배 빨라졌습니다.

증명 파이프라인의 모든 밀리초는 프라이빗 트랜잭션의 속도와 UX에 중요합니다.

사용자가 전송을 누르면, 수신자는 즉시 자금을 보고 싶어 합니다.

송신자와 수신자 간의 연결을 끊는 웜홀 트랜잭션에는 ZK 증명이 필요합니다.

ZK 증명은 정산 전에 추가 시간을 더합니다. 지나가는 매 초, 수신자가 화면을 새로고침해도 자금이 보이지 않을 때마다 실패입니다.

경험을 개선할 수 있는 UI 트릭도 있고, 그것들도 훌륭합니다.

하지만 정산은 빠르게 느껴지고 실제로도 매우 빨라야 합니다.

우리는 그 초들을 줄여 나가고 있습니다.

이번 주에 출시한 다른 소식은 다음과 같습니다.

### GitHub 활동 (12개의 병합된 풀 리퀘스트):

![Github 통계](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### 코어 기술 및 ZK:

- ZK 친화적 데이터베이스 최적화로 증명 시간을 또 50% 단축했습니다. 증명 파이프라인 2배 개선이 2주 연속 달성되었습니다.
- Poseidon에 비단사(injective) 해싱을 구현하고, qp-poseidon-constants의 새 버전 릴리스를 출시했습니다.
- 채굴 알고리즘 엣지 케이스에 대한 난이도 조정 수정.
- 모든 팔렛 및 메인 crate에 대한 AI 기반 검토를 수행하고, 플래그된 이슈에 대한 버그 리포트를 제출했습니다.
- 코드베이스 검토 중 확인된 이슈에 대한 정리 PR 병합.

### 네트워크 및 인프라:

- Senoti 알림 서비스 디바이스 등록기에 속도 제한을 추가했습니다.
- 익스플로러 업데이트: 최신 변경 사항 병합, 충돌 해결, API 조정.

### 웹 및 모바일 앱 업데이트:

- 업데이트된 스타일과 콘텐츠로 웹사이트에 새 백서를 게시했습니다.
- 지난 주간 업데이트를 [quantus.com/blog](https://quantus.com/blog) 블로그 게시물로 게시했습니다.
- 트랜잭션 풀 peek 구독 기능을 구현하고 end-to-end로 테스트했습니다.
- iOS 앱 스왑 기능에 대한 Apple 심사 절차를 시작했습니다.

### 콘텐츠 및 파트너십:

- 20페이지 분량의 "State of Quantum" 업계 보고서 초안을 완료하고 의견 수렴을 시작했습니다. 관심 있으시면 연락 주세요.
- 소셜 미디어용 마케팅 인력 1명을 추가했습니다.
- Q-Day 이벤트 날짜 확정: 4월 25일 Network School.

### 업계 업데이트:

- Quantum Canary: [Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)
