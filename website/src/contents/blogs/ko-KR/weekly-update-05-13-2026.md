---
title: "Quantus Weekly: 더 공정한 런칭"
description: "초기 비트코인 채굴자들은 노트북으로 하루에 수천 BTC를 채굴할 수 있었습니다. Quantus는 첫날부터 채굴을 누구나 쉽게 시작할 수 있도록 하는 것을 우선시하고 있습니다."
pubDate: "2026-05-13"
heroImage: "/blog/covers/weekly-update-05-13-2026.webp"
heroAlt: "Quantus Weekly: 더 공정한 런칭"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "mining",
    "fair-launch",
    "testnet",
    "planck",
    "gui-miner",
    "zk-proofs",
    "security",
    "infrastructure",
    "mobile",
    "network-school",
  ]
---

초기 비트코인 채굴자들은 노트북으로 하루에 수천 BTC를 채굴할 수 있었습니다.

비트코인 CPU 채굴이 가능했던 기간은 사실상 2년에 불과했습니다.

네트워크가 성장함에 따라 해시레이트도 증가했습니다. GPU 채굴이 더 효율적이 되었고, 그 다음에는 ASIC이 등장했습니다.

여러분이 비트코인에 대해 처음 들었을 때쯤에는 일반 소비자용 하드웨어를 통한 채굴은 이미 끝난 상태였습니다.

구매할 수 있는 거래소도 없었습니다.

이차 시장이 없었기 때문에 "가격"도 없었습니다.

"가격"을 정하기 위해 코인당 전기 비용을 추정했습니다.

시장에서 구매가 가능해졌을 때쯤에는 대부분의 코인이 이미 배포된 상태였습니다.

비트코인은 처음 4년 동안 코인의 절반 이상을 발행했습니다.

그 모든 코인은 초기 채굴자들에게 돌아갔습니다.

이것이 바로 "공정한 런칭(Fair Launch)"의 기준입니다.

우리는 아마도 더 잘할 수 있을 것입니다.

우리가 [@QuantusNetwork](https://x.com/@QuantusNetwork) 런칭을 준비할 때, 첫날부터 채굴 접근성을 높이는 것을 최우선 과제로 삼고 있습니다.

오늘 몇 번의 클릭만으로 테스트넷에서 채굴 노드를 실행할 수 있습니다.

지난주에 GUI 채굴기 앱을 업데이트했습니다. 기술적인 지식이 없더라도 첫날부터 메인넷 채굴을 준비할 수 있습니다.

### Core Tech & ZK:

- 채굴기에서 위임된 ZK 증명(delegated ZK proving) 프로토타입을 제작했습니다. 이 실험적인 기능을 통해 채굴자들은 추가적인 역할로서 웜홀 트랜잭션의 증명 집계(proof aggregation)에 참여할 수 있게 됩니다.
- HashCloak 및 Eiger의 감사 결과를 반영했습니다.

### Network & Infra:

- Planck 테스트넷을 위한 상환 및 잔액 기능이 포함된 GUI 채굴기 업데이트를 출시했습니다. 다운로드 및 가이드는 docs (dot) quantus (dot) com에서 확인 가능합니다.
- 모든 풀 리퀘스트(PR)에 AI 기반 보안 감사 프레임워크를 배포했습니다. 최초의 자동화된 전체 체인 보안 검토를 완료했습니다.
- RPC 노드에 대한 침투 테스트(Pen-test)를 실시했습니다.

### Web & Mobile App Updates:

- 지갑 내 채굴 보상 화면 및 POS(Point-of-Sale) 화면을 구현했습니다.
- 부하가 큰 익스플로러 쿼리를 최적화하고 통합 계정 이벤트를 업데이트했습니다.
- 모바일 앱 수정을 진행했습니다.

### Content & Partnerships:

- [Observer의 Chris Smith](https://x.com/observer/status/2052779135794110592): "비트코인의 양자 컴퓨팅 거버넌스 문제."
- [Curtis Yarvin 팟캐스트 에피소드](https://x.com/QuantusNetwork/status/2052734804869915132)를 모든 플랫폼에 게시했습니다.
- Network School에서 30명 이상의 Quantus 앱 사용자와 10명 이상의 채굴자를 온보딩했습니다.
- GUI 앱 채굴 가이드를 docs (dot) quantus (dot) com에 배포했습니다.
- Balaji를 Q-Day 스피커로 확정했습니다.
