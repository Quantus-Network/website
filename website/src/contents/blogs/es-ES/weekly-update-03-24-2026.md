---
title: "Quantus Weekly: segundo halving — pruebas ZK 4x más rápidas en dos semanas"
description: "Otro recorte 2x al tiempo del probador, hashing Poseidon, corrección de minería, límites de tasa en Senoti, lanzamiento del whitepaper, revisión del swap en iOS y Quantum Canary sobre Solana y seguridad cuántica."
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus Weekly: segundo halving — pruebas ZK 4x más rápidas en dos semanas"
featured: false
tags:
  [
    "weekly-update",
    "zk-proofs",
    "poseidon",
    "privacy",
    "wormhole",
    "performance",
    "scalability",
  ]
---

2 es un número especial.

2+2 es 4. 2x2 es 4. 2² es 4.

Es el único número en el que la suma, la multiplicación y la potenciación dan la misma respuesta.

Hace dos semanas avanzamos mucho optimizando nuestra pipeline de pruebas ZK.

La semana pasada redujimos a la mitad el tiempo del probador (dividiendo entre 2).

Esta semana lo volvimos a reducir a la mitad (el segundo halving).

4x más rápido en 14 días.

Cada milisegundo en la pipeline de pruebas importa para la velocidad y la UX de nuestras transacciones privadas.

Cuando el usuario pulsa enviar, quiere que el receptor vea los fondos al instante.

Nuestras transacciones wormhole —las que rompen el vínculo entre emisor y receptor— requieren una prueba ZK.

La prueba ZK añade tiempo antes de la liquidación. Cada segundo y cada vez que el receptor actualiza sin ver fondos es un fallo.

Hay trucos de UI que mejoran la experiencia, y están bien.

Pero la liquidación debe sentirse y ser extremadamente rápida.

Estamos reduciendo esos segundos.

Esto es lo que más lanzamos esta semana:

### Actividad en GitHub (12 pull requests fusionados):

![Github Stats](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### Core Tech y ZK:

- Otro 50 % menos de tiempo de probador con optimizaciones de base de datos amigables con ZK. Segunda semana seguida con mejora 2x en la pipeline de pruebas.
- Hashing no inyectivo implementado en Poseidon, con nuevos lanzamientos versionados de qp-poseidon-constants.
- Corrección del ajuste de dificultad para un caso límite en el algoritmo de minería.
- Revisión asistida por IA de todos los pallets y crates principales, con informes de error sobre lo marcado.
- PRs de limpieza fusionados para los problemas detectados en la revisión del código.

### Red e infraestructura:

- Añadida limitación de tasa al registrador de dispositivos del servicio de notificaciones Senoti.
- Explorer actualizado: cambios recientes fusionados, conflictos resueltos y API ajustada.

### Web y app móvil:

- Publicado el nuevo whitepaper en el sitio con estilo y contenido renovados.
- Publicada la última actualización semanal como entrada en [quantus.com/blog](https://quantus.com/blog).
- Suscripción «peek» al pool de transacciones implementada y probada de extremo a extremo.
- Iniciado el proceso de revisión de Apple para la función swap en la app iOS.

### Contenido y alianzas:

- Borrador de 20 páginas de nuestro informe sectorial «State of Quantum» completado y en distribución para comentarios. Escríbenos si te interesa.
- Nueva contratación de marketing para redes sociales.
- Fecha del evento Q-Day confirmada: 25 de abril en Network School.

### Actualizaciones del sector:

- Quantum Canary: [Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)
