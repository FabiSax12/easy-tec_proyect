import { Column } from "@/interfaces/components/trello"
import { Task } from "@prisma/client"

export const defaultCols: Column[] = [
  {
    id: "todo",
    title: "Pendiente",
    color: "danger",
  },
  {
    id: "doing",
    title: "En proceso",
    color: "primary",
  },
  {
    id: "done",
    title: "Hecho",
    color: "success",
  },
  {
    id: "delivered",
    title: "Entregado",
    color: "danger"
  },
]
