---
title: "Quantus Weekly: La aplicación definitiva es el dinero"
description: "Esta semana reescribimos Dilithium DKG para Mithril, enviamos correcciones de firmas de umbral, expusimos ayudantes del SDK de Wormhole y lanzamos una billetera v1.4.0 embellecida en TestFlight."
pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: La aplicación definitiva es el dinero"
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

Hay algo que creo que el mercado está asimilando lentamente.

Una aplicación cripto definitiva creará y capturará más valor que cualquier otra.

No son las stablecoins, los mercados de predicción o DeFi.

Definitivamente no es la Web3, las redes sociales o las colecciones de PFP.

Es el dinero. La idea que dio origen a la industria.

El primer pensamiento es un pensamiento puro. Efectivo electrónico de igual a igual.

El dinero seguro, privado y escalable es la oportunidad de billones de dólares.

Esta semana, reescribimos la generación de claves distribuidas de Quantus para las claves Dilithium para que coincida con el documento Mithril actualizado y enviamos correcciones en nuestra implementación de firma de umbral.

Así podrás fragmentar una clave Quantus entre varias partes. Importante para nuestras integraciones seguras.

Abordamos un elemento de auditoría en la especificación de Wormhole y expusimos ayudantes en el SDK de la CLI pública de Quantus, abriendo el soporte de transacciones privadas a desarrolladores externos. Wormhole es cómo logramos la privacidad post-cuántica escalable.

También lanzamos la billetera v1.4.0 con un rediseño completo que simplifica y embellece la experiencia de la aplicación móvil (actualmente en TestFlight).

### Actividad en Github (16 pull requests fusionados):

![Estadísticas de Github](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### Tecnología principal y ZK:

- Se reescribió la generación de claves distribuidas para las claves Dilithium para que coincida con el documento Mithril actualizado.
- Se reforzó la implementación de la firma de umbral contra tres hallazgos de auditoría.
- Se actualizó la especificación de Wormhole para abordar un elemento de auditoría sobre las salidas de cambio.
- Se expusieron los ayudantes de Wormhole en el SDK de la CLI pública de Quantus y se agregaron flujos de trabajo de ejemplo de depósito a acuñación de extremo a extremo.
- Se refactorizó el ciclo de vida de las transacciones de la CLI con estados distintos de enviado, incluido y finalizado, análisis exacto de tarifas decimales, verificaciones de compatibilidad de versiones más estrictas y transferencias por lotes con detección de desbordamiento.
- Se creó una herramienta de evaluación comparativa para mejorar el algoritmo de ajuste de dificultad.
- Se investigaron y evaluaron diferentes topologías de árboles de agregación y su uso de CPU.
- Se corrigieron errores ortográficos en la frase de verificación humana.

### Red e infraestructura:

- Se amplió la suite de pruebas de estrés con el modo Wormhole y se ejecutó muchas veces en la red de prueba Planck.
- Se movió el indexador de blockchain Subsquid a un servidor de nivel de producción y se agregaron datos estadísticos de cuentas y cadenas.
- Se evaluaron las consultas del Explorador y se eliminaron las costosas.
- Se actualizaron todos los sistemas operativos de los VPS y se documentó la infraestructura.
- Se actualizó el stack del minero y se probó la aplicación del minero en Windows.

### Actualizaciones de la aplicación web y móvil:

- Se envió el minero GUI para Planck (v0.4.1) con funcionalidad de reclamo.
- Se lanzó la billetera v1.4.0 (actualmente en TestFlight) con un rediseño completo de la interfaz de usuario y tipos de cambio reales.
- Correcciones de errores de la billetera: estilo del saldo de la página de inicio, estilo del componente de actividad y la pantalla de recepción.
- Task Master: se agregó un endpoint de tipos de cambio y se actualizó la dependencia de checksum.
- Se actualizó el sitio web de Quantus: se apuntó el enlace de la documentación a docs (punto) quantus (punto) com, se actualizó la visualización de TPS y se publicó la actualización semanal.

### Contenido y asociaciones:

- Se actualizó la marca del podcast en Spotify, Apple y YouTube.
- Se vendió el primer par de gafas Quantus por [$QUAN](https://x.com/search?q=%24QUAN&src=cashtag_click) en Network School.
- Quantus tuvo un stand en la feria NS, incorporando usuarios de la aplicación y registrados para el Q-day.
