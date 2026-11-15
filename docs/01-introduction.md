---
title: Introducción
description: Project OpenUBL es una familia de librerías open source para crear, firmar y enviar comprobantes electrónicos a la SUNAT desde Java, Rust, Python y Go.
slug: /
---

<head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        ["Java", "xhandler-java"],
        ["Rust", "xhandler-rust"],
        ["Python", "xhandler-python"],
        ["Go", "xhandler-go"],
      ].map(([language, repository]) => ({
        "@type": "SoftwareSourceCode",
        name: repository,
        description: `xhandler para ${language}: crea, firma y envía comprobantes electrónicos a la SUNAT.`,
        codeRepository: `https://github.com/project-openubl/${repository}`,
        programmingLanguage: language,
        author: { "@id": "https://project-openubl.github.io/#organization" },
      })),
    })}
  </script>
</head>

**Project OpenUBL** es un proyecto open source para que crees tu propio software de facturación electrónica para la SUNAT del Perú, sin intermediarios y sin costo por comprobante.

Su componente principal es **xhandler**, una librería disponible en cuatro lenguajes con la misma API y los mismos conceptos:

| Lenguaje | Repositorio | Requisitos |
|---|---|---|
| Java | [xhandler-java](https://github.com/project-openubl/xhandler-java) | Java 25 o superior |
| Rust | [xhandler-rust](https://github.com/project-openubl/xhandler-rust) | Rust estable |
| Python | [xhandler-python](https://github.com/project-openubl/xhandler-python) | Python 3.10 o superior |
| Go | [xhandler-go](https://github.com/project-openubl/xhandler-go) | Go 1.25 o superior |

Además, `xhandler` es también una [línea de comandos](./04-use-cases/10-cli.mdx) para crear, firmar y enviar comprobantes sin escribir código.

:::info Versión 6

Esta documentación corresponde a **xhandler 6**, que todavía se encuentra en fase _alpha_. La API puede cambiar antes de la versión final.

:::

## ¿Qué puedes hacer?

- **Crear** el XML (UBL 2.1) de cualquier comprobante de la SUNAT: facturas, boletas, notas de crédito y débito, guías de remisión, resúmenes diarios, comunicaciones de baja, reversiones, percepciones y retenciones. Solo describes los datos esenciales; impuestos, totales y leyendas se calculan automáticamente.
- **Firmar** el XML con tu certificado digital.
- **Enviar** el XML a la SUNAT o a cualquier OSE, procesar el CDR, consultar tickets y validar comprobantes.

## ¿Por dónde empiezo?

1. [Instala](./02-installation.mdx) la librería para tu lenguaje.
2. Sigue el [inicio rápido](./03-quickstart.mdx) para enviar tu primera factura al entorno beta de la SUNAT.
3. Revisa los [casos de uso](./category/casos-de-uso) para emitir los demás comprobantes.

## Comparación con otras soluciones

Project OpenUBL no es un software de facturación ya hecho ni un servicio que cobra por comprobante: es la base para que construyas el tuyo. Todo el código es abierto, así que puedes auditarlo, adaptarlo y ejecutarlo en tu propia infraestructura.

## ¿Hay algo que mejorar?

Si encuentras un error en la documentación o tienes ideas para mejorar Project OpenUBL, abre un _issue_ en el repositorio de tu lenguaje o inicia una conversación en [GitHub Discussions](https://github.com/project-openubl/xhandler-java/discussions).
