import React, { type ReactNode } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HomePage from "../components/Home";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}: Crea XMLs basados en UBL y después envíalos a la SUNAT`}
      description="Herramientas open source para facturación electrónica. Project OpenUBL te ayuda a crear XMLs basados en UBL y después enviarlos a la SUNAT | Project OpenUBL"
    >
      <HomePage />
    </Layout>
  );
}
