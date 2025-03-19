import React, { useRef, useState } from "react"
import { PasswordInput } from "@/shared/components/nextui/PasswordInput"
import { Modal, Button, Input, ModalHeader, ModalBody, ModalFooter, ModalContent, Tabs, Tab, Image, Form } from "@nextui-org/react"
import { updateUser } from "@/modules/user/services/user.service"
import { toast } from "sonner"
import { FaSave } from "react-icons/fa"
import { useMutation } from "@tanstack/react-query"
import { UpdateUserDto, User } from "@/shared/types/entities/User"
import { useAuthStore } from "@/modules/auth/store/auth.store"

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const ConfigModal = ({ isOpen, onOpenChange }: Props) => {
  const user = useAuthStore((state) => state.user)
  const imageInput = useRef<HTMLInputElement | null>(null)
  const [userInfo, setUserInfo] = useState<UpdateUserDto>({})
  const [confirmPassword, setConfirmPassword] = useState("")

  const resetStates = () => {
    setUserInfo({})
    setConfirmPassword("")
    onOpenChange()
  }

  const updateUserMutation = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: () => updateUser(userInfo),
    onSuccess: () => {
      useAuthStore.setState({
        user: {
          ...user!,
          ...userInfo,
        },
      })

      toast.success("Usuario actualizado")

      resetStates()
    },
    onError: () => {
      console.error("Error updating user")
      toast.error("Error actualizando tus datos")
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUserInfo((prevState) => {
      const updatedState = { ...prevState }

      if (name === "password" && value === "") {
        delete updatedState.password
        return updatedState
      }

      if (value === user?.[name as keyof User] || (user?.[name as keyof User] === null && value === "")) {
        delete updatedState[name as keyof UpdateUserDto]
        return updatedState
      }

      updatedState[name as keyof UpdateUserDto] = value
      return updatedState
    })
  }

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUserInfo((prevState) => ({
          ...prevState,
          avatar: reader.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveChanges = () => {
    if (userInfo.password && userInfo.password !== confirmPassword) {
      return toast.error("Las contraseñas no coinciden")
    }

    updateUserMutation.mutate()
  }

  return (
    <Modal
      closeButton
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
      size="xl"
      isDismissable={false}
    >
      <ModalContent>
        <ModalHeader>Configuración</ModalHeader>

        <ModalBody>
          <div className="h-96">
            <Tabs
              isVertical
              color="primary"
              size="lg"
              variant="bordered"
              classNames={{ panel: "w-full" }}
            >
              <Tab key="general" title="General">
                <label htmlFor="imageInput" className="cursor-pointer">
                  <Image
                    src={userInfo.avatar || user?.avatar || "https://via.placeholder.com/150"}
                    width={100}
                    alt="User Avatar"
                  />
                  <input
                    id="imageInput"
                    ref={imageInput}
                    type="file"
                    className="hidden"
                    onChange={handleAvatarUpload}
                  />
                </label>

                <div className="flex flex-col items-center gap-2 w-full">
                  <Input
                    label="Correo Electrónico"
                    name="email"
                    defaultValue={user?.email}
                    fullWidth
                    isDisabled
                  />
                  <Input
                    label="Nombre"
                    name="name"
                    value={userInfo.name ?? user?.name}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <Input
                    label="Apellido"
                    name="lastname"
                    value={userInfo.lastname ?? user?.lastname}
                    onChange={handleInputChange}
                    fullWidth
                  />

                  <Input
                    label="Carrera"
                    name="carrier"
                    value={userInfo.carrier ?? user?.carrier}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </div>
              </Tab>
              <Tab key="password" title="Contraseña">
                <Form className="flex flex-col gap-4">
                  <PasswordInput
                    label="Nueva contraseña"
                    name="password"
                    value={userInfo.password || ""}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <PasswordInput
                    label="Confirmar contraseña"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                  />
                </Form>
              </Tab>
            </Tabs>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button variant="flat" color="danger" onPress={resetStates}>
            Cancelar
          </Button>
          <Button
            onPress={handleSaveChanges}
            color="primary"
            isLoading={updateUserMutation.isPending}
            endContent={<FaSave />}
            isDisabled={Object.keys(userInfo).length === 0}
          >
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}