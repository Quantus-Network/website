---
title: "Quantus Weekly: auditoría PoW y testnet Dirac"
description: "Equilibrium completó la auditoría de PoW y Poseidon, llegaron pruebas ZK para headers de bloque y lanzamos la testnet Dirac en Quantus."

pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: auditoría PoW y testnet Dirac"
featured: false
tags:
  [
    "weekly-update",
    "audit",
    "pow",
    "poseidon",
    "dirac-testnet",
    "zero-knowledge-proofs",
    "mobile-wallet",
    "miner-app",
    "podcast",
  ]
---

Esta semana el equipo completó la auditoría de Equilibrium de nuestro algoritmo proof of work y la función hash Poseidon, y publicó apps actualizadas en ambas tiendas.

## Noticias de Desarrollo

- Informe semanal de actividad en Github con 147 eventos en total: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- Revise la auditoría de nuestro algoritmo PoW y la función hash Poseidon con todos los problemas resueltos aquí: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## Core Tech

- Actualizamos la interfaz de línea de comandos (CLI) para trabajar con la testnet dirac
- Generación de pruebas ZK para la procedencia del header de bloque, un hito importante porque demuestra que nuestra lógica de circuito funciona con datos dinámicos, no solo pruebas dummy estáticas.
- Resolvimos problemas con la línea de comandos del nodo.

## Network & Infra

- Corregimos el workflow Docker multi-arquitectura para la cadena.
- Finalizamos el release de Dirac actualizando todos los nodos, eliminando testnets antiguas y desplegando nuevos dashboards y alertas. Vea grafana.quantus.cat y telemetry.quantus.cat
- Actualizamos el Faucet con nuevas bibliotecas, un nuevo servidor, y añadimos métricas y el nuevo comando /king para el leaderboard de referidos.
- Mejoramos el monitoreo de red con un backend PostgreSQL para Grafana, añadiendo varias correcciones y optimizaciones.
- Configuramos IaC (infrastructure as code) en un nuevo servidor, conectando todos los nodos Heisenberg y Dirac.
- Actualizamos el servicio de indexación Subsquid para soportar la testnet Dirac y añadimos métricas Prometheus.

## Web & Mobile App Updates

- Publicamos Mobile Wallet versión 1.1.1 en las App Stores. Apple está pidiendo más información, pero debería resolverse pronto.
- Actualizamos el Mobile Wallet para conectarse a la testnet Dirac.
- Corregimos varios errores del Mobile Wallet, incluidos problemas con notificaciones programadas, actualización de nombres de cuenta y autenticación biométrica.
- Actualizamos la Miner App para usar la nueva cadena Dirac y corregimos el reporte de estadísticas.
- Añadimos una nueva pantalla de ajustes y una función de actualización binaria in-app a la Miner App.
- Migramos la aplicación Task Master a la testnet Dirac y añadimos métricas Prometheus.
- Añadimos un nuevo comando al bot Faucet para consultar el leaderboard de nuestra próxima función de referidos.

## Content & Partnerships

- Tenemos varios contratos de fundraising en curso y $250k comprometidos verbalmente.
- Contratamos a The Quantum Insider para gestionar SEO tanto de Quantum Canary como de Quantus.
- Creamos un nuevo flujo n8n para rastrear el crecimiento en redes sociales (acabamos de superar los 500 suscriptores del podcast).
- Podcast con Jangle, builder de DeFi: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## Actualizaciones de la Industria

- Quantum Canary publicó una entrevista con el criptógrafo cuántico Dr. Or Sattath sobre criptografía inclonable y dinero cuántico, explorando su potencial para mejorar la velocidad, seguridad y privacidad de Bitcoin: https://www.quantumcanary.org/insights/or-sattath-interview
- Ordenador de átomos neutros de 448 qubits logra tolerancia a fallos https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces

- Discutiremos el FUD cuántico y Quantus en X el jueves a las 11a hora de Hong Kong https://x.com/i/spaces/1RDGlAZlgPoJL?s=20
