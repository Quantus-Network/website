---
title: "Quantus Weekly: Agregación de Transacciones ZK y Lanzamiento de la App de Minería"
description: "Actualización semanal que cubre el primer paso de la agregación de transacciones ZK, el lanzamiento de la Miner App v0.1.0 y el progreso en la implementación de minería por GPU."
pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Weekly: Agregación de Transacciones ZK y Lanzamiento de la App de Minería"
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

Esta semana el equipo completó el primer paso de la agregación de transacciones ZK tanto para la cadena como para la CLI, reemplazando las pruebas simuladas con la verificación de transferencia real. También lanzamos el binario de la Miner App v0.1.0, ya disponible.

## Noticias de Desarrollo
- Informe semanal de actividad en Github que incluye más de 150 eventos totales: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## Core Tech
- Se creó una nueva primitiva qp-header en la cadena que está alineada por campos con nuestros circuitos wormhole, reemplazando la cabecera genérica de Substrate.
- Se actualizó el circuito de agregación para soportar la verificación de cabeceras de bloque y conexiones entre bloques adyacentes.
- La implementación para GPU del algoritmo de minería está completada aproximadamente al 80%. 
- Se completó la primera fase de la auditoría de rusty-crystals, los problemas han sido abordados en su mayoría.
- Se realizó una auditoría interna de pánicos en el runtime (inspirada por el reciente error de unwrap de Cloudflare).
- Se añadieron comandos de vesting a la CLI para el pallet estándar de Substrate.

## Network & Infra
- Se simplificó el despliegue de Subsquid a un solo script.
- Se creó la imagen de Docker y el proceso de lanzamiento para Quantus-Miner.
- Se desplegó el Miner-stack (Docker Compose + stack de monitoreo + documentación).
- Se añadieron paneles de monitoreo y alertas para el Explorer y el Task Master.

## Web & Mobile App Updates
- Se lanzó el sistema de referidos en la aplicación y métricas de seguimiento de eventos para el usuario (Quantus Quests). 
- Se lanzó el binario de la app de minería para todas las plataformas: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 aunque solo mac ha sido probado a fondo.
- Se corrigieron problemas de migración y varios otros informes de errores en la billetera móvil.
- Se refactorizó el widget de la pantalla de envío para que sea testable y se añadieron pruebas unitarias y de widgets.
- Se puso al día la página de Quests en el sitio web con funcionalidad de búsqueda.
- Se actualizó el endpoint de la tabla de clasificación del Task Master para soportar búsquedas y se añadió el rango en los resultados.

## Content & Partnerships
- Primer AMA de la comunidad vía X space: https://x.com/QuantusNetwork/status/1991341042390692210
- Podcast con James, fundador de Ârc: https://www.youtube.com/watch?v=eac4aRF50qU
- Se adquirieron dos nuevos asesores / KOLs.

## Industry Updates
- Scott Anderson actualiza sus plazos para una computadora cuántica tolerante a fallos que ejecute el algoritmo de Shor a \"antes de las próximas elecciones presidenciales de EE. UU.\": https://scottaaronson.blog/?p=9325
