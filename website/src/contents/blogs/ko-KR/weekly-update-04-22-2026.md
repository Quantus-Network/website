---
published: true
title: "Quantus Weekly: Planck 클레임, 2배 증명 속도"
description: "포스트 양자 프라이빗 트랜잭션용 첫 테스트넷 Planck. 마이너 마이그레이션, CLI 보상 클레임, prover 처리량 2배 향상을 다룬 Quantus 주간 업데이트입니다."
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: Planck 클레임, 2배 증명 속도"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Planck은 Quantus의 포스트 양자 프라이빗 트랜잭션을 지원하는 첫 테스트넷입니다.

이번 주 마이너의 절반 이상이 Planck으로 마이그레이션했습니다.

다른 체인이 양자 위협이 진짜인지 논쟁하는 동안, 우리는 공개적으로 솔루션을 스트레스 테스트하고 있습니다.

이제 CLI를 통해 모바일 지갑의 투명 주소로 채굴 보상을 클레임할 수 있습니다.

Apple Silicon과 Linux에서 end-to-end 채굴을 검증했습니다.

현재 모바일 UI는 투명 주소 유형만 지원합니다. 곧 더 많은 소식이 있을 예정입니다.

[docs.quantus.com](https://docs.quantus.com)이 공개되었으며, 노드 설정, 마이너 실행, 모바일 지갑으로 보상 클레임까지 안내하는 채굴 가이드를 확인할 수 있습니다.

이전 Quantus 테스트넷 버전을 채굴하거나 사용했다면, 업데이트 시 앱에서 마이그레이션을 안내합니다.

잔액은 초기화되지만, 설정에서 "mining rewards"를 보면 이전 테스트넷에서 채굴한 모든 블록에 대한 크레딧이 남아 있습니다.

Planck에서 각 계정이 채굴한 블록 수도 추적하고 있습니다.

집계 prover 속도도 2×8 split 아키텍처로 이번 주 2배 향상되었습니다.

이번 주에 출시한 다른 소식은 다음과 같습니다.

### GitHub 활동 (27개의 병합된 풀 리퀘스트):

![Github 통계](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### 코어 기술 및 ZK

- 2×8 split 증명 아키텍처(각 8-leaf 번들에 ZK 없음, 루트 증명에 ZK 래퍼 적용)로 집계 prover 성능 2배 향상.
- ZK 연구 논문을 사전 인쇄(preprint)로 제출했습니다.
- qp-plonky2의 새 split mask ZK 옵션에서 프라이버시 유출 버그를 발견하고 패치했습니다.
- threshold Dilithium 감사 항목을 해결했습니다.
- CLI를 통해 채굴 보상 클레임 가능.
- CLI 해셔를 blake2-256 사용으로 업데이트.
- CLI 웜홀 잔액 복구 수정 출시.
- Tech Collective 멤버가 런타임 업데이트를 성공적으로 실행.

### 네트워크 및 인프라

- Planck: 새 변경 사항 병합 및 출시; 내부 Planck 테스트넷 운영.
- 스트레스 테스트: 새 전략 구현, 여러 번 실행.
- 수도꼭지: Twitter 예외 처리 개선, 상세 모니터링용 메트릭 확장.
- Planck 및 수도꼭지용 모니터링 대시보드 갱신 및 확장.
- 더 선택적인 알림 구현.
- A1-Planck 노드를 독일로, A2-Planck 노드를 미국으로 이동.
- Planck 테스트넷용 Subsquid 업데이트: 잔액 이동 수정, 해셔를 blake2b로 되돌림, 채굴 보상 표시 추가.
- 익스플로러를 Planck 테스트넷으로 업데이트하고 웜홀 브랜치를 올바르게 병합.
- Apple Silicon과 Linux에서 MVP 마이너 end-to-end 실행; Linux GPU 채굴은 여전히 문제 해결 중.
- AI 채굴 스킬(SKILL.md) 구축; 테스트 중 2분 이내 채굴 시작.

### 웹 및 모바일 앱 업데이트

- [docs.quantus.com](https://docs.quantus.com) 공개.
- [q.day](https://q.day) 랜딩 페이지 배포.
- 새 테스트넷 수정 사항이 포함된 모바일 지갑 v1.3.2 및 v1.3.3 출시.
- 지갑에 채굴 보상 표시.
- 지갑에 리디자인된 트랜잭션 상세, 수신, 활동 화면 구현.
- 채굴 가이드 업데이트.

### 콘텐츠 및 파트너십

- Q-Day 등록 100명 돌파. [q.day](https://q.day)에서 자세히 확인하세요.
- State of Quantum 보고서에 대한 외부 기여자 의견을 수렴하고 반영했습니다.
