import { useDinamicSearchParam } from "@/presentation/shared/hooks/useDinamicSearchParam"
import { SignInForm, SignUpForm } from "@/presentation/auth/components"
import { Tab, Tabs } from "@nextui-org/react"

import type { AuthMode } from "@/presentation/auth/components"

export const AuthFormTabs = () => {
  const { selected, handleSelectionChange } = useDinamicSearchParam<AuthMode>({
    searchParam: "authMode",
    defaultValue: "login",
    isUniqueSearchParam: true
  })

  return <Tabs
    fullWidth
    size="md"
    variant="bordered"
    color="primary"
    selectedKey={selected}
    onSelectionChange={(key) => handleSelectionChange(key as AuthMode)}
    classNames={{ tab: "data-[focus-visible=true]:outline-0" }}
  >
    <Tab key="login" title="Login">
      <SignInForm setSelected={handleSelectionChange} />
    </Tab>
    <Tab key="sign-up" title="Sign up">
      <SignUpForm setSelected={handleSelectionChange} />
    </Tab>
  </Tabs>
}