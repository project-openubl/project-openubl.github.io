import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0a0a0f]">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-[0.12] dark:opacity-[0.2]"
        style={{
          background:
            "radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-20 lg:pt-32 lg:pb-28 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 dark:border-primary-500/20 bg-primary-50 dark:bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-700 dark:text-primary-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Open Source
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.03em] leading-[0.95] text-gray-950 dark:text-white mb-8">
          Facturación
          <br />
          <span className="bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600 bg-clip-text text-transparent">
            electrónica
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up-delay-2 mx-auto text-center text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          Hecho por desarrolladores, para desarrolladores. Incrementa tu
          productividad sin reinventar la rueda.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-3 justify-center mb-16 lg:mb-20">
          <Link
            to="/docs/"
            className="btn-primary group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-[15px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-primary-500 transition-colors duration-200"
          >
            Comenzar
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <a
            href="https://github.com/project-openubl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-3 text-[15px] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Product showcase */}
        <div className="animate-fade-in-up-delay-3 relative max-w-3xl mx-auto">
          <div
            className="pointer-events-none absolute -inset-4 rounded-2xl opacity-[0.15] dark:opacity-30 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative rounded-xl border border-gray-200 dark:border-white/[0.08] overflow-hidden shadow-2xl shadow-gray-900/10 dark:shadow-black/40">
            <img
              src="img/xml-example.png"
              alt="Ejemplo de factura electrónica en formato XML UBL"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}: Crea XMLs basados en UBL y después envíalos a la SUNAT`}
      description="Herramientas open source para facturación electrónica. Project OpenUBL te ayuda a crear XMLs basados en UBL y después enviarlos a la SUNAT | Project OpenUBL"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
