---
published: true
title: "Quantus Weekly: Investigación abierta y PQC"
description: "Lanzamiento de research.quantus.com, agregación de pruebas ZK, merge del pallet multisig y actualizaciones del wallet móvil. Resumen semanal de Quantus."

pubDate: "2026-02-20"
heroImage: "/blog/covers/weekly-update-02-20-2026.webp"
heroAlt: "Quantus Weekly: Investigación abierta y PQC"
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

La criptografía poscuántica es demasiado nueva para lanzarla en una blockchain a puerta cerrada.

Esta semana lanzamos [research.quantus.com](https://research.quantus.com/).

Es un foro público para que criptógrafos y desarrolladores desmonten cualquier decisión de protocolo que hayamos tomado. Investigadores ya están sometiendo a estrés las superficies de ataque de Poseidon2.

NIST finalizó los estándares poscuánticos el año pasado. Ese fue el paso uno. El paso dos es que cada equipo de protocolo en cripto los implemente de verdad. No hay un playbook establecido para construir una cadena cuántico-segura, así que estamos construyendo el estándar.

Si trabajas en seguridad poscuántica, la puerta está abierta.

Esto es lo más que construimos esta semana.

### Actividad en GitHub (4 pull requests fusionados):

![Estadísticas de GitHub](/blog/assets/github-stats-weekly-update-02-20-2026.webp)

### Tecnología central y ZK

- Actualizamos los circuitos ZK para soportar agregación de pruebas multi-máquina con verificación on-chain.
- Fusionamos el pallet multisig, entregando soporte multisig completo con cuentas de alta seguridad.

### Red e infraestructura

- Desarrollamos el sistema de notificaciones Senoti: servicio de registro de dispositivos, servicio blockchain watcher y worker central con CI y despliegue configurados.
- Mejoramos el bot del faucet en Telegram para responder mejor al aumento de actividad.
- Añadimos workflows de gestión de releases para qp-plonky2 y qp-zk-circuits.

### Actualizaciones web y app móvil

- Lanzamos [research.quantus.com](https://research.quantus.com/), un foro basado en Discourse para investigación criptográfica y discusión técnica.
- Actualizamos el sitio web de Quantus: página del whitepaper renovada, gráfico circular de asignación de tokens en /launch, integración con CoinGecko y publicación de todas las actualizaciones semanales como posts del blog.
- Actualizamos el diseño del wallet y lo enviamos a TestFlight. Nueva versión próximamente en App Store.
- Correcciones de bugs y UX en el wallet móvil.
- Integramos la base FCM para manejo de push notifications en el wallet móvil.

### Contenido y alianzas

- Chris apareció en el [Bad Crypto podcast](https://x.com/QuantusNetwork/status/2023752636387012675) y en el [wenaltseason space](https://x.com/wenaltseason/status/2022402584041193831).
- El equipo llegó a Network School y está montando una oficina.

### Actualidad del sector

- Quantum Canary: ¿Pueden los ordenadores cuánticos romper Monero? [Enlace](https://x.com/QuantumCanary_/status/2024204427159359931)
- Quantum Canary: ¿Qué tan descentralizado está DeFi? [Enlace](https://x.com/QuantumCanary_/status/2021846672834539665)
