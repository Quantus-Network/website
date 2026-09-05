---
published: true
title: "Quantus Weekly: Firmas threshold Dilithium"
description: "Esta semana lanzamos firmas threshold Dilithium para coordinación distribuida, además de circuitos ZK, actualizaciones del wallet móvil y contenido comunitario."

pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus Weekly: Firmas threshold Dilithium"
featured: false
tags:
  [
    "weekly-update",
    "threshold-signatures",
    "post-quantum-cryptography",
    "dilithium",
    "zero-knowledge-proofs",
    "quantum-safe",
    "blockchain",
  ]
---

El poder y la autoridad repartidos entre varias partes. Coordinación distribuida.

Pero las firmas poscuánticas son entre 20 y 80 veces más grandes que las firmas de Bitcoin. Una solución multisig tradicional tiene su lugar, pero añade una sobrecarga inaceptable para ciertos casos de uso.

Esta semana lanzamos firmas threshold Dilithium. Esto permite que un grupo distribuido firme transacciones y genere una sola firma on-chain. Básicamente, fragmentar una clave privada.

Eso es necesario para custodios, aplicaciones entre redes y un uso automatizado seguro de la cadena.

Informe semanal de actividad en GitHub con 4 pull requests fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## Tecnología central y ZK

- Implementamos firmas threshold, habilitando la firma distribuida segura.
- Reducimos la sobrecarga de los circuitos ZK.
- Añadimos soporte de agregación de pruebas al binario de ejemplo wormhole; integración en curso en la cadena y la CLI.
- Actualizamos nuestros circuitos ZK y el algoritmo de hash Poseidon para manejar universalmente todos los tipos de datos (hash genérico de almacenamiento), ahora integrado en la cadena y la CLI.
- Añadimos soporte para agregación de pruebas sobre IDs de activos dentro de los circuitos ZK.
- Optimizamos la CLI para un procesamiento de transacciones más rápido y añadimos scripts de recuperación de alta seguridad.

## Actualizaciones web y app móvil

- Lanzamos una nueva versión de la UI Mining App con controles deslizantes granulares para el uso de CPU y GPU, junto con correcciones en el reporte de hashrate.
- Finalizamos e integramos el soporte completo de hardware wallet en la app móvil.
- Añadimos soporte para gestionar varias cuentas dentro de una sola instancia del wallet móvil.
- Implementamos pantallas de alta seguridad y comenzamos el desarrollo de flujos de recuperación "Guardian".
- Refinamos la UX de la pantalla de envío, mejoramos el manejo de errores, corregimos bugs del temporizador de autenticación y unificamos los iconos de la app.
- Configuramos copias de seguridad diarias de la base de datos, corregimos servicios del sistema y limpiamos el código de Task Master (seguimiento de eventos del wallet app).

## Contenido y alianzas

- Actualizamos el whitepaper con los últimos detalles del protocolo y establecimos un sistema de versionado en GitHub: https://github.com/Quantus-Network/whitepaper
- Lore publicó nuestra historia de origen, "From the Ground Up": https://x.com/JoeMattia/status/2010619972398297164
- Podcast con Sina (@hubsmoke) sobre restaurar la confianza en la ciencia: https://x.com/QuantusNetwork/status/2009929397579723213

## Actualidad del sector

- Quantum Canary publicó una guía sobre wallets cripto cuántico-seguros: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security
