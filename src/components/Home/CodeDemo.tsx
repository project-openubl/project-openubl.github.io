import React, { useState } from "react";
import clsx from "clsx";
import { Highlight } from "prism-react-renderer";
import { materialDark } from "../../prism/material";
import { CheckCircleIcon } from "./icons";

interface Part {
  language: string;
  code: string;
  prompt?: boolean;
}

interface Example {
  id: string;
  label: string;
  file: string;
  parts: Part[];
}

// Condensed from the README of each library (v6 API): same factura, same steps.
const EXAMPLES: Example[] = [
  {
    id: "java",
    label: "Java",
    file: "Factura.java",
    parts: [
      {
        language: "java",
        code: `// Crear
Invoice invoice = Invoice.builder()
    .serieNumero("F001-1")
    .proveedor(Proveedor.builder().ruc("12345678912").razonSocial("Softgreen S.A.C.").build())
    .cliente(Cliente.builder()
        .tipoDocumentoIdentidad("6") // RUC
        .numeroDocumentoIdentidad("12121212121")
        .nombre("Carlos Feria")
        .build())
    .detalles(List.of(Detalle.builder()
        .descripcion("Item").cantidad(new BigDecimal("2")).precio(new BigDecimal("100.00"))
        .build()))
    .build();
String xml = new XBuilder().build(invoice);

// Firmar
SigningKey key = SigningKey.fromPkcs12(Files.readAllBytes(Path.of("certificado.pfx")), "password");
byte[] signed = new XSigner().sign(xml.getBytes(StandardCharsets.UTF_8), key);

// Enviar
FileSender sender = new FileSender(URLs.beta(),
    Credentials.builder().username("12345678959MODDATOS").password("MODDATOS").build());
SunatResponse response = sender.sendFile(signed);`,
      },
    ],
  },
  {
    id: "rust",
    label: "Rust",
    file: "main.rs",
    parts: [
      {
        language: "rust",
        code: `// Crear
let mut invoice = Invoice {
    serie_numero: "F001-1".into(),
    proveedor: Proveedor { ruc: "12345678912".into(), razon_social: "Softgreen S.A.C.".into(), ..Default::default() },
    cliente: Cliente {
        tipo_documento_identidad: "6".into(), // RUC
        numero_documento_identidad: "12121212121".into(),
        nombre: "Carlos Feria".into(),
        ..Default::default()
    },
    detalles: vec![Detalle { descripcion: "Item".into(), cantidad: dec!(2), precio: Some(dec!(100)), ..Default::default() }],
    ..Default::default()
};
invoice.enrich(&Defaults::new(chrono::Local::now().date_naive()))?;
let xml = invoice.render()?;

// Firmar
let key = RsaKeyPair::from_pkcs12(&std::fs::read("certificado.pfx")?, "password")?;
let signed = XSigner { xml_document: xml }.sign(&key)?;

// Enviar
let credentials = Credentials { username: "12345678959MODDATOS".into(), password: "MODDATOS".into(), ..Default::default() };
let sender = FileSender { urls: Urls::beta(), credentials };
let response = sender.send_file(&UblFile::from_bytes(signed)?).await?;`,
      },
    ],
  },
  {
    id: "python",
    label: "Python",
    file: "factura.py",
    parts: [
      {
        language: "python",
        code: `# Crear
invoice = xbuilder.Invoice(
    serie_numero="F001-1",
    proveedor=xbuilder.Proveedor(ruc="12345678912", razon_social="Softgreen S.A.C."),
    cliente=xbuilder.Cliente(
        tipo_documento_identidad="6",  # RUC
        numero_documento_identidad="12121212121",
        nombre="Carlos Feria",
    ),
    detalles=[xbuilder.Detalle(descripcion="Item", cantidad=Decimal(2), precio=Decimal("100.00"))],
)
xml = xbuilder.build(invoice)

# Firmar
key = SigningKey.from_pkcs12(Path("certificado.pfx").read_bytes(), "password")
signed = sign(xml.encode(), key)

# Enviar
sender = FileSender(URLs.beta(), Credentials(username="12345678959MODDATOS", password="MODDATOS"))
result = sender.send_file(signed)`,
      },
    ],
  },
  {
    id: "go",
    label: "Go",
    file: "main.go",
    parts: [
      {
        language: "go",
        code: `// Crear
invoice := &xbuilder.Invoice{
	SerieNumero: "F001-1",
	Proveedor:   xbuilder.Proveedor{Ruc: "12345678912", RazonSocial: "Softgreen S.A.C."},
	Cliente: xbuilder.Cliente{
		TipoDocumentoIdentidad:   "6", // RUC
		NumeroDocumentoIdentidad: "12121212121",
		Nombre:                   "Carlos Feria",
	},
	Detalles: []xbuilder.Detalle{
		{Descripcion: "Item", Cantidad: xbuilder.DecimalFromInt(2), Precio: xbuilder.Ptr(xbuilder.MustDecimal("100.00"))},
	},
}
xml, err := xbuilder.Build(ctx, invoice, xbuilder.Defaults{})

// Firmar
pfx, err := os.ReadFile("certificado.pfx")
signed, err := xsigner.Sign(ctx, []byte(xml), xsigner.FromPKCS12(pfx, "password"))

// Enviar
sender := &xsender.FileSender{
	URLs:        xsender.BetaURLs,
	Credentials: xsender.Credentials{Username: "12345678959MODDATOS", Password: "MODDATOS"},
}
result, err := sender.SendFile(ctx, signed)`,
      },
    ],
  },
  {
    id: "cli",
    label: "CLI",
    file: "factura.yaml",
    parts: [
      {
        language: "yaml",
        code: `kind: Invoice
spec:
  serie_numero: "F001-1"
  proveedor:
    ruc: "12345678912"
    razon_social: "Softgreen S.A.C."
  cliente:
    tipo_documento_identidad: "6" # RUC
    numero_documento_identidad: "12121212121"
    nombre: "Carlos Feria"
  detalles:
    - descripcion: "Item"
      cantidad: 2
      precio: 100`,
      },
      {
        language: "bash",
        prompt: true,
        code: `# Crear, firmar y enviar en un solo paso
xhandler apply -f factura.yaml --beta`,
      },
    ],
  },
];

function CodePart({ part }: { part: Part }) {
  return (
    <Highlight theme={materialDark} code={part.code} language={part.language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(
            "m-0 overflow-x-auto rounded-none bg-transparent p-0 py-5 font-mono text-[13px] leading-[1.7]",
            part.prompt && "border-t border-solid border-x-0 border-b-0 border-white/10",
          )}
        >
          <code className="block min-w-max">
            {tokens.map((line, i) => {
              const isComment =
                line.length > 0 && line.every((t) => t.types.includes("comment") || !t.content.trim());
              return (
                <div key={i} {...getLineProps({ line })} className="flex px-5">
                  <span className="mr-5 w-5 shrink-0 text-right text-neutral-600 select-none">
                    {part.prompt ? (isComment ? "" : "$") : i + 1}
                  </span>
                  <span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
}

export default function CodeDemo() {
  const [active, setActive] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl bg-neutral-900 text-left shadow-[0_24px_48px_-12px_rgb(26_35_126/0.35)] ring-1 ring-black/5 dark:shadow-[0_24px_48px_-12px_rgb(0_0_0/0.6)] dark:ring-white/10">
      <div
        role="tablist"
        aria-label="Lenguaje"
        className="flex items-end gap-1 overflow-x-auto border-b border-solid border-x-0 border-t-0 border-white/10 px-3"
      >
        {EXAMPLES.map((example, i) => {
          const selected = i === active;
          return (
            <button
              key={example.id}
              type="button"
              role="tab"
              id={`demo-tab-${example.id}`}
              aria-selected={selected}
              aria-controls={`demo-panel-${example.id}`}
              onClick={() => setActive(i)}
              className={clsx(
                "relative shrink-0 cursor-pointer border-0 bg-transparent px-4 pt-4 pb-3.5 font-sans text-[15px] font-semibold transition-colors",
                selected ? "text-white" : "text-neutral-400 hover:text-neutral-100",
              )}
            >
              {example.label}
              <span
                className={clsx(
                  "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary-a100",
                  selected ? "opacity-100" : "opacity-0",
                )}
              />
            </button>
          );
        })}
        <span className="ml-auto hidden shrink-0 pb-3.5 pl-4 font-mono text-xs text-neutral-500 sm:block">
          {EXAMPLES[active].file}
        </span>
      </div>

      {/* Panels share one grid cell so the window keeps the height of the
          longest example and doesn't jump when switching tabs. */}
      <div className="grid">
        {EXAMPLES.map((example, i) => (
          <div
            key={example.id}
            role="tabpanel"
            id={`demo-panel-${example.id}`}
            aria-labelledby={`demo-tab-${example.id}`}
            aria-hidden={i !== active}
            className={clsx("col-start-1 row-start-1 min-w-0", i !== active && "invisible")}
          >
            {example.parts.map((part, j) => (
              <CodePart key={j} part={part} />
            ))}
          </div>
        ))}
      </div>

      <div
        aria-live="polite"
        className="flex items-center gap-2.5 border-t border-solid border-x-0 border-b-0 border-white/10 bg-black/20 px-5 py-3.5 font-mono text-[13px] text-accent-a400"
      >
        <CheckCircleIcon className="size-4 shrink-0" />
        <span className="truncate">ACEPTADO · La Factura numero F001-1, ha sido aceptada</span>
      </div>
    </div>
  );
}
