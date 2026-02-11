---
title: "Quantus 위클리: GPU 채굴 혁신 및 ZK 리팩토링"
description: "GPU 채굴 성능 9배 향상, ZK 집계 회로 리팩토링 및 UAE에서의 전략적 회의를 다루는 주간 업데이트입니다."
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus 위클리: GPU 채굴 혁신 및 ZK 리팩토링"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "zero-knowledge-proofs",
    "tokenomics",
    "hardware-wallet",
    "solana-breakpoint",
  ]
---

이번 주 팀은 채굴 성능에서 획기적인 발전을 이루었습니다. 새로운 GPU 마이너는 이제 CPU 버전보다 약 9배 빠르게 실행됩니다.

또한 ZK 집계 회로의 리팩토링을 완료하여 수천 줄의 코드를 삭제할 수 있었습니다.

UAE에 머무는 동안 팀은 어드바이저 및 투자자들과 만났습니다. 이 회의를 통해 제품 비전을 공고히 하고 토큰노믹스 및 토큰 출시 전략을 명확히 했습니다. 토큰 출시를 지원하기 위한 의미 있는 사업 개발(BD) 진전도 있었습니다.

10개의 병합된 풀 리퀘스트를 포함한 주간 Github 활동 보고서: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## 코어 테크 및 ZK

- ZK 어그리게이터 전송 증명을 전용 팔렛으로 마이그레이션했으며, 여기에는 CLI, 회로 및 Poseidon 로직 업데이트가 포함됩니다. 이번 리팩토링을 통해 수천 줄의 코드를 삭제할 수 있었습니다.
- Poseidon 스토리지 해셔를 범용으로 만들기 위한 솔루션을 설계했습니다.
- 보류 중인 변경 사항을 병합하고 가역적 전송과 관련된 코드 품질 문제를 해결했습니다.

## 네트워크 및 인프라

- GPU 마이너가 이제 CPU 마이너보다 약 9배 빨라졌습니다.
- CLI v0.3.1을 출시하여 확정 플래그를 통합하고 주소 형식을 개선했습니다.
- 런타임 업그레이드를 실행하고 체인 사양을 업데이트했습니다.
- 새로운 BootNode를 배포했습니다.
- 모든 서버에 대한 보안 점검 및 업데이트를 완료했습니다.
- Subsquid 인덱싱 서비스를 위한 컨테이너화된 상태 점검을 배포했습니다.

## 웹 및 모바일 앱 업데이트

- 하드웨어 지갑 통합을 진전시켰습니다. 이제 Keystone에서 QR 코드를 파싱하고 더미 메시지에 서명하고 있습니다.
- 멀티 지갑(니모닉) 하드웨어 지갑 기능을 모바일 앱에 구현하기 시작했습니다.
- 웹사이트 양식을 업데이트하고 이메일 제공업체와 통합했습니다.
- rusx를 최적화하여 쿼리를 일괄 처리함으로써 속도 제한 문제를 방지했습니다.

## 콘텐츠 및 파트너십

- Solana Breakpoint에 참석하여 "양자 보안 비트코인" 포지셔닝 및 밈을 테스트했습니다.
- UAE에서 어드바이저들과 만나 토큰 출시, 토큰노믹스 및 Quantus GTM 전략을 논의했습니다.
- Tom Howard와의 에피소드가 라이브되었습니다: https://x.com/QuantusNetwork/status/2000585749914427684

## 업계 업데이트

- Quantum Canary에서 종합적인 "양자 준비(Quantum Ready)" 블록체인 비교 페이지를 출시했습니다: https://www.quantumcanary.org/is-your-blockchain-quantum-ready
