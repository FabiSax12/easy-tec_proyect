export const columns = [
  // { name: "ID", uid: "id", sortable: true },
  { name: "NOMBRE", uid: "name", sortable: true },
  { name: "CRÉDITOS", uid: "credits", sortable: true },
  { name: "PERIODO", uid: "periodCode", sortable: true },
  { name: "ESTADO", uid: "state", sortable: true },
  { name: "ACCIONES", uid: "actions" }
]

export const statusOptions = [
  { name: "Pendiente", uid: "pendiente" },
  { name: "Cursando", uid: "cursando" },
  { name: "Aprobado", uid: "aprobado" }
]

export const INITIAL_VISIBLE_COLUMNS = ["name", "credits", "periodCode", "state", "actions"]