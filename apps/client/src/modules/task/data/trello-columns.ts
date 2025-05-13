import { TaskState } from "@/shared/types/entities/Task"

export interface Column {
  id: TaskState;
  title: string;
  color: "success" | "primary" | "danger";
}

export interface TrelloTask {
  id: number;
  columnId: string;
  content: string;
}

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