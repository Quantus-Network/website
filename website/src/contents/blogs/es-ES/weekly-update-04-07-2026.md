---
title: "Quantus Weekly: estimaciones del día Q, riesgo on-spend y libertad económica permanente"
description: "Estimaciones de cúbits de Google y Oratomic para romper ECC, ataques on-spend frente a los bloques de 10 minutos de Bitcoin, la fecha límite PQC de Google en 2029 y el rebranding de Quantus en torno a la libertad económica permanente, más ZK, infra y novedades de la app."
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly: estimaciones del día Q, riesgo on-spend y libertad económica permanente"
featured: false
tags:
  [
    "weekly-update",
    "quantum",
    "bitcoin",
    "post-quantum",
    "ecc",
    "zk-proofs",
    "rebrand",
    "infrastructure",
    "mobile",
  ]
---

El número de cúbits físicos necesarios para romper la criptografía de Bitcoin acaba de pasar de 20 millones a menos de 500.000.

Google publicó su nueva cifra la semana pasada. Por eso lo cuántico inundó tu cronología.

Un artículo aparte de Oratomic lo sitúa en 19.000.

Cuatro órdenes de magnitud en un año.

El equipo de Google estimó una ventana de ataque de 9 minutos con precomputación.

Bitcoin confirma un bloque cada 10 minutos.

Eso significa que un atacante podría interceptar una transacción en curso, romper la clave del remitente y emitir un reemplazo fraudulento antes de que la red confirme la original. Se llaman ataques on-spend.

Cuando los ataques on-spend sean reales, ni siquiera ocultar tu clave pública a atacantes cuánticos bastará para evitar que te roben tus sats.

Google adelantó su propia fecha límite de migración postcuántica a 2029. Más interesante aún: publicaron estimaciones de recursos (recuentos de cúbits, tiempos) para romper ECC-256, pero retuvieron el plan técnico detallado para ejecutar el criptoanálisis en sí.

La última vez que los científicos se autocensuraron a esta escala fue antes del Proyecto Manhattan.

Como en 1945, no habrá hoja de ruta pública ni anuncios incrementales que dejen claro que faltan X meses. No habrá aviso cuando llegue el día Q. Será secreto de Estado.

Según el propio artículo, romper curvas elípticas de 32 bits «no es sustancialmente más difícil» que romper curvas de 256 bits. Cuando alguien demuestre un ataque con claves pequeñas, la ventana de migración para las blockchains públicas ya se habrá cerrado.

Bitcoin ha lanzado tres actualizaciones mayores de protocolo en la última década. Una migración postcuántica de emergencia necesita al menos 1–3 años. Una ordenada, más de 5.

La ventana para una migración ordenada se cierra ahora mismo y quizá ya pasó. Ahora es existencial.

Por eso fijamos esta semana nuestra estrella polar: libertad económica permanente. Tres palabras en la base de todo lo que construye Quantus. El nuevo [quantus.com](https://quantus.com) está en línea con un rebranding completo e identidad visual alrededor de esa misión.

Permanente, porque la criptografía es postcuántica de nivel NIST 5.

Económica, porque de eso va la cripto. Perturbar a los bancos centrales.

Libertad, porque nos resistimos a quienes quieren controlarte.

[@QuantusNetwork](https://x.com/QuantusNetwork) es dinero cifrado resistente a lo cuántico. Esto es lo demás que lanzamos esta semana.

### Actividad en GitHub (13 pull requests fusionados):

![Github Stats](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### Core Tech y ZK

- Nueva estrategia de enmascaramiento para qp-plonky2 hace las pruebas hoja con ZK 6× más rápidas sin aumentar el tamaño nativo del trace.
- CLI refactorizada para que la app móvil y la del minero compartan el mismo código ZK.
- App del minero operativa en el nuevo testnet con el sistema ZK actualizado.
- Abordados hallazgos de auditorías de seguridad.
- Corregida la generación de claves en cadena y en la CLI.

### Red e infra

- Monitorización ampliada con nuevos paneles y canales de alerta renovados con notificaciones por Telegram.
- Pila de logs actualizada con rotación de historial.
- Actualizaciones de dependencias y nuevos releases en los repositorios.
- Rebranding de telemetría y Grafana alineado con la nueva identidad de marca.
- Corrección de build/release de la CLI.

### Web y app móvil

- Lanzamiento del [quantus.com](https://quantus.com) rediseñado, reconstruido con Astro y soporte de localización.
- Nuevos logotipos y pantallas de inicio en la app móvil.
- Mejor rendimiento de envío en la app móvil.
- Versiones de la app móvil 1.2.3, 1.3.0 y 1.3.1 publicadas.

### Contenido y alianzas

- Anuncio de rebranding publicado en [@QuantusNetwork](https://x.com/QuantusNetwork).
- Anuncio del whitepaper publicado en [@QuantusNetwork](https://x.com/QuantusNetwork).
- Scaling & Privacy with Post-Quantum ZK-Proofs, video de pizarra con Ethan y Chris en Quantus Youtube.
- Quantus representado en la apertura de abril de Network School, con stand en la NS Fair y taller de Crypto Payments & Privacy.
