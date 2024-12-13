import { useState, useEffect, useCallback, useMemo } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { SignInForm, SignUpForm } from "@/auth/components"
import { Tab, Tabs } from "@nextui-org/react"

import type { AuthMode, FormData } from "@/auth/components"

export const AuthFormTabs = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  )
  const pathname = useMemo(() => location.pathname, [location.pathname])

  const [selected, setSelected] = useState<AuthMode>(searchParams.get("authMode") as AuthMode ?? "login")
  const [error, setError] = useState("")
  const [data, setData] = useState<FormData>({
    email: "",
    name: "",
    lastname: "",
    password: "",
  })

  const replaceSearchParams = useCallback(
    (param: AuthMode) => {
      const newParams = new URLSearchParams(searchParams)
      newParams.set("authMode", param)
      navigate(`${pathname}?${newParams.toString()}`, { replace: true })
      setData({
        email: "",
        name: "",
        lastname: "",
        password: "",
      })
    },
    [navigate, pathname, searchParams]
  )

  const handleSelectionChange = (selection: AuthMode) => {
    setSelected(selection)
    replaceSearchParams(selection)
  }

  const handleInputChange = (key: keyof FormData, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }

  useEffect(() => {
    if (selected !== "login" && selected !== "sign-up") {
      replaceSearchParams("login")
    }
  }, [selected, replaceSearchParams])

  return (
    <>
      <Tabs
        fullWidth
        size="md"
        variant="bordered"
        color="primary"
        selectedKey={selected}
        onSelectionChange={(key) => handleSelectionChange(key as AuthMode)}
        classNames={{ tab: "data-[focus-visible=true]:outline-0" }}
      >
        <Tab key="login" title="Login">
          <SignInForm
            data={data}
            handleInputChange={handleInputChange}
            setSelected={setSelected}
            setError={setError}
          />
        </Tab>
        <Tab key="sign-up" title="Sign up">
          <SignUpForm
            data={data}
            handleInputChange={handleInputChange}
            setSelected={setSelected}
            setError={setError}
          />
        </Tab>
      </Tabs>
      {error && <ErrorMessage message={error} />}
    </>
  )
}

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="mx-1 py-2 rounded-lg text-center text-sm bg-danger-500 text-white font-bold">
    {message}
  </p>
)
