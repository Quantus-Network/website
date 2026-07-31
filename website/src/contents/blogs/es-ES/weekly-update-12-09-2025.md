---
title: "Quantus Weekly: Poseidon2 más rápido, chain más ligera"
description: "Gates Poseidon2 8,3x más rápidos tras optimización, refactor de chain elimina ~9.000 líneas y notas del equipo desde Binance Blockchain Week."

pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Weekly: Poseidon2 más rápido, chain más ligera"
featured: false
tags:
  [
    "weekly-update",
    "poseidon2",
    "chain-architecture",
    "wormhole",
    "binance-blockchain-week",
    "solana-breakpoint",
  ]
---

Probablemente vio [esta entrevista con @EliBenSasson y Scott Aaronson](https://x.com/Starknet/status/1995865652377395421)

![Resumen de la entrevista de Nic Carter](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

En la entrevista, Scott dijo: «decidimos basar gran parte de la infraestructura de ciberseguridad del mundo en códigos criptográficos como RSA, diffie-hellman y criptografía de curva elíptica, que casualmente tienen estas propiedades matemáticas que un ordenador cuántico puede explotar».

Es difícil de aceptar.

Especialmente para Bitcoin, que por diseño carece de la capacidad de planificar y ejecutar fácilmente grandes actualizaciones de protocolo.

Lo que significa que el camino de menor resistencia para la comunidad de Bitcoin ha sido negar que el problema existe.

![Charles Edwards sobre la amenaza cuántica](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

Pero con avances recientes en corrección de errores, escalado de qubits y fidelidad, negar el progreso de la computación cuántica representa un riesgo existencial para Bitcoin y, por tanto, para los derechos de propiedad humanos.

Debemos enfrentar la niebla del futuro cuántico y aceptar que, cuando llegue el Q day, muchas blockchains habrán fallado en actuar.

Nuestro deber es actuar.

Esto es lo que hicimos esta semana para construir Bitcoin cuánticamente seguro:

Informe semanal de actividad en Github con 8 pull requests fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## Core Tech & ZK

- Optimizamos el gate posiedon2. Redujimos las filas de trace del circuito por permutación de 31 a 1. Esto hace el gate 8,3x más rápido y resulta en una aceleración total de 4,5x para el prover wormhole más grande.
- Refactorizamos la arquitectura de la cadena para usar transaction extensions para registrar pruebas wormhole. Esto eliminó la necesidad de un fork personalizado del pallet balances, quitando unas 9.000 líneas de código.
- Añadimos soporte de Asset ID a transferencias wormhole
- Resolvimos los problemas planteados en la auditoría de qp-rusty-crystals

## Network & Infra

- Mejoramos la implementación del minero GPU
- Actualizamos y fusionamos sc-network, incluyendo una corrección para peer broadcasting para una sincronización de nodos más fluida.
- Archivamos el historial de la red Schrodinger (testnet antigua).
- Depuramos y mejoramos nuestra arquitectura subsquid. Añadimos un nuevo script de monitoreo y protocolos de reinicio para mejorar el uptime de datos para explorer y wallet.

## Web & Mobile App Updates

- Mejoramos la integración con Keystone, añadimos borrado de caché de PIN y QR code con seguridad de PIN.
- Publicamos nuestro repo rusx para conectar X OAuth a la app móvil y actualizamos el backend para soportar consulta y búsqueda de tweets.
- Publicamos una actualización que corrige varios errores, incluidos problemas de manejo de enteros y notificaciones de fallo falsas

## Content & Partnerships

- Estamos en Dubái para Binance Blockchain Week y Solana Breakpoint, reunidos con asesores, KOLs y onboarding de usuarios.
- Esté atento a nuestro X Space semanal programado para el jueves
- Podcast con el equipo de Quantus: https://www.youtube.com/watch?v=konWKWrl5hs
