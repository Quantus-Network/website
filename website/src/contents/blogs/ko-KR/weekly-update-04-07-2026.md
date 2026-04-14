---
title: "Quantus Weekly: Q-Day 추정, 온스펜드 위험, 그리고 영구적 경제적 자유"
description: "ECC 파괴를 위한 Google·Oratomic 큐비트 추정, 비트코인 10분 블록과의 관계, Google의 PQC 이행 시한 2029년, Quantus의 ‘영구적 경제적 자유’ 리브랜딩, 그리고 ZK·인프라·앱 업데이트."
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly: Q-Day 추정, 온스펜드 위험, 그리고 영구적 경제적 자유"
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

비트코인 암호를 깨는 데 필요한 물리 큐비트 수가 2억에서 50만 미만으로 줄었다.

그 수치를 Google이 지난주에 공개했다. 그래서 타임라인이 양자로 가득했던 것이다.

Oratomic의 별도 논문은 1만 9천이라고 한다.

1년 만에 네 자릿수 차이다.

Google 팀은 사전 계산을 포함해 9분 공격 창을 추정했다.

비트코인은 10분마다 블록을 확정한다.

공격자가 진행 중인 트랜잭션을 가로채 보낸이의 키를 깨고, 네트워크가 원본을 확정하기 전에 사기성 대체 트랜잭션을 브로드캐스트할 수 있다는 뜻이다. 이를 온스펜드(on-spend) 공격이라 부른다.

온스펜드 공격이 현실이 되면 양자 공격자에게 공개 키를 숨기는 것만으로는 사트를 도난당하지 않게 할 수 없다.

Google은 자체 포스트-퀀텀 이행 마감을 2029년으로 옮겼다. 더 흥미로운 점은 ECC-256 파괴에 대한 자원 추정(큐비트 수, 타이밍)은 공개했지만, 암호 해독 자체를 실행하는 상세 기술 청사진은 공개하지 않았다는 것이다.

과학자들이 이 정도로 자기검열을 한 것은 맨해튼 프로젝트 이전이 마지막이었다.

1945년과 마찬가지로 공개 로드맵도, ‘몇 개월 남았다’는 느낌을 줄 단계적 진행 공지도 없을 것이다. Q-Day가 와도 알림은 없을 것이다. 국가 기밀일 것이다.

논문의 말로는 32비트 타원곡선을 깨는 것이 256비트 타원곡선을 깨는 것과 “실질적으로 훨씬 더 어렵지 않다”. 누군가 작은 키에서의 파괴를 시연할 때, 퍼블릭 블록체인의 이행 창은 이미 닫혀 있다.

비트코인은 지난 10년간 주요 프로토콜 업데이트를 세 번 출시했다. 긴급 포스트-퀀텀 이행에는 최소 1–3년이 필요하고, 질서 있는 이행에는 5년 이상이 필요하다.

질서 있는 이행을 위한 창은 지금 닫히고 있으며 이미 지났을 수도 있다. 이제는 존재론적 문제다.

그래서 이번 주에 북극성을 고정했다: 영구적 경제적 자유. Quantus가 만드는 모든 것의 기초가 되는 세 단어. 새 [quantus.com](https://quantus.com)이 전면 리브랜드와 그 미션을 중심으로 한 시각 아이덴티티와 함께 공개됐다.

영구적——암호화는 NIST 레벨 5 포스트-퀀텀이기 때문이다.

경제적——암호화폐가 그래야 하기 때문이다. 중앙은행을 흔든다.

자유——당신을 통제하려는 사람들에게 저항하기 때문이다.

[@QuantusNetwork](https://x.com/QuantusNetwork)는 양자 안전 암호화 머니입니다. 이번 주에 추가로 배포한 내용은 다음과 같다.

### GitHub 활동 (병합된 PR 13개):

![Github Stats](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### Core Tech & ZK

- qp-plonky2용 새 블라인딩 전략으로 ZK 리프 증명이 네이티브 trace 크기를 늘리지 않고 6배 빨라짐.
- 모바일 앱과 마이너 앱이 동일한 ZK 코드를 쓰도록 CLI 리팩터링.
- 업데이트된 ZK 시스템으로 새 테스트넷에서 마이너 앱 가동.
- 보안 감사에서 지적된 사항 처리.
- 체인과 CLI의 키 생성 수정.

### 네트워크 & 인프라

- 새 대시보드와 Telegram 알림이 포함된 갱신된 알림 채널로 모니터링 확장.
- 기록 로테이션과 함께 로그 스택 업데이트.
- 저장소 전반의 의존성 업데이트 및 새 릴리스.
- 새 브랜드 아이덴티티에 맞춘 텔레메트리·Grafana 리브랜딩.
- CLI 빌드/릴리스 수정.

### 웹 & 모바일 앱

- Astro로 재구축하고 로컬라이제이션을 지원하는 리디자인 [quantus.com](https://quantus.com) 출시.
- 모바일 앱용 새 로고와 스플래시 화면.
- 모바일 앱 전송 성능 개선.
- 모바일 앱 1.2.3, 1.3.0, 1.3.1 출시.

### 콘텐츠 & 파트너십

- [@QuantusNetwork](https://x.com/QuantusNetwork)에 리브랜드 발표 게시.
- [@QuantusNetwork](https://x.com/QuantusNetwork)에 백서 발표 게시.
- Scaling & Privacy with Post-Quantum ZK-Proofs, Ethan과 Chris의 Quantus Youtube 화이트보드 영상.
- Network School 4월 오프닝 참가, NS Fair 부스 및 Crypto Payments & Privacy 워크숍.
