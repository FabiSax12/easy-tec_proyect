export class UserQueryDto {
  id?: number;
  email?: string;
  name?: string;
  lastname?: string;
  majorId?: number | null;
  verified?: boolean;
  roleId?: number;
  createdAt?: Date;
}