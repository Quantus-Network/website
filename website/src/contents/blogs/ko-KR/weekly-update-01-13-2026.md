---
published: true
title: "Quantus 위클리: Dilithium 임계값 서명"
description: "이번 주 Quantus는 분산 조정을 위한 Dilithium 임계값 서명을 출시했습니다. ZK 회로 개선, 모바일 지갑 업데이트, 커뮤니티 콘텐츠 소식도 함께 전합니다."
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus 위클리: Dilithium 임계값 서명"
featured: false
tags:
  [
    "weekly-update",
    "threshold-signatures",
    "post-quantum-cryptography",
    "dilithium",
    "zero-knowledge-proofs",
    "quantum-safe",
    "blockchain",
  ]
---

권력과 권한은 여러 당사자에게 나뉩니다. 분산 조정.

하지만 포스트퀀텀 서명은 비트코인 서명보다 20~80배 큽니다. 기존 멀티시그도 쓸 만하지만, 특정 사용 사례에서는 감당하기 어려운 오버헤드가 붙습니다.

이번 주 Quantus는 임계값 Dilithium 서명을 출시했습니다. 분산된 그룹이 트랜잭션에 서명하고 온체인에서 단일 서명을 생성할 수 있습니다. 개인 키를 샤딩하는 것과 같습니다.

수탁 기관, 크로스 네트워크 애플리케이션, 체인의 안전한 자동화 사용에 꼭 필요한 기능입니다.

4개의 병합된 풀 리퀘스트를 포함한 주간 GitHub 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## 코어 기술 및 ZK

- 보안 분산 서명을 가능하게 하는 임계값 서명을 구현했습니다.
- ZK 회로 오버헤드를 줄였습니다.
- wormhole 예제 바이너리에 증명 집계 지원을 추가했으며, 체인 및 CLI 통합을 진행 중입니다.
- 모든 데이터 유형을 범용으로 처리하도록(제너릭 스토리지 해싱) ZK 회로와 Poseidon 해싱 알고리즘을 업그레이드했으며, 체인과 CLI에 통합했습니다.
- ZK 회로에서 자산 ID별 증명 집계 지원을 추가했습니다.
- 더 빠른 트랜잭션 처리를 위해 CLI를 최적화하고 고보안 복구 스크립트를 추가했습니다.

## 웹 및 모바일 앱 업데이트

- CPU·GPU 사용량을 세밀하게 조절하는 슬라이더와 해시레이트 보고 수정이 포함된 UI 마이닝 앱 새 버전을 출시했습니다.
- 모바일 앱에 하드웨어 지갑 전체 지원을 완료하고 병합했습니다.
- 단일 모바일 지갑 인스턴스에서 여러 계정을 관리할 수 있도록 지원을 추가했습니다.
- 고보안 화면을 구현하고 Guardian 복구 플로우 개발을 시작했습니다.
- 송금 화면 UX를 다듬고, 오류 처리를 개선했으며, 인증 타이머 버그를 수정하고 앱 아이콘을 통일했습니다.
- 일일 데이터베이스 백업을 구성하고, 시스템 서비스를 수정했으며, Task Master 코드(지갑 앱 이벤트 추적)를 정리했습니다.

## 콘텐츠 및 파트너십

- 최신 프로토콜 세부 정보로 백서를 업데이트하고 GitHub 버전 관리 시스템을 구축했습니다: https://github.com/Quantus-Network/whitepaper
- 기원 이야기 "From the Ground Up"을 공개했습니다: https://x.com/JoeMattia/status/2010619972398297164
- 과학에 대한 신뢰 회복을 주제로 Sina(@hubsmoke)와의 팟캐스트: https://x.com/QuantusNetwork/status/2009929397579723213

## 업계 업데이트

- Quantum Canary가 양자 내성 암호화폐 지갑 가이드를 게시했습니다: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security
