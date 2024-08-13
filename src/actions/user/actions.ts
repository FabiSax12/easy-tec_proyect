"use server"

import bcrypt from "bcryptjs"
import db from "@/libs/db"
import { User } from "@/interfaces/db/creation-fields"

export const changePassword = async (userId: number, formData: FormData) => {
  const currentPassword = formData.get("currentPassword")?.toString()
  const newPassword = formData.get("newPassword")?.toString()
  const repeatPassword = formData.get("repeatPassword")?.toString()

  if (!currentPassword || !newPassword || !repeatPassword) throw new Error("Todos los campos son requeridos")
  if (newPassword === currentPassword) throw new Error("La contraseña nueva no puede ser igual a la actual")
  if (newPassword.length < 8) throw new Error("La contraseña debe tener al menos 8 caracteres")
  if (newPassword !== repeatPassword) throw new Error("Las contraseñas no coinciden")

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { password: true }
  })

  if (!user) throw new Error("Usuario no encontrado")
  if (!bcrypt.compareSync(currentPassword, user.password)) throw new Error("La contraseña actual es incorrecta")

  const password = await bcrypt.hash(newPassword, 10)

  return await db.user.update({ where: { id: userId }, data: { password } })
}

export const verifyPassword = async (userId: number, formData: FormData) => {
  const currentPassword = formData.get("currentPassword")?.toString()
  const newPassword = formData.get("newPassword")?.toString()
  const repeatPassword = formData.get("repeatPassword")?.toString()

  if (!currentPassword || !newPassword || !repeatPassword) {
    throw new Error("Todos los campos son requeridos")
  }

  if (newPassword === currentPassword) {
    throw new Error("La contraseña nueva no puede ser igual a la actual")
  }

  if (newPassword.length < 8) {
    throw new Error("La contraseña debe tener al menos 8 caracteres")
  }

  if (newPassword !== repeatPassword) {
    throw new Error("Las contraseñas no coinciden")
  }

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { password: true }
  })

  if (!user) return false

  return bcrypt.compareSync(currentPassword, user.password)
}

export const updateUserData = async (userId: number, data: Partial<User>) => {
  if (data.password) data.password = await bcrypt.hash(data.password, 10)

  console.log(userId, data)
  const updatedUserData = db.user.update({ where: { id: userId }, data })

  return updatedUserData
}