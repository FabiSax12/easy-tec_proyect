import React, { useRef, useState } from "react"
import { PasswordInput } from "@/shared/components/PasswordInput"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { Modal, Button, Input, ModalHeader, ModalBody, ModalFooter, ModalContent, Tabs, Tab, Image } from "@nextui-org/react"
import { updateUser } from "@/modules/user/services/user.service"
import { toast } from "sonner"

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const ConfigModal = ({ isOpen, onOpenChange }: Props) => {
  const { user } = useAuthStore()
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    ...user!,
    password: "",
  })

  const imageInput = useRef(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUserInfo(prevState => ({
          ...prevState,
          avatar: reader.result as string
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveChanges = () => {
    toast.promise(updateUser(userInfo), {
      loading: () => {
        setIsLoading(true)
        return "Actualizando usuario"
      },
      success: () => {
        onOpenChange()
        return "Usuario actualizado"
      },
      error: "Error al actualizar el usuario"
    })
  }

  return <Modal
    closeButton
    isOpen={isOpen}
    onOpenChange={onOpenChange}
    backdrop="opaque"
    size="md"
    isDismissable={false}
  >
    <ModalContent>
      <ModalHeader>
        Configuración
      </ModalHeader>

      <ModalBody>
        <div className="h-96">
          <Tabs isVertical color="primary" size="lg" variant="bordered" classNames={{ panel: "w-full" }}>
            <Tab key="general" title="General">

              <label htmlFor="imageInput">
                <Image
                  src={userInfo.avatar || "https://via.placeholder.com/150"}
                  width={100}
                />
                <input id="imageInput" ref={imageInput} type="file" className="hidden" onChange={handleAvatarUpload} />
              </label>

              <div className="flex flex-col items-center gap-2 w-full">
                <Input
                  label="Carrera"
                  name="carrier"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  fullWidth
                  isDisabled
                />
                <Input
                  label="Nombre"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  fullWidth
                />
                <Input
                  label="Apellido"
                  name="lastName"
                  value={userInfo.lastname}
                  onChange={handleInputChange}
                  fullWidth
                />

                <Input
                  label="Carrera"
                  name="carrier"
                  value={userInfo.carrier}
                  onChange={handleInputChange}
                  fullWidth
                />
              </div>

            </Tab>
            <Tab key="password" title="Contraseña">
              <PasswordInput
                label="Nueva contraseña"
                name="password"
                value={userInfo.password}
                onChange={handleInputChange}
                fullWidth
                isClearable
              />
            </Tab>
          </Tabs>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button variant="flat" color="danger" onClick={onOpenChange}>
          Cancel
        </Button>
        <Button onClick={handleSaveChanges} color="primary" isLoading={isLoading}>
          Guardar Cambios
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}