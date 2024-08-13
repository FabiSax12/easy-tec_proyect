"use client"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { User } from "next-auth"
import { toast } from "sonner"
import { updateUserData, getCloudinarySignature } from "@/actions"
import { Button } from "@nextui-org/react"
import { SectionCard } from "@/components"
import { ProfileImage, ProfileUserForm } from "@/components/user-config"

const uploadProfileImage = async (userId: number, image: File) => {
  const { timestamp, signature, api_key, cloud_name } = await getCloudinarySignature()

  const data = new FormData()
  data.append("file", image)
  data.append("api_key", api_key)
  data.append("signature", signature)
  data.append("timestamp", timestamp.toString())

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, {
    method: "POST",
    body: data
  })

  if (!response.ok) {
    throw new Error("Error al subir la imagen")
  }

  const result = await response.json()
  return result.secure_url as string
}

export const Profile = ({ user }: { user: User }) => {
  const { update, data: session } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    carrier: user.carrier,
    profileImage: user.avatar
  })

  useEffect(() => {
    if (!session) return

    setFormData({
      name: session.user.name,
      lastname: session.user.lastname,
      email: session.user.email,
      carrier: session.user.carrier,
      profileImage: session.user.avatar
    })
  }, [session])

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prevState => ({ ...prevState, profileImage: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const onSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading(true)

      if (selectedFile) {
        const profileImageUrl = await uploadProfileImage(parseInt(user.id), selectedFile)
        setFormData(prevState => ({ ...prevState, profileImage: profileImageUrl }))
        await updateUserData(parseInt(user.id), { avatar: profileImageUrl })
        await update({ avatar: profileImageUrl })

        toast.success("Imagen de perfil actualizada correctamente")
      }

      const promises = []

      if (formData.name !== user.name || formData.lastname !== user.lastname) {
        console.log(user)
        promises.push(
          toast.promise(updateUserData(
            parseInt(user.id),
            { name: formData.name, lastname: formData.lastname }
          ), {
            loading: "Cambiando nombre...",
            success: async () => {
              await update({ user: { name: formData.name, lastname: formData.lastname } })
              return "Nombre actualizado correctamente"
            },
            error: error => `Error al cambiar el nombre: ${error}`
          })
        )
      }

      if (formData.carrier !== user.carrier) {
        promises.push(
          toast.promise(updateUserData(
            parseInt(user.id),
            { carrier: formData.carrier }
          ), {
            loading: "Cambiando carrera...",
            success: async () => {
              await update({ carrier: formData.carrier })
              return "Carrera actualizada correctamente"
            },
            error: error => `Error al cambiar la carrera: ${error}`
          })
        )
      }

      await Promise.all(promises)

    } catch (error) {
      console.error(error)
      toast.error("Error al guardar los cambios")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SectionCard title="Perfil" className="flex flex-col gap-4">
      <ProfileImage profileImage={formData.profileImage} onUploadImage={onUploadImage} />

      <div className="h-full">
        <ProfileUserForm user={user} formData={formData} onSaveChanges={onSaveChanges} setFormData={setFormData} />
      </div>
      <div className="flex gap-2 justify-end">
        <Button
          form="user-data"
          type="button"
          color="danger"
          size="sm"
          onClick={() => setFormData({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            carrier: user.carrier,
            profileImage: user.avatar
          })}
        >
          Cancelar
        </Button>
        <Button
          form="user-data"
          type="submit"
          color="primary"
          size="sm"
          isLoading={isLoading}
        >
          Guardar Cambios
        </Button>
      </div>
    </SectionCard>
  )
}
