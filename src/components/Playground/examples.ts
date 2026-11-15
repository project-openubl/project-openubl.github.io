// Example documents for the playground, in the same `kind` + `spec` format the
// `xhandler` CLI reads (adapted from xhandler-rust/cli/tests/resources).

export interface Example {
  id: string;
  label: string;
  yaml: string;
}

const PROVEEDOR = `  proveedor:
    ruc: "12345678912"
    razon_social: "Softgreen S.A.C."`;

export const EXAMPLES: Example[] = [
  {
    id: "factura",
    label: "Factura",
    yaml: `kind: Invoice
spec:
  serie_numero: "F001-1"
${PROVEEDOR}
  cliente:
    tipo_documento_identidad: "6" # RUC
    numero_documento_identidad: "12121212121"
    nombre: "Carlos Feria"
  detalles:
    - descripcion: "Laptop"
      cantidad: 2
      precio: 1500
    - descripcion: "Mouse inalámbrico"
      cantidad: 3
      precio: 45.5
`,
  },
  {
    id: "boleta",
    label: "Boleta",
    yaml: `kind: Invoice
spec:
  serie_numero: "B001-1" # La serie B la convierte en boleta
${PROVEEDOR}
  cliente:
    tipo_documento_identidad: "1" # DNI
    numero_documento_identidad: "12345678"
    nombre: "Carlos Feria"
  detalles:
    - descripcion: "Libro"
      cantidad: 1
      precio: 59.9
`,
  },
  {
    id: "nota-credito",
    label: "Nota de crédito",
    yaml: `kind: CreditNote
spec:
  serie_numero: "FC01-1"
  comprobante_afectado_serie_numero: "F001-1"
  descripcion_sustento: "Anulación de la operación"
${PROVEEDOR}
  cliente:
    tipo_documento_identidad: "6"
    numero_documento_identidad: "12121212121"
    nombre: "Carlos Feria"
  detalles:
    - descripcion: "Laptop"
      cantidad: 2
      precio: 1500
`,
  },
  {
    id: "nota-debito",
    label: "Nota de débito",
    yaml: `kind: DebitNote
spec:
  serie_numero: "FD01-1"
  comprobante_afectado_serie_numero: "F001-1"
  descripcion_sustento: "Intereses por mora"
${PROVEEDOR}
  cliente:
    tipo_documento_identidad: "6"
    numero_documento_identidad: "12121212121"
    nombre: "Carlos Feria"
  detalles:
    - descripcion: "Intereses"
      cantidad: 1
      precio: 150
`,
  },
  {
    id: "guia",
    label: "Guía de remisión",
    yaml: `kind: DespatchAdvice
spec:
  serie_numero: "T001-1"
  remitente:
    ruc: "12345678912"
    razon_social: "Softgreen S.A.C."
  destinatario:
    tipo_documento_identidad: "1"
    numero_documento_identidad: "12345678"
    nombre: "Carlos Feria"
  envio:
    tipo_traslado: "01" # Venta
    peso_total: 25.5
    peso_total_unidad_medida: "KGM"
    tipo_modalidad_traslado: "02" # Transporte privado
    fecha_traslado: "16-11-2026"
    partida:
      ubigeo: "150101"
      direccion: "Av. Los Olivos 123"
    destino:
      ubigeo: "040101"
      direccion: "Jr. Arequipa 456"
  detalles:
    - codigo: "PROD001"
      unidad_medida: "NIU"
      cantidad: 10
`,
  },
  {
    id: "resumen",
    label: "Resumen diario",
    yaml: `kind: SummaryDocuments
spec:
  numero: 1
  fecha_emision_comprobantes: "14-11-2026"
${PROVEEDOR}
  comprobantes:
    - tipo_operacion: "1" # Adicionar
      comprobante:
        tipo_comprobante: "03" # Boleta
        serie_numero: "B001-1"
        cliente:
          tipo_documento_identidad: "1"
          numero_documento_identidad: "12345678"
        valor_venta:
          importe_total: 118
          gravado: 100
        impuestos:
          igv: 18
          igv_tasa: 18 # porcentaje
`,
  },
  {
    id: "baja",
    label: "Comunicación de baja",
    yaml: `kind: VoidedDocuments
spec:
  numero: 1
  fecha_emision_comprobantes: "14-11-2026"
${PROVEEDOR}
  comprobantes:
    - serie: "F001"
      numero: 1
      descripcion_sustento: "Error en el documento"
`,
  },
  {
    id: "percepcion",
    label: "Percepción",
    yaml: `kind: Perception
spec:
  serie: "P001"
  numero: 1
${PROVEEDOR}
  cliente:
    tipo_documento_identidad: "6"
    numero_documento_identidad: "12121212121"
    nombre: "Carlos Feria"
  tipo_regimen: "01"
  tipo_regimen_porcentaje: 2
  importe_total_percibido: 4
  importe_total_cobrado: 204
  operacion:
    numero_operacion: 1
    fecha_operacion: "14-11-2026"
    importe_operacion: 200
    comprobante_afectado:
      tipo_comprobante: "01"
      serie_numero: "F001-1"
      fecha_emision: "10-11-2026"
      importe_total: 200
      moneda: "PEN"
`,
  },
  {
    id: "retencion",
    label: "Retención",
    yaml: `kind: Retention
spec:
  serie: "R001"
  numero: 1
${PROVEEDOR}
  cliente:
    tipo_documento_identidad: "6"
    numero_documento_identidad: "12121212121"
    nombre: "Carlos Feria"
  tipo_regimen: "01"
  tipo_regimen_porcentaje: 3
  importe_total_retenido: 30
  importe_total_pagado: 970
  operacion:
    numero_operacion: 1
    fecha_operacion: "14-11-2026"
    importe_operacion: 1000
    comprobante_afectado:
      tipo_comprobante: "01"
      serie_numero: "F001-50"
      fecha_emision: "10-11-2026"
      importe_total: 1000
      moneda: "PEN"
`,
  },
  {
    id: "reversion",
    label: "Reversión",
    yaml: `kind: Reversion
spec:
  numero: 1
  fecha_emision_comprobantes: "14-11-2026"
${PROVEEDOR}
  comprobantes:
    - serie: "P001"
      numero: 1
      descripcion_sustento: "Error en la percepción"
`,
  },
];
