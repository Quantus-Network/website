---
title: "Quantus Weekly: 양자 보안 미래의 지도 그리기"
description: "CoinGecko 상장, 멀티시그 최적화, ZK-애그리게이터 리팩토링 및 모바일 앱 v1.1.5 출시를 포함한 주간 업데이트입니다."
pubDate: "2026-02-13"
heroImage: "/blog/covers/weekly-update-02-13-2026.webp"
heroAlt: "Quantus Weekly: 양자 보안 미래의 지도 그리기"
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

프라 마우로(Fra Mauro)는 베네치아 근처의 한 수도원에서 알려진 세계 전체의 지도를 그리는 데 수년을 보냈습니다.

그는 어디로도 항해해 본 적이 없었습니다.

상인과 선원들이 수도원을 방문하여 그들이 본 것을 설명했습니다. 프라 마우로는 모든 기록을 다른 모든 기록과 대조했습니다. 그는 근거가 없는 주장은 거부하고 끊임없이 수정했습니다.

그 결과 대부분의 유럽인이 들어본 적 없는 장소들이 나타났습니다. 동아프리카, 인도양, 동남아시아. 가보지 않은 사람에게는 실재하지 않았지만 분명히 존재하는 영토였습니다.

Quantus는 양자 보안 화폐의 표준을 세웁니다.

하지만 우리는 지도 위에 있어야 합니다.

이번 주, Quantus가 [@coingecko](https://x.com/@coingecko)에 상장되었습니다.

"quantum resistant"(양자 내성)라는 카테고리가 있으며, 시가총액은 50억 달러 미만입니다.

곧 모든 체인이 업그레이드되거나 사라질 것이기 때문에 전체 암호화폐 시가총액은 "양자 내성"이 될 것입니다.

하지만 현재로서는 이 카테고리가 작으며, 리스트에 있는 체인들 사이에서도 해야 할 일이 많습니다.

이번 주에 우리가 배포한 다른 소식들은 다음과 같습니다.

### GitHub 활동 (7개의 풀 리퀘스트 병합):

![Github 통계](/blog/assets/github-stats-weekly-update-02-13-2026.webp)

### 코어 기술 및 ZK

- 최적화 및 가중치 정확도 수정이 포함된 멀티시그의 최종 단순화 버전을 구현하고 테스트했습니다.
- 검증자(verifier)를 증명자(prover)로부터 깔끔하게 분리하기 위해 qp-plonky2를 리팩토링했습니다.
- ZK-애그리게이션을 수정하고 개인 정보 보호 및 유연성을 추가했습니다.
- qp-zk-circuit 릴리스 워크플로우를 업데이트했습니다.
- 더 나은 사용성을 위해 확인 문구(check-phrase) 단어 선택을 개선했습니다.
- CLI에 랜덤 파티션 멀티샌드 기능을 추가했습니다.
- Plonky3의 증명자를 우리의 Poseidon2 구현과 비교 벤치마킹했습니다.

### 웹 및 모바일 앱 업데이트

- 모바일 앱 v1.1.5를 양대 앱 스토어에 출시했습니다.
- 등급 표시 버그 수정이 포함된 새로운 퀘스트 화면을 구현했습니다.
- [quantus.com/launch](https://quantus.com/launch)에 런칭 페이지를 게시했습니다.
- ZK-애그리게이터의 UX 디자인을 단순화했으며, 이제 "암호화된 계정"이라고 불립니다.

### 콘텐츠 및 파트너십

- CoinGecko 상장.
- 저희 유튜브 채널에서 Jangle 및 Chris와 함께한 팟캐스트.

### 업계 업데이트

- Quantum Canary: "[필터에 대한 논쟁은 그만두세요: Vitalik의 가속화된 양자 타임라인이 투자자에게 의미하는 것](https://x.com/QuantumCanary_/status/2021092653891486027)".
