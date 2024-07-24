export interface Column {
  id: string;
  title: string;
  color: "success" | "primary" | "danger";
}
export interface Task {
  id: number;
  columnId: string;
  content: string;
}