---
published: true
title: "Quantus Weekly: 킬러 앱은 돈"
description: "이번 주 Mithril용 Dilithium DKG를 재작성하고 임계값 서명 수정을 출시했습니다. Wormhole SDK 헬퍼를 공개하고 TestFlight에서 지갑 v1.4.0을 배포했습니다."
pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: 킬러 앱은 돈"
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
    "dilithium",
    "wormhole",
    "mithril",
    "network-school",
  ]
---

시장이 서서히 깨어나고 있다고 믿는 한 가지가 있습니다.

킬러급 크립토 앱 하나가 다른 어떤 것보다 더 많은 가치를 창출하고 흡수할 것입니다.

스테이블코인도, 예측 시장도, DeFi도 아닙니다.

Web3도, 소셜 네트워크도, PFP 컬렉션도, 확실히 아닙니다.

그것은 돈입니다. 이 산업을 낳은 아이디어 그 자체.

첫 번째 생각은 순수한 생각입니다. 피어 투 피어 전자 현금.

안전하고, 프라이빗하며, 확장 가능한 돈이 바로 수조 달러 규모의 기회입니다.

이번 주 Quantus의 Dilithium 키 분산 키 생성(DKG)을 업데이트된 Mithril 논문에 맞게 재작성했고, 임계값 서명 구현 전반에 걸친 수정 사항을 출시했습니다.

이를 통해 Quantus 키를 여러 당사자에 걸쳐 분할(sharding)할 수 있게 됩니다. 보안 통합에 중요한 기능입니다.

Wormhole 사양의 감사 항목을 해결하고 공개 Quantus CLI SDK에 헬퍼를 노출해, 외부 개발자에게 프라이빗 트랜잭션 지원을 열었습니다. Wormhole은 확장 가능한 포스트 양자 프라이버시를 실현하는 방법입니다.

또한 모바일 앱 경험을 단순화하고 아름답게 만든 전면 리스킨이 적용된 지갑 v1.4.0을 출시했습니다(현재 TestFlight).

### Github Activity (16 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### Core Tech & ZK:

- Dilithium 키 분산 키 생성을 업데이트된 Mithril 논문에 맞게 재작성했습니다.
- 감사에서 발견된 세 가지 항목에 대응해 임계값 서명 구현을 강화했습니다.
- 변경 출력(change outputs) 관련 감사 항목을 해결하도록 Wormhole 사양을 업데이트했습니다.
- 공개 Quantus CLI SDK에 Wormhole 헬퍼를 노출하고, 입금부터 민팅까지의 end-to-end 예제 워크플로를 추가했습니다.
- CLI 트랜잭션 수명 주기를 제출(submitted), 포함(included), 확정(finalized) 상태로 분리하고, 정확한 소수점 수수료 파싱, 더 엄격한 버전 호환성 검사, 오버플로를 고려한 일괄 전송을 적용했습니다.
- 난이도 조정 알고리즘 개선을 위한 벤치마킹 도구를 구축했습니다.
- 다양한 집계 트리 토폴로지와 CPU 사용량을 조사하고 벤치마킹했습니다.
- 휴먼 체크프레이즈의 철자 오류를 수정했습니다.

### Network & Infra:

- 스트레스 테스트 스위트에 wormhole 모드를 추가하고 Planck 테스트넷에서 여러 차례 실행했습니다.
- Subsquid 블록체인 인덱서를 프로덕션급 서버로 이전하고 계정 및 체인 통계 데이터를 추가했습니다.
- Explorer 쿼리를 벤치마킹하고 비용이 큰 쿼리를 제거했습니다.
- 모든 VPS 운영체제를 업데이트하고 인프라를 문서화했습니다.
- miner-stack을 업데이트하고 Windows에서 miner-app을 테스트했습니다.

### Web & Mobile App Updates:

- Planck용 GUI 마이너(v0.4.1)를 클레임 기능과 함께 출시했습니다.
- 전면 UI 리스킨과 실시간 환율이 적용된 지갑 v1.4.0을 출시했습니다(현재 TestFlight).
- 지갑 버그 수정: 홈페이지 잔액 스타일링, 활동 컴포넌트 스타일링, 수신 화면.
- Task Master: 환율 엔드포인트 추가 및 checksum 의존성 업데이트.
- Quantus 웹사이트 업데이트: docs (dot) quantus (dot) com으로 문서 링크 연결, TPS 표시 업데이트, 주간 업데이트 게시.

### Content & Partnerships:

- Spotify, Apple, YouTube 전반에 걸친 팟캐스트 브랜딩 업데이트.
- Network School에서 [$QTC](https://x.com/search?q=%24QTC&src=cashtag_click)으로 Quantus Glasses 첫 판매.
- NS 박람회에서 Quantus 부스 운영, 앱 사용자 및 Q-day 등록자 온보딩.
