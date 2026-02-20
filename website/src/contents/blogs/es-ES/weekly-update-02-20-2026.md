---
title: "Quantus Semanal: Investigación abierta y el estándar post-cuántico"
description: "Actualización semanal que cubre el lanzamiento de research.quantus.com, agregación de pruebas ZK, fusión del pallet de multifirma y actualizaciones de la billetera móvil."
pubDate: "2026-02-20"
heroImage: "/blog/covers/weekly-update-02-20-2026.webp"
heroAlt: "Quantus Semanal: Investigación abierta y el estándar post-cuántico"
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

La criptografía post-cuántica es demasiado nueva para lanzarse en una blockchain a puerta cerrada.

Esta semana lanzamos [research.quantus.com](https://research.quantus.com/).

Es un foro público para que criptógrafos y desarrolladores analicen cualquier decisión de protocolo que hayamos tomado. Los investigadores ya están realizando pruebas de estrés en las superficies de ataque de Poseidon2.

El NIST finalizó los estándares post-cuánticos el año pasado. Ese fue el paso uno. El paso dos es que cada equipo de protocolo en cripto los implemente realmente. No hay un manual establecido para construir una cadena cuánticamente segura, así que estamos construyendo el estándar.

Si estás trabajando en seguridad post-cuántica, la puerta está abierta.

Aquí está lo que más construimos esta semana.

### Actividad en GitHub (4 pull requests fusionados):

![Estadísticas de Github](/blog/assets/github-stats-weekly-update-02-20-2026.webp)

### Tecnología Principal y ZK

- Se actualizaron los circuitos ZK para admitir la agregación de pruebas en múltiples máquinas con verificación en cadena.
- Se fusionó el pallet de multifirma, brindando soporte completo de multifirma con cuentas de alta seguridad.

### Red e Infraestructura

- Se desarrolló el sistema de notificación Senoti: servicio de registro de dispositivos, servicio de observador de blockchain y trabajador principal con configuración de CI y despliegue.
- Se mejoró el bot de faucet en Telegram para responder mejor al aumento de actividad.
- Se añadieron flujos de trabajo de gestión de lanzamientos para qp-plonky2 y qp-zk-circuits.

### Actualizaciones de la Aplicación Web y Móvil

- Se lanzó [research.quantus.com](https://research.quantus.com/), un foro basado en Discourse para la investigación criptográfica y la discusión técnica.
- Se actualizó el sitio web de Quantus: se renovó la página del whitepaper, se añadió un gráfico circular de asignación de tokens a /launch, se añadió la integración con CoinGecko y se publicaron todas las actualizaciones semanales como entradas de blog.
- Se actualizó el diseño de la billetera y se envió a TestFlight. Nueva versión próximamente en la App Store.
- Correcciones de errores y de UX en la billetera móvil.
- Se integró la base de FCM para el manejo de notificaciones push en la billetera móvil.

### Contenido y Alianzas

- Chris apareció en el [podcast Bad Crypto](https://x.com/QuantusNetwork/status/2023752636387012675) y en el [espacio de wenaltseason](https://x.com/wenaltseason/status/2022402584041193831).
- El equipo llegó a Network School y está instalando una oficina.

### Actualizaciones de la Industria

- Quantum Canary: ¿Pueden las computadoras cuánticas romper Monero? [Enlace](https://x.com/QuantumCanary_/status/2024204427159359931)
- Quantum Canary: ¿Qué tan descentralizado es DeFi? [Enlace](https://x.com/QuantumCanary_/status/2021846672834539665)
