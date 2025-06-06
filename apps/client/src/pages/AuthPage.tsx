import { Suspense } from "react"
import { AuthFormTabs } from "@/modules/auth/components"
import { Card, CardBody } from "@easy-tec/ui"

export const AuthPage = () => {
  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <div className="h-[500px] w-[340px]">
        <Card className="w-full h-full">
          <CardBody className="overflow-hidden">
            <Suspense fallback={<p>Cargando</p>}>
              <AuthFormTabs />
            </Suspense>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
