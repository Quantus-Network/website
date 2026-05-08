---
title: "Quantus Weekly: 킬러 앱은 바로 '돈'입니다"
description: "이번 주에는 Mithril을 위한 Dilithium DKG를 재작성하고, 임계값 서명 수정을 완료했으며, Wormhole SDK 헬퍼를 공개하고, UI가 개선된 지갑 v1.4.0을 TestFlight에 출시했습니다."
pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: 킬러 앱은 바로 '돈'입니다"
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

시장이 서서히 깨닫고 있다고 믿는 사실이 하나 있습니다.

하나의 킬러 크립토 앱이 다른 어떤 것보다 더 많은 가치를 창출하고 점유할 것이라는 점입니다.

그것은 스테이블코인도, 예측 시장도, DeFi도 아닙니다.

Web3나 소셜 네트워크, PFP 컬렉션은 더더욱 아닙니다.

그것은 바로 '돈'입니다. 이 산업을 탄생시킨 아이디어 그 자체입니다.

첫 번째 생각은 순수한 생각입니다. 피어 투 피어(P2P) 전자 현금입니다.

안전하고 프라이빗하며 확장 가능한 돈은 수조 달러 규모의 기회입니다.

이번 주에 저희는 업데이트된 Mithril 논문에 맞춰 Dilithium 키를 위한 Quantus의 분산 키 생성(DKG)을 재작성하고, 임계값 서명 구현 전반에 걸쳐 수정 사항을 적용했습니다.

이제 여러 당사자 간에 Quantus 키를 샤딩(shard)할 수 있게 됩니다. 이는 저희의 보안 통합에 있어 매우 중요합니다.

Wormhole 사양의 감사 항목을 해결하고 공용 Quantus CLI SDK에 헬퍼를 공개하여 외부 개발자들에게 프라이빗 트랜잭션 지원을 개방했습니다. Wormhole은 저희가 확장 가능한 포스트 양자 프라이버시를 달성하는 방법입니다.

또한 모바일 앱 경험을 단순화하고 아름답게 꾸민 전체 리스킨(reskin)이 적용된 지갑 v1.4.0을 출시했습니다(현재 TestFlight에서 이용 가능).

### Github 활동 (16개의 병합된 풀 리퀘스트):

![Github 통계](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### 코어 기술 및 ZK:

- 업데이트된 Mithril 논문에 맞춰 Dilithium 키를 위한 분산 키 생성을 재작성했습니다.
- 세 가지 감사 결과에 따라 임계값 서명 구현을 강화했습니다.
- 잔돈 출력(change outputs)에 대한 감사 항목을 해결하기 위해 Wormhole 사양을 업데이트했습니다.
- 공용 Quantus CLI SDK에 Wormhole 헬퍼를 공개하고 엔드 투 엔드 deposit-to-mint 예제 워크플로우를 추가했습니다.
- 제출됨(submitted), 포함됨(included), 확정됨(finalized) 상태를 명확히 하고, 정확한 소수점 수수료 파싱, 더 엄격한 버전 호환성 체크, 오버플로우 방지 배치 전송을 포함하여 CLI 트랜잭션 라이프사이클을 리팩토링했습니다.
- 난이도 조절 알고리즘을 개선하기 위한 벤치마킹 툴을 구축했습니다.
- 다양한 집계 트리 토폴로지와 CPU 사용량을 조사하고 벤치마킹했습니다.
- 휴먼 체크프레이즈(human checkphrase)의 오타를 수정했습니다.

### 네트워크 및 인프라:

- 스트레스 테스트 스위트에 Wormhole 모드를 추가하고 Planck 테스트넷에서 여러 번 실행했습니다.
- Subsquid 블록체인 인덱서를 프로덕션급 서버로 이전하고 계정 및 체인 통계 데이터를 추가했습니다.
- 익스플로러 쿼리를 벤치마킹하고 부하가 큰 쿼리를 제거했습니다.
- 모든 VPS 운영 체제를 업데이트하고 인프라를 문서화했습니다.
- 마이너 스택을 업데이트하고 Windows에서 마이너 앱을 테스트했습니다.

### 웹 및 모바일 앱 업데이트:

- 클레임(claim) 기능이 포함된 Planck용 GUI 마이너(v0.4.1)를 출시했습니다.
- 전체 UI 리스킨과 실제 환율이 적용된 지갑 v1.4.0을 출시했습니다(현재 TestFlight에서 이용 가능).
- 지갑 버그 수정: 홈페이지 잔액 스타일링, 활동 컴포넌트 스타일링, 수신 화면 수정.
- Task Master: 환율 엔드포인트를 추가하고 체크섬 종속성을 업데이트했습니다.
- Quantus 웹사이트 업데이트: 문서 링크를 docs (dot) quantus (dot) com으로 연결하고, TPS 표시를 업데이트했으며, 주간 업데이트를 게시했습니다.

### 콘텐츠 및 파트너십:

- Spotify, Apple, YouTube 전체에서 팟캐스트 브랜딩을 업데이트했습니다.
- Network School에서 첫 번째 Quantus 안경을 [$QUAN](https://x.com/search?q=%24QUAN&src=cashtag_click)에 판매했습니다.
- Quantus는 NS 페어에 부스를 마련하여 앱 사용자 및 Q-day 등록자를 온보딩했습니다.
