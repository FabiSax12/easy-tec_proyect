import { User, CreateUserDto } from "@/domain/entities/User"
import { AuthRepository } from "@/domain/repositories/AuthRepository"

export const createAuthService = (authRepository: AuthRepository) => ({
  async signup(user: CreateUserDto): Promise<User> {
    return await authRepository.register(user)
  },

  async login(email: string, password: string): Promise<{ accessToken: string, refreshToken: string }> {
    const response = await authRepository.login(email, password)

    // if (response.status === 401) throw new Error("El usuario no existe o no se ha verificado")

    // if (!response.ok) throw new Error("Error al iniciar sesión")

    return response
  },

  async getUser(accessToken: string): Promise<User> {
    const response = await authRepository.getUser(accessToken)

    // if (!response.ok) throw new Error("Failed to get user")

    return response
  },

  async requestVerificationEmail(email: string): Promise<void> {
    await authRepository.requestVerificationEmail(email)

    // if (!response.ok) throw new Error("Error al enviar email de verificación")
  }
})