---
title: "耐量子署名：なぜ Dilithium なのか？"
description: "デジタル署名に NIST 標準の Dilithium を選んだ理由を深掘りします。"
pubDate: "2025-12-20"
heroImage: "https://placehold.co/600x400/444/999?text=PQC署名"
heroAlt: "耐量子署名と Dilithium のイラスト"
tags: ["technology", "cryptography", "quantum"]
---

# 耐量子署名

Quantus のセキュリティの核心は、署名スキームにあります。広範な研究の結果、私たちは **Dilithium** を採用しました。

## なぜ Dilithium なのか？

Dilithium は CRYSTALS（代数的格のための暗号スイート）パッケージの一部であり、以下のバランスにより NIST によって選出されました：
- **セキュリティ**: 数学的な難問（Short Integer Solution）。
- **効率**: 他の PQC スキームと比較して署名サイズが小さい。
- **パフォーマンス**: 高速な検証時間。

Dilithium を使用することで、Quantus は量子コンピュータが溢れる世界でも、あなたのアイデンティティと取引が真正であることを保証します。
