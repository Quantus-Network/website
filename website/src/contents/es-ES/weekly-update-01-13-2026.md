---
title: "Semanario Quantus: Firmas Dilithium de Umbral y Coordinación Distribuida"
description: "Actualización semanal que cubre firmas de umbral, mejoras en circuitos ZK, actualizaciones de la billetera móvil y contenido de la comunidad."
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Semanario Quantus: Firmas Dilithium de Umbral y Coordinación Distribuida"
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

Poder y autoridad divididos entre múltiples partes. Coordinación distribuida.

Pero las firmas post-cuánticas son entre 20 y 80 veces más grandes que las firmas de Bitcoin. Una solución multifirma tradicional tiene su lugar, pero añade una sobrecarga que es inaceptable para ciertos casos de uso.

Esta semana lanzamos las firmas dilithium de umbral (threshold dilithium). Esto permite que un grupo distribuido firme transacciones y genere una única firma en la cadena. Básicamente, fragmentar una clave privada.

Esto es necesario para custodios, aplicaciones entre redes y el uso automatizado seguro de la cadena.

Informe semanal de actividad en Github que incluye 4 solicitudes de extracción fusionadas: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## Tecnología Principal y ZK

- Se implementaron firmas de umbral, permitiendo la firma distribuida segura.
- Se redujo la sobrecarga de los circuitos ZK.
- Se añadió soporte para la agregación de pruebas al binario de ejemplo wormhole, integración continua en la cadena y la CLI.
- Se actualizaron nuestros circuitos ZK y el algoritmo de hash Poseidon para manejar universalmente todos los tipos de datos (hash de almacenamiento genérico), ahora integrados en la cadena y la CLI.
- Se añadió soporte para la agregación de pruebas sobre IDs de activos dentro de los circuitos ZK.
- Se optimizó la CLI para un procesamiento de transacciones más rápido y se añadieron scripts de recuperación de alta seguridad.

## Actualizaciones de la Aplicación Web y Móvil

- Se lanzó una nueva versión de la aplicación de minería con controles granulares para el uso de CPU y GPU, junto con correcciones para el reporte de hashrate.
- Se finalizó y fusionó el soporte completo para billeteras de hardware en la aplicación móvil.
- Se añadió soporte para gestionar múltiples cuentas dentro de una única instancia de billetera móvil.
- Se implementaron pantallas de alta seguridad y se inició el desarrollo de los flujos de recuperación "Guardian".
- Se refinó la experiencia de usuario de la pantalla de "envío", se mejoró el manejo de errores, se corrigieron errores del temporizador de autenticación y se unificaron los iconos de la aplicación.
- Se configuraron copias de seguridad diarias de la base de datos, se corrigieron los servicios del sistema y se limpió el código de Task Master (seguimiento de eventos de la aplicación de billetera).

## Contenido y Alianzas

- Se actualizó el libro blanco con los últimos detalles del protocolo y se estableció un sistema de versiones en GitHub: https://github.com/Quantus-Network/whitepaper
- Se publicó nuestra historia de origen, "From the Ground Up": https://x.com/JoeMattia/status/2010619972398297164
- Podcast con Sina (@hubsmoke) sobre la restauración de la confianza en la ciencia: https://x.com/QuantusNetwork/status/2009929397579723213

## Actualizaciones de la Industria

- Quantum Canary publicó una guía sobre billeteras de criptomonedas seguras ante la computación cuántica: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security
