---
title: "Quantus 위클리: 임계값 딜리슘(Dilithium) 서명 및 분산 조정"
description: "임계값 서명, ZK 회로 개선, 모바일 지갑 업데이트 및 커뮤니티 콘텐츠를 다루는 주간 업데이트입니다."
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus 위클리: 임계값 딜리슘(Dilithium) 서명 및 분산 조정"
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

여러 당사자 간에 권력과 권한이 분산됩니다. 분산 조정.

하지만 포스트 양자 서명은 비트코인 서명보다 20배에서 80배 더 큽니다. 전통적인 멀티시그 솔루션도 나름의 역할이 있지만, 특정 사용 사례에서는 수용할 수 없는 오버헤드를 추가합니다.

이번 주에 저희는 임계값 딜리슘(threshold dilithium) 서명을 출시했습니다. 이를 통해 분산된 그룹이 트랜잭션에 서명하고 온체인에서 단일 서명을 생성할 수 있습니다. 기본적으로 개인 키를 샤딩하는 것입니다.

이는 수탁자, 네트워크 간 애플리케이션 및 체인의 안전한 자동화된 사용을 위해 필수적입니다.

4개의 병합된 풀 리퀘스트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## 코어 기술 및 ZK

- 보안 분산 서명을 가능하게 하는 임계값 서명을 구현했습니다.
- ZK 회로 오버헤드를 줄였습니다.
- wormhole 예제 바이너리에 증명 집계 지원을 추가했으며, 체인 및 CLI로의 통합이 진행 중입니다.
- 모든 데이터 유형을 보편적으로 처리할 수 있도록(제너릭 스토리지 해싱) ZK 회로와 Poseidon 해싱 알고리즘을 업그레이드했으며, 이제 체인 및 CLI에 통합되었습니다.
- ZK 회로 내에서 자산 ID에 대한 증명 집계 지원을 추가했습니다.
- 더 빠른 트랜잭션 처리를 위해 CLI를 최적화하고 고보안 복구 스크립트를 추가했습니다.

## 웹 및 모바일 앱 업데이트

- CPU 및 GPU 사용량을 위한 세밀한 슬라이더와 해시레이트 보고 수정 사항이 포함된 새로운 버전의 UI 마이닝 앱을 출시했습니다.
- 모바일 앱에 전체 하드웨어 지갑 지원을 확정하고 병합했습니다.
- 단일 모바일 지갑 인스턴스 내에서 여러 계정을 관리할 수 있는 지원을 추가했습니다.
- 고보안 화면을 구현하고 "가디언(Guardian)" 복구 흐름 개발을 시작했습니다.
- "보내기" 화면 UX를 개선하고, 오류 처리를 향상시켰으며, 인증 타이머 버그를 수정하고 앱 아이콘을 통일했습니다.
- 일일 데이터베이스 백업을 구성하고, 시스템 서비스를 수정했으며, Task Master 코드(지갑 앱 이벤트 추적)를 정리했습니다.

## 콘텐츠 및 파트너십

- 최신 프로토콜 세부 정보로 백서를 업데이트하고 GitHub 버전 관리 시스템을 구축했습니다: https://github.com/Quantus-Network/whitepaper
- 저희의 시작 이야기인 "From the Ground Up"을 공개했습니다: https://x.com/JoeMattia/status/2010619972398297164
- 과학에 대한 신뢰 회복에 관한 Sina(@hubsmoke)와의 팟캐스트: https://x.com/QuantusNetwork/status/2009929397579723213

## 업계 업데이트

- Quantum Canary가 양자 내성 암호 화폐 지갑 가이드를 게시했습니다: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security
