---
published: true
title: "Quantus 위클리: ZK 집계와 마이너 앱"
description: "체인과 CLI에서 ZK 트랜잭션 집계 1단계를 완료하고 실제 전송 검증으로 전환했습니다. Miner App v0.1.0을 출시하고 GPU 마이닝을 진행 중입니다."
pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus 위클리: ZK 집계와 마이너 앱"
featured: false
tags:
  [
    "weekly-update",
    "zero-knowledge-proofs",
    "gpu-mining",
    "miner-app",
    "ama",
    "substrate",
  ]
---

이번 주 팀은 체인과 CLI 모두에서 ZK 트랜잭션 집계 1단계를 완료하여 모의 테스트를 실제 전송 검증으로 대체했습니다. Miner App v0.1.0 바이너리도 출시했습니다.

## 개발 뉴스

- 150개 이상의 총 이벤트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## 코어 테크

- Substrate 일반 헤더를 대체하고 wormhole 회로와 필드 정렬된 qp-header 프리미티브를 체인에 추가했습니다.
- 블록 헤더 검증 및 인접 블록 연결을 지원하도록 집계 회로를 업데이트했습니다.
- 마이닝 알고리즘 GPU 구현이 약 80% 완료되었습니다.
- rusty-crystals 감사 1단계를 완료했으며 이슈 대부분을 해결했습니다.
- 런타임 패닉에 대한 내부 감사를 실시했습니다(최근 Cloudflare unwrap 버그에서 영감).
- 표준 Substrate 팔레트용 vesting 명령을 CLI에 추가했습니다.

## 네트워크 및 인프라

- Subsquid 배포를 단일 스크립트로 간소화했습니다.
- Quantus-Miner용 Docker 이미지 및 릴리스 프로세스를 구축했습니다.
- Miner-stack(Docker Compose + 모니터링 스택 + 문서)을 배포했습니다.
- Explorer 및 Task Master용 모니터링 대시보드·알림을 추가했습니다.

## 웹 및 모바일 앱 업데이트

- 앱 내 추천 시스템과 사용자용 이벤트 추적 지표(Quantus Quests)를 런칭했습니다.
- 모든 플랫폼용 마이너 앱 바이너리를 출시했습니다: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 (현재 Mac만 철저히 테스트됨).
- 모바일 지갑의 마이그레이션 이슈 및 기타 버그를 수정했습니다.
- 전송 화면 위젯을 테스트 가능하도록 리팩토링하고 유닛·위젯 테스트를 추가했습니다.
- 검색 기능이 포함된 웹사이트 Quests 페이지를 업데이트했습니다.
- 검색을 지원하도록 Task Master 리더보드 엔드포인트를 업데이트하고 결과에 순위를 추가했습니다.

## 콘텐츠 및 파트너십

- X Space를 통한 첫 커뮤니티 AMA: https://x.com/QuantusNetwork/status/1991341042390692210
- Ârc 설립자 James와의 팟캐스트.
- 새 어드바이저/KOL 2명을 영입했습니다.

## 업계 업데이트

- Scott Aaronson, 쇼어 알고리즘(Shor's algorithm)을 실행하는 결함 허용 양자 컴퓨터 타임라인을 "다음 미국 대통령 선거 전"으로 업데이트했습니다: https://scottaaronson.blog/?p=9325
