---
title: "Quantus Weekly: testnet Planck, recompensas por CLI y el doble de rendimiento del prover"
description: "Planck es nuestro primer testnet para transacciones privadas poscuánticas: los mineros migran, las recompensas se reclaman por CLI a una dirección transparente en la wallet móvil, docs.quantus.com incluye una guía de minería, y el prover agregado duplica velocidad con arquitectura partida 2x8."
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: testnet Planck, recompensas por CLI y el doble de rendimiento del prover"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Planck es nuestro primer testnet que admite transacciones privadas poscuánticas de Quantus.

Más de la mitad de nuestros mineros migraron a Planck esta semana.

Mientras otras cadenas debaten si la amenaza cuántica es real, nosotros estrésamos la solución en público.

Ya puedes reclamar las recompensas de minería por CLI a una dirección transparente en la wallet móvil.

Validamos la minería de extremo a extremo en Apple Silicon y Linux.

Por ahora la UI móvil solo admite nuestro tipo de dirección transparente. Más noticias pronto.

[docs.quantus.com](https://docs.quantus.com) está en vivo: allí hay una guía de minería para levantar un nodo, ejecutar un minero y reclamar recompensas a tu wallet móvil.

Si has estado minando o usando versiones anteriores del testnet de Quantus, la app te pedirá migrar al actualizar.

Tu saldo se reinicia, pero si abres «mining rewards» en ajustes sigues teniendo crédito por cada bloque minado en testnets anteriores.

También seguimos cuántos bloques mina cada cuenta en Planck.

La velocidad agregada de nuestro prover se duplicó esta semana con una arquitectura partida 2x8.

Y hubo más entregas esta semana.

### Actividad en GitHub (27 pull requests fusionados):

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### Core Tech y ZK

- Rendimiento del prover agregado duplicado con arquitectura de prueba partida 2x8 (sin ZK en cada bundle de 8 hojas; envoltura ZK sobre la prueba raíz).
- Envío de nuestro artículo de investigación ZK como preprint.
- Bug de fuga de privacidad detectado y parcheado en la nueva opción ZK de máscara partida en qp-plonky2.
- Avance en ítems de auditoría sobre Dilithium umbral.
- Recompensas de minería reclamables por CLI.
- Hasher de CLI actualizado a blake2-256.
- Corrección en CLI para recuperación de saldo vía wormhole.
- Miembros del Tech Collective ejecutaron con éxito una actualización en runtime.

### Red e infra

- Planck: cambios nuevos fusionados y publicados; testnet interno Planck en marcha.
- Pruebas de estrés: nueva estrategia y varias ejecuciones.
- Faucet: mejor manejo de excepciones para Twitter y métricas ampliadas para monitoreo detallado.
- Paneles de monitoreo renovados y ampliados para Planck y el faucet.
- Alertas más selectivas.
- Nodo A1-Planck movido a Alemania; A2-Planck a EE. UU.
- Subsquid actualizado para Planck: arreglo de movimientos de saldo, hasher vuelto a blake2b, visualización de recompensas de minería.
- Explorer actualizado a Planck y rama wormhole fusionada correctamente.
- Minero MVP de punta a punta en Apple Silicon y Linux; depurando minería GPU en Linux.
- Skill de minería con IA (SKILL.md); en pruebas, minería en marcha en menos de dos minutos.

### Web y app móvil

- [docs.quantus.com](https://docs.quantus.com) en vivo.
- Desplegada la landing de [q.day](https://q.day).
- Wallet móvil v1.3.2 y v1.3.3 con correcciones para el nuevo testnet.
- Las recompensas de minería se muestran en la wallet.
- Rediseño de detalle de transacción, recibir y pantalla de actividad.
- Guía de minería actualizada.

### Contenido y alianzas

- Más de 100 inscripciones en Q-Day. Más en [q.day](https://q.day).
- Comentarios de colaboradores externos sobre el State of Quantum Report recibidos e incorporados.
