---
title: "Quantus Weekly: Lanzamiento de Dirac Testnet y Auditoría de Lattice Crypto"
description: "Actualización semanal que presenta el lanzamiento de la testnet Dirac, finalizando las actualizaciones del algoritmo PoW y la librería de criptografía de redes, y nuevas mejoras de infraestructura."
pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: Lanzamiento de Dirac Testnet y Auditoría de Lattice Crypto"
featured: false
tags:
  [
    "weekly-update",
    "dirac-testnet",
    "lattice-cryptography",
    "pow",
    "libp2p",
    "ghostdag",
    "blue-green-deployment",
  ]
---

Esta semana el equipo lanzó la testnet Dirac, finalizando la actualización en toda la cadena del algoritmo de prueba de trabajo y la librería de criptografía de redes, qp-rusty-crystals. Esta librería principal está ahora bajo auditoría externa e incluye firmas de tiempo constante. La actualización está ahora integrada en la billetera móvil y libp2p.

**SI ERES UN MINERO DEBES ACTUALIZAR A LA NUEVA TESTNET DIRAC**

## Noticias de Desarrollo
- Informe semanal de actividad en Github que incluye 12 pull requests y 3 fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## Core Tech
- Implementación de referencia completa para qp-rusty-crystals con generación de claves y firmas de tiempo constante lanzada y fusionada.
- Se resolvieron todas las pruebas KAT para rusty crystals, se hizo de tiempo constante y se corrigieron los problemas pendientes del script de lanzamiento.
- Se inició la auditoría de qp-rusty-crystals.
- Se terminó la implementación del circuito de verificación de cabecera de bloque.
- Se actualizó el hasher de cabecera de bloque a una nueva versión que elimina el padding del circuito.
- Se investigó y resolvió un error relacionado con la falta de logs de digest en las cabeceras de bloque.
- Se añadió una función de caché al binario de ejemplo de wormhole para guardar la última prueba para facilitar la depuración.
- Se comenzó la implementación del paper de consenso GHOSTDAG.

## Network & Infra
- Lanzamiento de Dirac 0.4.0 en todos los servidores.
- Lanzamiento de la build del minero externo 1.0.0.
- Actualización de la cadena para la actualización de rusty crystals.
- Nuevos paneles de Prometheus y Grafana, ahora configurados con notificaciones de correo electrónico funcionales para alertas.
- Nuevo servicio de telemetría actualizado.
- Se creó una configuración de referencia para máquinas Fedora.
- Se desplegaron 2 nuevos servidores VPS asegurados para la nueva testnet Dirac.
- Se aseguró el dominio Quantus.cat y se configuraron túneles de Cloudflare para todas las máquinas.
- Se mejoró el proceso de despliegue de Subsquid para soportar despliegues azul-verde para actualizaciones sin tiempo de inactividad.
- Se crearon flujos de trabajo para autogenerar y publicar imágenes de Docker en GitHub.
- Se corrigieron problemas de indexación en http://quantu.se/ y se actualizó la metadata para apuntar a la URL del nodo correcta.

## Web & Mobile App Updates
- Se terminó la función de notificaciones de la aplicación móvil.
- Se refactorizó el manejo de route intent para mejorar el rendimiento y la fiabilidad de los deep links.
- El diseño del panel del minero es ahora totalmente responsivo.
- Se corrigió un error de Quantus Explorer donde la función de búsqueda todavía usaba un endpoint de GraphQL antiguo.
- Se refactorizó el cliente de Quantus Explorer API para usar hooks modernos para un mejor rendimiento.

## Content & Partnerships
- Podcast con Remus Boroiu, 9 veces campeón de culturismo, emprendedor y creador: https://www.youtube.com/watch?v=OtBKnaFAe_8
- Nota de prensa vía Chainwire.

## Quantum Canary
- Un análisis de las acciones cuánticas: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- Una inmersión profunda en el papel influyente de la RAND Corporation en la configuración de la política global y la aceleración del cronograma para la migración PQC: https://www.quantumcanary.org/insights/rand-quantum-controversy
- Princeton investiga el triple de tiempo de coherencia para 45 qubits de tantalio sobre zafiro: https://www.nature.com/articles/s41586-025-09687-4
