"use client"
import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { SignUpForm, SignInForm } from "@/components"
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"

interface Props { }

export default function AuthPage() {
  // Navigation
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  // State
  const [selected, setSelected] = useState<string | number>(searchParams.get("authMode") ?? "login")
  const [error, setError] = useState("")
  const [data, setData] = useState({
    email: "",
    name: "",
    lastname: "",
    password: "",
  })

  // Functions
  const replaceSearchParams = (param: "login" | "sign-up") => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set("authMode", param)
    router.push(`${pathname.split("?")[0]}?${newParams}`)
  }

  const handleSelectionChange = (selection: "login" | "sign-up") => {
    setSelected(selection)
    replaceSearchParams(selection)
    setData({
      email: "",
      name: "",
      lastname: "",
      password: "",
    })
  }

  const handleInputChange = (key: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }

  useEffect(() => {
    if (selected !== "login" && selected !== "sign-up") {
      replaceSearchParams("login")
    }
  }, [selected])

  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <div className="h-[500px] w-[340px]">
        <Card className="w-full h-full">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              variant="underlined"
              selectedKey={selected}
              onSelectionChange={handleSelectionChange}
            >
              <Tab key="login" title="Login">
                <SignInForm data={data} handleInputChange={handleInputChange} setSelected={setSelected} setError={setError} />
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <SignUpForm data={data} handleInputChange={handleInputChange} setSelected={setSelected} setError={setError} />
              </Tab>
            </Tabs>
            {error && (
              <p className="mx-1 py-2 rounded-lg text-center text-sm bg-danger-500 text-white font-bold">{error}</p>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}