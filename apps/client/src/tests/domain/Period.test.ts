import { Period } from "@/domain/entities/Period"

// describe("Period Entity", () => {
//   it("should create a period with valid values", () => {
//     const period = new Period(1, "Academic", 101, new Date("2024-01-01"), new Date("2024-12-31"))
//     expect(period.type).toBe("Academic")
//     expect(period.isCurrent()).toBe(false)
//   })

//   it("should update the type and typeId", () => {
//     const period = new Period(1, "Academic", 101, new Date("2024-01-01"), new Date("2024-12-31"))
//     period.updateType("Work", 202)
//     expect(period.type).toBe("Work")
//     expect(period.typeId).toBe(202)
//   })

//   it("should throw an error for empty type", () => {
//     const period = new Period(1, "Academic", 101, new Date("2024-01-01"), new Date("2024-12-31"))
//     expect(() => period.updateType("", 202)).toThrow("El tipo no puede estar vacío.")
//   })

//   it("should update the dates", () => {
//     const period = new Period(1, "Academic", 101, new Date("2024-01-01"), new Date("2024-12-31"))
//     period.updateDates(new Date("2024-02-01"), new Date("2024-11-30"))
//     expect(period.startDate).toEqual(new Date("2024-02-01"))
//     expect(period.endDate).toEqual(new Date("2024-11-30"))
//   })

//   it("should throw an error for invalid date range", () => {
//     const period = new Period(1, "Academic", 101, new Date("2024-01-01"), new Date("2024-12-31"))
//     expect(() => period.updateDates(new Date("2024-12-31"), new Date("2024-01-01"))).toThrow("La fecha de inicio debe ser anterior a la fecha de fin.")
//   })

//   it("should return true if the period is current", () => {
//     const now = new Date()
//     const startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
//     const endDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
//     const period = new Period(1, "Academic", 101, startDate, endDate)
//     expect(period.isCurrent()).toBe(true)
//   })

//   it("should return true if the period has ended", () => {
//     const period = new Period(1, "Academic", 101, new Date("2022-01-01"), new Date("2022-12-31"))
//     expect(period.hasEnded()).toBe(true)
//   })

//   it("should return false if the period has not ended", () => {
//     const period = new Period(1, "Academic", 101, new Date("2024-01-01"), new Date("2024-12-31"))
//     expect(period.hasEnded()).toBe(false)
//   })
// })
