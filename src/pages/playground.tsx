import React, { type ReactNode } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import LazyPlayground from "../components/Playground";

export default function PlaygroundPage(): ReactNode {
  return (
    <Layout
      title="Playground"
      description="Crea el XML de cualquier comprobante electrónico de la SUNAT desde YAML, con el núcleo de xhandler ejecutándose en tu navegador."
    >
      <main className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-10 max-w-3xl">
          <h1 className="mb-3 font-display text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-white/90">
            Playground
          </h1>
          <p className="m-0 text-lg leading-relaxed text-neutral-600 dark:text-white/60">
            Describe un comprobante en YAML y obtén su XML UBL 2.1 y los valores
            calculados. Usa el mismo formato que la{" "}
            <Link to="/docs/use-cases/cli">línea de comandos</Link>; todo se
            ejecuta en tu navegador con el núcleo de xhandler compilado a
            WebAssembly.
          </p>
        </div>
        <LazyPlayground />
      </main>
    </Layout>
  );
}
