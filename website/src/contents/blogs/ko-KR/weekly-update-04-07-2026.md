---
title: "Quantus Weekly: Q-Day 추정치와 온스펜드 리스크"
description: "Google·Oratomic의 ECC 해독 큐빗 추정치 하향, 비트코인 10분 블록의 온스펜드 리스크, 경제적 자유를 중심으로 한 Quantus 리브랜드를 다룬 주간 업데이트입니다."
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly: Q-Day 추정치와 온스펜드 리스크"
featured: false
tags:
  [
    "weekly-update",
    "quantum",
    "bitcoin",
    "post-quantum",
    "ecc",
    "zk-proofs",
    "rebrand",
    "infrastructure",
    "mobile",
  ]
---

비트코인 암호를 해독하는 데 필요한 물리 큐빗 수가 2,000만 개에서 50만 개 미만으로 줄었습니다.

Google이 지난주 새 수치를 발표했습니다. 그래서 타임라인에 양자 이야기가 넘쳤습니다.

Oratomic의 별도 논문은 19,000개로 추정합니다.

1년 만에 4자릿수 차이입니다.

Google 팀은 사전 계산을 포함해 9분 공격 창을 추정했습니다.

비트코인은 10분마다 블록을 확인합니다.

즉, 공격자가 전송 중인 트랜잭션을 가로채 송신자 키를 해독하고, 네트워크가 원본을 확인하기 전에 사기성 대체 트랜잭션을 브로드캐스트할 수 있습니다. 이를 온스펬드(on-spend) 공격이라고 합니다.

온스펬드 공격이 현실이 되면, 공개키를 양자 공격자로부터 숨기는 것만으로는 sat가 도난당하는 것을 막을 수 없습니다.

Google은 자체 포스트 양자 마이그레이션 마감을 2029년으로 앞당겼습니다. 더 흥미로운 것은 ECC-256 해독을 위한 자원 추정(큐빗 수, 타이밍)은 공개했지만, 암호학적 해독 자체를 실행하는 상세 기술 청사진은 공개하지 않았다는 점입니다.

과학자들이 이 규모로 자기 검열한 마지막 때는 맨하탄 프로젝트 이전이었습니다.

1945년과 마찬가지로, Q-day가 X개월 남았다는 걸 알려주는 공개 로드맵이나 점진적 진전 발표는 없을 것입니다. Q-day가 도래했다는 알림도 없을 것입니다. 국가 기밀이 될 것입니다.

논문의 표현대로, 32비트 타원곡선 해독은 256비트 타원곡선 해독보다 "본질적으로 더 어렵지 않습니다". 누군가 소형 키 해독을 시연하면, 공개 블록체인의 마이그레이션 창은 이미 닫힌 것입니다.

비트코인은 지난 10년간 주요 프로토콜 업데이트를 3번 출시했습니다. 긴급 포스트 양자 마이그레이션에는 최소 1~3년이 필요합니다. 계획적인 마이그레이션에는 5년 이상이 필요합니다.

계획적 마이그레이션의 창은 지금 닫히고 있으며, 이미 지나갔을 수도 있습니다. 이제는 생존 문제입니다.

이번 주 북극성을 확정한 이유입니다: Permanent Economic Freedom(영구적 경제적 자유). Quantus가 구축하는 모든 것의 기초가 되는 세 단어. 새 [quantus.com](https://quantus.com)이 전면 리브랜드와 그 미션을 중심으로 한 비주얼 아이덴티티와 함께 공개되었습니다.

Permanent(영구적) — 암호학이 NIST Level 5 포스트 양자이기 때문입니다.

Economic(경제적) — 크립토가 그것을 위해 존재합니다. 중앙은행을 disrupt하기 위해서입니다.

Freedom(자유) — 당신을 통제하려는 사람들에 맞서기 위해서입니다.

[@QuantusNetwork](https://x.com/QuantusNetwork)는 양자 안전 암호화 화폐입니다. 이번 주에 출시한 다른 소식은 다음과 같습니다.

### GitHub 활동 (13개의 병합된 풀 리퀘스트):

![Github 통계](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### 코어 기술 및 ZK

- qp-plonky2의 새 blinding 전략으로 네이티브 trace 크기를 늘리지 않고 ZK leaf 증명이 6배 빨라졌습니다.
- 모바일 앱과 마이너 앱이 동일한 ZK 코드를 공유하도록 CLI를 리팩터했습니다.
- 업데이트된 ZK 시스템으로 새 테스트넷에서 마이너 앱을 작동시켰습니다.
- 보안 감사에서 발견된 이슈를 해결했습니다.
- 체인 및 CLI의 키 생성을 수정했습니다.

### 네트워크 및 인프라

- 새 대시보드와 Telegram 알림이 포함된 모니터링을 확장했습니다.
- 히스토리 로테이션이 포함된 로그 스택을 업데이트했습니다.
- 저장소 전반의 의존성 업데이트 및 새 릴리스.
- 새 브랜드 아이덴티티에 맞춘 텔레메트리 및 Grafana 리브랜딩.
- CLI 빌드/릴리스 수정.

### 웹 및 모바일 앱 업데이트

- 현지화 지원과 함께 Astro로 재구축한 [quantus.com](https://quantus.com) 리디자인을 출시했습니다.
- 모바일 앱용 새 로고 및 스플래시 화면.
- 모바일 앱 전송 성능 개선.
- 모바일 앱 v1.2.3, v1.3.0, v1.3.1 출시.

### 콘텐츠 및 파트너십

- [@QuantusNetwork](https://x.com/QuantusNetwork)에 리브랜드 발표 게시.
- [@QuantusNetwork](https://x.com/QuantusNetwork)에 백서 발표 게시.
- Scaling & Privacy with Post-Quantum ZK-Proofs — Ethan과 Chris의 Quantus Youtube 화이트보드 세션 영상.
- Network School 4월 오프닝에 Quantus 참가, NS Fair 부스 및 Crypto Payments & Privacy 워크숍 포함.
