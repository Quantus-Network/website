---
title: "Quantus Weekly: Optimización de Poseidon2 y Refactorización de la Arquitectura de Cadena"
description: "Actualización semanal que presenta puertas Poseidon2 8.3 veces más rápidas, una importante refactorización de la arquitectura de la cadena que elimina 9,000 líneas de código y actualizaciones de la Binance Blockchain Week."
pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Weekly: Optimización de Poseidon2 y Refactorización de la Arquitectura de Cadena"
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

Probablemente viste [esta entrevista con @EliBenSasson y Scott Aaronson](https://x.com/Starknet/status/1995865652377395421) 

![Resumen de la entrevista de Nic Carter](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

En la entrevista, Scott dijo: “decidimos basar gran parte de la infraestructura de ciberseguridad del mundo en códigos criptográficos como RSA, Diffie-Hellman y la criptografía de curva elíptica, que resulta que tienen estas propiedades matemáticas que una computadora cuántica puede explotar”.

Esa es una píldora difícil de tragar.

Especialmente para Bitcoin, que por diseño carece de la capacidad de planificar y ejecutar fácilmente actualizaciones de protocolo a gran escala.

Lo que significa que el camino de menor resistencia para la comunidad de Bitcoin ha sido negar que el problema existe.

![Charles Edwards sobre la amenaza cuántica](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

Pero con los recientes avances en corrección de errores, escalado de qubits y fidelidad, la negación del progreso de la computación cuántica representa un riesgo existencial para Bitcoin y, por lo tanto, para los derechos de propiedad humana.

Así que debemos enfrentar la niebla del futuro cuántico y aceptar que cuando llegue el Día Q, muchas blockchains habrán fallado en actuar.

Nuestro deber es actuar.

Esto es lo que hicimos para construir un Bitcoin cuánticamente seguro esta semana:

Informe semanal de actividad en Github que incluye 8 pull requests fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## Core Tech & ZK
- Se optimizó la puerta Poseidon2. Se redujeron las filas de traza del circuito por permutación de 31 a 1. Esto hace que la puerta sea 8.3 veces más rápida y resulta en una aceleración total de 4.5 veces para el probador de wormhole más grande.
- Se refactorizó la arquitectura de la cadena para usar extensiones de transacción para registrar pruebas de wormhole. Esto eliminó la necesidad de un fork personalizado del pallet de balances, eliminando unas 9,000 líneas de código.
- Se añadió soporte de Asset ID a las transferencias de wormhole.
- Se resolvieron los problemas planteados en la auditoría de qp-rusty-crystals.

## Network & Infra
- Se mejoró la implementación del minero GPU.
- Se actualizó y fusionó sc-network, incluyendo una corrección para la difusión de pares para una sincronización de nodos más fluida.
- Se archivó el historial de la red Schrödinger (antigua red de prueba).
- Se depuró y mejoró nuestra arquitectura Subsquid. Se añadió un nuevo script de monitoreo y protocolos de reinicio para mejorar el tiempo de actividad de los datos para el explorador y la billetera.

## Web & Mobile App Updates
- Se mejoró la integración de Keystone, se añadió el borrado de la caché de PIN y código QR con seguridad de PIN.
- Se publicó nuestro repo rusx para conectar X OAuth a la aplicación móvil y se actualizó el backend para soportar consultas y búsquedas de tweets.
- Se lanzó una actualización que corrige varios errores, incluyendo problemas de manejo de enteros y notificaciones de fallo falsas positivas.

## Content & Partnerships
- Estamos en Dubái para la Binance Blockchain Week y Solana Breakpoint reuniéndonos con asesores, KOLs e incorporando usuarios.
- Estén atentos a nuestro X Space semanal programado para el jueves.
- Podcast con el equipo de Quantus: https://www.youtube.com/watch?v=konWKWrl5hs 
