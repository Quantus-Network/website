---
title: "Quantus Weekly: Firmas cuántico-seguras, escalado ZK y pruebas Wormhole 2x más rápidas"
description: "Actualización semanal sobre escalado de firmas ML-DSA, agregación ZK, aceleración de pruebas wormhole, revisiones de seguridad, nodos testnet y contenido de Quantum Canary."
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: Firmas cuántico-seguras, escalado ZK y pruebas Wormhole 2x más rápidas"
featured: false
tags:
  [
    "weekly-update",
    "quantum-safe",
    "ml-dsa",
    "zk-proofs",
    "wormhole",
    "scalability",
    "privacy",
  ]
---

Una firma de Bitcoin son 65 bytes.

Una sola firma ML-DSA-87 son 4.627 bytes.

Eso es 70 veces más grande.

Multiplica eso en cada transacción y tienes un problema de escalabilidad.

Pero no te preocupes, seguro que aumentar el tamaño de los bloques de Bitcoin no será tan controvertido.

(era una broma)

Las firmas cuántico-seguras son tan grandes que, si se implementaran hoy, el rendimiento de Bitcoin caería muy por debajo de 1 TPS.

[@QuantusNetwork](https://x.com/QuantusNetwork) lograría alrededor de 685 transacciones por bloque sin ninguna técnica de escalado.

Pero usamos ZK para agregar estas transacciones más grandes en pruebas más pequeñas que acaban onchain.

También ofrece protección de privacidad a nuestros usuarios al romper el vínculo entre emisor y receptor [(tratado en la última actualización)](https://x.com/YuviLightman/status/2030162754544525495).

57 TPS se convierten en 3.500 TPS cifrados.

El nuevo trilema de la blockchain es: seguridad cuántica, escalabilidad y privacidad.

Lo estamos resolviendo con ZK.

Esta semana hemos reducido a la mitad nuestro tiempo de prueba.

Las pruebas de agregación Wormhole ahora se liquidan 2 veces más rápido.

Las firmas siguen siendo enormes. A la cadena no le importa.

Esto es lo demás que hemos construido esta semana:

### Actividad en GitHub (12 pull requests fusionados):

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### Core Tech y ZK:

- Las pruebas de agregación Wormhole son ahora 2x más rápidas, usando un probador serializado en lugar de reconstruir dinámicamente.
- Finalizado el refactor y separación del builder/prover de circuitos para qp-zk-circuits.
- Rediseño del API del agregador: de probador/circuit builder dinámico a orquestación y gestión de artefactos.
- Actualizado quantus-cli con el nuevo API del agregador.
- Corregidos los blobs del verificador wormhole que no tenían un vínculo criptográfico/reproducible con qp-zk-circuits en la cadena.
- Varias revisiones de seguridad completadas en todos los pallets de Substrate; fusionados 8 PRs de correcciones.
- Iniciada la auditoría formal de los pallets de Substrate.
- Mejoras en los pallets Multisig y Treasury.

### Red e Infraestructura:

- Desplegados dos nuevos nodos testnet Planck con un nuevo perfil de testnet.
- Investigación y correcciones de la poda de estado de Substrate.
- Conectado el faucet del testnet a la cuenta de Twitter [@QuantusNetwork](https://x.com/QuantusNetwork).
- Subsquid: añadido mapeo de eventos por usuario para mejorar el rendimiento de consultas.
- Subsquid: actualizada la agregación de transferencias reversibles para mayor precisión histórica.
- Construida infraestructura de bridging: implementación de la API Rosetta con tests de integración y actualizaciones de firma MPC.

### Actualizaciones Web y App Móvil:

- Build 82 del monedero móvil: limpieza de código y estandarización de UI (hojas, scaffold, botones de icono, refactor de cuentas).
- Actualizados el servicio de historial de cadena y la UI de historial de transacciones del monedero móvil para el último modelo de datos de Subsquid.
- Web: optimizada la indexación de páginas, añadidas las actualizaciones semanales como entradas de blog, corregida la búsqueda del blog para incluir títulos.
- Explorer: reestructuradas las vistas de transacciones reversibles en tipos de evento separados (programadas, ejecutadas, canceladas).
- Web de Quantum Canary: tablas de artículos adaptadas a móvil.

### Contenido y Alianzas:

- Podcast con el físico y emprendedor Steve Hsu sobre computación cuántica, IA y la línea temporal de la amenaza cuántica.
- Incorporadas dos nuevas contrataciones en marketing.
- Organizados eventos de onboarding en cripto y de seguridad privacidad/OPSEC en Network School.

### Novedades del sector:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)
