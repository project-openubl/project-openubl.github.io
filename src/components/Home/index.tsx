import React, {
  useState,
  type ComponentType,
  type ReactNode,
  type SVGProps,
} from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import CodeDemo from "./CodeDemo";
import LazyPlayground from "../Playground";
import styles from "./styles.module.css";
import {
  ArrowForwardIcon,
  CheckIcon,
  CodeIcon,
  CopyIcon,
  ForumIcon,
  FunctionsIcon,
  GitHubIcon,
  LockIcon,
  SendIcon,
} from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const GITHUB_URL = "https://github.com/project-openubl";
const DISCUSSIONS_URL =
  "https://github.com/project-openubl/xhandler-java/discussions";

const container = "mx-auto w-full max-w-6xl px-6";

/* ---------------------------------------------------------------- buttons */

const buttonBase = clsx(
  styles.plainLink,
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
);

const filledButton = clsx(
  buttonBase,
  "bg-primary-600 text-white shadow-md shadow-primary-900/20 hover:bg-primary-700 hover:text-white hover:shadow-lg",
  "dark:bg-primary-a100 dark:text-primary-900 dark:shadow-none dark:hover:bg-primary-200 dark:hover:text-primary-900",
);

const outlinedButton = clsx(
  buttonBase,
  "border border-solid border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:bg-grey-100 hover:text-neutral-900",
  "dark:border-white/15 dark:bg-transparent dark:text-white/90 dark:hover:border-white/30 dark:hover:bg-white/5 dark:hover:text-white",
);

/* --------------------------------------------------------------- headings */

function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold tracking-wide text-primary-600 dark:text-primary-a100">
        {eyebrow}
      </p>
      <h2 className="mb-0 font-display text-3xl leading-tight font-bold tracking-tight text-neutral-900 md:text-[2.5rem] dark:text-white/90">
        {title}
      </h2>
      {children && (
        <p className="mt-4 mb-0 text-lg leading-relaxed text-neutral-600 dark:text-white/60">
          {children}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------- hero */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className={styles.heroGlow} />
      <div className={clsx(container, "relative pt-20 pb-20 md:pt-28")}>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-800 dark:bg-primary-a100/10 dark:text-primary-a100">
            <span className="size-2 rounded-full bg-accent-500 dark:bg-accent-a400" />
            Open source · Java · Rust · Python · Go
          </p>

          <h1 className="mb-6 font-display text-[2.6rem] leading-[1.04] font-black tracking-tight text-neutral-900 sm:text-6xl lg:text-[5rem] dark:text-white">
            <span className="block">Facturación electrónica</span>
            <span className="block text-primary-a400 dark:text-primary-a100">
              sin intermediarios.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl dark:text-white/60">
            Crea, firma y envía comprobantes electrónicos a la SUNAT desde tu
            propio software, en el lenguaje que ya usas. Open source y sin costo
            por comprobante.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/docs/quickstart" className={filledButton}>
              Empezar ahora
              <ArrowForwardIcon className="size-5" />
            </Link>
            <Link href={GITHUB_URL} className={outlinedButton}>
              <GitHubIcon className="size-5" />
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

/* ------------------------------------------------------------- playground */

function Try() {
  return (
    <section
      id="playground"
      className="border-y border-solid border-x-0 border-grey-200 bg-grey-50 py-24 md:py-32 dark:border-white/5 dark:bg-surface-1"
    >
      <div className={container}>
        <SectionHeader eyebrow="Pruébalo ahora" title="Escribe YAML, obtén el XML.">
          Este es el núcleo real de xhandler, compilado a WebAssembly y
          ejecutándose en tu navegador. Elige un comprobante, edítalo y mira el
          XML y los cálculos al instante. Nada sale de tu equipo.
        </SectionHeader>
        <LazyPlayground />
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- features */

interface Feature {
  title: string;
  description: string;
  Icon: Icon;
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
    description:
      "Open source. Sin suscripciones ni límites. Tus datos y tus certificados se quedan contigo.",
    Icon: LockIcon,
  },
  {
    title: "Cálculos automáticos",
    description:
      "Describe solo lo esencial: impuestos, totales y leyendas se calculan por ti con las tasas vigentes.",
    Icon: FunctionsIcon,
  },
  {
    title: "SUNAT u OSE",
    description:
      "Envía, procesa el CDR, consulta tickets y valida comprobantes, en el entorno beta o en producción.",
    Icon: SendIcon,
  },
];

function Features() {
  return (
    <section className="py-24 md:py-32">
      <div className={container}>
        <SectionHeader
          eyebrow="¿Por qué Project OpenUBL?"
          title="Tú tienes el control de tu facturación."
        >
          Construye tu propio sistema de facturación electrónica en lugar de
          alquilar uno.
        </SectionHeader>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ title, description, Icon }) => (
            <div key={title}>
              <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-a100/10 dark:text-primary-a100">
                <Icon className="size-6" />
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-neutral-900 dark:text-white/90">
                {title}
              </h3>
              <p className="m-0 leading-relaxed text-neutral-600 dark:text-white/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- languages */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label="Copiar"
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border-0 bg-white/5 text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
    >
      {copied ? (
        <CheckIcon className="size-4 text-accent-a400" />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </button>
  );
}

interface Language {
  name: string;
  description: string;
  install: string;
  to: string;
}

const LANGUAGES: Language[] = [
  {
    name: "Java",
    description:
      "Extensiones para Spring Boot, Quarkus y Jakarta EE. Compatible con GraalVM native.",
    install: "io.github.project-openubl:xbuilder:6.0.0-alpha.1",
    to: "/docs/installation?lang=java",
  },
  {
    name: "Rust",
    description: "Librería y línea de comandos xhandler.",
    install: "cargo add xhandler@6.0.0-alpha.1",
    to: "/docs/installation?lang=rust",
  },
  {
    name: "Python",
    description: "Python 3.10 o superior. Sin extensiones nativas que compilar.",
    install: "pip install --pre xhandler",
    to: "/docs/installation?lang=python",
  },
  {
    name: "Go",
    description: "Go puro, sin cgo. Funciona en cualquier plataforma que soporte Go.",
    install: "go get github.com/project-openubl/xhandler-go/v6@v6.0.0-alpha.1",
    to: "/docs/installation?lang=go",
  },
];

function Languages() {
  return (
    <section className="border-y border-solid border-x-0 border-grey-200 bg-grey-50 py-24 md:py-32 dark:border-white/5 dark:bg-surface-1">
      <div className={container}>
        <SectionHeader eyebrow="Lenguajes" title="Habla el idioma de tu equipo.">
          Elige tu lenguaje: los conceptos y la documentación son los mismos.
        </SectionHeader>

        <div className="grid gap-6 md:grid-cols-2">
          {LANGUAGES.map(({ name, description, install, to }) => (
            <div
              key={name}
              className="flex min-w-0 flex-col rounded-3xl border border-solid border-grey-200 bg-white p-6 md:p-8 dark:border-white/5 dark:bg-surface-4"
            >
              <h3 className="mb-2 font-display text-2xl font-bold text-neutral-900 dark:text-white/90">
                {name}
              </h3>
              <p className="mb-6 flex-1 leading-relaxed text-neutral-600 dark:text-white/60">
                {description}
              </p>
              <div className="mb-5 flex items-center gap-3 rounded-xl bg-neutral-900 py-2 pr-2 pl-4">
                <code className="min-w-0 flex-1 overflow-x-auto border-0 bg-transparent p-0 font-mono text-[13px] whitespace-nowrap text-neutral-100">
                  {install}
                </code>
                <CopyButton text={install} />
              </div>
              <Link
                to={to}
                className={clsx(
                  styles.plainLink,
                  "group inline-flex items-center gap-1.5 font-semibold text-primary-600 hover:text-primary-800 dark:text-primary-a100 dark:hover:text-primary-200",
                )}
              >
                Instalar para {name}
                <ArrowForwardIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- cta */

function CallToAction() {
  return (
    <section className="py-24 md:py-32">
      <div className={container}>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary-700 px-6 py-16 text-center md:px-16 md:py-20 dark:bg-primary-900">
          <div aria-hidden="true" className={styles.ctaPattern} />
          <div className="relative">
            <h2 className="mx-auto mb-4 max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl">
              Emite tu primera factura electrónica hoy.
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-primary-100">
              Sigue la guía de inicio rápido y envía tu primer comprobante al
              entorno beta de la SUNAT en minutos.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/docs/quickstart"
                className={clsx(
                  buttonBase,
                  "bg-white text-primary-800 shadow-md hover:bg-primary-50 hover:text-primary-900",
                )}
              >
                Inicio rápido
                <ArrowForwardIcon className="size-5" />
              </Link>
              <Link
                href={DISCUSSIONS_URL}
                className={clsx(
                  buttonBase,
                  "border border-solid border-white/30 text-white hover:border-white/60 hover:bg-white/10 hover:text-white",
                )}
              >
                <ForumIcon className="size-5" />
                Haz una pregunta
              </Link>
            </div>
          </div>
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
      <Languages />
      <CallToAction />
    </main>
  );
}
