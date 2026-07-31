---
title: "Quantus Weekly: Cuentas de alta seguridad y fraude"
description: "Cuentas de alta seguridad con time locks y guardians personalizables, pruebas de integración multisig y nueva función recover funds. Resumen semanal de Quantus."

pubDate: "2026-02-04"
heroImage: "/blog/covers/weekly-update-02-04-2026.webp"
heroAlt: "Quantus Weekly: Cuentas de alta seguridad y fraude"
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

Chainalysis estimó que se robaron 17.000 millones de dólares en cripto en 2025. El pitch era "sé tu propio banco". La otra mitad es "sé tu propio equipo de seguridad". Para ser claros, "una cuenta suiza en el bolsillo, pero solo para expertos en ciberseguridad" sigue siendo increíblemente molón. Pero la industria hizo un flaco favor a los normies inocentes que se quedaron rekt al mover su patrimonio on-chain sin saber siquiera qué es la criptografía asimétrica.

Así que cuando dices "sé tu propio banco" también deberías mencionar que los bancos tienen departamentos de fraude, monitorización de transacciones y periodos de reversión. Detectan actividad sospechosa, congelan cuentas e interceptan transacciones maliciosas. Dejas todo eso atrás cuando tomas custodia de tus propias claves.

Desafortunadamente, "usa un hardware wallet y verifica exactamente todo lo que firmas cada vez" es un consejo poco útil. Si Bybit está haciendo blind signing a lo yolo en su multisig de cold storage, probablemente nadie está haciendo suficiente. Es irrazonable esperar que los usuarios operen a un nivel de seguridad tan alto. Es insostenible que "perder todo tu dinero" sea un resultado de usar tu app.

Entonces, ¿qué es peor, perder todo tu dinero o una suposición de confianza? Depende de la suposición de confianza, ¿no? Hay un término medio entre "no confíes en nadie" y "confía en un banco". Confía en alguien que elijas: un amigo, un familiar, un multisig con tu abogado o tu sobrino tech-savvy, un dead man's switch.

Lo hemos integrado en [@QuantusNetwork](https://x.com/@QuantusNetwork). Las cuentas de alta seguridad en Quantus tienen un time lock personalizable en cada transacción saliente. Durante esa ventana, un guardian designado puede interceptar y cancelar la transacción. Un guardian no puede firmar en tu nombre, pero sí puede bloquear cualquier transacción saliente.

Así que si un ladrón tiene tus claves, no necesariamente tiene la capacidad de llevarte todo lo que tienes. Tú eliges al guardian y tú defines la ventana. Quizá un delay de 24 horas con tu pareja para cualquier transacción mayor de 1.000 $. Quizá un hardware wallet que guardas en una caja de seguridad. Quizá un servicio profesional que monitoriza la actividad en busca de fraude potencial en tiempo real.

Esta semana comenzamos a probar la integración multisig para cuentas guardian. También añadimos la funcionalidad recover funds a la cadena, para que las transacciones interceptadas puedan recuperarse para el propietario original.

Esto es lo más que lanzamos esta semana:

### Actividad en GitHub (5 pull requests fusionados):

![Estadísticas de GitHub](/blog/assets/github-stats-weekly-update-02-04-2026.webp)

### Tecnología central y ZK

- Pallet multisig para cuentas de alta seguridad en fase de pruebas con comandos CLI.
- Añadida funcionalidad recover funds a la cadena para cuentas de alta seguridad.
- Actualizamos qp-plonky2 con los cambios hechos en el repo original plonky2.

### Actualizaciones web y app móvil

- Refactorizamos la UI de las pantallas de quests con gradientes e integración con el wallet.
- Limpiamos assets no utilizados en la app.

### Contenido y alianzas

- Las cuentas de [@QuantusNetwork](https://x.com/@QuantusNetwork) y [@YuviLightman](https://x.com/@YuviLightman) superaron los 1.000 seguidores.
- Podcast con Henry Love sobre IA y productividad (en nuestro Youtube).

### Actualidad del sector

- Quantum Canary: ["¿Reemplazará Zcash a Bitcoin?"](https://x.com/QuantumCanary_/status/2016327421797294286)
