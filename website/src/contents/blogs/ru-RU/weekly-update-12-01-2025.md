---
title: "Quantus Weekly: Аудит решетчатой криптографии и интеграция с Keystone"
description: "Еженедельное обновление: успешный аудит нашей библиотеки решетчатой криптографии, обновления сети для Polkadot SDK и поддержка аппаратного кошелька Keystone."
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: Аудит решетчатой криптографии и интеграция с Keystone"
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

На прошлой неделе команда устранила все замечания, выявленные в ходе аудита нашей библиотеки решетчатой криптографии (rusty-crystals), и выпустила обновления сети для соответствия последней версии Polkadot SDK. Мы также внедрили поддержку адресов Quantus в прошивку аппаратного кошелька Keystone с открытым исходным кодом и разместили наш профиль на платформе анализа рынка «The Quantum Insider».

Еженедельный отчет об активности на Github, включая 17 объединенных pull-реквестов: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## Core Tech
- Устранены все замечания по результатам аудита основной библиотеки решетчатой криптографии (qp-rusty-crystals).
- Завершена подготовка доказательств ZK-Aggregation (схемы, бенчмарки и документация QIP) для предстоящего аудита.
- Найдены оптимизации в гейте plonky2 poseidon2 и zk-trie для увеличения скорости генерации доказательств.
- Откатан qp-header и обновлен sc-network для соответствия последним стандартам Polkadot SDK.

## Network & Infra
- Выпущен Desktop UI Miner для Windows, исправлены ошибки для Linux и MacOS: https://github.com/Quantus-Network/quantus-apps/releases/latest 
- Устранена потенциальная уязвимость безопасности P2P, связанная с широковещательной рассылкой пиров, для предотвращения перегрузки сети вредоносными узлами.
- Реализована поддержка адресов Quantus в прошивке аппаратного кошелька Keystone с открытым исходным кодом (в настоящее время в симуляторе).

## Web & Mobile App Updates
- В магазинах приложений выпущена версия Mobile Wallet v1.1.2, в которой решены проблемы с опросом, потоками транзакций и уведомлениями.
- Разработан Rust SDK для X API (rusx) и добавлены эндпоинты для привязки аккаунтов X и ETH для пользовательских квестов.

## Content & Partnerships
- Обеспечено присутствие в списке The Quantum Insider, что улучшает ссылочную массу и видимость для квантовых аналитиков.
- Запущен подкаст на Apple, Spotify и RSS: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112  
- Отправлен первый информационный бюллетень подписчикам по электронной почте.
- Community X Space запланирован на этот четверг: https://x.com/i/spaces/1mnGeNXoZOZJX 
- Подкаст с Брайаном Чау, исследователем ML: https://www.youtube.com/watch?v=m_FPbzAcXEk 

## Industry Updates
- Quantum Canary опубликовала стратегическое руководство по смягчению угроз типа «Harvest Now, Crack Later» («Собери сейчас, взломай позже»), наметив прагматичный путь миграции с использованием недавно утвержденных стандартов постквантовой криптографии NIST: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive 
