export const carriersOptions = {
  "Arquitectura y Urbanismo": {
    name: "Arquitectura y Urbanismo",
    code: "AU",
  },
  "Ingeniería en Computación": {
    name: "Ingeniería en Computación",
    code: "CA",
  },
  "Ingeniería en Electrónica": {
    name: "Ingeniería en Electrónica",
    code: "E"
  },
  "Ingeniería en Producción Industrial": {
    name: "Ingeniería en Producción Industrial",
    code: "PI"
  },
  "Ingeniería en Agronomía": {
    name: "Ingeniería en Agronomía",
    code: "AG"
  },
  "Gestión en Sostenibilidad Turística": {
    name: "Gestión en Sostenibilidad Turística",
    code: "GST"
  },
  "Administración de Empresas": {
    name: "Administración de Empresas",
    code: "AE"
  },
  "Aadministración de Empresas Nocturna": {
    name: "Administración de Empresas Nocturna",
    code: "AEN"
  },
  "Administración de Tecnología de Información": {
    name: "Administración de Tecnología de Información",
    code: "ATI"
  },
  "Enseñanza de la Matemática con Entornos Tecnológicos": {
    name: "Enseñanza de la Matemática con Entornos Tecnológicos",
    code: "EMA"
  },
  "Ingeniería Agrícola": {
    name: "Ingeniería Agrícola",
    code: "IA"
  },
  "Ingeniería Ambiental": {
    name: "Ingeniería Ambiental",
    code: "AMB"
  },
  "Ingeniería en Agronegocios": {
    name: "Ingeniería en Agronegocios",
    code: "AN"
  },
  "Ingeniería en Biotecnología": {
    name: "Ingeniería en Biotecnología",
    code: "IB"
  },
  "Ingeniería en Computadores": {
    name: "Ingeniería en Computadores",
    code: "CES"
  },
  "Ingeniería en Construcción": {
    name: "Ingeniería en Construcción",
    code: "CO"
  },
  "Ingeniería en Diseño Industrial": {
    name: "Ingeniería en Diseño Industrial",
    code: "DI"
  },
  "Ingeniería en Mantenimiento Industrial": {
    name: "Ingeniería en Mantenimiento Industrial",
    code: "MIL"
  },
  "Ingeniería en Materiales": {
    name: "Ingeniería en Materiales",
    code: "ME"
  },
  "Ingeniería en Seguridad Laboral e Higiene Ambiental": {
    name: "Ingeniería en Seguridad Laboral e Higiene Ambiental",
    code: "SHO"
  },
  "Ingeniería Física": {
    name: "Ingeniería Física",
    code: "IF"
  },
  "Ingeniería Forestal": {
    name: "Ingeniería Forestal",
    code: "FO"
  },
  "Ingeniería Mecatrónica": {
    name: "Ingeniería Mecatrónica",
    code: "EMT"
  }
}

export const campusOptions = [
  {
    name: "San Carlos",
    code: "SC",
    carriers: [
      carriersOptions["Administración de Empresas"],
      carriersOptions["Ingeniería en Agronomía"],
      carriersOptions["Ingeniería en Computación"],
      carriersOptions["Ingeniería en Electrónica"],
      carriersOptions["Ingeniería en Producción Industrial"],
      carriersOptions["Gestión en Sostenibilidad Turística"]
    ]
  },
  {
    name: "San José",
    code: "SJ",
    carriers: [
      carriersOptions["Arquitectura y Urbanismo"],
      carriersOptions["Ingeniería en Computación"]
    ]
  },
  {
    name: "Alajuela",
    code: "AL",
    carriers: [
      carriersOptions["Ingeniería en Computación"],
      carriersOptions["Ingeniería en Electrónica"]
    ]
  },
  {
    name: "Cartago",
    code: "CA",
    carriers: [
      carriersOptions["Administración de Empresas"],
      carriersOptions["Aadministración de Empresas Nocturna"],
      carriersOptions["Administración de Tecnología de Información"],
      carriersOptions["Enseñanza de la Matemática con Entornos Tecnológicos"],
      carriersOptions["Ingeniería Agrícola"],
      carriersOptions["Ingeniería Ambiental"],
      carriersOptions["Ingeniería en Agronegocios"],
      carriersOptions["Ingeniería en Biotecnología"],
      carriersOptions["Ingeniería en Computación"],
      carriersOptions["Ingeniería en Computadores"],
      carriersOptions["Ingeniería en Construcción"],
      carriersOptions["Ingeniería en Diseño Industrial"],
      carriersOptions["Ingeniería en Electrónica"],
      carriersOptions["Ingeniería en Mantenimiento Industrial"],
      carriersOptions["Ingeniería en Materiales"],
      carriersOptions["Ingeniería en Producción Industrial"],
      carriersOptions["Ingeniería en Seguridad Laboral e Higiene Ambiental"],
      carriersOptions["Ingeniería Física"],
      carriersOptions["Ingeniería Forestal"],
      carriersOptions["Ingeniería Mecatrónica"]
    ]
  },
  {
    name: "Limón",
    code: "LM",
    carriers: [
      carriersOptions["Ingeniería en Computación"],
      carriersOptions["Ingeniería en Producción Industrial"]
    ]
  }
]

export const periodsOptions = [
  {
    name: "2024 Semestre I",
    code: "2024_S_1"
  },
  {
    name: "2024 Semestre II",
    code: "2024_S_2"
  }
]