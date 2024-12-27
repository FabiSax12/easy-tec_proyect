import { requestVerificationEmail } from "@/auth/services/auth.service"
import { useAuthStore } from "@/auth/store"
import { Button, Card, CardBody } from "@nextui-org/react"
import { BiCheckCircle } from "react-icons/bi"
import { Navigate } from "react-router-dom"
import { toast } from "sonner"

export const CreatedAccountPage = () => {
  const { user } = useAuthStore()

  if (!user) return <Navigate to="/auth" replace />

  const handleRequestVerificationEmail = () => toast.promise(requestVerificationEmail(user.email), {
    loading: "Enviando email de verificación...",
    success: "Email de verificación enviado",
    error: "Error al enviar email de verificación",
  })

  return <div className="flex flex-col gap-2 w-full items-center">
    <div className="h-[400px] w-[500px]">
      <Card className="w-full h-full p-4">
        <CardBody className="overflow-hidden gap-3 text-center">
          <h1 className="text-center text-lg">Su cuenta ha sido creada exitosamente</h1>
          <BiCheckCircle size={100} className="mx-auto text-green-500" />
          <p className="text-md">Hemos enviado un correo para validar que <span className="font-bold text-success">{user.email}</span> es un correo TEC verdadero</p>
          <p className="text-sm">Por favor revisar la bandeja de spam, si no encuentra el correo puede solicitarlo nuevamente.</p>
          <Button fullWidth color="primary" onClick={handleRequestVerificationEmail}>
            Renviar email de verificación
          </Button>
        </CardBody>
      </Card>
    </div>
  </div>
}