---
title: "Quantus Weekly: Открытые исследования и стандарт PQC"
description: "Еженедельное обновление: запуск research.quantus.com, агрегация ZK-доказательств, слияние паллеты мультисига и обновления мобильного кошелька."
pubDate: "2026-02-20"
heroImage: "/blog/covers/weekly-update-02-20-2026.webp"
heroAlt: "Quantus Weekly: Открытые исследования и стандарт PQC"
featured: false
tags:
  [
    "weekly-update",
    "research",
    "post-quantum-cryptography",
    "multisig",
    "zk-proofs",
    "mobile-wallet",
    "notification-system",
  ]
---

Постквантовая криптография слишком нова, чтобы пилить её в блокчейне за закрытыми дверями.

На этой неделе мы запустили [research.quantus.com](https://research.quantus.com/).

Это публичный форум, где криптографы и разработчики могут разобрать любое протокол-решение, которое мы когда-либо принимали. Исследователи уже стресс-тестируют поверхности атаки Poseidon2.

NIST финализировал постквантовые стандарты в прошлом году. Это был шаг один. Шаг два — чтобы каждая protocol-команда в крипте реально их внедрила. Устоявшегося playbook для построения квантово-защищённой сети нет — поэтому мы строим этот стандарт.

Если вы работаете над постквантовой безопасностью — дверь открыта.

Вот что ещё мы сделали на этой неделе.

### GitHub Activity (4 объединённых pull-реквеста):

![Github Stats](/blog/assets/github-stats-weekly-update-02-20-2026.webp)

### Core Tech & ZK

- Обновлены ZK-схемы для multi-machine агрегации доказательств с onchain-верификацией.
- Смержена паллета мультисига — полная поддержка мультисига с high-security аккаунтами.

### Network & Infra

- Разработана система уведомлений Senoti: сервис регистрации устройств, blockchain watcher и core worker с CI и деплоем.
- Улучшен faucet-бот в Telegram под рост активности.
- Добавлены release management workflows для qp-plonky2 и qp-zk-circuits.

### Web & Mobile App Updates

- Запущен [research.quantus.com](https://research.quantus.com/) — форум на Discourse для криптографических исследований и технических обсуждений.
- Обновлён сайт Quantus: освежена страница whitepaper, добавлена круговая диаграмма аллокации токенов на /launch, интеграция CoinGecko, опубликованы все еженедельные обновления как посты блога.
- Обновлён дизайн кошелька и отправлен в TestFlight. Новая версия скоро в App Store.
- Баг- и UX-фиксы в мобильном кошельке.
- Интегрирована база FCM для push-уведомлений в мобильном кошельке.

### Content & Partnerships

- Chris выступил на [Bad Crypto podcast](https://x.com/QuantusNetwork/status/2023752636387012675) и в [wenaltseason space](https://x.com/wenaltseason/status/2022402584041193831).
- Команда прибыла в Network School и обустраивает офис.

### Industry Updates

- Quantum Canary: Can Quantum Computers Break Monero? [Ссылка](https://x.com/QuantumCanary_/status/2024204427159359931)
- Quantum Canary: How Decentralized is DeFi? [Ссылка](https://x.com/QuantumCanary_/status/2021846672834539665)
