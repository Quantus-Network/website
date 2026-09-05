---
published: true
title: "Quantus Weekly: minería GPU y stress test Dirac"
description: "Lanzamos Quantus Miner v2.0.2 con soporte GPU, stress test de la red Dirac y actualizaciones de arquitectura con tope de 21M monedas."
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Weekly: minería GPU y stress test Dirac"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "dirac-network",
    "blockchain-architecture",
    "tokenomics",
    "hardware-wallet",
    "social-engagement",
  ]
---

Esta semana publicamos oficialmente Quantus Miner v2.0.2 con soporte GPU y realizamos con éxito un stress test de la red Dirac.

También actualizamos la arquitectura de la cadena para soportar un tope de suministro de 21M monedas y limpiamos el codebase eliminando pallets legacy de vesting y tesorería.

Informe semanal de actividad en Github con 6 pull requests fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## Core Tech & ZK

- Actualizamos la especificación de la cadena para reflejar el nuevo tope de suministro de 21M monedas.
- Simplificamos la arquitectura central de la cadena eliminando los pallets de vesting y tesorería.
- Completamos soporte genérico de Poseidon storage hashing para evitar panic en el runtime.
- Añadimos soporte de Asset ID a nuestros circuitos ZK y la CLI.

## Network & Infra

- Hicimos stress test de Dirac para observar cómo la sobrecarga de la cadena impactaba los tiempos de bloque.
- Publicamos Quantus Miner v2.0.2, que ahora soporta oficialmente minería GPU: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Web & Mobile App Updates

- Finalizamos el flujo de firma con hardware wallet en móvil, incluyendo transmisión de firma por código QR, soporte multi-wallet y funcionalidad de desvinculación.
- Implementamos «Raid Quests» con telegram, sitio web y seguimiento interno vía Task Master para incentivar el engagement comunitario en X. Implementación en wallet en progreso.
- Resolvimos errores CORS del backend y mejoramos el seguimiento de datos para interacciones sociales.
- Corregimos errores del block explorer que afectaban el reporte de recompensas de mineros y el cambio de red.

## Content & Partnerships

- Aseguramos inversión de dos socios estratégicos conocidos en el Peer Summit.
- Concluimos reuniones sobre estrategia de lanzamiento y redactamos un whitepaper actualizado que refleja nueva tokenomics y GTM.
- Episodio con Cezary, arquitecto de software veterano e ingeniero de sistemas: https://www.youtube.com/watch?v=2TDMR7bECR8

## Actualizaciones de la Industria

- Artículo de Quantum Canary analizando el riesgo de un ataque a nivel estatal contra Bitcoin: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin
