import { CreateUserDto, User } from "../entities/User"

export interface AuthRepository {
  login(email: string, password: string): Promise<{ accessToken: string, refreshToken: string }>
  register(user: CreateUserDto): Promise<User>
  getUser(accessToken: string): Promise<User>
  requestVerificationEmail(email: string): Promise<void>
}