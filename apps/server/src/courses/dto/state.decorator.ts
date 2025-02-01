import { registerDecorator, ValidationOptions } from "class-validator"

export function IsValidState(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isValidState",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const states = ["cursando", "pendiente", "completado"]
          return typeof value === "string" && states.includes(value)
        },
        defaultMessage() {
          return "State must be one of the following: cursando, pendiente, completado"
        },
      },
    })
  }
}