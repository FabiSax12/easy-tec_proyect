import { ChipProps } from "@heroui/react"

export const courseInputs = [
  { label: "Nombre", key: "name", type: "text" },
  { label: "Código", key: "code", type: "text" },
  { label: "Créditos", key: "credits", type: "number", min: 0 },
  { label: "Profesor", key: "teacher", type: "text" },
]

export const statusOptions = [
  { label: "Pendiente", value: "pendiente" },
  { label: "Cursando", value: "cursando" },
  { label: "Aprobado", value: "aprobado" },
]

export const statusColorMap: Record<string, ChipProps["color"]> = {
  aprobado: "success",
  pendiente: "default",
  cursando: "primary",
}