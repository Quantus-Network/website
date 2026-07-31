---
title: "Quantus Weekly: auditoría lattice y Keystone"
description: "Cerramos hallazgos de la auditoría de Rusty Crystals, actualizamos networking Polkadot SDK y direcciones Quantus en firmware Keystone open source."

pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: auditoría lattice y Keystone"
featured: false
tags:
  [
    "weekly-update",
    "lattice-cryptography",
    "keystone",
    "polkadot-sdk",
    "hardware-wallet",
    "audit",
  ]
---

La semana pasada, el equipo abordó todos los problemas planteados en la auditoría de nuestra biblioteca de cripto lattice (rusty-crystals) y publicó actualizaciones de networking para alinearse con el último Polkadot SDK. También implementamos soporte de direcciones Quantus en el firmware open source del hardware wallet Keystone y conseguimos que nuestro perfil apareciera en la plataforma de inteligencia de mercado «The Quantum Insider».

Informe semanal de actividad en Github con 17 pull requests fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## Core Tech

- Resolvimos todos los hallazgos de la auditoría de la biblioteca central de criptografía lattice (qp-rusty-crystals).
- Completamos la preparación de pruebas ZK-Aggregation (circuitos, benchmarks y documentación QIP) para la próxima auditoría.
- Encontramos optimizaciones en el gate plonky2 poseidon2 y zk-trie para aumentar la velocidad de prueba.
- Revertimos qp-header y actualizamos sc-network para alinearnos con los últimos estándares del Polkadot SDK.

## Network & Infra

- Publicamos el Desktop UI Miner para Windows, con correcciones de errores para Linux y MacOS: https://github.com/Quantus-Network/quantus-apps/releases/latest
- Parcheamos una posible vulnerabilidad de seguridad P2P relacionada con el broadcasting de peers para evitar que peers maliciosos sobrecarguen la red.
- Implementamos soporte de direcciones Quantus en el firmware open source del hardware wallet Keystone (actualmente en simulador).

## Web & Mobile App Updates

- Publicamos Mobile Wallet v1.1.2 en las App Stores, resolviendo problemas con polling, flujos de transacción y notificaciones.
- Construimos un Rust SDK para la API de X (rusx) y añadimos endpoints para asociar cuentas de X y ETH para quests de usuarios.

## Content & Partnerships

- Conseguimos un listado en The Quantum Insider, mejorando backlinks y visibilidad ante analistas cuánticos.
- Lanzamos el podcast en Apple, Spotify y RSS: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112
- Enviamos el newsletter inaugural a suscriptores por email.
- X Space comunitario programado para este jueves: https://x.com/i/spaces/1mnGeNXoZOZJX
- Podcast con Brian Chau, investigador de ML: https://www.youtube.com/watch?v=m_FPbzAcXEk

## Actualizaciones de la Industria

- Quantum Canary publicó una guía estratégica para mitigar amenazas «Harvest Now, Crack Later», delineando una ruta pragmática de migración usando los estándares post-cuánticos recién finalizados de NIST: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive
