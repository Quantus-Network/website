---
title: "Quantus Weekly: Activos nativos y riesgo cuántico"
description: "Por qué el capital descuenta Bitcoin por riesgo cuántico, nuestra apuesta por activos nativos y avances en threshold Dilithium y agregación ZK esta semana."

pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus Weekly: Activos nativos y riesgo cuántico"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "quantum-safe",
    "zk-aggregator",
    "mpc",
    "multisig",
    "indexer",
    "biohacking",
  ]
---

Si te preguntas por qué el oro se dispara y Bitcoin se resiente, lee esto. No hay nada misterioso.

![Resumen de la entrevista a Nic Carter](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

Los asignadores de capital están descontando Bitcoin en proporción a las probabilidades de que un ordenador cuántico criptográficamente relevante (CRQC) llegue antes de que Bitcoin actualice a criptografía poscuántica. Tanto si la comunidad de Bitcoin lo acepta como si no, el mercado ya lo ha hecho.

Algunas cadenas se actualizarán a tiempo. Bitcoin probablemente no. Por ejemplo, recientemente Vitalik instó a una actualización PQC.

No tenemos forma de saber con precisión cuándo es la fecha límite, ni qué cadenas se actualizarán a tiempo. Eso significa que tuvimos que tomar decisiones de diseño difíciles sobre soportar activos externos en @QuantusNetwork.

Si la cadena de origen de un activo envuelto se ve comprometida, también lo están sus titulares. Por eso decidimos que @QuantusNetwork no podía soportar activos envueltos.

Estamos construyendo infraestructura para permitir bridging permissionless desde cualquier lugar hacia el dinero nativo cuántico-seguro más resistente jamás creado. Una vez en nuestra cadena con QUAN nativo, estás protegido por ML-DSA-87 (el nivel de seguridad más alto de NIST) con un throughput brutal gracias a la agregación ZK.

No quiero anunciar nada aquí, pero siempre puedes abrir nuestro GitHub y comprobarlo 👀

Esto es lo más que lanzamos esta semana, para que cuando llegue el Q-day, estemos listos:

### Actividad en GitHub (7 pull requests fusionados):

![Estadísticas de GitHub](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### Tecnología central y ZK

- Integramos firmas threshold Dilithium en el sistema MPC de otro protocolo.
- Construimos un POC para gestión de tesorería personalizada usando el pallet multisig de Parity.
- Implementamos la primera iteración del pallet multisig personalizado con tests y benchmarks.
- Parcheamos un bug que impedía los binarios de circuitos con ZK en el pallet ZK-aggregator.
- Actualizamos el verificador on-chain del ZK-aggregator para soportar cantidades de salida cuantizadas.
- Corregimos el script de ejemplo end-to-end del ZK-aggregator para los nuevos serializadores de elementos de campo.

### Actualizaciones web y app móvil

- Construimos UX móvil para soportar delay fijo e intercept en cuentas de alta seguridad (aún en pruebas).
- Añadimos block scanner y funciones de alta seguridad a la CLI con mejor manejo de errores.
- Actualizaciones de Subsquid (indexer) para manejo de alta seguridad y corrección del hasher para el Poseidon más reciente.
- Lanzamos la sección de blog en el sitio web de Quantus con soporte de tags y comenzamos a subir el backlog de actualizaciones semanales.
- Whitepaper actualizado a v3.1; corregidos los valores de distribución del gráfico tokenómico.

### Contenido y alianzas

- Los podcasts ya se suben a Apple Podcasts.
- Iniciamos conversaciones con 2 launchpads de tokens.
- Mejoras en la página de comparación de blockchains de Quantum Canary.
- Podcast con AJ sobre biohacking y autooptimización: https://x.com/QuantusNetwork/status/2012526120869286161

### Actualidad del sector

- Artículo de Quantum Canary sobre cómo los CRQC amenazan las monedas de Satoshi: https://x.com/QuantumCanary_/status/2011706634868047982
