---
title: "Quantus 위클리: 양자 보안 미래 지도 그리기"
description: "CoinGecko 상장, 멀티시그 최적화, ZK-aggregator 리팩터링, 모바일 앱 v1.1.5 출시 등 이번 주 Quantus 개발·콘텐츠 업데이트를 정리합니다."
pubDate: "2026-02-13"
heroImage: "/blog/covers/weekly-update-02-13-2026.webp"
heroAlt: "Quantus 위클리: 양자 보안 미래 지도 그리기"
featured: false
tags:
  [
    "weekly-update",
    "coingecko",
    "multisig",
    "plonky2",
    "plonky3",
    "quantum-resistant",
    "zk-proofs",
  ]
---

Fra Mauro는 베네치아 근처 수도원에서 알려진 세계 전체 지도를 그리는 데 수년을 보냈습니다.

그는 한 번도 항해하지 않았습니다.

상인과 선원이 수도원을 찾아와 본 것을 이야기했고, Fra Mauro는 모든 기록을 서로 대조했습니다. 근거 없는 주장은 버리고 끊임없이 고쳤습니다.

그 결과 동아프리카, 인도양, 동남아시아처럼 대부분 유럽인이 들어본 적 없는 곳이 지도에 올랐습니다. 가본 적 없으면 실재하지 않는 것처럼 느껴지지만, 분명히 존재하던 땅들이었습니다.

Quantus는 양자 보안 화폐의 기준을 세웁니다.

하지만 지도 위에 있어야 합니다.

이번 주 Quantus가 [@coingecko](https://x.com/@coingecko)에 상장됐습니다.

"quantum resistant" 카테고리 시가총액은 50억 달러 미만입니다.

곧 모든 체인이 업그레이드하거나 사라질 테니, 전체 암호화폐 시장도 "양자 내성"이 될 것입니다.

지금은 카테고리가 작고, 목록에 있는 체인들도 해야 할 일이 많습니다.

이번 주에 출시한 나머지 내용은 다음과 같습니다.

### GitHub 활동 (병합된 풀 리퀘스트 7건):

![Github Stats](/blog/assets/github-stats-weekly-update-02-13-2026.webp)

### 코어 기술 및 ZK

- 최적화와 가중치 정확도 수정을 포함한 멀티시그 최종 단순화 버전을 구현하고 테스트했습니다.
- qp-plonky2에서 검증자와 증명자를 깔끔히 분리하도록 리팩터링했습니다.
- ZK 집계를 수정하고 프라이버시·유연성을 추가했습니다.
- qp-zk-circuit 릴리스 워크플로를 업데이트했습니다.
- check-phrase 단어 선택을 개선해 사용성을 높였습니다.
- CLI에 random-partition 멀티샌드를 추가했습니다.
- Plonky3 증명자를 Poseidon2 구현과 벤치마크했습니다.

### 웹 및 모바일 앱 업데이트

- 모바일 앱 v1.1.5를 양대 앱 스토어에 출시했습니다.
- 순위 표시 버그 수정이 포함된 새 퀘스트 화면을 구현했습니다.
- [quantus.com/launch](https://quantus.com/launch) 런치 페이지를 게시했습니다.
- ZK-aggregator UX를 단순화했고, 이제 "encrypted accounts(암호화된 계정)"라고 부릅니다.

### 콘텐츠 및 파트너십

- CoinGecko 상장.
- YouTube에서 Jangle, Chris와의 팟캐스트.

### 업계 업데이트

- Quantum Canary: "[필터 논쟁은 그만: Vitalik의 가속화된 양자 타임라인이 투자자에게 의미하는 것](https://x.com/QuantumCanary_/status/2021092653891486027)".
