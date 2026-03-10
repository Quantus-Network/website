---
title: "Quantus Weekly: La billetera debe ser simple"
description: "Actualización semanal que cubre el lanzamiento de Wallet v1.2.0, Tesorería con multifirma, actualizaciones de la red de pruebas Heisenberg y mejoras de rendimiento."
pubDate: "2026-02-27"
heroImage: "/blog/covers/weekly-update-02-27-2026.webp"
heroAlt: "Quantus Weekly: La billetera debe ser simple"
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

Cada billetera cripto importante está agregando funciones basura que no quiero.

No quiero una aplicación de redes sociales que también guarde mi dinero.

¿Alguna vez has notado que no existe una billetera de bitcoin "oficial", altamente opinada, fácil de usar y de autocustodia?

Lo mismo ocurre con Ethereum y Solana.

Las fundaciones construyen la cadena y dejan la interfaz a terceros. Los terceros necesitan ingresos. Los ingresos significan funciones. Las funciones significan ruido.

Así que ahora tu billetera tiene un agregador de swaps, un feed social, tokens en tendencia, galerías de NFT y notificaciones push sobre monedas de las que nunca has oído hablar.

Nosotros construimos Quantus y construimos la billetera.

Mismo equipo, mismo producto. La aplicación que enviamos a la App Store esta semana no tiene anuncios, ni feeds de tokens, ni funciones sociales, ni nombres de usuario reclamables.

Ábrela, ves tu saldo, envías o recibes.

Rediseñamos la interfaz desde cero para que sea altamente opinada con valores predeterminados que eliminen la mayor carga cognitiva posible del usuario.

También redujimos drásticamente el tiempo de carga del historial de transacciones de la billetera. Ya no hay que esperar a que se carguen el saldo y las transacciones anteriores después de abrir la aplicación.

El dinero privado cuánticamente seguro debería ser fácil de usar e idealmente aburrido.

Dejaremos la emoción para las cadenas pre-cuánticas en el Qday.

Todo es de código abierto. Cualquiera puede construir su propia billetera. Pero siempre habrá una oficial que simplemente funcione.

### Actividad en GitHub (4 pull requests fusionados):

![Estadísticas de Github](/blog/assets/github-stats-weekly-update-02-27-2026.webp)

### Tecnología Central y ZK

- La Tesorería con multifirma se fusionó e incluyó en el nuevo lanzamiento de la red de pruebas Heisenberg.
- Todos los cambios pendientes se fusionaron y lanzaron. Se creó, lanzó y desplegó el nuevo génesis de Heisenberg.
- Se eliminaron las reglas de gobernanza heredadas relacionadas con la gestión de la Tesorería.
- CLI extendido con nuevos comandos de Multifirma y Tesorería. Los detalles de las cuentas de alta seguridad ahora son visibles en la vista de la billetera.
- Se agregó el barajado de pruebas y la anulación de cuentas de salida duplicadas para aumentar la privacidad de las transacciones agregadas de wormhole.
- Se dividió wormhole en constructor de circuitos y probador para acelerar la agregación de pruebas.
- Se actualizó el flujo de trabajo de lanzamiento de circuitos ZK y se publicaron nuevos artefactos.
- Se resolvió el problema de dependencia del pallet Revive.

### Red e Infraestructura

- Sistema de notificaciones (Senoti): se agregó redundancia al observador de bloques para la mejor selección de red.
- Se actualizó Senoti para manejar múltiples direcciones por dispositivo.
- Se agregó redundancia RPC para el servidor Subsquid.
- Las alertas de monitoreo se actualizaron y redirigieron a los canales apropiados.

### Actualizaciones de aplicaciones web y móviles

- Se envió Wallet v1.2.0 a la App Store de iOS.
- Se redujo el tiempo promedio de carga del historial de transacciones de más de 1 minuto a menos de 5 segundos.
- Se enviaron las versiones de Wallet 75, 76, 77 con la corrección de la pantalla de inicio de Android y otras correcciones de errores.
- Se agregó el flujo de trabajo de artefactos de lanzamiento para las versiones de la billetera.
- Se actualizó el componente toaster y se limpió la versión heredada.
- Se agregó soporte de notificación remota para registrar direcciones existentes, desregistro de dispositivos FCM al restablecer y eliminación de notificaciones de nuevas direcciones de billetera.
- Se agregó una lista de palabras felices para las frases de verificación (check-phrases).
- Se refactorizó Subsquid para centrarse más en los extrínsecos con soporte para el cálculo de la puntuación de privacidad y transacciones de wormhole.
- Se refactorizó el explorador para reflejar la arquitectura actualizada de Subsquid.

### Contenido y Alianzas

- Podcast con Nik Heger, "Construyendo un nuevo sistema de dinero sólido"

### Actualizaciones de la Industria

- Análisis de Quantum Canary sobre si [la blockchain Tempo de Stripe será cuánticamente segura.](https://x.com/QuantumCanary_/status/2024797352616509754)
