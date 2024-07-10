import { AuthFormTabs } from "@/components/auth"
import { Card, CardBody } from "@nextui-org/react"
import { Suspense } from "react"

interface Props { }

export default function AuthPage() {

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