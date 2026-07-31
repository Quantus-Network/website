---
title: "Quantus Weekly: agregación ZK y Miner App"
description: "Primera agregación ZK de transacciones para chain y CLI con verificación real de transferencias, Miner App v0.1.0 y avances en minería GPU."

pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Weekly: agregación ZK y Miner App"
featured: false
tags:
  [
    "weekly-update",
    "zero-knowledge-proofs",
    "gpu-mining",
    "miner-app",
    "ama",
    "substrate",
  ]
---

Esta semana el equipo completó el primer paso de agregación ZK de transacciones tanto para la cadena como para la CLI, reemplazando pruebas mock con verificación real de transferencias. También publicamos el binario Miner App v0.1.0, ya disponible.

## Noticias de Desarrollo

- Informe semanal de actividad en Github con más de 150 eventos en total: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## Core Tech

- Creamos un nuevo primitivo qp-header en la cadena alineado en campo con nuestros circuitos wormhole, reemplazando el header genérico de Substrate.
- Actualizamos el circuito de agregación para soportar verificación de headers de bloque y conexiones entre bloques adyacentes.
- La implementación GPU del algoritmo de minería está aproximadamente un 80 % completa.
- Completamos la primera fase de la auditoría de rusty-crystals; los problemas han sido mayormente resueltos.
- Realizamos una auditoría interna de panics en el runtime (inspirada en el reciente bug unwrap de Cloudflare).
- Añadimos comandos de vesting a la CLI para el pallet estándar de Substrate.

## Network & Infra

- Simplificamos el despliegue de Subsquid a un solo script.
- Creamos imagen Docker y proceso de release para Quantus-Miner.
- Desplegamos Miner-stack (Docker Compose + stack de monitoreo + documentación).
- Añadimos dashboards de monitoreo y alertas para Explorer y Task Master.

## Web & Mobile App Updates

- Lanzamos el sistema de referidos in-app y métricas de seguimiento de eventos orientadas al usuario (Quantus Quests).
- Publicamos el binario de la miner app para todas las plataformas: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 aunque solo mac ha sido probado a fondo.
- Corregimos problemas de migración y varios otros reportes de errores en el wallet móvil.
- Refactorizamos el widget de la pantalla de envío para que sea testeable y añadimos unit/widget tests.
- Actualizamos la página Quests del sitio web con funcionalidad de búsqueda.
- Actualizamos el endpoint del leaderboard de Task Master para soportar búsqueda y añadimos rank en los resultados.

## Content & Partnerships

- Primer AMA comunitario vía X space: https://x.com/QuantusNetwork/status/1991341042390692210
- Podcast con James, fundador de Ârc: https://www.youtube.com/watch?v=eac4aRF50qU
- Incorporamos dos nuevos asesores / KOLs.

## Actualizaciones de la Industria

- Scott Anderson actualiza sus cronogramas para un ordenador cuántico tolerante a fallos ejecutando el algoritmo de Shor a «antes de la próxima elección presidencial de EE. UU.»: https://scottaaronson.blog/?p=9325
