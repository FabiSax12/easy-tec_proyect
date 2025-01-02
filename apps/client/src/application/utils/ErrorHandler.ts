import { isAxiosError } from "axios"

export abstract class ErrorHandler {
  static handleAxiosError(error: unknown): never {
    if (isAxiosError(error)) {
      const status = error.response?.status
      const message = error.response?.data?.message || "Ocurrió un error"

      switch (status) {
        case 400:
          throw new Error("Solicitud inválida.")
        case 401:
          throw new Error("No autorizado. Por favor, inicia sesión.")
        case 404:
          throw new Error("Recurso no encontrado.")
        case 500:
          throw new Error("Error interno del servidor.")
        default:
          throw new Error(message)
      }
    }
    throw new Error("Error inesperado.")
  }
}