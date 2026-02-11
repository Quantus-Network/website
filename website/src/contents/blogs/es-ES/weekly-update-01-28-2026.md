---
title: "Quantus Weekly: RPC Denegables y Auditoría de Seguridad de Neodyme"
description: "Actualización semanal que destaca nuestros nuevos RPC denegables para una mayor privacidad, la finalización de la auditoría de seguridad de Neodyme para Rusty Crystals y direcciones ZK privadas para todos los tokens."
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: RPC Denegables y Auditoría de Seguridad de Neodyme"
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

Tu billetera te está delatando.

El 99% de la infraestructura de privacidad es un simulacro. Está filtrando tu información en algún lugar de la pila. Tu billetera habla con un servidor llamado RPC. Ese servidor RPC envía información de vuelta a tu billetera. Pero para hacer eso, el RPC normalmente necesita saber cierta información sobre ti.

Por ejemplo, para obtener tu saldo, puede necesitar tu historial de transacciones. Probablemente asocie eso con tu dirección IP, ubicación aproximada, hábitos de uso, etc. Todo para que puedas ver tu saldo en tu billetera.

Así que mientras Stacy, la nueva empleada de marketing de tu herramienta de privacidad onchain favorita, presume en un espacio de X sobre lo "privados y seguros" que son, los peces gordos simplemente están escuchando a escondidas la conexión RPC.

Estás expuesto.

Construimos algo diferente. Los RPC denegables utilizan un filtro de prefijo de hash similar a la búsqueda inconsciente (oblivious lookup). Puedes pedirle al servidor tus transacciones sin que sepa lo que estás buscando. El RPC no puede determinar qué transacciones específicas estás solicitando.

Así que [@QuantusNetwork](https://x.com/@QuantusNetwork) preserva la privacidad onchain y en la infraestructura de billetera/RPC. Mantenemos en secreto lo que quieres mantener en secreto en cada capa de la pila.

Esta semana también [anunciamos](https://x.com/QuantusNetwork/status/2016390125626773871) la finalización de la auditoría de seguridad de [@Neodyme](https://x.com/@Neodyme) para nuestra biblioteca de firmas Dilithium Rusty Crystals. Todos los problemas se han resuelto y se han aplicado técnicas de endurecimiento. Rusty Crystals es la mejor biblioteca de firmas Dilithium en Rust, con soporte completo para billeteras HD.

Esos son los aspectos más destacados. Aquí está lo demás que enviamos en la última semana:

### Actividad en GitHub (19 pull requests fusionados):
![Estadísticas de Github](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Tecnología Core y ZK
- Auditoría de [@Neodyme](https://x.com/@Neodyme) completada con todos los problemas resueltos. Técnicas de endurecimiento aplicadas, incluyendo la puesta a cero de la memoria después de su uso. [Publicación aquí](https://x.com/QuantusNetwork/status/2016390125626773871).
- Lanzamiento de RPC denegables mediante hashing de prefijo. Los usuarios ahora tienen denegación plausible al conectarse a nodos RPC (búsqueda inconsciente).
- Direcciones ZK privadas habilitadas para todos los tokens en el génesis.
- La construcción continua de bloques reduce el tiempo promedio hasta la inclusión de la transacción en más del 50%.
- Eliminación de pallets innecesarios, simplificando el tiempo de ejecución.
- Pallet multisig completo con documentación actualizada. Integración de la cadena y CLI pendiente de revisión.
- Fuzzer renovado para circuitos ZK-aggregator y cobertura de prueba ampliada para tarifas de minero y tarifas quemadas.

### Actualizaciones de la Aplicación Web y Móvil
- Lanzamiento de la aplicación móvil v1.1.5 (build 65) con función de extracción de alta seguridad.
- Creación de videos de demostración para funciones de alta seguridad.
- Mejoras en el explorador y el faucet: se agregaron eventos de error y de alta seguridad a los detalles del bloque, búsqueda por tipo de error y filtrado de mensajes de grupo mejorado.
- Corrección de errores en Task Master para la tabla de clasificación, envío de incursiones y métricas.
- Corrección del dockerfile de Subsquid y la acción de GitHub para la generación de imágenes de docker.
- Actualización de la UX del blog del sitio web y corrección de problemas de SEO.

### Contenido y Alianzas
- Superamos los 1.000 miembros en Telegram.
- Reserva de lugar para evento paralelo en Token2049 Dubai.
- El equipo ha decidido volver a [@ns](https://x.com/@ns) para nuestro próximo sprint.
- Contratación de un nuevo diseñador para el rediseño de la aplicación móvil.
- Contratación de nuestro primer creador de contenido de tamaño mediano para colaboraciones de video. Construyendo nuestra lista de creadores.

### Actualizaciones de la Industria
- Artículo de [@QuantumCanary_](https://x.com/@QuantumCanary_) [analizando Zcash](https://x.com/QuantumCanary_/status/2016327421797294286).
- [@QuantumCanary_](https://x.com/@QuantumCanary_) publicó su "[Tabla de Comparación de Blockchains](https://x.com/QuantumCanary_/status/2015734605450731824)".
