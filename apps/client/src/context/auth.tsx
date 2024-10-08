import { createContext, ReactNode, useEffect, useState } from "react"

type Status = "loading" | "error" | "authenticated" | "unauthenticated" | "success"

interface SigninFormValues {
  email: string
  password: string
}

interface SignupFormValues {
  name: string
  lastname: string
  email: string
  password: string
}

export interface AuthContextProps {
  status: Status;
  authToken: string | null;
  login: (user: SigninFormValues) => void;
  signUp: (user: SignupFormValues) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<Status>("unauthenticated")
  const [authToken, setAuthToken] = useState<string | null>(() => {
    return localStorage.getItem("token")
  })

  useEffect(() => {
    const localStorageToken = localStorage.getItem("access_token")
    if (localStorageToken) setAuthToken(localStorageToken)
    setStatus(localStorageToken ? "authenticated" : "unauthenticated")
  }, [])

  const signUp = async (user: SignupFormValues) => {
    try {
      setStatus("loading")
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then(res => res.json())

      if (res.status === 201) return setStatus("success")
      setStatus("error")
      console.log(res)

    } catch (error) {
      setStatus("error")
      console.error(error)
    }
  }

  const login = async (user: SigninFormValues) => {

    try {
      setStatus("loading")

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then(res => res.json())

      if (res.access_token) {
        localStorage.setItem("access_token", res.access_token)
        setAuthToken(res.access_token)
        setStatus("authenticated")
        return
      }

      setStatus("error")
      console.log(res)
    } catch (error) {
      setStatus("error")
      console.error(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    setAuthToken(null)
    setStatus("unauthenticated")
  }

  return <AuthContext.Provider value={{
    status,
    authToken,
    login,
    signUp,
    logout
  }}>
    {children}
  </AuthContext.Provider>
}
