---
title: "Quantus Weekly: Minería por GPU y Pruebas de Estrés de Dirac"
description: "Actualización semanal que cubre el lanzamiento de Quantus Miner v2.0.2 con soporte para GPU, pruebas de estrés de la red Dirac y actualizaciones de la arquitectura de la cadena."
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Weekly: Minería por GPU y Pruebas de Estrés de Dirac"
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

Esta semana, lanzamos oficialmente Quantus Miner v2.0.2 con soporte para GPU y probamos con éxito la red Dirac bajo estrés.

También actualizamos la arquitectura de la cadena para admitir un límite de suministro de 21 millones de monedas y limpiamos la base de código eliminando los pallets heredados de vesting y tesorería.

Informe semanal de actividad en Github que incluye 6 pull requests fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## Core Tech & ZK

- Se actualizó la especificación de la cadena para reflejar el nuevo límite de suministro de 21 millones de monedas.
- Se simplificó la arquitectura del núcleo de la cadena eliminando los pallets de vesting y tesorería.
- Se completó el soporte genérico de Poseidon storage hashing para evitar pánicos en el tiempo de ejecución.
- Se añadió soporte de Asset ID a nuestros circuitos ZK y al CLI.

## Network & Infra

- Pruebas de estrés en Dirac para observar cómo la sobrecarga de la cadena afectaba los tiempos de bloque.
- Se publicó Quantus Miner v2.0.2, que ahora admite oficialmente la minería por GPU: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Web & Mobile App Updates

- Se finalizó el flujo de firma de billetera de hardware en dispositivos móviles, incluyendo la transmisión de firma por código QR, soporte para múltiples billeteras y funcionalidad de desvinculación.
- Se implementaron las "Raid Quests" con Telegram, sitio web y seguimiento interno a través de Task Master para incentivar el compromiso de la comunidad en X. Implementación de billetera en progreso.
- Se resolvieron errores de CORS en el backend y se mejoró el seguimiento de datos para interacciones sociales.
- Se corrigieron errores del explorador de bloques que afectaban el informe de recompensas de mineros y el cambio de red.

## Content & Partnerships

- Se aseguró la inversión de dos socios estratégicos conocidos en el Peer Summit.
- Se concluyeron las reuniones sobre la estrategia de lanzamiento y se redactó un whitepaper actualizado que refleja la nueva tokenómica y GTM.
- Episodio con Cezary, veterano arquitecto de software e ingeniero de sistemas: https://www.youtube.com/watch?v=2TDMR7bECR8

## Industry Updates

- Artículo de Quantum Canary analizando el riesgo de un ataque a nivel estatal contra Bitcoin: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin
