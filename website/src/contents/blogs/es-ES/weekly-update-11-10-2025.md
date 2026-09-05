---
published: true
title: "Quantus Weekly: testnet Dirac y auditoría lattice"
description: "Lanzamos la testnet Dirac con PoW actualizado y cripto lattice en auditoría externa. Mineros deben actualizar; wallet y libp2p ya lo integran."

pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: testnet Dirac y auditoría lattice"
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

Esta semana el equipo lanzó la testnet Dirac, finalizando la actualización a nivel de cadena del algoritmo proof of work y la biblioteca de criptografía lattice qp-rusty-crystals. Esta biblioteca central está ahora bajo auditoría externa e incluye firmas de tiempo constante. La actualización ya está integrada en el wallet móvil y libp2p.

**SI ES MINERO, DEBE ACTUALIZAR A LA NUEVA TESTNET DIRAC**

## Noticias de Desarrollo

- Informe semanal de actividad en Github con 12 pull requests y 3 fusionados: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## Core Tech

- Implementación de referencia completa para qp-rusty-crystals con generación de claves y firmas de tiempo constante publicada y fusionada.
- Resolvimos todas las pruebas KAT para rusty crystals, lo hicimos de tiempo constante y corregimos problemas pendientes del script de release.
- Iniciamos la auditoría de qp-rusty-crystals.
- Finalizamos la implementación del circuito de verificación del header de bloque.
- Actualizamos el hasher del header de bloque a una nueva versión que elimina el padding del circuito.
- Investigamos y resolvimos un error relacionado con logs de digest faltantes en headers de bloque.
- Añadimos una función de caché al binario de ejemplo wormhole para guardar la última prueba y facilitar la depuración.
- Comenzamos la implementación del paper de consenso GHOSTDAG.

## Network & Infra

- Lanzamos Dirac 0.4.0 en todos los servidores.
- Publicamos la build del minero externo 1.0.0.
- Actualizamos la cadena para la actualización de rusty crystals.
- Nuevos dashboards de Prometheus y Grafana, ahora configurados con notificaciones por email operativas para alertas.
- Nuevo servicio de telemetría actualizado.
- Creamos una configuración de referencia para máquinas Fedora.
- Desplegamos 2 nuevos servidores VPS asegurados para la nueva testnet Dirac.
- Aseguramos el dominio Quantus.cat y configuramos túneles Cloudflare para todas las máquinas.
- Mejoramos el proceso de despliegue de Subsquid para soportar despliegues blue-green con cero downtime.
- Creamos workflows para auto-generar y publicar imágenes Docker en GitHub.
- Corregimos problemas de indexación en http://quantu.se/ y actualizamos metadatos para apuntar a la URL correcta del nodo.

## Web & Mobile App Updates

- Finalizamos la función de notificaciones de la app móvil.
- Refactorizamos el manejo de route intent para mejorar el rendimiento y la fiabilidad del deep linking.
- El layout del dashboard del minero ahora es totalmente responsive.
- Corregimos un error en Quantus Explorer donde la búsqueda seguía usando un endpoint GraphQL antiguo.
- Refactorizamos el cliente API de Quantus Explorer para usar hooks modernos y mejorar el rendimiento.

## Content & Partnerships

- Podcast con Remus Boroiu, campeón de culturismo en 9 ocasiones, emprendedor y creador.
- Comunicado de prensa vía Chainwire.

## Quantum Canary

- Un análisis de acciones cuánticas: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- Un análisis profundo del papel influyente de la RAND Corporation en la política global y en acelerar la migración a PQC: https://www.quantumcanary.org/insights/rand-quantum-controversy
- Investigadores de Princeton triplican los tiempos de coherencia para 45 qubits de tantalio sobre zafiro: https://www.nature.com/articles/s41586-025-09687-4
