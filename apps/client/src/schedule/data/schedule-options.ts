const carriersOptions = {
  AU: {
    name: "Arquitectura y Urbanismo", code: "AU"
  },
  CA: {
    name: "Ingeniería en Computación", code: "CA"
  },
  E: {
    name: "Ingeniería en Electrónica", code: "E"
  },
  PI: {
    name: "Ingeniería en Producción Industrial", code: "PI"
  },
  AG: {
    name: "Ingeniería en Agronomía", code: "AG"
  },
  GST: {
    name: "Gestión en Sostenibilidad Turística", code: "GST"
  },
  AE: {
    name: "Administración de Empresas", code: "AE"
  },
  AEN: {
    name: "Administración de Empresas Nocturna", code: "AEN"
  },
  ATI: {
    name: "Administración de Tecnología de Información", code: "ATI"
  },
  EMA: {
    name: "Enseñanza de la Matemática con Entornos Tecnológicos", code: "EMA"
  },
  IA: {
    name: "Ingeniería Agrícola", code: "IA"
  },
  AMB: {
    name: "Ingeniería Ambiental", code: "AMB"
  },
  AN: {
    name: "Ingeniería en Agronegocios", code: "AN"
  },
  IB: {
    name: "Ingeniería en Biotecnología", code: "IB"
  },
  CES: {
    name: "Ingeniería en Computadores", code: "CES"
  },
  CO: {
    name: "Ingeniería en Construcción", code: "CO"
  },
  DI: {
    name: "Ingeniería en Diseño Industrial", code: "DI"
  },
  MIL: {
    name: "Ingeniería en Mantenimiento Industrial", code: "MIL"
  },
  ME: {
    name: "Ingeniería en Materiales", code: "ME"
  },
  SHO: {
    name: "Ingeniería en Seguridad Laboral e Higiene Ambiental", code: "SHO"
  },
  IF: {
    name: "Ingeniería Física", code: "IF"
  },
  FO: {
    name: "Ingeniería Forestal", code: "FO"
  },
  EMT: {
    name: "Ingeniería Mecatrónica", code: "EMT"
  }
}

const subjectsOptions = {
  ECE: {
    name: "Ciencias Naturales Y Exactas", code: "ECE"
  },
  FI: {
    name: "Física", code: "FI"
  },
  MA: {
    name: "Matemáticas", code: "MA"
  },
  EIC: {
    name: "Idiomas Y Ciencias Sociales", code: "EIC"
  },
  CI: {
    name: "Ciencias del Lenguaje", code: "CI"
  },
  CS: {
    name: "Ciencias Sociales", code: "CS"
  },
  DVE: {
    name: "Vida Estudiantil y Servicios Académicos", code: "DVE"
  },
  CD: {
    name: "Cultura y Deporte", code: "CD"
  }
}

const campusOptions = [
  {
    name: "San Carlos",
    code: "SC",
    carriers: [
      "AE",
      "AG",
      "CA",
      "E",
      "PI",
      "GST"
    ],
    subjects: [
      "ECE",
      "EIC",
      "DVE"
    ]
  },
  {
    name: "San José",
    code: "SJ",
    carriers: [
      "AE",
      "AU",
      "CA"
    ],
    subjects: [
      "FI",
      "MA",
      "CI",
      "CS",
      "CD"
    ]
  },
  {
    name: "Alajuela",
    code: "AL",
    carriers: [
      "CA",
      "E"
    ],
    subjects: []
  },
  {
    name: "Cartago",
    code: "CA",
    carriers: [
      "AE",
      "AEN",
      "ATI",
      "EMA",
      "IA",
      "AMB",
      "AN",
      "IB",
      "CA",
      "CES",
      "CO",
      "DI",
      "E",
      "MIL",
      "ME",
      "PI",
      "SHO",
      "IF",
      "FO",
      "EMT"
    ],
    subjects: []
  },
  {
    name: "Limón",
    code: "LM",
    carriers: [
      "CA",
      "PI"
    ],
    subjects: []
  }
]

const periodsOptions = [
  {
    name: "2024 Semestre I", code: "2024_S_1"
  },
  {
    name: "2024 Semestre II", code: "2024_S_2"
  },
  {
    name: "2024 Verano I", code: "2024_V_1"
  },
  {
    name: "2025 Semestre I", code: "2025_S_1"
  }
]

export { carriersOptions, subjectsOptions, campusOptions, periodsOptions }