---
title: "Quantus Weekly: Avance en Minería por GPU y Refactorización ZK"
description: "Actualización semanal que cubre un aumento de rendimiento de 9x en la minería por GPU, la refactorización del circuito de agregación ZK y reuniones estratégicas en los Emiratos Árabes Unidos."
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Weekly: Avance en Minería por GPU y Refactorización ZK"
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

Esta semana el equipo logró un gran avance en el rendimiento de la minería. Nuestro nuevo minero por GPU ahora funciona aproximadamente 9 veces más rápido que la versión para CPU.

También completamos una refactorización de nuestro circuito de agregación ZK, lo que nos permitió eliminar miles de líneas de código.

Durante su estancia en los Emiratos Árabes Unidos, el equipo se reunió con asesores e inversores. Estas reuniones consolidaron nuestra visión del producto y aclararon la tokenómica y la estrategia de lanzamiento del token. También se realizaron progresos significativos en el desarrollo de negocios (BD) para apoyar el lanzamiento del token.

Informe semanal de actividad en Github que incluye 10 pull requests fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## Core Tech & ZK

- Migración de nuestras pruebas de transferencia del agregador ZK a un pallet dedicado, incluyendo actualizaciones en el CLI, los circuitos y la lógica de Poseidon. Esta refactorización nos permitió eliminar miles de líneas de código.
- Diseño de una solución para hacer genérico el hasher de almacenamiento Poseidon.
- Fusión de cambios pendientes y resolución de problemas de calidad de código relacionados con transferencias reversibles.

## Network & Infra

- El minero por GPU es ahora ~9 veces más rápido que el minero por CPU.
- Lanzamiento del CLI v0.3.1, unificación de la bandera de finalización y mejora del formato de direcciones.
- Ejecución de una actualización del runtime y actualización de la especificación de la cadena.
- Despliegue de un nuevo BootNode.
- Finalización de comprobaciones de seguridad y actualizaciones en todos los servidores.
- Despliegue de comprobaciones de salud en contenedores para el servicio de indexación Subsquid.

## Web & Mobile App Updates

- Avance en la integración de la billetera de hardware. Ahora se analizan códigos QR en Keystone y se firman mensajes de prueba.
- Inicio de la implementación de la funcionalidad de billetera de hardware multi-billetera (mnemónica) en la aplicación móvil.
- Actualización de los formularios del sitio web e integración con nuestro proveedor de correo electrónico.
- Optimización de rusx para consultas por lotes, evitando problemas de limitación de tasa.

## Content & Partnerships

- Asistencia al Solana Breakpoint y prueba de nuestro posicionamiento/memes de "Bitcoin Cuánticamente Seguro".
- Reunión con asesores en los Emiratos Árabes Unidos para discutir el lanzamiento del token, la tokenómica y la estrategia GTM de Quantus.
- El episodio con Tom Howard ya está disponible: https://x.com/QuantusNetwork/status/2000585749914427684

## Industry Updates

- Quantum Canary lanzó una página completa de comparación de blockchains "Quantum Ready": https://www.quantumcanary.org/is-your-blockchain-quantum-ready
