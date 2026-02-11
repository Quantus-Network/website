---
title: "Quantus Weekly: Auditoría de PoW Completada y Lanzamiento de Dirac Testnet"
description: "Actualización semanal que destaca la finalización de nuestra auditoría de PoW y función hash Poseidon por Equilibrium, generación de pruebas ZK para cabeceras de bloque y el lanzamiento de la testnet Dirac."
pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: Auditoría de PoW Completada y Lanzamiento de Dirac Testnet"
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

Esta semana el equipo completó la auditoría de Equilibrium de nuestro algoritmo de prueba de trabajo y función hash Poseidon, y envió aplicaciones actualizadas a ambas tiendas de aplicaciones.

## Noticias de Desarrollo

- Informe semanal de actividad en Github que incluye 147 eventos totales: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- Revise la auditoría de nuestro algoritmo PoW y función hash Poseidon con todos los problemas resueltos aquí: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## Core Tech

- Se actualizó la interfaz de línea de comandos (CLI) para funcionar con la testnet Dirac.
- Generación de pruebas ZK para la procedencia de la cabecera del bloque, un hito importante ya que demuestra que nuestra lógica de circuito funciona con datos dinámicos, no solo con pruebas simuladas estáticas.
- Se resolvieron problemas con la línea de comandos del nodo.

## Network & Infra

- Se corrigió el flujo de trabajo de docker multi-arquitectura para la cadena.
- Se finalizó el lanzamiento de Dirac actualizando todos los nodos, eliminando las testnets antiguas y desplegando nuevos paneles y alertas. Ver grafana.quantus.cat y telemetry.quantus.cat.
- Se actualizó el Faucet con nuevas librerías, un nuevo servidor y se añadieron métricas, además del nuevo comando /king para la tabla de clasificación de referidos.
- Se mejoró el monitoreo de la red con un backend de PostgreSQL para Grafana, añadiendo varias correcciones y optimizaciones.
- Se configuró IaC (infraestructura como código) en un nuevo servidor, conectando todos los nodos Heisenberg y Dirac.
- Se actualizó el servicio de indexación Subsquid para soportar la testnet Dirac y se añadieron métricas de Prometheus.

## Web & Mobile App Updates

- Se lanzó la versión 1.1.1 de la Billetera Móvil en las tiendas de aplicaciones. Apple está requiriendo más información, pero eso debería resolverse pronto.
- Se actualizó la Billetera Móvil para conectarse a la testnet Dirac.
- Se corrigieron varios errores de la Billetera Móvil, incluyendo problemas con notificaciones programadas, actualización de nombres de cuenta y autenticación biométrica.
- Se actualizó la Miner App para usar la nueva cadena Dirac y se corrigió el reporte de estadísticas.
- Se añadió una nueva pantalla de ajustes y una función de actualización binaria en la aplicación a la Miner App.
- Se migró la aplicación Task Master a la testnet Dirac y se añadieron métricas de Prometheus.
- Se añadió un nuevo comando al bot del Faucet para consultar la tabla de clasificación de nuestra próxima función de referidos.

## Content & Partnerships

- Tenemos varios contratos de recaudación de fondos en marcha y 250.000 dólares comprometidos verbalmente.
- Contratamos a The Quantum Insider para manejar el SEO tanto de Quantum Canary como de Quantus.
- Se creó un nuevo flujo de n8n para rastrear el crecimiento en redes sociales (acabamos de superar los 500 suscriptores del podcast).
- Podcast con Jangle, constructor de DeFi: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## Industry Updates

- Quantum Canary publicó una entrevista con el criptógrafo cuántico Dr. Or Sattath sobre criptografía inclonable y dinero cuántico, explorando su potencial para mejorar la velocidad, seguridad y privacidad de Bitcoin: https://www.quantumcanary.org/insights/or-sattath-interview
- Una computadora de átomos neutros de 448 cúbits logra la tolerancia a fallos: https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces

- Estaremos discutiendo sobre Quantum FUD y Quantus en X el jueves a las 11a hora de HK: https://x.com/i/spaces/1RDGlAZlgPoJL?s=20
