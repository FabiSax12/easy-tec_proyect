import { registerDecorator, ValidationOptions } from "class-validator"

export function IsPeriodType(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isPeriodType",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const types = ["Semestre", "Verano"]
          return typeof value === "string" && types.includes(value)
        },
        defaultMessage() {
          return "Type must be one of: Semestre, Verano"
        },
      },
    })
  }
}