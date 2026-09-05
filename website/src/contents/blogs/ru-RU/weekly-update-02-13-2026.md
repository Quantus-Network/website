---
published: true
title: "Quantus Weekly: Карта квантово-защищённого будущего"
description: "Еженедельное обновление: листинг на CoinGecko, оптимизации мультисига, рефакторинг ZK-агрегатора и релиз мобильного приложения v1.1.5."
pubDate: "2026-02-13"
heroImage: "/blog/covers/weekly-update-02-13-2026.webp"
heroAlt: "Quantus Weekly: Карта квантово-защищённого будущего"
featured: false
tags:
  [
    "weekly-update",
    "coingecko",
    "multisig",
    "plonky2",
    "plonky3",
    "quantum-resistant",
    "zk-proofs",
  ]
---

Фра Мауро годами в монастыре близ Венеции рисовал карту всего известного мира.

Он никуда не плавал.

Купцы и моряки приходили в монастырь и рассказывали, что видели. Фра Мауро сверял каждый рассказ с каждым другим. Отклонял то, что не сходилось, и постоянно правил карту.

В итоге на ней появились места, о которых большинство европейцев никогда не слышали. Восточная Африка. Индийский океан. Юго-Восточная Азия. Территории, которые существовали — но не были «реальными» для тех, кто там не бывал.

Quantus задаёт стандарт квантово-защищённых денег.

Но нам нужно быть на карте.

На этой неделе Quantus залистили на [@coingecko](https://x.com/@coingecko).

Есть категория «quantum resistant», и её рыночная капитализация — меньше $5B.

Скоро вся крипто-капитализация будет «quantum resistant», потому что каждая сеть либо обновится, либо уйдёт в ноль.

Но пока категория маленькая, и даже среди сетей в списке ещё много работы.

Вот что ещё мы выпустили на этой неделе.

### GitHub Activity (7 объединённых pull-реквестов):

![Github Stats](/blog/assets/github-stats-weekly-update-02-13-2026.webp)

### Core Tech & ZK

- Реализована и протестирована финальная упрощённая версия мультисига с оптимизацией и фиксами точности weight.
- Рефакторинг qp-plonky2: чистое разделение verifier и prover.
- Исправлены ZK-aggregation и добавлены дополнительная приватность и гибкость.
- Обновлён release workflow для qp-zk-circuit.
- Улучшен подбор слов check-phrase для удобства.
- Добавлен random-partition multisend в CLI.
- Сравнили prover Plonky3 с нашей реализацией Poseidon2.

### Web & Mobile App Updates

- Выпущено Mobile app v1.1.5 в оба стора.
- Новые экраны квестов с багфиксами отображения ранга.
- Опубликована launch-страница на quantus.com/launch.
- Упрощён UX ZK-aggregator — теперь называется «encrypted accounts».

### Content & Partnerships

- Листинг на CoinGecko.
- Подкаст с Jangle и Chris на нашем Youtube.

### Industry Updates

- Quantum Canary: «[Stop Arguing About Filters: What Vitalik's Accelerated Quantum Timeline Means For Investors](https://x.com/QuantumCanary_/status/2021092653891486027)».
