import React from "react";
import Link from "@docusaurus/Link";

const products = [
  {
    category: "Microservicio",
    title: "Searchpe",
    description:
      "Consulta el DNI o RUC de cualquier persona natural o jurídica registrada en el territorio peruano. La información es obtenida del padrón reducido de la SUNAT.",
    linkTo: "/docs/searchpe",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    category: "Microservicio",
    title: "Ublhub",
    description:
      "Administra tus archivos XML. Crea, envía y almacena tus comprobantes electrónicos y decláralos a la SUNAT.",
    linkTo: "/docs/ublhub",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    category: "Librería Java",
    title: "XBuilder",
    description:
      "Crea y firma electrónicamente archivos XMLs basados en UBL y los estándares de la SUNAT. Soporte para boletas, facturas, notas de crédito y débito.",
    linkTo: "/docs/xbuilder",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    category: "Librería Java",
    title: "XSender",
    description:
      "Envía tus comprobantes electrónicos (archivos XML) a la SUNAT/OSE de manera sencilla y segura.",
    linkTo: "/docs/xsender",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
  },
];

export default function HomepageFeatures() {
  return (
    <>
      {/* Products */}
      <section className="relative bg-gray-50 dark:bg-[#0a0a0f] py-24 lg:py-32">
        {/* Top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" aria-hidden="true" />

        <div className="max-w-screen-xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-4">
              Herramientas
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-gray-950 dark:text-white mb-6">
              Todo lo que necesitas para facturación electrónica
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Microservicios y librerías Java que se integran con tu stack
              existente. Sin importar el lenguaje o plataforma.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {products.map((product) => (
              <Link
                key={product.title}
                to={product.linkTo}
                className="card-link group relative rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-7 lg:p-8 transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-500/30 hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.15)]"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-5 group-hover:bg-primary-100 dark:group-hover:bg-primary-500/20 transition-colors duration-300">
                  {product.icon}
                </div>

                {/* Category */}
                <p className="text-xs font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400 mb-2">
                  {product.category}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Link indicator */}
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  Explorar
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white dark:bg-[#0a0a0f] py-24 lg:py-32 overflow-hidden">
        {/* Top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" aria-hidden="true" />

        {/* Radial glow */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.08] dark:opacity-[0.12]"
          style={{
            background:
              "radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-gray-950 dark:text-white mb-5">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Únete a la comunidad de desarrolladores que ya utilizan Project
            OpenUBL para facturación electrónica en Perú.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/docs/"
              className="btn-primary inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-[15px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-primary-500 transition-colors duration-200"
            >
              Documentación
            </Link>
            <a
              href="https://projectopenubl.zulipchat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-3 text-[15px] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors duration-200"
            >
              Chatea con nosotros
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
