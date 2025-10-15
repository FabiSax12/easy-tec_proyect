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
  AIT: {
    name: "Administración de Tecnología de Información", code: "AIT"
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
  IBL: {
    name: " Licenciatura Ingenieria En Biotecnologia Para Egresados", code: "IBL"
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
  GTS: {
    name: "Gestión de Turismo Sostenible", code: "GTS"
  },
  EMT: {
    name: "Ingeniería Mecatrónica", code: "EMT"
  },
  MI: {
    name: "Ingeniería Electromecánica", code: "MI"
  },
  MIE: {
    name: "Maestria En Investigacion Empresarial", code: "MIE"
  },
  LEM: {
    name: "Licenciatura En Enseñanza De La Matematica Con Entornos Tecnologicos", code: "LEM"
  },
  DP: {
    name: "Area Academica De Doctorado En Ingenieria", code: "DP"
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
  },
  QU: {
    name: "Química", code: "QU"
  },
  FH: {
    name: "Formación Humanística", code: "FH"
  },
  BI: {
    name: "Biología", code: "BI"
  }
}

const campusOptions = [
  {
    name: "San Carlos",
    fullName: "CAMPUS TECNOLOGICO LOCAL SAN CARLOS",
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
    fullName: "CAMPUS TECNOLOGICO LOCAL SAN JOSE",
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
    fullName: "CAMPUS TECNOLOGICO LOCAL ALAJUELA",
    code: "AL",
    carriers: [
      "AE",
      "ME",
      "MI",
      "CA",
      "E",
      "PI",
      "SHO",
      "MIE"
    ],
    subjects: [
      "CI",
      "CS",
      "CD",
      "FI",
      "MA",
      "QU",
      "FH"
    ]
  },
  {
    name: "Cartago",
    fullName: "CAMPUS TECNOLOGICO LOCAL CARTAGO",
    code: "CA",
    carriers: [
      "AE",
      "AEN",
      "AIT",
      "EMA",
      "IA",
      "AMB",
      "AN",
      "IB",
      "IBL",
      "CA",
      "CES",
      "CO",
      "DI",
      "E",
      "GTS",
      "MIL",
      "ME",
      "PI",
      "SHO",
      "IF",
      "FO",
      "EMT",
      "LEM",
      "DP",
      "MI"
    ],
    subjects: [
      "BI",
      "CI",
      "CS",
      "CD",
      "FI",
      "MA",
      "QU"
    ]
  },
  {
    name: "Limón",
    fullName: "CAMPUS TECNOLOGICO LOCAL LIMON",
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
    name: "2024 Verano I", code: "2024_V_1"
  },
  {
    name: "2025 Semestre I", code: "2025_S_1"
  },
  {
    name: "2025 Semestre II", code: "2025_S_2"
  },
  {
    name: "2025 Verano I", code: "2025_V_1"
  }
]

export { carriersOptions, subjectsOptions, campusOptions, periodsOptions }