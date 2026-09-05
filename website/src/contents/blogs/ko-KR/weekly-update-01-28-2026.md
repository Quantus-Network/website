---
published: true
title: "Quantus 위클리: 디나이어블 RPC와 Neodyme 감사"
description: "프라이버시를 강화하는 디나이어블 RPC, Rusty Crystals Dilithium 라이브러리 Neodyme 보안 감사 완료, 모든 토큰용 프라이빗 ZK 주소 도입 소식을 이번 주에 전합니다."
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus 위클리: 디나이어블 RPC와 Neodyme 감사"
featured: false
tags:
  [
    "weekly-update",
    "rpc",
    "privacy",
    "audit",
    "security",
    "dilithium",
    "zk-aggregator",
    "multisig",
  ]
---

지갑이 당신을 신고하고 있습니다.

프라이버시 인프라의 99%는 겉치레입니다. 스택 어딘가에서 정보가 새고 있습니다. 지갑은 RPC라는 서버와 통신하고, RPC 서버는 정보를 돌려줍니다. 그 과정에서 RPC는 보통 당신에 대한 정보를 알아야 합니다.

예를 들어 잔액을 불러오려면 거래 내역이 필요할 수 있습니다. IP 주소, 대략적인 위치, 사용 패턴과 연결될 가능성이 큽니다. 잔액 하나 보여주려고 이 모든 정보가 오가는 겁니다.

좋아하는 온체인 프라이버시 툴의 마케팅 담당자가 X 스페이스에서 "프라이빗하고 안전하다"고 자랑하는 동안, RPC 연결은 이미 도청당하고 있습니다.

당신은 이미 노출된 상태입니다.

Quantus는 다른 방식을 만들었습니다. 디나이어블 RPC는 oblivious lookup과 비슷한 해시 접두사 필터를 씁니다. 서버에 무엇을 찾는지 알리지 않고도 거래를 요청할 수 있습니다. RPC는 어떤 거래를 요청하는지 특정할 수 없습니다.

[@Quantus](https://x.com/QuantusNetwork)는 온체인과 지갑·RPC 인프라 전반에서 프라이버시를 지킵니다. 스택의 모든 레이어에서 비밀로 두고 싶은 것은 비밀로 둡니다.

이번 주 Rusty Crystals Dilithium 서명 라이브러리에 대한 [@Neodyme](https://x.com/@Neodyme) 보안 [감사 완료](https://x.com/QuantusNetwork/status/2016390125626773871)도 발표했습니다. 모든 이슈가 해결됐고 하드닝 기법이 적용됐습니다. Rusty Crystals는 HD 지갑 전체 지원을 갖춘 Rust 최고의 Dilithium 서명 라이브러리입니다.

하이라이트는 위와 같습니다. 지난주에 출시한 나머지 내용은 다음과 같습니다.

### GitHub 활동 (병합된 풀 리퀘스트 19건):

![Github Stats](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### 코어 기술 및 ZK

- [@Neodyme](https://x.com/@Neodyme) 감사를 완료하고 모든 이슈를 해결했습니다. 사용 후 메모리 제로화를 포함한 하드닝 기법을 적용했습니다. [게시글](https://x.com/QuantusNetwork/status/2016390125626773871)
- 접두사 해싱으로 디나이어블 RPC를 출시했습니다. RPC 노드 연결 시 부인 가능성(oblivious lookup)을 제공합니다.
- 제네시스부터 모든 토큰에 프라이빗 ZK 주소를 활성화했습니다.
- 연속 블록 생성으로 트랜잭션 포함까지 평균 시간을 50% 이상 단축했습니다.
- 불필요한 팔렛을 제거해 런타임을 단순화했습니다.
- 멀티시그 팔렛 기능을 완성하고 문서를 업데이트했습니다. 체인·CLI 통합은 검토 대기 중입니다.
- ZK-aggregator 회로 퍼저를 개편하고 마이너 수수료·소각 수수료 테스트 범위를 확대했습니다.

### 웹 및 모바일 앱 업데이트

- 고보안 pull 기능이 포함된 모바일 앱 v1.1.5(빌드 65)를 출시했습니다.
- 고보안 기능 데모 영상을 제작했습니다.
- 익스플로러·faucet 개선: 블록 상세에 오류·고보안 이벤트 추가, 오류 유형별 검색, 그룹 메시지 필터링 강화.
- 리더보드, 레이드 제출, 메트릭 관련 Task Master 버그를 수정했습니다.
- Subsquid Dockerfile과 Docker 이미지 생성 GitHub Action을 수정했습니다.
- 웹사이트 블로그 UX를 업데이트하고 SEO 이슈를 수정했습니다.

### 콘텐츠 및 파트너십

- Telegram 회원 1,000명을 돌파했습니다.
- Token2049 Dubai 사이드 이벤트 장소를 예약했습니다.
- 다음 스프린트를 위해 [@ns](https://x.com/@ns)로 복귀하기로 결정했습니다.
- 모바일 앱 리디자인을 위해 디자이너를 새로 채용했습니다.
- 영상 협업용 중형 콘텐츠 크리에이터 1호를 채용했습니다. 크리에이터 로스터를 구축 중입니다.

### 업계 업데이트

- [@QuantumCanary\_](https://x.com/@QuantumCanary_)의 [Zcash 심층 분석](https://x.com/QuantumCanary_/status/2016327421797294286) 기사.
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) [블록체인 비교표](https://x.com/QuantumCanary_/status/2015734605450731824) 발표.
