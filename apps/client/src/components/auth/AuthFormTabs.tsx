import { useState, useEffect, useCallback, useMemo } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { SignInForm, SignUpForm } from "@/components/auth"
import { Tab, Tabs } from "@nextui-org/react"

export const AuthFormTabs = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search])
  const pathname = location.pathname

  const [selected, setSelected] = useState<string | number>(searchParams.get("authMode") ?? "login")
  const [error, setError] = useState("")
  const [data, setData] = useState({
    email: "",
    name: "",
    lastname: "",
    password: "",
  })

  const replaceSearchParams = useCallback((param: "login" | "sign-up") => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set("authMode", param)
    navigate(`${pathname}?${newParams.toString()}`, { replace: true })
  }, [navigate, pathname, searchParams])

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
  }, [selected, replaceSearchParams])

  return (
    <>
      <Tabs
        fullWidth
        size="md"
        variant="bordered"
        color="primary"
        selectedKey={selected}
        onSelectionChange={(key) => handleSelectionChange(key as "login" | "sign-up")}
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
      {error && <p className="mx-1 py-2 rounded-lg text-center text-sm bg-danger-500 text-white font-bold">
        {error}
      </p>}
    </>
  )
}
