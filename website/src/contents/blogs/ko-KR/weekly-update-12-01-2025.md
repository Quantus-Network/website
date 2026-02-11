---
title: "Quantus Weekly: 격자 암호 감사 및 Keystone 통합"
description: "격자 암호 라이브러리의 성공적인 감사, Polkadot SDK를 위한 네트워킹 업데이트, 그리고 Keystone 하드웨어 지갑 지원 소식을 포함한 주간 업데이트입니다."
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: 격자 암호 감사 및 Keystone 통합"
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

지난주, 팀은 격자 암호 라이브러리(rusty-crystals)의 감사에서 제기된 모든 문제를 해결하고 최신 Polkadot SDK에 맞춘 네트워킹 업데이트를 출시했습니다. 또한 오픈 소스 Keystone 하드웨어 지갑 펌웨어에 Quantus 주소 지원을 구현했으며, 시장 정보 플랫폼인 “The Quantum Insider”에 프로필이 등재되었습니다.

17개의 병합된 풀 리퀘스트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## 코어 테크
- 핵심 격자 암호 라이브러리(qp-rusty-crystals)의 감사에서 발견된 모든 사항을 해결했습니다.
- 다가오는 감사를 위한 ZK-Aggregation 증명 준비(회로, 벤치마크 및 QIP 문서)를 완료했습니다.
- 증명 속도 향상을 위해 plonky2 poseidon2 게이트 및 zk-trie의 최적화 요소를 발견했습니다.
- qp-header를 롤백하고 최신 Polkadot SDK 표준에 맞춰 sc-network를 업데이트했습니다.

## 네트워크 및 인프라
- Windows용 데스크톱 UI 마이너 출시, Linux 및 MacOS용 버그 수정: https://github.com/Quantus-Network/quantus-apps/releases/latest 
- 악의적인 피어가 네트워크에 과부하를 주는 것을 방지하기 위해 피어 브로드캐스팅과 관련된 잠재적인 P2P 보안 취약점을 패치했습니다.
- 오픈 소스 Keystone 하드웨어 지갑 펌웨어에 Quantus 주소 지원을 구현했습니다(현재 시뮬레이터 적용).

## 웹 및 모바일 앱 업데이트
- 모바일 지갑 v1.1.2를 앱 스토어에 출시하여 폴링, 트랜잭션 흐름 및 알림 문제를 해결했습니다.
- X API용 Rust SDK(rusx)를 구축하고 사용자 퀘스트를 위해 X와 ETH 계정을 연결하는 엔드포인트를 추가했습니다.

## 콘텐츠 및 파트너십
- The Quantum Insider 등재를 확정하여 백링크와 양자 분석가들에 대한 가시성을 높였습니다.
- Apple, Spotify 및 RSS에 팟캐스트를 런칭했습니다: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112  
- 이메일 구독자들에게 첫 뉴스레터를 발송했습니다.
- 이번 주 목요일 커뮤니티 X Space 예정: https://x.com/i/spaces/1mnGeNXoZOZJX 
- ML 연구원 Brian Chau와의 팟캐스트: https://www.youtube.com/watch?v=m_FPbzAcXEk 

## 업계 업데이트
- Quantum Canary는 \"Harvest Now, Crack Later(지금 수집하고 나중에 해독)\" 위협 완화에 관한 전략 가이드를 발표하여 새로 확정된 NIST 포스트 퀀텀 표준을 사용하는 실용적인 마이그레이션 경로를 제시했습니다: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive 
