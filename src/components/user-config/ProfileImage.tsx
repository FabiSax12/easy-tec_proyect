"use client"
import { useState } from "react"
import Image from "next/image"
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter } from "@nextui-org/react"

interface Props {
  profileImage: string;
  onUploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ProfileImage = ({ profileImage, onUploadImage }: Props) => {
  const [isImageOpen, setIsImageOpen] = useState(false)

  return (
    <div className="flex">
      <Image priority src={profileImage} alt="" width={120} height={120} />
      <div className="ml-4 flex flex-col justify-center items-start gap-2">
        <label
          htmlFor="profileImage"
          className="text-primary text-xs cursor-pointer">
          Cambiar Foto
        </label>
        <Input
          id="profileImage"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onUploadImage}
        />
        <button
          className="text-primary text-xs"
          onClick={() => setIsImageOpen(true)}
        >
          Ver foto
        </button>
      </div>

      <Modal isOpen={isImageOpen}>
        <ModalContent>
          <ModalBody>
            <Image
              src={profileImage}
              alt=""
              width={300}
              height={300}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => setIsImageOpen(false)}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
