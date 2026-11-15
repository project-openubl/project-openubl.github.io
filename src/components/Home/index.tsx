import React, { type ComponentType, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import ArrowRightIcon from "@patternfly/react-icons/dist/esm/icons/arrow-right-icon";
import CalculatorIcon from "@patternfly/react-icons/dist/esm/icons/calculator-icon";
import CodeIcon from "@patternfly/react-icons/dist/esm/icons/code-icon";
import GithubIcon from "@patternfly/react-icons/dist/esm/icons/github-icon";
import LockIcon from "@patternfly/react-icons/dist/esm/icons/lock-icon";
import PaperPlaneIcon from "@patternfly/react-icons/dist/esm/icons/paper-plane-icon";

import CodeDemo from "./CodeDemo";
import LazyPlayground from "../Playground";
import styles from "./styles.module.css";

const GITHUB_URL = "https://github.com/project-openubl";

const container = "mx-auto w-full max-w-6xl px-6";

/* PatternFly buttons: pill shaped, primary (filled) and secondary (outlined) */
const button = clsx(
  styles.plainLink,
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
);
const primaryButton = clsx(button, "bg-brand text-on-brand hover:bg-brand-hover hover:text-on-brand");
const secondaryButton = clsx(
  button,
  "border border-solid border-brand text-brand hover:border-brand-hover hover:bg-brand-subtle hover:text-brand-hover",
);

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold tracking-wide text-brand uppercase">{eyebrow}</p>
      <h2 className="mb-0 font-display text-3xl leading-tight font-bold tracking-tight text-fg md:text-[2.5rem]">
        {title}
      </h2>
      {children && <p className="mt-4 mb-0 text-lg leading-relaxed text-fg-subtle">{children}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-page">
      <div className={clsx(container, "pt-20 pb-24 md:pt-28")}>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-brand-subtle px-4 py-1 text-sm font-medium text-brand">
            Open source · Java · Rust · Python · Go
          </p>
          <h1 className="mb-6 font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight text-fg sm:text-6xl lg:text-[4.75rem]">
            <span className="block">Facturación electrónica</span>
            <span className="block text-brand">sin intermediarios.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-fg-subtle md:text-xl">
            Crea, firma y envía comprobantes electrónicos a la SUNAT desde tu propio software, en el
            lenguaje que ya usas.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/docs/quickstart" className={primaryButton}>
              Empezar ahora
              <ArrowRightIcon />
            </Link>
            <Link href={GITHUB_URL} className={secondaryButton}>
              <GithubIcon />
              Ver en GitHub
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-4xl md:mt-20">
          <CodeDemo />
        </div>
      </div>
    </section>
  );
}

function Try() {
  return (
    <section id="playground" className="border-y border-solid border-x-0 border-line bg-band py-24 md:py-28">
      <div className={container}>
        <SectionHeader eyebrow="Pruébalo ahora" title="Escribe YAML, obtén el XML.">
          Este es el núcleo real de xhandler, compilado a WebAssembly y ejecutándose en tu navegador.
          Elige un comprobante, edítalo y mira el XML y los cálculos al instante. Nada sale de tu
          equipo.
        </SectionHeader>
        <LazyPlayground />
      </div>
    </section>
  );
}

interface Feature {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
}

const FEATURES: Feature[] = [
  {
    title: "Una API, cuatro lenguajes",
    description:
      "Los mismos conceptos en Java, Rust, Python y Go: crear, firmar y enviar. Y una línea de comandos para todo lo demás.",
    Icon: CodeIcon,
  },
  {
    title: "Sin costo por comprobante",
    description: "Open source. Sin suscripciones ni límites. Tus datos y tus certificados se quedan contigo.",
    Icon: LockIcon,
  },
  {
    title: "Cálculos automáticos",
    description:
      "Describe solo lo esencial: impuestos, totales y leyendas se calculan por ti con las tasas vigentes.",
    Icon: CalculatorIcon,
  },
  {
    title: "SUNAT u OSE",
    description:
      "Envía, procesa el CDR, consulta tickets y valida comprobantes, en el entorno beta o en producción.",
    Icon: PaperPlaneIcon,
  },
];

function Features() {
  return (
    <section className="bg-page py-24 md:py-28">
      <div className={container}>
        <SectionHeader eyebrow="¿Por qué Project OpenUBL?" title="Tú tienes el control de tu facturación.">
          Construye tu propio sistema de facturación electrónica en lugar de alquilar uno.
        </SectionHeader>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ title, description, Icon }) => (
            <div key={title} className="rounded-2xl border border-solid border-line bg-card p-6">
              <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-brand-subtle text-xl text-brand">
                <Icon />
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-fg">{title}</h3>
              <p className="m-0 leading-relaxed text-fg-subtle">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Try />
      <Features />
    </main>
  );
}
