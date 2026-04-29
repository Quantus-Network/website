---
title: "Quantus Weekly: limpieza de primavera, auditorías con Eiger y el agregador compacto"
description: "Cerramos ítems de auditoría con Eiger, refactorizamos la CLI, corregimos fallos en miner e indexador y ejecutamos pruebas de integración wormhole en el nuevo agregador compacto. El flujo wormhole en ZK ya recorre sin fricción el agregador compacto 2x8 lanzado la semana pasada. Wallet móvil 1.3.4 y 1.3.5, miner v3.1.0 con arreglo GPU, documentación de minería a reclamo de recompensas y el primer taller de miners del testnet Planck en Network School."
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly: limpieza de primavera, auditorías con Eiger y el agregador compacto"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Semana de limpieza de primavera.

Avanzamos ítems de auditoría con Eiger, refactorizamos la CLI, corregimos bugs en miner e indexador y ejecutamos pruebas de integración wormhole sobre el nuevo agregador compacto.

En ZK, el flujo wormhole ya atraviesa de forma limpia el agregador compacto 2x8 que lanzamos la semana pasada: la arquitectura que duplicó el rendimiento del prover, con transacciones privadas más rápidas y escalables. Para usuarios, publicamos dos lanzamientos del wallet móvil (1.3.4 y 1.3.5) y Quantus miner v3.1.0 con corrección de un bug de GPU. También actualizamos la documentación para cubrir el recorrido completo desde la minería hasta reclamar recompensas.

Organizamos nuestro primer taller de miners del testnet Planck en Network School.

Esto es lo que construimos esta semana:

### Actividad en GitHub (26 pull requests fusionados):

![Github Stats](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### Core Tech y ZK

- Atendimos múltiples ítems de auditoría de Eiger.
- Ejecutamos pruebas de integración wormhole en el agregador compacto 2x8.
- Refactorizamos la CLI de Quantus para compatibilidad, ciclo de vida de transacciones y estimación de comisiones.

### Red e infra

- Corrimos pruebas de estrés en el testnet Planck.
- Mejoramos el rendimiento del indexador Subsquid y corregimos un pico de uso de CPU. Esta semana Subsquid afectó la UX móvil (saldos que no cargaban); ya está resuelto.
- Lanzamos Quantus miner v3.1.0 con corrección de un bug de minería por GPU.

### Web y app móvil

- Lanzamos wallet móvil 1.3.4 y 1.3.5.
- Mejoras de diseño en wallet móvil; el flujo de onboarding llega a continuación.
- Diseñamos flujos de Account Management, Settings, Onboarding, Home Screen Skeleton, POS Enable, Empty State y Miner Rewards para el wallet.
- Mapeamos la UX del flujo wormhole en el wallet.
- Actualizamos [docs.quantus.com](https://docs.quantus.com) para cubrir de extremo a extremo la minería hasta reclamar recompensas.
- Renovamos los deepwikis en repos de CLI, monitoring, chain, website y circuitos ZK.

### Analítica del wallet móvil

- Usuarios totales: 2.252
- MAU: 1.048

### Contenido y alianzas

- Primer taller de miners del testnet Planck en Network School; más de 4 personas pasaron de cero a minar.
- Pitch en el meetup EthKL.
- Confirmamos patrocinadores de Q-Day.
- Patrocinamos la NS Marathon con cocos Quantus.
- Nuevo podcast [sobre la arquitectura de Quantus](https://x.com/QuantusNetwork/status/2047178654396862837).
