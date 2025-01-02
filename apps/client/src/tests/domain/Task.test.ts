import { Task } from "@/domain/entities/Task"

// describe("Task Entity", () => {
//   it("should create a task with the correct initial values", () => {
//     const task = new Task(1, "Tarea 1", "Descripción 1", "pending", new Date("2023-12-31"), new Date(), new Date(), 1, 101)
//     expect(task.state).toBe("pending")
//     expect(task.isOverdue()).toBe(false)
//   })

//   it("should update the state of a task", () => {
//     const task = new Task(1, "Tarea 1", "Descripción 1", "pending", new Date("2023-12-31"), new Date(), new Date(), 1, 101)
//     task.updateState("completed")
//     expect(task.state).toBe("completed")
//   })

//   it("should throw an error for an invalid state", () => {
//     const task = new Task(1, "Tarea 1", "Descripción 1", "pending", new Date("2023-12-31"), new Date(), new Date(), 1, 101)
//     expect(() => task.updateState("invalid-state")).toThrow("El estado \"invalid-state\" no es válido.")
//   })

//   it("should update the content of the task", () => {
//     const task = new Task(1, "Tarea 1", "Descripción 1", "pending", new Date("2023-12-31"), new Date(), new Date(), 1, 101)
//     task.updateContent("Nueva Tarea", "Nueva Descripción")
//     expect(task.name).toBe("Nueva Tarea")
//     expect(task.description).toBe("Nueva Descripción")
//   })

//   it("should throw an error for empty name or description", () => {
//     const task = new Task(1, "Tarea 1", "Descripción 1", "pending", new Date("2023-12-31"), new Date(), new Date(), 1, 101)
//     expect(() => task.updateContent("", "Nueva Descripción")).toThrow("El nombre de la tarea no puede estar vacío.")
//     expect(() => task.updateContent("Nueva Tarea", "")).toThrow("La descripción de la tarea no puede estar vacía.")
//   })

//   it("should detect overdue tasks", () => {
//     const overdueTask = new Task(1, "Tarea 1", "Descripción 1", "pending", new Date("2020-01-01"), new Date(), new Date(), 1, 101)
//     expect(overdueTask.isOverdue()).toBe(true)
//   })
// })
