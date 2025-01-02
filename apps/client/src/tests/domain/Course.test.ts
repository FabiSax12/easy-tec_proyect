import { Course } from "@/domain/entities/Course"

// describe("Course Entity", () => {
//   it("should create a course with valid initial values", () => {
//     const course = new Course(1, "Matemáticas", "MATH101", "Dr. Smith", 3, 101, "pendiente", "2023-2024")
//     expect(course.name).toBe("Matemáticas")
//     expect(course.state).toBe("pendiente")
//   })

//   it("should update the state of the course", () => {
//     const course = new Course(1, "Matemáticas", "MATH101", "Dr. Smith", 3, 101, "pendiente", "2023-2024")
//     course.updateState("aprobado")
//     expect(course.state).toBe("aprobado")
//   })

//   it("should throw an error for invalid state", () => {
//     const course = new Course(1, "Matemáticas", "MATH101", "Dr. Smith", 3, 101, "pendiente", "2023-2024")
//     expect(() => course.updateState("invalid-state" as any)).toThrow("El estado \"invalid-state\" no es válido.")
//   })

//   it("should update the credits of the course", () => {
//     const course = new Course(1, "Matemáticas", "MATH101", "Dr. Smith", 3, 101, "pendiente", "2023-2024")
//     course.updateCredits(5)
//     expect(course.credits).toBe(5)
//   })

//   it("should throw an error for negative credits", () => {
//     const course = new Course(1, "Matemáticas", "MATH101", "Dr. Smith", 3, 101, "pendiente", "2023-2024")
//     expect(() => course.updateCredits(-3)).toThrow("Los créditos no pueden ser negativos.")
//   })

//   it("should update the period of the course", () => {
//     const course = new Course(1, "Matemáticas", "MATH101", "Dr. Smith", 3, 101, "pendiente", "2023-2024")
//     course.updatePeriod("2024-2025")
//     expect(course.period).toBe("2024-2025")
//   })

//   it("should throw an error for an empty period", () => {
//     const course = new Course(1, "Matemáticas", "MATH101", "Dr. Smith", 3, 101, "pendiente", "2023-2024")
//     expect(() => course.updatePeriod("")).toThrow("El período académico no puede estar vacío.")
//   })

//   it("should update the teacher of the course", () => {
//     const course = new Course(1, "Matemáticas", "MATH101", "Dr. Smith", 3, 101, "pendiente", "2023-2024")
//     course.updateTeacher("Dr. Johnson")
//     expect(course.teacher).toBe("Dr. Johnson")
//   })

//   it("should throw an error for an empty teacher name", () => {
//     const course = new Course(1, "Matemáticas", "MATH101", "Dr. Smith", 3, 101, "pendiente", "2023-2024")
//     expect(() => course.updateTeacher("")).toThrow("El nombre del profesor no puede estar vacío.")
//   })
// })
