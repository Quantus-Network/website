---
title: "Quantus Weekly: Auditoría de Criptografía de Redes e Integración de Keystone"
description: "Actualización semanal que cubre la auditoría exitosa de nuestra librería de criptografía de redes, actualizaciones de red para el SDK de Polkadot y nuevo soporte de billetera de hardware en Keystone."
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: Auditoría de Criptografía de Redes e Integración de Keystone"
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

La semana pasada, el equipo abordó todos los problemas planteados en la auditoría de nuestra librería de criptografía de redes (rusty-crystals) y lanzó actualizaciones de red para alinearse con el último SDK de Polkadot. También implementamos el soporte de direcciones Quantus en el firmware de código abierto de la billetera de hardware Keystone y logramos que nuestro perfil apareciera en la plataforma de inteligencia de mercado “The Quantum Insider”.

Informe semanal de actividad en Github que incluye 17 pull requests fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## Core Tech
- Se resolvieron todos los hallazgos en la auditoría de la librería principal de criptografía de redes (qp-rusty-crystals).
- Se completó la preparación de las pruebas de Agregación ZK (circuitos, benchmarks y documentación QIP) para la próxima auditoría.
- Se encontraron optimizaciones en la puerta Poseidon2 de plonky2 y en zk-trie para aumentar la velocidad de prueba.
- Se revirtió qp-header y se actualizó sc-network para alinearse con los últimos estándares del SDK de Polkadot.

## Network & Infra
- Se lanzó el Minero de Interfaz de Escritorio para Windows, correcciones de errores para Linux y MacOS: https://github.com/Quantus-Network/quantus-apps/releases/latest 
- Se parcheó una potencial vulnerabilidad de seguridad P2P relacionada con la difusión de pares para evitar que pares maliciosos sobrecarguen la red.
- Se implementó el soporte de direcciones Quantus en el firmware de código abierto de la billetera de hardware Keystone (actualmente en simulador).

## Web & Mobile App Updates
- Se lanzó la Billetera Móvil v1.1.2 en las tiendas de aplicaciones, resolviendo problemas con el sondeo, los flujos de transacciones y las notificaciones.
- Se construyó un SDK de Rust para la API de X (rusx) y se añadieron endpoints para asociar cuentas de X y ETH para las misiones de los usuarios.

## Content & Partnerships
- Se aseguró una mención en The Quantum Insider, mejorando los backlinks y la visibilidad para los analistas cuánticos.
- Se lanzó el podcast en Apple, Spotify y RSS: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112  
- Se envió el boletín inaugural a los suscriptores de correo electrónico.
- Community X Space programado para este jueves: https://x.com/i/spaces/1mnGeNXoZOZJX 
- Podcast con Brian Chau, investigador de ML: https://www.youtube.com/watch?v=m_FPbzAcXEk 

## Industry Updates
- Quantum Canary publicó una guía estratégica sobre la mitigación de las amenazas de \"Cosechar ahora, descifrar después\", esbozando un camino de migración pragmático utilizando los estándares post-cuánticos del NIST recién finalizados: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive 
