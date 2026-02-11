---
title: "Quantus Weekly: 디나이어블 RPC 및 니오다임 보안 감사"
description: "프라이버시 강화를 위한 새로운 디나이어블 RPC, Rusty Crystals의 니오다임 보안 감사 완료, 그리고 모든 토큰에 대한 프라이빗 ZK 주소 도입 소식을 포함한 주간 업데이트입니다."
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: 디나이어블 RPC 및 니오다임 보안 감사"
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

당신의 지갑이 당신을 감시하고 있습니다.

프라이버시 인프라의 99%는 흉내만 내는 것입니다. 스택 어딘가에서 정보가 새고 있습니다. 지갑은 RPC라고 불리는 서버와 통신합니다. 그 RPC 서버는 정보를 지갑으로 다시 보냅니다. 하지만 그렇게 하기 위해 RPC는 보통 당신에 대한 몇 가지 정보를 알아야 합니다.

예를 들어, 잔액을 가져오기 위해 거래 내역이 필요할 수 있습니다. 그것은 아마도 당신의 IP 주소, 대략적인 위치, 사용 습관 등과 연관될 것입니다. 이 모든 것은 당신이 지갑에서 잔액을 볼 수 있게 하기 위한 것입니다.

그래서 당신이 좋아하는 온체인 프라이버시 툴의 새로운 마케팅 담당자 Stacy가 X 스페이스에서 자신들이 얼마나 "프라이빗하고 안전한지" 자랑하는 동안, 배후에서는 RPC 연결을 도청하고 있는 것입니다.

당신은 노출되었습니다.

우리는 다른 것을 만들었습니다. 디나이어블 RPC(Deniable RPCs)는 oblivious lookup과 유사한 해시 접두사 필터를 사용합니다. 서버에 당신이 무엇을 찾고 있는지 알리지 않고도 당신의 거래를 요청할 수 있습니다. RPC는 당신이 어떤 특정 거래를 요청하는지 판단할 수 없습니다.

이처럼 [@QuantusNetwork](https://x.com/@QuantusNetwork) 는 온체인 및 지갑/RPC 인프라에서 프라이버시를 보존합니다. 우리는 스택의 모든 레이어에서 당신이 비밀로 유지하고 싶은 것을 비밀로 유지합니다.

이번 주에는 Rusty Crystals Dilithium 서명 라이브러리에 대한 [@Neodyme](https://x.com/@Neodyme) 보안 감사가 완료되었음을 [발표](https://x.com/QuantusNetwork/status/2016390125626773871)했습니다. 모든 문제가 해결되었으며 하드닝 기술이 적용되었습니다. Rusty Crystals는 완전한 HD 지갑 지원을 포함하여 Rust에서 최고의 Dilithium 서명 라이브러리입니다.

이상 하이라이트였습니다. 지난 한 주 동안 출시된 다른 소식들은 다음과 같습니다.

### GitHub 활동 (19개의 병합된 풀 리퀘스트):

![Github 통계](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### 코어 기술 및 ZK

- 모든 문제가 해결된 [@Neodyme](https://x.com/@Neodyme) 감사가 완료되었습니다. 사용 후 메모리 제로화(memory zeroing)를 포함한 하드닝 기술이 적용되었습니다. [여기 포스트](https://x.com/QuantusNetwork/status/2016390125626773871).
- 접두사 해싱을 통한 디나이어블 RPC를 출시했습니다. 이제 사용자는 RPC 노드에 연결할 때 부인 방지(oblivious lookup) 기능을 갖게 되었습니다.
- 제네시스에서 모든 토큰에 대해 프라이빗 ZK 주소를 활성화했습니다.
- 지속적인 블록 생성을 통해 트랜잭션 포함까지의 평균 시간을 50% 이상 단축했습니다.
- 불필요한 팔렛을 제거하여 런타임을 단순화했습니다.
- 업데이트된 문서와 함께 멀티시그 팔렛 기능 구현을 완료했습니다. 체인 및 CLI 통합은 검토 대기 중입니다.
- ZK-애그리게이터 회로용 퍼저(fuzzer)를 개편하고 마이너 수수료 및 소각 수수료에 대한 테스트 범위를 확장했습니다.

### 웹 및 모바일 앱 업데이트

- 고보안 풀(pull) 기능이 포함된 모바일 앱 v1.1.5(빌드 65)를 출시했습니다.
- 고보안 기능을 위한 데모 비디오를 제작했습니다.
- 익스플로러 및 수도꼭지(faucet) 개선: 블록 상세 정보에 오류 및 고보안 이벤트 추가, 오류 유형별 검색, 그룹 메시지 필터링 강화.
- 리더보드, 레이드 제출 및 메트릭에 대한 Task Master 버그 수정.
- Subsquid 도커파일 및 도커 이미지 생성을 위한 GitHub 액션을 수정했습니다.
- 웹사이트 블로그 UX를 업데이트하고 SEO 문제를 수정했습니다.

### 콘텐츠 및 파트너십

- 텔레그램 회원 1,000명을 돌파했습니다.
- Token2049 Dubai 사이드 이벤트 장소를 예약했습니다.
- 팀은 다음 스프린트를 위해 [@ns](https://x.com/@ns)로 돌아가기로 결정했습니다.
- 모바일 앱 리디자인을 위해 새로운 디자이너를 고용했습니다.
- 비디오 협업을 위해 첫 번째 중간 규모 콘텐츠 크리에이터를 고용했습니다. 크리에이터 로스터를 구축 중입니다.

### 업계 업데이트

- [@QuantumCanary\_](https://x.com/@QuantumCanary_)의 [Zcash 심층 분석](https://x.com/QuantumCanary_/status/2016327421797294286) 기사.
- [@QuantumCanary\_](https://x.com/@QuantumCanary_)에서 "[블록체인 비교표](https://x.com/QuantumCanary_/status/2015734605450731824)"를 발표했습니다.
