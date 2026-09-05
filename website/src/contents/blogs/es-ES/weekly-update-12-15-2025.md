---
published: true
title: "Quantus Weekly: avance GPU y refactor ZK"
description: "Avance de ~9x en minería GPU, refactor del circuito de agregación ZK y reuniones estratégicas en EAU sobre tokenomics y lanzamiento."
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Weekly: avance GPU y refactor ZK"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "zero-knowledge-proofs",
    "tokenomics",
    "hardware-wallet",
    "solana-breakpoint",
  ]
---

Esta semana el equipo logró un avance en el rendimiento de minería. Nuestro nuevo minero GPU ahora corre ~9x más rápido que la versión CPU.

También completamos un refactor de nuestro circuito de agregación ZK, lo que nos permitió eliminar miles de líneas de código.

Mientras estábamos en EAU, el equipo se reunió con asesores e inversores. Estas reuniones solidificaron nuestra visión de producto y aclararon tokenomics y estrategia de lanzamiento del token. También hubo avances significativos de BD para apoyar el lanzamiento del token.

Informe semanal de actividad en Github con 10 pull requests fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## Core Tech & ZK

- Migramos nuestras pruebas de transferencia del agregador ZK a un pallet dedicado, incluyendo actualizaciones a la CLI, circuitos y lógica Poseidon. Este refactor nos permitió eliminar miles de líneas de código.
- Diseñamos una solución para hacer genérico el storage hasher de Poseidon.
- Fusionamos cambios pendientes y resolvimos problemas de calidad de código relacionados con transferencias reversibles.

## Network & Infra

- El minero GPU ahora es ~9x más rápido que el minero CPU.
- Publicamos CLI v0.3.1, flag de finalización unificado y formato de direcciones mejorado.
- Ejecutamos una actualización de runtime y actualizamos la especificación de la cadena.
- Desplegamos un nuevo BootNode.
- Completamos revisiones de seguridad y actualizaciones en todos los servidores.
- Desplegamos health checks containerizados para el servicio de indexación Subsquid.

## Web & Mobile App Updates

- Avanzamos la integración del hardware wallet. Ahora parseamos códigos QR en Keystone y firmamos mensajes dummy.
- Comenzamos a implementar funcionalidad de hardware wallet multi-wallet (mnemonic) en la app móvil.
- Actualizamos formularios del sitio web e los integramos con nuestro proveedor de email.
- Optimizamos rusx para agrupar consultas, evitando problemas de rate-limiting.

## Content & Partnerships

- Asistimos a Solana Breakpoint y probamos nuestro posicionamiento/memes de «Quantum Secure Bitcoin».
- Nos reunimos con asesores en EAU para discutir el lanzamiento del token, tokenomics y la estrategia GTM de Quantus.
- Episodio con Tom Howard en vivo: https://x.com/QuantusNetwork/status/2000585749914427684

## Actualizaciones de la Industria

- Quantum Canary publicó una página comparativa completa «Quantum Ready» para blockchains: https://www.quantumcanary.org/is-your-blockchain-quantum-ready
