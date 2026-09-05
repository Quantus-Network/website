---
published: true
title: "Quantus Weekly: El wallet debe ser simple"
description: "Lanzamiento del Wallet v1.2.0, Treasury con multisig, actualizaciones del testnet Heisenberg y mejoras de rendimiento. Resumen semanal de Quantus."

pubDate: "2026-02-27"
heroImage: "/blog/covers/weekly-update-02-27-2026.webp"
heroAlt: "Quantus Weekly: El wallet debe ser simple"
featured: false
tags:
  [
    "weekly-update",
    "mobile-wallet",
    "treasury",
    "multisig",
    "heisenberg-testnet",
    "zk-proofs",
    "performance",
  ]
---

Cada wallet cripto importante añade funciones basura que no quiero.

No quiero una app de redes sociales que además guarde mi dinero.

¿Has notado que no existe un wallet de Bitcoin "oficial", muy opinado, fácil de usar y de autocustodia?

Lo mismo pasa con Ethereum y Solana.

Las fundaciones construyen la cadena y dejan la interfaz a terceros. Los terceros necesitan ingresos. Ingresos significa funciones. Funciones significa ruido.

Así que ahora tu wallet tiene un agregador de swaps, un feed social, tokens en tendencia, galerías NFT y push notifications sobre monedas que nunca has oído.

Construimos Quantus y construimos el wallet.

Mismo equipo, mismo producto. La app que lanzamos en App Store esta semana no tiene anuncios, feeds de tokens, funciones sociales ni usernames reclamables.

La abres, ves tu saldo, envías o recibes.

Rediseñamos la interfaz desde cero para ser muy opinados, con defaults que eliminan la mayor carga cognitiva posible del usuario.

También redujimos drásticamente el tiempo de carga del historial de transacciones del wallet. Se acabó esperar a que carguen el saldo y las transacciones anteriores al abrir la app.

El dinero privado cuántico-seguro debería ser simple de usar e idealmente aburrido.

Dejaremos la emoción a las cadenas pre-cuánticas en el Q-day.

Todo es open source. Cualquiera puede construir su propio wallet. Pero siempre habrá uno oficial que simplemente funciona.

### Actividad en GitHub (4 pull requests fusionados):

![Estadísticas de GitHub](/blog/assets/github-stats-weekly-update-02-27-2026.webp)

### Tecnología central y ZK

- Treasury con multisig fusionado e incluido en el nuevo release del testnet Heisenberg.
- Todos los cambios pendientes fusionados y publicados. Nuevo genesis de Heisenberg creado, publicado y desplegado.
- Eliminadas reglas de governance heredadas relacionadas con la gestión del Treasury.
- CLI ampliada con nuevos comandos Multisig y Treasury. Detalles de cuentas de alta seguridad ahora visibles en la vista del wallet.
- Añadido proof shuffling y zeroing out de cuentas de salida duplicadas para aumentar la privacidad de transacciones wormhole agregadas.
- Separamos wormhole en circuit builder y prover para acelerar la agregación de pruebas.
- Workflow de release de circuitos ZK actualizado y nuevos artefactos publicados.
- Resuelto el issue de dependencia del pallet Revive.

### Red e infraestructura

- Sistema de notificaciones (Senoti): añadido failover al block watcher para mejor selección de red.
- Actualizamos Senoti para manejar varias direcciones por dispositivo.
- Failover RPC añadido para el servidor Subsquid.
- Alertas de monitorización actualizadas y redirigidas a los canales correspondientes.

### Actualizaciones web y app móvil

- Lanzamos Wallet v1.2.0 en iOS App Store.
- Reducimos el tiempo medio de carga del historial de transacciones de más de 1 minuto a menos de 5 segundos.
- Lanzamos builds 75, 76 y 77 del Wallet con corrección de splash screen en Android y otras correcciones.
- Añadimos workflow de artefactos de release para builds del wallet.
- Actualizamos el componente toaster y limpiamos la versión legacy.
- Añadimos soporte de notificaciones remotas para registrar direcciones existentes, desregistro de dispositivos FCM al reset y eliminación de notificaciones de nuevas direcciones del wallet.
- Añadimos lista de happy words para check-phrases.
- Refactorizamos Subsquid para ser más extrinsics-focused con soporte para cálculo de privacy score y transacciones wormhole.
- Refactorizamos el explorer para reflejar la arquitectura actualizada de Subsquid.

### Contenido y alianzas

- Podcast con Nik Heger, "Building A New Sound Money System"

### Actualidad del sector

- Análisis de Quantum Canary sobre si [la blockchain Tempo de Stripe será cuántico-segura.](https://x.com/QuantumCanary_/status/2024797352616509754)
