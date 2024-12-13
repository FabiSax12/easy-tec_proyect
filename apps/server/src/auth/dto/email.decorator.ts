import { registerDecorator, ValidationOptions } from "class-validator"

export function IsStudentEmail(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isStudentEmail",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === "string" && value.endsWith("@estudiantec.cr")
        },
        defaultMessage() {
          return "Email must end with @estudiantec.cr"
        },
      },
    })
  }
}
