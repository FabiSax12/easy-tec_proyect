export interface User {
  readonly id: number
  name: string
  lastname: string;
  email: string;
  avatar: string;
  carrier: string;
  verified: boolean;
}

export interface CreateUserDto {
  name: string
  lastname: string;
  email: string;
  password: string;
}

export interface UpdateUserDto {
  name?: string
  lastname?: string;
  email?: string;
  avatar?: string;
  carrier?: string;
  verified?: boolean;
}