import { CreateUserDto, UpdateUserDto, User } from "../entities/User"

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User>;
  getUserByEmail(email: string): Promise<User>;

  createUser(user: CreateUserDto): Promise<User>;
  updateUser(id: number, user: UpdateUserDto): Promise<User>;
  deleteUser(id: number): Promise<User>;
}