---
title: "Quantus Weekly: Activos Nativos, Agregación ZK y el Riesgo Cuántico de Bitcoin"
description: "Actualización semanal que destaca nuestra decisión sobre activos solo nativos para la seguridad cuántica, firmas de umbral Dilithium y progreso en la agregación ZK y pallets multisig personalizados."
pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus Weekly: Activos Nativos, Agregación ZK y el Riesgo Cuántico de Bitcoin"
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

Si te preguntas por qué el oro está subiendo y Bitcoin está luchando, lee esto. No hay nada misterioso al respecto.

![Resumen de la entrevista de Nic Carter](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

Los asignadores de capital están descontando Bitcoin en proporción a las probabilidades de que un ordenador cuántico criptográficamente relevante (CRQC) se lance antes de que Bitcoin se actualice a la criptografía post-cuántica. Ya sea que la comunidad de Bitcoin acepte esto o no, el mercado ya lo ha hecho.

Algunas cadenas se actualizarán a tiempo. Bitcoin probablemente no lo hará. Por ejemplo, recientemente Vitalik instó a una actualización de PQC.

No tenemos forma de saber con precisión cuándo es la fecha límite, o qué cadenas se actualizarán a tiempo. Lo que significa que tuvimos que tomar decisiones de diseño difíciles en torno al soporte de activos externos en @QuantusNetwork.

Si la cadena de origen de un activo envuelto (wrapped) se ve comprometida, también lo hacen los poseedores del activo envuelto. Así que decidimos que @QuantusNetwork no podía soportar ningún activo envuelto.

Estamos construyendo infraestructura para permitir el puente (bridging) sin permisos desde cualquier lugar hacia el dinero seguro cuántico más resistente jamás creado. Una vez que estés en nuestra cadena con QUAN nativo, estarás protegido por ML-DSA-87 (el nivel de seguridad más alto del NIST) con un rendimiento impresionante a través de la agregación ZK.

No quiero anunciar nada aquí, pero siempre puedes abrir nuestro GitHub y echar un vistazo 👀

Esto es lo que más enviamos esta semana, para que cuando llegue el día Q, estemos listos:

### Actividad en Github (7 pull requests fusionados):
![Estadísticas de Github](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### Tecnología Core y ZK
- Integración de firmas de umbral Dilithium en el sistema MPC de otro protocolo.
- Construcción de POC para la gestión de tesorería personalizada utilizando el pallet multisig de Parity.
- Implementación de la primera iteración del pallet multisig personalizado con pruebas y benchmarks.
- Corrección de un error que impedía los binarios de circuitos habilitados para ZK en el pallet ZK-aggregator.
- Actualización del verificador ZK-aggregator onchain para soportar cantidades de salida cuantizadas.
- Corrección del script de ejemplo de ZK-aggregator de extremo a extremo para los nuevos serializadores de elementos de campo.

### Actualizaciones de la Aplicación Web y Móvil
- Construcción de la UX móvil para soportar funciones de retraso fijo e interceptación para cuentas de alta seguridad (aún en pruebas).
- Escáner de bloques y funciones de alta seguridad añadidas a la CLI con una mejor gestión de errores.
- Actualizaciones de Subsquid (indexador) para el manejo de alta seguridad y corrección del hasher para el último Poseidon.
- Lanzamiento de la sección de blog en el sitio web de Quantus con soporte para etiquetas y comienzo de la carga del historial de actualizaciones semanales.
- Whitepaper actualizado a la v3.1, corrección de los valores de distribución del gráfico de tokenomics.

### Contenido y Alianzas
- Los podcasts ahora se están subiendo a Apple Podcasts.
- Inicio de conversaciones con 2 plataformas de lanzamiento (launchpads) de tokens.
- Mejoras en la página de comparación de blockchains de Quantum Canary.
- Podcast con AJ sobre biohacking y auto-optimización: https://x.com/QuantusNetwork/status/2012526120869286161

### Actualizaciones de la Industria
- Artículo de Quantum Canary discutiendo cómo los CRQCs amenazan las monedas de Satoshi: https://x.com/QuantumCanary_/status/2011706634868047982
