---
title: "Quantus Weekly: Transacciones Wormhole"
description: "Actualización semanal que cubre transacciones wormhole, recompensas de bloque privadas para mineros, correcciones de errores de consenso y actualizaciones de la billetera."
pubDate: "2026-03-07"
heroImage: "/blog/covers/weekly-update-03-07-2026.webp"
heroAlt: "Quantus Weekly: Transacciones Wormhole"
featured: false
tags:
  [
    "weekly-update",
    "wormhole",
    "zk-proofs",
    "privacy",
    "miner-app",
    "consensus",
    "wallet",
  ]
---

Quemas monedas en una dirección que no se puede gastar.

Una prueba ZK las acuña en un lugar nuevo.

El rastro desaparece.

[@QuantusNetwork](https://x.com/@QuantusNetwork) llama a estas transacciones "wormhole" (agujero de gusano).

Envías monedas a una dirección wormhole que parece idéntica a cualquier otra cuenta en el libro mayor. Pero la dirección es matemáticamente imposible de gastar. Para retirar, demuestras el conocimiento de un secreto con una prueba ZK, y la cadena acuña monedas equivalentes en una dirección de salida fresca.

Nadie puede conectar la entrada con la salida.

Aquí es donde se pone interesante para los mineros.

El protocolo requiere que los mineros envíen una preimagen de 32 bytes para su dirección de recompensa. La cadena la hashea para crear la dirección.

Las claves públicas de Dilithium son masivas. No caben en 32 bytes. Por lo tanto, la preimagen no puede ser una clave pública real, y la dirección resultante está garantizada como una dirección wormhole imposible de gastar.

La privacidad es impuesta por el protocolo, sin necesidad de optar por ella.

Esta semana, integramos esto en la aplicación del minero. In la próxima red de pruebas, todas las recompensas de bloque se dirigirán a través de direcciones wormhole por defecto.

Esto es lo que más hemos construido esta semana.

### Actividad en Github (11 pull requests fusionados):

![Github Stats](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### Tecnología Principal y ZK:

- Se integraron los retiros wormhole en la aplicación del minero, otorgando a los mineros recompensas de bloque privadas por defecto.
- Se corrigió el error de consenso de la cadena más pesada/larga y varios otros errores de la cadena.
- Se lanzaron bibliotecas principales actualizadas: qp-poseidon v1.1.0, qp-rusty-crystals-hdwallet v2.0.0, qp-dilithium v0.2.2.

### Red e Infraestructura:

- Se actualizaron las dependencias de Substrate de stable2506 a stable2512-2.
- Se actualizaron el CLI, el fork de sc-network y el fork de NEAR con nuevas dependencias.
- Se probaron los nodos Heisenberg con la base de código actualizada y la gobernanza del colectivo técnico.
- Sistema de notificaciones Senoti: se corrigió el fallo de inicio de RabbitMQ, se eliminó la capa de autenticación del registrador de dispositivos, se corrigió el manejo de la conexión de respaldo.

### Actualizaciones de Aplicaciones Web y Móviles:

- Se enviaron las versiones v1.2.0 y v1.2.1 de la billetera a todas las tiendas de aplicaciones con gráficos actualizados.
- Se envió una versión de la aplicación móvil con un botón de "intercambio" a la tienda de aplicaciones para comenzar el proceso de revisión.
- Se lanzó la frase de verificación feliz con una lista de palabras más positivas en la billetera y el explorador.
- Corrección de pantalla de borde a borde en Android.
- Actualización de la interfaz de usuario de la frase de recuperación, correcciones de componentes de botones, botones de iconos estandarizados y actualización de la hoja de reinicio.
- Se actualizó la integración de notificaciones remotas y se amplió el soporte de notificaciones a todas las billeteras.

### Contenido y Asociaciones:

- Se organizó una mesa redonda sobre privacidad y seguridad cuántica con [Tom Howard](https://x.com/_TomHoward), [Chris Smith](https://x.com/YuviLightman) y [Kenbak](https://x.com/k6nb4k) (Cipherscan) en Network School.

### Actualizaciones de la Industria:

- [Artículo de Quantum Canary](https://x.com/QuantumCanary_/status/2027639894944956645) sobre ZK y Computación Cuántica
