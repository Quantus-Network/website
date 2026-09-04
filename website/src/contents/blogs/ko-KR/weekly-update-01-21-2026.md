---
title: "Quantus 위클리: 네이티브 자산과 양자 위험"
description: "자본 시장이 비트코인에 양자 위험 프리미엄을 매기는 이유, Quantus의 네이티브 전용 자산 결정, Dilithium 임계값 서명과 ZK 집계 진행 상황을 이번 주에 정리합니다."
pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus 위클리: 네이티브 자산과 양자 위험"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "quantum-safe",
    "zk-aggregator",
    "mpc",
    "multisig",
    "indexer",
    "biohacking",
  ]
---

금값은 치솟는데 비트코인은 왜 버거운지 궁금하다면 이 글을 읽어보세요. 별다른 비밀은 없습니다.

![Nic Carter 인터뷰 요약](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

자본 배분자들은 비트코인이 포스트퀀텀 암호로 업그레이드되기 전에 암호학적으로 유의미한 양자 컴퓨터(CRQC)가 등장할 확률만큼 비트코인 가치를 할인하고 있습니다. 비트코인 커뮤니티가 받아들이든 말든, 시장은 이미 그렇게 반영했습니다.

일부 체인은 제때 업그레이드될 것입니다. 비트코인은 아마 그렇지 못할 겁니다. 최근 비탈릭도 PQC 업그레이드를 촉구했습니다.

마감 시점이 정확히 언제인지, 어떤 체인이 제때 업그레이드될지는 알 수 없습니다. 그래서 Quantus는 외부 자산 지원에 대해 어려운 설계 결정을 내려야 했습니다.

래핑 자산의 원본 체인이 뚫리면 래핑 자산 보유자도 함께 위험해집니다. Quantus는 어떤 래핑 자산도 지원하지 않기로 결정했습니다.

Quantus는 어디서든 가장 탄력적인 양자 보안 화폐로 허가 없이 브리징할 수 있는 인프라를 만들고 있습니다. 체인에서 네이티브 QTC를 보유하면 ML-DSA-87(NIST 최고 보안 등급)과 ZK 집계를 통한 압도적 처리량으로 보호받습니다.

여기서 미리 발표하진 않겠지만, GitHub를 열어 확인해 보실 수 있습니다 👀

Q-day가 와도 준비되도록, 이번 주에 출시한 내용은 다음과 같습니다.

### GitHub 활동 (병합된 풀 리퀘스트 7건):

![Github Stats](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### 코어 기술 및 ZK

- Dilithium 임계값 서명을 다른 프로토콜 MPC 시스템에 통합했습니다.
- Parity 멀티시그 팔렛으로 커스텀 트레저리 관리 POC를 구축했습니다.
- 테스트와 벤치마크를 포함한 커스텀 멀티시그 팔렛 1차 구현을 완료했습니다.
- ZK-aggregator 팔렛에서 ZK 회로 바이너리를 막던 버그를 수정했습니다.
- 양자화된 출력 금액을 지원하도록 온체인 ZK-aggregator 검증기를 업데이트했습니다.
- 새 필드 요소 직렬화기에 맞게 ZK-aggregator 예제 스크립트를 수정했습니다.

### 웹 및 모바일 앱 업데이트

- 고보안 계정용 고정 지연·가로채기 기능을 지원하는 모바일 UX를 구축했습니다(테스트 중).
- 블록 스캐너와 고보안 기능을 CLI에 추가하고 오류 처리를 개선했습니다.
- 고보안 처리와 최신 Poseidon용 해셔 수정을 위해 Subsquid(인덱서)를 업데이트했습니다.
- 태그 지원 블로그 섹션을 Quantus 웹사이트에 출시하고 주간 업데이트 백로그 업로드를 시작했습니다.
- 백서를 v3.1로 업데이트하고 토크노믹스 차트 배분 값을 수정했습니다.

### 콘텐츠 및 파트너십

- 팟캐스트를 Apple Podcasts에 업로드하기 시작했습니다.
- 토큰 런치패드 2곳과 대화를 시작했습니다.
- Quantum Canary 블록체인 비교 페이지를 개선했습니다.
- 바이오해킹과 자기 최적화를 주제로 AJ와의 팟캐스트.

### 업계 업데이트

- CRQC가 사토시 코인을 어떻게 위협하는지 다룬 Quantum Canary 기사: https://x.com/QuantumCanary_/status/2011706634868047982
