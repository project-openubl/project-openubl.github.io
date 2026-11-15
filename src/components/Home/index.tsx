import React, { type ComponentType, type ReactNode, type SVGProps } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";

import styles from "./styles.module.css";
import {
  ArrowRightIcon,
  ChatIcon,
  FileCodeIcon,
  GitHubIcon,
  SearchIcon,
  SendIcon,
  ServerIcon,
} from "./icons";

const GITHUB_URL = "https://github.com/project-openubl";
const CHAT_URL = "https://projectopenubl.zulipchat.com";

const HERO_SNIPPET = `Invoice invoice = Invoice.builder()
    .serie("F001")
    .numero(1)
    .proveedor(Proveedor.builder()
        .ruc("12345678912")
        .razonSocial("Softgreen S.A.C.")
        .build())
    .cliente(Cliente.builder()
        .nombre("Carlos Feria")
        .numeroDocumentoIdentidad("12121212121")
        .tipoDocumentoIdentidad(Catalog6.RUC.toString())
        .build())
    .detalle(DocumentoVentaDetalle.builder()
        .descripcion("Item1")
        .cantidad(new BigDecimal("10"))
        .precio(new BigDecimal("100"))
        .build())
    .build();

new ContentEnricher(defaults, dateProvider).enrich(invoice);

String xml = TemplateProducer.getInstance()
    .getInvoice()
    .data(invoice)
    .render();`;

const container = "mx-auto w-full max-w-6xl px-6";

const buttonBase =
  "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500";

const primaryButton = clsx(
  buttonBase,
  styles.plainLink,
  "bg-slate-900 text-white hover:bg-slate-700 hover:text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:hover:text-slate-900",
);

const secondaryButton = clsx(
  buttonBase,
  styles.plainLink,
  "border border-solid border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-900 dark:hover:text-slate-100",
);

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-mono text-xs font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-0 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
      {children}
    </h2>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-solid border-x-0 border-t-0 border-slate-200 dark:border-slate-800">
      <div
        aria-hidden="true"
        className={clsx("pointer-events-none absolute inset-0", styles.grid)}
      />
      <div
        className={clsx(
          container,
          "relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.1fr]",
        )}
      >
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-solid border-slate-200 bg-white/70 px-3 py-1 font-mono text-xs text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Open source · UBL · SUNAT
          </p>
          <h1 className="mb-6 font-display text-4xl leading-[1.05] font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Facturación electrónica{" "}
            <span className="text-primary-600 dark:text-primary-400">
              para desarrolladores.
            </span>
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Librerías Java y microservicios open source para crear, firmar y
            enviar comprobantes electrónicos a la SUNAT. Intégralos en tu
            software sin reinventar la rueda.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/docs/" className={primaryButton}>
              Empezar
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link href={GITHUB_URL} className={secondaryButton}>
              <GitHubIcon className="size-4" />
              GitHub
            </Link>
          </div>
          <p className="mt-8 mb-0 font-mono text-xs text-slate-500">
            <span className="text-slate-400 select-none dark:text-slate-600">
              maven:{" "}
            </span>
            io.github.project-openubl:xbuilder
          </p>
        </div>

        <div
          className={clsx(
            "min-w-0 overflow-hidden rounded-xl border border-solid border-slate-200 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:shadow-black/40",
            styles.code,
          )}
        >
          <CodeBlock language="java" title="Factura.java">
            {HERO_SNIPPET}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}

interface Project {
  name: string;
  kind: string;
  description: string;
  to: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const PROJECTS: Project[] = [
  {
    name: "XBuilder",
    kind: "Librería Java",
    description:
      "Crea y firma XMLs basados en UBL: facturas, boletas, notas de crédito y débito, guías de remisión y más.",
    to: "/docs/xbuilder",
    Icon: FileCodeIcon,
  },
  {
    name: "XSender",
    kind: "Librería Java",
    description:
      "Envía tus comprobantes a la SUNAT u OSE, obtén el CDR y consulta el estado de tus tickets.",
    to: "/docs/xsender",
    Icon: SendIcon,
  },
  {
    name: "Searchpe",
    kind: "Microservicio",
    description:
      "Consulta RUC y DNI a partir del padrón reducido de la SUNAT mediante una API REST.",
    to: "/docs/searchpe",
    Icon: SearchIcon,
  },
  {
    name: "Ublhub",
    kind: "Microservicio",
    description:
      "Crea, envía y almacena comprobantes electrónicos desde una sola plataforma con API REST.",
    to: "/docs/ublhub",
    Icon: ServerIcon,
  },
];

function Projects() {
  return (
    <section className="py-20 md:py-28">
      <div className={container}>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Proyectos</Eyebrow>
          <SectionTitle>Piezas pequeñas, cada una con un propósito.</SectionTitle>
          <p className="mt-4 mb-0 text-lg text-slate-600 dark:text-slate-400">
            Usa solo lo que necesites: importa las librerías con Maven o Gradle,
            o despliega los microservicios y consúmelos desde cualquier
            lenguaje.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map(({ name, kind, description, to, Icon }) => (
            <Link
              key={name}
              to={to}
              className={clsx(
                styles.plainLink,
                "group flex flex-col rounded-xl border border-solid border-slate-200 bg-white p-6 transition-colors hover:border-primary-500 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-primary-400",
              )}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-primary-50 group-hover:text-primary-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-primary-950 dark:group-hover:text-primary-400">
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-[11px] tracking-wide text-slate-500 uppercase">
                  {kind}
                </span>
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-slate-900 dark:text-white">
                {name}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 dark:text-white">
                Documentación
                <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    step: "01",
    title: "Crea",
    description:
      "Describe el comprobante con un API fluido. IGV, totales y valores por defecto se calculan automáticamente.",
    code: "Invoice.builder()…build()",
    to: "/docs/xbuilder/create-xml",
  },
  {
    step: "02",
    title: "Firma",
    description:
      "Firma el XML con tu certificado digital (.pfx) en una sola línea.",
    code: "XMLSigner.signXML(xml, …)",
    to: "/docs/xbuilder/sign-xml",
  },
  {
    step: "03",
    title: "Envía",
    description:
      "Envía el XML a la SUNAT u OSE y procesa la respuesta (CDR o ticket).",
    code: "SunatResponse response = …",
    to: "/docs/xsender/send-xml",
  },
];

function Workflow() {
  return (
    <section className="border-y border-solid border-x-0 border-slate-200 bg-slate-50 py-20 md:py-28 dark:border-slate-800 dark:bg-slate-950/60">
      <div className={container}>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Cómo funciona</Eyebrow>
          <SectionTitle>Del código a la SUNAT en tres pasos.</SectionTitle>
        </div>

        <ol className="m-0 grid list-none gap-px overflow-hidden rounded-xl border border-solid border-slate-200 bg-slate-200 p-0 md:grid-cols-3 dark:border-slate-800 dark:bg-slate-800">
          {STEPS.map(({ step, title, description, code, to }) => (
            <li
              key={step}
              className="m-0 flex flex-col bg-white p-6 md:p-8 dark:bg-slate-900"
            >
              <span className="mb-4 font-mono text-sm text-primary-600 dark:text-primary-400">
                {step}
              </span>
              <h3 className="mb-2 font-display text-xl font-bold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {description}
              </p>
              <Link
                to={to}
                className={clsx(
                  styles.plainLink,
                  "block truncate rounded-md border border-solid border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700 hover:border-primary-500 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-primary-400 dark:hover:text-white",
                )}
              >
                {code}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="py-20 md:py-28">
      <div
        className={clsx(
          container,
          "flex flex-col items-start justify-between gap-8 md:flex-row md:items-center",
        )}
      >
        <div className="max-w-xl">
          <Eyebrow>Comunidad</Eyebrow>
          <SectionTitle>100% open source.</SectionTitle>
          <p className="mt-4 mb-0 text-lg text-slate-600 dark:text-slate-400">
            Hecho por desarrolladores, para desarrolladores. Reporta errores,
            propone mejoras o haz tus preguntas.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={CHAT_URL} className={primaryButton}>
            <ChatIcon className="size-4" />
            Chatea con nosotros
          </Link>
          <Link to="/docs/contributing" className={secondaryButton}>
            Contribuir
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Workflow />
      <Community />
    </main>
  );
}
