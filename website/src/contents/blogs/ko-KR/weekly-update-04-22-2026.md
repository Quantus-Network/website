---
title: "Quantus Weekly: 플랑크 테스트넷, CLI 보상 청구, 프로버 처리량 2배"
description: "플랑크는 양자 내성 프라이빗 트랜잭션을 지원하는 첫 테스트넷입니다. 마이너 이주가 진행 중이며, CLI로 모바일 지갑의 투명 주소로 채굴 보상을 청구할 수 있고, docs.quantus.com에 노드·마이너·보상 청구 가이드가 있습니다. 2x8 분할 아키텍처로 집계 프로버 속도가 두 배로 올랐습니다."
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: 플랑크 테스트넷, CLI 보상 청구, 프로버 처리량 2배"
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

플랑크는 Quantus의 양자 내성 프라이빗 트랜잭션을 지원하는 첫 테스트넷입니다.

이번 주 마이너의 절반 이상이 플랑크로 이전했습니다.

다른 체인들이 양자 위협이 실제인지 논쟁하는 동안, 우리는 공개적으로 솔루션을 스트레스 테스트하고 있습니다.

이제 CLI를 통해 모바일 지갑의 투명 주소로 채굴 보상을 청구할 수 있습니다.

Apple Silicon과 Linux에서 채굴을 종단간으로 검증했습니다.

현재 모바일 UI는 투명 주소 유형만 지원합니다. 곧 더 알려드리겠습니다.

[docs.quantus.com](https://docs.quantus.com)이 공개되었으며, 노드 설정·마이너 실행·모바일 지갑으로 보상 청구까지 안내하는 채굴 가이드를 찾을 수 있습니다.

이전 Quantus 테스트넷에서 채굴하거나 사용했다면 업데이트 시 앱에서 마이그레이션을 안내합니다.

잔액은 초기화되지만, 설정의 «mining rewards»에서 이전 테스트넷에서 채굴한 모든 블록에 대한 크레딧을 확인할 수 있습니다.

플랑크에서 계정별로 채굴한 블록 수도 추적하고 있습니다.

집계 프로버 속도도 이번 주 2x8 분할 아키텍처로 두 배가 되었습니다.

이번 주 더 많은 것이 배포되었습니다.

### GitHub 활동 (병합된 PR 27개):

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### Core Tech & ZK

- 2x8 분할 증명 아키텍처로 집계 프로버 성능 2배(각 8-리프 번들에는 ZK 없음, 루트 증명에 ZK 래퍼).
- ZK 연구 논문 프리프린트 제출.
- qp-plonky2의 새 split mask ZK 옵션에서 프라이버시 유출 버그 발견 및 패치.
- 임계값 Dilithium 감사 항목 조치.
- CLI로 채굴 보상 청구 가능.
- CLI 해시를 blake2-256으로 업데이트.
- CLI 웜홀 잔액 복구 수정 배포.
- Tech Collective 구성원이 런타임 업데이트 성공 실행.

### 네트워크 & 인프라

- 플랑크: 신규 변경 병합·릴리스, 내부 플랑크 테스트넷 가동.
- 스트레스 테스트: 새 전략 구현, 여러 차례 실행.
- Faucet: Twitter 예외 처리 개선, 상세 모니터링용 메트릭 확장.
- 플랑크와 Faucet 모니터링 대시보드 갱신·확장.
- 더 선택적인 알림 구현.
- A1-Planck 노드 독일로, A2-Planck 노드 미국으로 이전.
- 플랑크 테스트넷용 Subsquid 업데이트: 잔액 이동 수정, 해시를 blake2b로 복귀, 채굴 보상 표시 추가.
- 익스플로러를 플랑크 테스트넷으로 업데이트하고 웜홀 브랜치 정상 병합.
- Apple Silicon과 Linux에서 MVP 마이너 E2E 실행. Linux GPU 채굴은 계속 트러블슈팅.
- AI 채굴 스킬(SKILL.md) 구축. 테스트에서 2분 이내 채굴 기동.

### 웹 & 모바일 앱

- [docs.quantus.com](https://docs.quantus.com) 공개.
- [q.day](https://q.day) 랜딩 배포.
- 새 테스트넷 대응 수정이 포함된 모바일 지갑 v1.3.2·v1.3.3 배포.
- 지갑에 채굴 보상 표시.
- 거래 상세, 받기, 활동 화면 재설계.
- 채굴 가이드 업데이트.

### 콘텐츠 & 파트너십

- Q-Day 등록 100명 돌파. 자세한 내용은 [q.day](https://q.day).
- State of Quantum Report에 대한 외부 기여자 코멘트 수렴 및 반영.
