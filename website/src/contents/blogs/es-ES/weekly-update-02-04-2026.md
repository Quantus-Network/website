---
title: "Quantus Weekly: Cuentas de alta seguridad y prevención de fraude"
description: "Actualización semanal que presenta nuestras nuevas cuentas de alta seguridad con bloqueos de tiempo personalizables y guardianes, pruebas de integración multisig y la nueva funcionalidad de recuperación de fondos."
pubDate: "2026-02-04"
heroImage: "/blog/covers/weekly-update-02-04-2026.webp"
heroAlt: "Quantus Weekly: Cuentas de alta seguridad y prevención de fraude"
featured: false
tags:
  [
    "weekly-update",
    "security",
    "guardian",
    "time-lock",
    "fraud-prevention",
    "multisig",
    "plonky2",
  ]
---

Chainalysis estimó que se robaron 17.000 millones de dólares en criptomonedas en 2025. La propuesta era "sé tu propio banco". La otra mitad es "sé tu propio equipo de seguridad". Para ser claros, "una cuenta bancaria suiza en tu bolsillo, pero solo para expertos en ciberseguridad" sigue siendo increíblemente genial. Pero la industria hizo un flaco favor a los usuarios comunes inocentes que se vieron perjudicados al mover su patrimonio neto onchain sin siquiera saber qué es la criptografía asimétrica.

Así que cuando dices "sé tu propio banco" también deberías mencionar que los bancos tienen departamentos de fraude, monitoreo de transacciones y períodos de reversión. Detectan actividades sospechosas, congelan cuentas e interceptan transacciones maliciosas. Dejas todo eso atrás cuando asumes la custodia de tus propias llaves.

Desafortunadamente, "usa una billetera de hardware y verifica exactamente todo lo que firmas cada vez" es un consejo inútil. Si Bybit está firmando a ciegas en su multisig de almacenamiento en frío, probablemente nadie esté haciendo lo suficiente. Es irrazonable esperar que los usuarios operen a un nivel de seguridad lo suficientemente alto. Es insostenible que "perder todo tu dinero" sea un resultado de usar tu aplicación.

Entonces, ¿qué es peor, perder todo tu dinero o una suposición de confianza? Depende de la suposición de confianza, ¿verdad? Hay un punto medio entre "no confíes en nadie" y "confía en un banco". Confía en alguien que elijas: un amigo, un familiar, una multisig con tu abogado o tu sobrino experto en tecnología, un interruptor de hombre muerto.

Hemos incorporado eso en [@QuantusNetwork](https://x.com/@QuantusNetwork). Las cuentas de alta seguridad en Quantus tienen un bloqueo de tiempo personalizable en cada transacción saliente. Durante ese período, un guardián designado puede interceptar y cancelar la transacción. Un guardián no puede firmar en tu nombre, pero puede detener cualquier transacción saliente.

Así que si un ladrón tiene tus llaves, no necesariamente tiene la capacidad de llevarse todo lo que posees. Tú eliges al guardián y estableces el período. Tal vez sea un retraso de 24 horas con tu cónyuge para cualquier transacción superior a 1.000 dólares. Tal vez sea una billetera de hardware que guardas en una caja de seguridad. Tal vez sea un servicio profesional que monitorea la actividad en busca de posibles fraudes en tiempo real.

Esta semana comenzamos a probar la integración multisig para cuentas de guardián. También agregamos la funcionalidad de recuperación de fondos a la cadena, para que las transacciones interceptadas puedan ser devueltas al propietario original.

Aquí está lo demás que enviamos esta semana:

### Actividad en GitHub (5 pull requests fusionados):

![Estadísticas de Github](/blog/assets/github-stats-weekly-update-02-04-2026.webp)

### Tecnología Core y ZK

- Pallet multisig para cuentas de alta seguridad en fase de prueba con comandos CLI.
- Se agregó la funcionalidad de recuperación de fondos a la cadena para cuentas de alta seguridad.
- Se actualizó qp-plonky2 con los cambios realizados en el repositorio original de plonky2.

### Actualizaciones de la Aplicación Web y Móvil

- Se rediseñó la interfaz de usuario de las pantallas de misiones con degradados e integración de billetera.
- Se eliminaron activos no utilizados en la aplicación.

### Contenido y Alianzas

- Las cuentas de [@QuantusNetwork](https://x.com/@QuantusNetwork) y [@YuviLightman](https://x.com/@YuviLightman) superaron los 1.000 seguidores.
- Podcast con Henry Love sobre IA y productividad (en nuestro Youtube).

### Actualizaciones de la Industria

- Quantum Canary: ["¿Reemplazará Zcash a Bitcoin?"](https://x.com/QuantumCanary_/status/2016327421797294286)
