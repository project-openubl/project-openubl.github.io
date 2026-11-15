import React, { type ReactNode } from "react";
import Layout from "@theme/Layout";

import HomePage from "../components/Home";

export default function Home(): ReactNode {
  return (
    <Layout
      title="Facturación electrónica para la SUNAT en Java, Rust, Python y Go"
      description="Librerías open source para crear, firmar y enviar facturas, boletas, guías de remisión y demás comprobantes electrónicos a la SUNAT desde Java, Rust, Python y Go."
    >
      <HomePage />
    </Layout>
  );
}
