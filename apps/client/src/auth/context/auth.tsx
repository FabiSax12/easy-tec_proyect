import React, { createContext, useCallback, useEffect, useState } from "react"
import type { ApiResponse, User } from "@/shared/interfaces"
import type { SignUpRequest, AuthResponse } from "@/auth/interfaces"

interface AuthContextProps {
  user: User | null;
  accessToken: string | null;
  signup: (user: SignUpRequest) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => Promise<string | null>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() => localStorage.getItem("access_token"))
  const [refreshToken, setRefreshToken] = useState<string | null>(() => localStorage.getItem("refresh_token"))
  const [user, setUser] = useState<User | null>(null)

  const getUser = useCallback(async () => {
    if (!accessToken || user) return

    try {
      const response = await fetch("/api/auth/profile", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      const { data } = await response.json() as ApiResponse<User>

      if (data) setUser(data)
    } catch (error) {
      console.error("Failed to get user data", error)
      setUser(null)
    }
  }, [accessToken, user])

  const signup = async (user: SignUpRequest) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })

      if (!res.ok) {
        console.error("Error al registrarse", await res.json())
        return
      }

    } catch (error) {
      console.error("Error en la conexión", error)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const { data } = await response.json() as ApiResponse<AuthResponse>

      if (data?.access_token) {
        localStorage.setItem("access_token", data.access_token)
        setAccessToken(data.access_token)
      }

      if (data?.refresh_token) {
        localStorage.setItem("refresh_token", data.refresh_token)
        setRefreshToken(data.refresh_token)
      }
    } catch (error) {
      console.error("Login failed", error)
    }

    await getUser()
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    setAccessToken(null)
    setRefreshToken(null)
    setUser(null)
  }

  const refreshAccessToken = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      })

      const { data } = await response.json() as ApiResponse<AuthResponse>

      if (data?.access_token) {
        localStorage.setItem("access_token", data.access_token)
        setAccessToken(data.access_token)
        return data.access_token
      } else {
        logout()
        return null
      }
    } catch (error) {
      console.error("Failed to refresh access token", error)
      logout()
      return null
    }
  }, [refreshToken])

  useEffect(() => {
    getUser()

    const checkTokenExpiration = () => {
      if (!accessToken) return

      const payload = JSON.parse(atob(accessToken.split(".")[1]))
      const expiresAt = payload.exp * 1000
      const timeLeft = expiresAt - Date.now()

      // Refresh if less than 5 minutes left
      if (timeLeft < 5 * 60 * 1000) refreshAccessToken()
    }

    // Check every minute
    const interval = setInterval(checkTokenExpiration, 60 * 1000)
    return () => clearInterval(interval)
  }, [accessToken, refreshToken, refreshAccessToken, getUser])

  return (
    <AuthContext.Provider value={{ user, accessToken, signup, login, logout, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  )
}
