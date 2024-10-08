import { ConflictException, HttpStatus, Injectable } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"
import { PrismaService } from "src/prisma/prisma.service"
import { hashSync } from "bcryptjs"

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserDto) {
    const userExists = await this.findByEmail(data.email)
    if (userExists) throw new ConflictException("User already exists: " + userExists)

    data.password = hashSync(data.password, 10)
    const createdUser = await this.prisma.user.create({ data })

    if (!createdUser) throw new ConflictException("User not created")

    return { message: "User created successful", status: HttpStatus.CREATED }
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } })
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto })
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } })
  }
}
