import { Link, useNavigate } from "react-router-dom"
import { Button, Image, Input, Modal, ModalHeader, ModalContent, useDisclosure, Textarea, Form, ModalBody } from "@nextui-org/react"
import { LuHome, LuArrowLeft, LuMail, LuGithub } from "react-icons/lu"
import { GoReport } from "react-icons/go"

export const NotFound = () => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="w-full max-w-md mb-8">
        <Image
          src="https://media4.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif?cid=6c09b9522ykw5iqq13lipccxp86krs3ria5c24rvd1lyjs3k&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Página no encontrada"
          width={500}
          height={200}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      {/* <LuAlertTriangle className="w-20 h-20 text-yellow-500 mb-8" /> */}
      <h1 className="text-4xl font-bold mb-2 text-center">404: Página no encontrada</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link to="/">
          <Button className="flex items-center">
            <LuHome className="mr-2 h-4 w-4" /> Ir al inicio
          </Button>
        </Link>
        <Button variant="bordered" className="flex items-center" onClick={() => navigate(-1)}>
          <LuArrowLeft className="mr-2 h-4 w-4" /> Volver atrás
        </Button>
      </div>

      <Button variant="flat" onClick={onOpen}>Reportar un problema</Button>

      <div className="mt-8 text-sm text-muted-foreground">
        <p>¿Prefieres contactarnos directamente?</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link to="mailto:f.vargas.1@estudiantec.cr" className="flex items-center hover:text-primary">
            <LuMail className="mr-1 h-4 w-4" /> Email
          </Link>
          <Link to="https://github.com/FabiSax12/easy-tec_proyect/issues" className="flex items-center hover:text-primary">
            <LuGithub className="mr-1 h-4 w-4" /> GitHub Issues
          </Link>
        </div>
      </div>
    </div>

    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>Reportar un problema</ModalHeader>

        <ModalBody>

          <Form className="grid gap-4 py-4" validationBehavior="native">
            <Input
              isRequired
              name="email"
              label="Email"
              labelPlacement="outside"
              type="email"
              placeholder="jhondoe@gmail.com"
              errorMessage="El email es requerido"
            />
            <Textarea
              isRequired
              name="problem"
              label="Problema"
              labelPlacement="outside"
              placeholder="El problema es que..."
              errorMessage="El problema es requerido"
            />

            <Button
              color="primary"
              variant="flat"
              type="submit"
              startContent={<GoReport />}
              className="w-full"
            >Enviar reporte</Button>
          </Form>

        </ModalBody>
      </ModalContent>
    </Modal>
  </>
}
