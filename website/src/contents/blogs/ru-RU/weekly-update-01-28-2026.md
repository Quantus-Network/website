---
published: true
title: "Quantus Weekly: Отрицаемые RPC и аудит Neodyme"
description: "Отрицаемые RPC для сильной приватности, завершён аудит Rusty Crystals от Neodyme, приватные ZK-адреса теперь доступны для каждого токена."

pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: Отрицаемые RPC и аудит Neodyme"
featured: false
tags:
  [
    "weekly-update",
    "rpc",
    "privacy",
    "audit",
    "security",
    "dilithium",
    "zk-aggregator",
    "multisig",
  ]
---

Ваш кошелёк на вас стучит.

99% инфраструктуры приватности — это LARP. Где-то в стеке утекает ваша информация. Кошелёк общается с сервером под названием RPC. Этот RPC отправляет данные обратно в кошелёк. Но чтобы это сделать, RPC обычно нужно что-то знать о вас.

Например, чтобы показать баланс, ему может понадобиться история транзакций. Скорее всего, он связывает это с вашим IP, приблизительной локацией, привычками использования и т.д. Всё ради того, чтобы вы увидели баланс в кошельке.

Пока новый маркетинговый найм вашей любимой onchain-privacy-тулзы Стейси форсит на X space про то, какие они «private and secure», костюмы просто подслушивают RPC-соединение.

Вас взломали.

Мы построили другое. Отрицаемые RPC используют hash prefix filter, похожий на oblivious lookup. Вы можете запросить у сервера свои транзакции, не раскрывая, что именно ищете. RPC не может определить, какие конкретные транзакции вы запрашиваете.

Так [@QuantusNetwork](https://x.com/@QuantusNetwork) сохраняет приватность onchain и в инфраструктуре кошелька/RPC. Мы держим в секрете то, что вы хотите держать в секрете — на каждом слое стека.

На этой неделе мы также [анонсировали](https://x.com/QuantusNetwork/status/2016390125626773871) завершённый security-аудит [@Neodyme](https://x.com/@Neodyme) нашей библиотеки подписей Dilithium — Rusty Crystals. Все проблемы закрыты, применены техники hardening. Rusty Crystals — лучшая библиотека подписей Dilithium на Rust с полной поддержкой HD-кошелька.

Это главные новости. Вот что ещё мы выпустили за последнюю неделю:

### GitHub Activity (19 объединённых pull-реквестов):

![Github Stats](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Core Tech & ZK

- Завершён аудит [@Neodyme](https://x.com/@Neodyme): все issues закрыты. Применены техники hardening, включая обнуление памяти после использования. [Пост здесь](https://x.com/QuantusNetwork/status/2016390125626773871).
- Выпущены отрицаемые RPC через prefix hashing. Пользователи получают правдоподобную отрицаемость при подключении к RPC-нодам (oblivious lookup).
- Включены приватные ZK-адреса для всех токенов с genesis.
- Continuous block-building сокращает среднее время до включения транзакции более чем на 50%.
- Удалены лишние паллеты — рантайм упрощён.
- Паллета мультисига feature-complete с обновлённой документацией. Интеграция в сеть и CLI ожидает ревью.
- Переработан fuzzer для схем ZK-aggregator и расширено покрытие тестами miner fees и burned fees.

### Web & Mobile App Updates

- Выпущено Mobile App v1.1.5 (build 65) с high-security pull feature.
- Сняты демо-видео по функциям высокой безопасности.
- Улучшения explorer и faucet: ошибки и high-security события в деталях блока, поиск по типу ошибки, улучшенная фильтрация групповых сообщений.
- Багфиксы Task Master для лидерборда, отправки рейдов и метрик.
- Исправлены dockerfile Subsquid и GitHub action для генерации docker-образа.
- Обновлён UX блога на сайте и исправлены SEO-проблемы.

### Content & Partnerships

- Перешагнули 1 000 участников в Telegram.
- Забронировали площадку для side event на Token2049 Dubai.
- Команда решила вернуться к [@ns](https://x.com/@ns) на следующий спринт.
- Наняли нового дизайнера для редизайна мобильного приложения.
- Наняли первого medium-sized контент-креатора для видеоколлабов. Собираем ростер креаторов.

### Industry Updates

- Статья [@QuantumCanary\_](https://x.com/@QuantumCanary_) [про Zcash](https://x.com/QuantumCanary_/status/2016327421797294286).
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) опубликовали свою «[Blockchain Comparison Table](https://x.com/QuantumCanary_/status/2015734605450731824)».
