// import { User } from "../User"

// describe("User Entity", () => {
//   it("should create a user with default values", () => {
//     const user = new User(1, "John", "Doe", "john@example.com", "http://avatar.com/john", "developer")
//     expect(user.verified).toBe(false)
//     expect(user.getFullName()).toBe("John Doe")
//   })

//   it("should verify the user", () => {
//     const user = new User(1, "John", "Doe", "john@example.com", "http://avatar.com/john", "developer")
//     user.verify()
//     expect(user.verified).toBe(true)
//   })

//   it("should update the user name and lastname", () => {
//     const user = new User(1, "John", "Doe", "john@example.com", "http://avatar.com/john", "developer")
//     user.updateName("Jane", "Smith")
//     expect(user.getFullName()).toBe("Jane Smith")
//   })

//   it("should throw an error for invalid avatar URLs", () => {
//     const user = new User(1, "John", "Doe", "john@example.com", "http://avatar.com/john", "developer")
//     expect(() => user.updateAvatar("not-a-valid-url")).toThrow("La URL del avatar debe ser válida.")
//   })
// })
