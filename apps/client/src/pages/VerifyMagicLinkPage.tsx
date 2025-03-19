import { axiosClient } from "@/api/axios.config"
import { Spinner } from "@/shared/components"
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import { useCallback, useEffect, useState } from "react"
import { BiCheckCircle, BiXCircle } from "react-icons/bi"
import { useNavigate, useSearchParams } from "react-router-dom"

export const VerifyMagicLinkPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const token = searchParams.get("token")

  const verifyMagicLink = useCallback(() => {
    setIsLoading(true)

    try {
      axiosClient.get(`/api/auth/verify?token=${token}`)
        .then(res => {
          if (res.status === 200) {
            setIsVerified(true)
            setIsError(false)
          } else {
            setIsError(true)
            setIsVerified(false)
          }
        }
        )
    } catch (error) {
      setIsError(true)
      setIsVerified(false)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [token])

  useEffect(verifyMagicLink, [verifyMagicLink])

  return <div className="flex flex-col gap-2 w-full items-center">
    <div className="h-[400px] w-[500px]">
      <Card className="w-full h-full p-4">
        {isLoading && (
          <>
            <CardHeader>
              <h1>Verificando enlace</h1>
              <p>Por favor, espere mientras verificamos su cuenta.</p>
            </CardHeader>
            <CardBody className="overflow-hidden gap-3 text-center">
              <Spinner className="h-16 w-16" />
            </CardBody>
          </>
        )}

        {isVerified && (
          <>
            <CardHeader className="block">
              <h1>¡Verificación exitosa!</h1>
              <p>Su cuenta ha sido verificada correctamente.</p>
            </CardHeader>
            <CardBody className="overflow-hidden gap-3 text-center">
              <BiCheckCircle className="h-16 w-16 text-green-500" />
            </CardBody>
            <CardFooter className="flex justify-center">
              <Button color="primary" onClick={() => navigate("/auth")}>
                Iniciar Sesión
              </Button>
            </CardFooter>
          </>
        )}

        {isError && (
          <>
            <CardHeader>
              <h1>Error de verificación</h1>
              <p>Lo sentimos, no pudimos verificar su cuenta.</p>
            </CardHeader>
            <CardBody className="overflow-hidden gap-3 text-center">
              <BiXCircle className="h-16 w-16 text-red-500" />
            </CardBody>
            <CardFooter className="flex justify-center flex-col space-y-2">
              <p className="text-sm text-muted-foreground">Por favor, intente nuevamente o contacte a soporte si el problema persiste.</p>
              <Button onClick={verifyMagicLink}>Reintentar verificación</Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  </div>
}