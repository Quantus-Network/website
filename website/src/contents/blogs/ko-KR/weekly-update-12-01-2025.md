---
published: true
title: "Quantus 위클리: 격자 암호 감사와 Keystone 지갑"
description: "rusty-crystals 격자 암호 감사 이슈를 모두 해결하고 Polkadot SDK 네트워킹을 업데이트했습니다. Keystone 오픈소스 하드웨어 지갑에 Quantus 주소를 지원합니다."
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus 위클리: 격자 암호 감사와 Keystone 지갑"
featured: false
tags:
  [
    "weekly-update",
    "lattice-cryptography",
    "keystone",
    "polkadot-sdk",
    "hardware-wallet",
    "audit",
  ]
---

지난주 팀은 격자 암호 라이브러리(rusty-crystals) 감사에서 제기된 모든 이슈를 해결하고 최신 Polkadot SDK에 맞춘 네트워킹 업데이트를 출시했습니다. 또한 오픈소스 Keystone 하드웨어 지갑 펌웨어에 Quantus 주소 지원을 구현했으며, 시장 정보 플랫폼 "The Quantum Insider"에 프로필을 등재했습니다.

17개의 병합된 풀 리퀘스트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## 코어 테크

- 핵심 격자 암호 라이브러리(qp-rusty-crystals) 감사 지적 사항을 모두 해결했습니다.
- 다가오는 감사를 위한 ZK-Aggregation 증명 준비(회로, 벤치마크, QIP 문서)를 완료했습니다.
- plonky2 poseidon2 게이트와 zk-trie에서 증명 속도 향상 최적화를 발견했습니다.
- qp-header를 롤백하고 최신 Polkadot SDK 표준에 맞게 sc-network를 업데이트했습니다.

## 네트워크 및 인프라

- Windows용 데스크톱 UI 마이너를 출시하고 Linux·macOS 버그를 수정했습니다: https://github.com/Quantus-Network/quantus-apps/releases/latest
- 악의적 피어가 네트워크에 과부하를 주는 것을 방지하기 위해 피어 브로드캐스트 관련 P2P 보안 취약점을 패치했습니다.
- 오픈소스 Keystone 하드웨어 지갑 펌웨어에 Quantus 주소 지원을 구현했습니다(현재 시뮬레이터).

## 웹 및 모바일 앱 업데이트

- 모바일 지갑 v1.1.2를 앱 스토어에 출시하여 폴링, 트랜잭션 흐름, 알림 이슈를 해결했습니다.
- X API용 Rust SDK(rusx)를 구축하고 사용자 퀘스트용 X·ETH 계정 연결 엔드포인트를 추가했습니다.

## 콘텐츠 및 파트너십

- The Quantum Insider 등재를 확보하여 백링크와 양자 분석가 대상 가시성을 높였습니다.
- Apple, Spotify, RSS에 팟캐스트를 런칭했습니다: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112
- 이메일 구독자에게 첫 뉴스레터를 발송했습니다.
- 이번 주 목요일 커뮤니티 X Space 예정: https://x.com/i/spaces/1mnGeNXoZOZJX
- ML 연구원 Brian Chau와의 팟캐스트: https://www.youtube.com/watch?v=m_FPbzAcXEk

## 업계 업데이트

- Quantum Canary, "Harvest Now, Crack Later" 위협 완화 전략 가이드를 발표했습니다. 새로 확정된 NIST 포스트 퀀텀 표준을 활용한 실용적 마이그레이션 경로를 제시합니다: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive
