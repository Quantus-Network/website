---
title: "Quantus Weekly: Lanzamiento del testnet Planck y recompensas de minería temprana"
description: "Por qué importa el hashrate temprano, el testnet Planck ya está activo para mineros, migración de la app en TestFlight y tiendas, minería con GPU en la nueva cadena, y novedades de Core, infra, wallet y comunidad."
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly: Lanzamiento del testnet Planck y recompensas de minería temprana"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

El hashrate temprano importa.

La mitad del suministro de 21M de Bitcoin se emitió en los primeros cuatro años, cuando nadie prestaba atención.

Cualquiera podía minar, y las recompensas por bloque iniciales eran de 50 BTC.

Unos pocos ciclos de cómputo podrían haber cambiado el destino para siempre.

Quantus es prueba de trabajo (proof of work). Suministro máximo de 21M QUAN.

Como en Bitcoin, los mineros tempranos reciben más recompensas por poner en marcha la red.

Hoy lanzamos nuestro testnet Planck.

Estamos sometiendo a estrés a Quantus antes del mainnet.

Si usas la app en TestFlight, se te pedirá una migración en un clic.

Si descargaste la app desde la App Store de iOS o Google Play, la actualización se desplegará en los próximos días.

Si minas Quantus, ya puedes empezar a minar el testnet Planck.

Consulta la wiki del repositorio de la cadena para una guía de minería actualizada, incluida nuestra implementación en GPU (más eficiente que el minero por CPU).

La app de minería con UI sencilla sigue mejorándose, pero si eres un minero más técnico deberías poder empezar a minar el nuevo testnet ya. Avísanos si tienes algún problema.

Este testnet es el ensayo general. El hashrate subirá rápido cuando la cadena esté en vivo, y querrás tener el equipo afinado para el día uno.

Esto es lo más que lanzamos esta semana:

### Core Tech & ZK

- Lanzamos un nuevo testnet.
- Eliminamos el pallet sudo de cara al mainnet.
- Corregimos la sincronización de red.
- Corregimos el mempool de estado único.
- Actualizamos Poseidon a la última versión.

### Network & Infra

- Actualizamos la documentación del nodo con requisitos mínimos de red.
- Actualizamos el indexador Subsquid a la última versión de la cadena, corregimos tipos de eventos/extrínsecos reversibles y cancelados y publicamos la imagen Docker v0.6.0.
- Añadimos limitación de tasa al endpoint del comprobador de riesgo de Task Master y actualizamos la política CORS.

### Web & Mobile App Updates

- Restauramos el flujo de alta seguridad en la app móvil y lanzamos mejoras de UX.
- Rediseñamos la página principal del monedero, actualizamos botones, iconos y componentes de la lista de transacciones e integramos la nueva consulta GraphQL para el indexador Subsquid más reciente.
- Corregimos la animación de la página del monedero móvil, un fallo del banner hero de la página de inicio y el oscurecimiento de la barra de navegación al hacer scroll en rutas que no son la home.

### Content & Partnerships

- Chris en el podcast de [@mobymedia](https://x.com/mobymedia): [https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- Publicamos el podcast sobre pruebas de conocimiento cero post-cuánticas con [@ethan_t_c_](https://x.com/ethan_t_c_) y [@YuviLightman](https://x.com/YuviLightman): [https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- Asistimos a GitEx en Singapur.
- Organizamos una sesión a sala llena con la Dra. [@zina_cinker](https://x.com/zina_cinker) en Network School: [https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris se une a [@ArcanumVentures](https://x.com/ArcanumVentures) ep. 47 en directo el jueves 16 de abril, 14:00 UTC / 22:00 Singapur: [https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- Seguimos distribuyendo el informe State of Quantum e implementando comentarios.
