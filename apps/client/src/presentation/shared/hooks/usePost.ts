import { useState, useCallback } from "react"
import { useAuthStore } from "@/auth/store"

interface PostState {
  status: "idle" | "loading" | "success" | "error";
  error?: Error;
}

interface UsePostReturn<T> extends PostState {
  postData: (url: string, data: T) => Promise<void>;
}

export function usePost<T>(): UsePostReturn<T> {
  const { accessToken } = useAuthStore()
  const [state, setState] = useState<PostState>({ status: "idle" })

  const postData = useCallback(async (url: string, data: T) => {
    setState({ status: "loading" })


    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Error al enviar los datos")
      }

      setState({ status: "success" })
    } catch (error) {
      setState({ status: "error", error: error as Error })
    }
  }, [accessToken])

  return { ...state, postData }
}
