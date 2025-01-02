import { CreateUserDto, UpdateUserDto, User } from "@/domain/entities/User"
import { UserRepository } from "@/domain/repositories/UserRepository"

export const createUserService = (userRepository: UserRepository) => ({
  createUser: async (userData: CreateUserDto): Promise<User> => {
    return await userRepository.createUser(userData)
  },
  getUserById: async (userId: number): Promise<User> => {
    return await userRepository.getUserById(userId)
  },
  updateUser: async (userId: number, userUpdates: UpdateUserDto): Promise<User> => {
    return await userRepository.updateUser(userId, userUpdates)
  },
  deleteUser: async (userId: number): Promise<User> => {
    return await userRepository.deleteUser(userId)
  }
})