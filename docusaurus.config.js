// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { patternflyLight, patternflyDark } = require("./src/prism/patternfly");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Project OpenUBL",
  tagline: "Crea XMLs basados en UBL y después envíalos a la SUNAT",
  url: "https://project-openubl.github.io",
  baseUrl: "/",
  // GitHub Pages serves `/foo/index.html` at `/foo/` and redirects `/foo` to
  // `/foo/`, so emit trailing slashes everywhere: canonical URLs, links and
  // the sitemap then match the URL that is actually served (no duplicates).
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  favicon: "img/favicon.ico",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "project-openubl", // Usually your GitHub org/user name.
  projectName: "project-openubl.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/project-openubl/project-openubl.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/project-openubl/project-openubl.github.io/tree/main/",
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
          blogTitle: "Blog",
          blogDescription: "Novedades y lanzamientos de Project OpenUBL.",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "UA-152706512-2",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          // Listing pages with no content of their own.
          ignorePatterns: ["/blog/tags/**", "/blog/page/**", "/blog/archive/**", "/blog/authors/**", "/search/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card used by og:image / twitter:image (1200x630).
      image: "img/social-card.png",
      metadata: [
        {
          name: "keywords",
          content:
            "facturación electrónica, SUNAT, Perú, UBL 2.1, XML, factura electrónica, boleta, nota de crédito, guía de remisión, firma digital, CDR, OSE, xhandler, Java, Rust, Python, Go, open source",
        },
        { property: "og:site_name", content: "Project OpenUBL" },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Project OpenUBL",
        logo: {
          alt: "Project OpenUBL",
          src: "img/project-openubl-logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Docs",
          },
          // { to: "/apis", label: "API Reference", position: "left" },
          { to: "/playground", label: "Playground", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            to: "/community/support",
            label: "Community",
            position: "left",
            activeBaseRegex: `/community/`,
          },
          // right
          // {
          //   to: "about",
          //   label: "About",
          //   position: "right",
          // },
          {
            href: "https://github.com/project-openubl",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentación",
            items: [
              {
                label: "Inicio rápido",
                to: "/docs/quickstart",
              },
              {
                label: "Casos de uso",
                to: "/docs/category/casos-de-uso",
              },
              {
                label: "Línea de comandos",
                to: "/docs/use-cases/cli",
              },
            ],
          },
          {
            title: "Comunidad",
            items: [
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UChq3xxjyDgjcU346rp0bbtA?view_as=subscriber",
              },
              {
                label: "GitHub Discussions",
                href: "https://github.com/project-openubl/xhandler-java/discussions",
              },
            ],
          },
          {
            title: "Más",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/project-openubl",
              },
              {
                label: "SUNAT guías y manuales",
                href: "https://cpe.sunat.gob.pe/node/88",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project OpenUBL, Inc.`,
      },
      prism: {
        theme: patternflyLight,
        darkTheme: patternflyDark,
        additionalLanguages: ["bash", "java", "toml", "properties", "groovy"],
      },
    }),

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&family=Red+Hat+Mono:wght@400;500&family=Red+Hat+Text:wght@400;500;700&display=swap",
  ],
  scripts: [
    // {
    //   src: "https://project-openubl.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/o2joag/b/24/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=bd3ea422",
    //   async: true,
    // },
  ],
  headTags: [
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://project-openubl.github.io/#organization",
            name: "Project OpenUBL",
            url: "https://project-openubl.github.io/",
            logo: "https://project-openubl.github.io/img/project-openubl-logo.png",
            sameAs: [
              "https://github.com/project-openubl",
              "https://www.youtube.com/channel/UChq3xxjyDgjcU346rp0bbtA",
            ],
          },
          {
            "@type": "WebSite",
            "@id": "https://project-openubl.github.io/#website",
            name: "Project OpenUBL",
            url: "https://project-openubl.github.io/",
            description:
              "Librerías open source para crear, firmar y enviar comprobantes electrónicos a la SUNAT desde Java, Rust, Python y Go.",
            inLanguage: "es",
            publisher: { "@id": "https://project-openubl.github.io/#organization" },
          },
        ],
      }),
    },
  ],
  themes: [
    [
      // Offline search: the index is built at build time and downloaded by the
      // browser, so it works on GitHub Pages without any external service.
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        // Spanish stemming and stop words; English too, for code identifiers.
        language: ["es", "en"],
        indexDocs: true,
        docsRouteBasePath: ["docs", "community"],
        docsDir: ["docs", "community"],
        indexBlog: true,
        blogRouteBasePath: "blog",
        blogDir: "blog",
        indexPages: false,
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 60,
        // Release notes of the retired Searchpe and Ublhub projects stay published but out of search
        ignoreFiles: [/^blog\/.*(searchpe|ublhub)/i],
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/project-openubl-logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#0066cc",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/project-openubl-logo.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/project-openubl-logo.png",
            color: "#0066cc",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/project-openubl-logo.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "community",
        path: "community",
        routeBasePath: "community",
        editUrl: ({ versionDocsDirPath, docPath }) => {
          return `https://github.com/project-openubl/project-openubl.github.io/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        editCurrentVersion: true,
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Tailwind CSS v4 (vendor prefixing is handled by Docusaurus' own PostCSS setup).
          postcssOptions.plugins.push(require("@tailwindcss/postcss"));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
