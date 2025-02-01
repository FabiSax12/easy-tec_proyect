import { registerDecorator, ValidationOptions } from "class-validator"

export function IsTaskState(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isTaskState",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          const states = ["todo", "delivered", "doing", "done"]
          return states.includes(value.toLowerCase())
        },
        defaultMessage() {
          return "State must be todo, doing, delivered, or, done"
        }
      }
    })
  }
}