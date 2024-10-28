import { createContext, ReactNode, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"

type Status = "loading" | "error" | "authenticated" | "unauthenticated" | "success";

interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  carrier: string;
  verified: boolean;
}

interface SigninFormValues {
  email: string;
  password: string;
}

interface SignupFormValues {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

interface AuthUnauthenticated {
  status: "unauthenticated" | "loading" | "error" | "success";
  user: null;
  authToken: null;
}

interface AuthAuthenticated {
  status: "authenticated";
  user: User;
  authToken: string;
}

export type AuthContextProps =
  | AuthUnauthenticated & { login: (user: SigninFormValues) => Promise<void>; signUp: (user: SignupFormValues) => Promise<void>; logout: () => void; }
  | AuthAuthenticated & { login: (user: SigninFormValues) => Promise<void>; signUp: (user: SignupFormValues) => Promise<void>; logout: () => void; };

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<Status>("loading")
  const [user, setUser] = useState<User | null>(null)
  const [authToken, setAuthToken] = useState<string | null>(() => sessionStorage.getItem("access_token"))

  useEffect(() => {
    const storedToken = sessionStorage.getItem("access_token")
    if (storedToken) {
      setAuthToken(storedToken)
      setUser(jwtDecode<User>(storedToken))
      setStatus("authenticated")
    } else {
      setStatus("unauthenticated")
    }
  }, [])

  const signUp = async (user: SignupFormValues) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })

      if (!res.ok) {
        setStatus("error")
        console.error("Error al registrarse", await res.json())
        return
      }

      setStatus("success")
    } catch (error) {
      setStatus("error")
      console.error("Error en la conexión", error)
    }
  }

  const login = async (user: SigninFormValues) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })

      const data = await res.json()
      if (res.ok && data.access_token) {
        sessionStorage.setItem("access_token", data.access_token)
        setAuthToken(data.access_token)
        setUser(jwtDecode<User>(data.access_token))
        setStatus("authenticated")
      } else {
        setStatus("error")
        console.log("Login fallido:", data)
      }
    } catch (error) {
      setStatus("error")
      console.error("Error en la conexión", error)
    }
  }

  const logout = () => {
    sessionStorage.removeItem("access_token")
    setAuthToken(null)
    setUser(null)
    setStatus("unauthenticated")
  }

  return (
    <AuthContext.Provider
      value={
        status === "authenticated"
          ? { status, user: user as User, authToken: authToken as string, login, signUp, logout }
          : { status, user: null, authToken: null, login, signUp, logout }
      }
    >
      {children}
    </AuthContext.Provider>
  )
}
