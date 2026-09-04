---
title: "Quantus Weekly: La killer app es el dinero"
description: "Esta semana reescribimos DKG Dilithium para Mithril, corregimos firmas threshold, abrimos helpers Wormhole en el SDK y lanzamos wallet v1.4.0 en TestFlight."

pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: La killer app es el dinero"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
    "dilithium",
    "wormhole",
    "mithril",
    "network-school",
  ]
---

Hay algo en lo que creemos y el mercado empieza a despertar poco a poco.

Una sola killer app de cripto creará y capturará más valor que cualquier otra.

No son las stablecoins, los mercados de predicción ni el DeFi.

Definitivamente no es web3, las redes sociales ni las colecciones de PFP.

Es el dinero. La idea que dio origen a la industria.

El primer pensamiento es un pensamiento puro. Efectivo electrónico entre pares.

Dinero seguro, privado y escalable es la oportunidad de varios billones de dólares.

Esta semana reescribimos la generación distribuida de claves de Quantus para claves Dilithium, alineada con el paper actualizado de Mithril, y enviamos correcciones en nuestra implementación de firmas threshold.

Así podrás fragmentar una clave de Quantus entre varias partes. Importante para nuestras integraciones seguras.

Abordamos un punto de auditoría en la especificación de Wormhole y expusimos helpers en el SDK público de la CLI de Quantus, abriendo el soporte de transacciones privadas a desarrolladores externos. Wormhole es cómo logramos privacidad post-cuántica escalable.

También lanzamos la wallet v1.4.0 con un rediseño completo que simplifica y embellece la experiencia de la app móvil (actualmente en TestFlight).

### Actividad en GitHub (16 pull requests fusionados):

![Github Stats](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### Tecnología central y ZK:

- Reescritura de la generación distribuida de claves Dilithium para alinearla con el paper actualizado de Mithril.
- Endurecimiento de la implementación de firmas threshold frente a tres hallazgos de auditoría.
- Actualización de la especificación de Wormhole para abordar un punto de auditoría sobre outputs de cambio.
- Exposición de helpers de Wormhole en el SDK público de la CLI de Quantus y adición de flujos de ejemplo de depósito a mint de extremo a extremo.
- Refactorización del ciclo de vida de transacciones de la CLI con estados distintos de enviado, incluido y finalizado, parsing decimal exacto de comisiones, comprobaciones de compatibilidad de versión más estrictas y transferencias por lotes con control de desbordamiento.
- Construcción de una herramienta de benchmarking para mejorar el algoritmo de ajuste de dificultad.
- Investigación y benchmarking de distintas topologías de árbol de agregación y su uso de CPU.
- Corrección de errores ortográficos en la frase de verificación humana.

### Red e infraestructura:

- Ampliación de la suite de stress test con modo wormhole y ejecución repetida en la testnet Planck.
- Migración del indexador blockchain Subsquid a un servidor de grado producción y adición de datos de estadísticas de cuentas y cadena.
- Benchmarking de consultas del Explorer y eliminación de las más costosas.
- Actualización de todos los sistemas operativos de los VPS y documentación de la infraestructura.
- Actualización del miner-stack y pruebas de miner-app en Windows.

### Web y app móvil:

- Lanzamiento del minero GUI para Planck (v0.4.1) con funcionalidad de claim.
- Lanzamiento de la wallet v1.4.0 (actualmente en TestFlight) con rediseño completo de la UI y tipos de cambio reales.
- Correcciones en la wallet: estilo del saldo en la página principal, estilo del componente de actividad y pantalla de recepción.
- Task Master: adición de un endpoint de tipos de cambio y actualización de la dependencia de checksum.
- Actualización del sitio web de Quantus: enlace de docs apuntando a docs (dot) quantus (dot) com, actualización del display de TPS y publicación del weekly update.

### Contenido y alianzas:

- Actualización del branding del podcast en Spotify, Apple y YouTube.
- Venta del primer par de Quantus Glasses por [$QTC](https://x.com/search?q=%24QTC&src=cashtag_click) en Network School.
- Quantus tuvo un stand en la feria de NS, incorporando usuarios de la app y registrados de Q-Day.
