---
title: "Quantus Weekly: RPCs negables y auditoría Neodyme"
description: "RPCs negables para mayor privacidad, auditoría Neodyme de Rusty Crystals completada y direcciones ZK privadas para todos los tokens. Resumen semanal."

pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: RPCs negables y auditoría Neodyme"
featured: false
tags:
  [
    "weekly-update",
    "rpc",
    "privacy",
    "audit",
    "security",
    "dilithium",
    "zk-aggregator",
    "multisig",
  ]
---

Tu wallet te está delatando.

El 99 % de la infraestructura de privacidad es un LARP. Está filtrando tu información en algún punto del stack. Tu wallet habla con un servidor llamado RPC. Ese servidor RPC devuelve información a tu wallet. Pero para hacerlo, el RPC normalmente necesita saber algo sobre ti.

Por ejemplo, para obtener tu saldo puede necesitar tu historial de transacciones. Probablemente lo asocia con tu dirección IP, ubicación aproximada, hábitos de uso, etc. Todo para que puedas ver tu saldo en el wallet.

Así que mientras la nueva contratación de marketing de tu herramienta de privacidad on-chain favorita presume en un X space de lo "privada y segura" que es, los de traje simplemente escuchan la conexión RPC.

Estás pwned.

Construimos algo distinto. Los RPCs negables usan un filtro por prefijo de hash similar a una búsqueda oblivious. Puedes pedir al servidor tus transacciones sin que sepa qué buscas. El RPC no puede determinar qué transacciones concretas estás solicitando.

Así [@QuantusNetwork](https://x.com/@QuantusNetwork) preserva la privacidad on-chain y en la infraestructura wallet/RPC. Mantenemos en secreto lo que quieres mantener en secreto en cada capa del stack.

Esta semana también [anunciamos](https://x.com/QuantusNetwork/status/2016390125626773871) la auditoría de seguridad completada de [@Neodyme](https://x.com/@Neodyme) para nuestra librería de firmas Dilithium Rusty Crystals. Todos los issues resueltos y técnicas de hardening aplicadas. Rusty Crystals es la mejor librería de firmas Dilithium en Rust, con soporte completo de HD wallet.

Esos son los highlights. Esto es lo más que lanzamos la semana pasada:

### Actividad en GitHub (19 pull requests fusionados):

![Estadísticas de GitHub](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Tecnología central y ZK

- Completamos la auditoría de [@Neodyme](https://x.com/@Neodyme) con todos los issues resueltos. Técnicas de hardening aplicadas, incluido el borrado de memoria tras el uso. [Publicación aquí](https://x.com/QuantusNetwork/status/2016390125626773871).
- Lanzamos RPCs negables vía hash por prefijo. Los usuarios tienen ahora denegabilidad plausible al conectarse a nodos RPC (oblivious lookup).
- Habilitamos direcciones ZK privadas para todos los tokens en el genesis.
- La construcción continua de bloques reduce el tiempo medio hasta la inclusión de transacciones en más del 50 %.
- Eliminamos pallets innecesarios, simplificando el runtime.
- Pallet multisig completo con documentación actualizada. Integración en cadena y CLI pendiente de revisión.
- Renovamos el fuzzer para circuitos ZK-aggregator y ampliamos la cobertura de tests para comisiones de mineros y comisiones quemadas.

### Actualizaciones web y app móvil

- Lanzamos Mobile App v1.1.5 (build 65) con la función pull de alta seguridad.
- Creamos vídeos demo de las funciones de alta seguridad.
- Mejoras en explorer y faucet: añadidos eventos de error y alta seguridad en detalles de bloque, búsqueda por tipo de error y filtrado mejorado de mensajes de grupo.
- Correcciones de bugs en Task Master para leaderboard, envío de raids y métricas.
- Corregimos el dockerfile de Subsquid y la GitHub action para generación de imágenes Docker.
- Actualizamos la UX del blog del sitio web y corregimos problemas de SEO.

### Contenido y alianzas

- Superamos los 1.000 miembros en Telegram.
- Reservamos venue para evento paralelo en Token2049 Dubai.
- El equipo ha decidido volver a [@ns](https://x.com/@ns) para nuestro próximo sprint.
- Contratamos a un nuevo diseñador para el rediseño de la app móvil.
- Contratamos a nuestro primer creador de contenido de tamaño medio para colaboraciones en vídeo. Construyendo nuestro roster de creadores.

### Actualidad del sector

- Artículo de [@QuantumCanary\_](https://x.com/@QuantumCanary_) [profundizando en Zcash](https://x.com/QuantumCanary_/status/2016327421797294286).
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) publicó su "[Blockchain Comparison Table](https://x.com/QuantumCanary_/status/2015734605450731824)".
