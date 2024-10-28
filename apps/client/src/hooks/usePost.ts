import { useState, useCallback } from "react"
import { useAuth } from "./useAuth"

interface PostState {
  status: "idle" | "loading" | "success" | "error";
  error?: Error;
}

interface UsePostReturn<T> extends PostState {
  postData: (url: string, data: T) => Promise<void>;
}

export function usePost<T>(): UsePostReturn<T> {
  const { authToken } = useAuth()
  const [state, setState] = useState<PostState>({ status: "idle" })

  const postData = useCallback(async (url: string, data: T) => {
    setState({ status: "loading" })


    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken ? `Bearer ${authToken}` : "",
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
  }, [authToken])

  return { ...state, postData }
}
