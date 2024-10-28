import { useEffect, useState } from "react"

type FetchState<T> = {
  status: "loading" | "success" | "error";
  data?: T;
  error?: Error;
};

export function useFetch<T>(url: string, dependencies: unknown[] = []): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ status: "loading" })

  useEffect(() => {
    console.log(url, dependencies)
    if (dependencies?.some(d => !d)) return

    const fetchData = async () => {
      setState({ status: "loading" })
      const controller = new AbortController()

      try {
        console.log("fetching", url)
        const response = await fetch(url, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        setState({ status: "success", data })
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setState({ status: "error", error })
        }
      }

      return () => controller.abort()
    }

    fetchData()
  }, [url, ...dependencies])

  return state
}
