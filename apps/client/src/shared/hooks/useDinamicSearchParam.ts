import { useMemo, useState, useCallback, useEffect } from "react"
import { useLocation, useNavigate } from "react-router"

interface Props<T extends string> {
  searchParam: string
  defaultValue: T
  isUniqueSearchParam?: boolean
}

export const useDinamicSearchParam = <T extends string>({ searchParam, defaultValue }: Props<T>) => {
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  )
  const pathname = useMemo(() => location.pathname, [location.pathname])

  const [selected, setSelected] = useState<T>(searchParams.get(searchParam) as T ?? defaultValue)

  const replaceSearchParams = useCallback(
    (param: T) => {
      const newParams = new URLSearchParams(searchParams)
      newParams.set(searchParam, param)

      navigate(`${pathname}?${newParams.toString()}`, { replace: true })
    },
    [navigate, pathname, searchParams, searchParam]
  )

  const handleSelectionChange = (selection: T) => {
    setSelected(selection)
    replaceSearchParams(selection)
  }

  useEffect(() => {
    if (selected !== searchParams.get(searchParam) as T) {
      setSelected(searchParams.get(searchParam) as T)
    }
  }, [searchParams, selected, searchParam])

  return { selected, handleSelectionChange }
}