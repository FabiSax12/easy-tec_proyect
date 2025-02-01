import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

interface UseOptimisticDeleteOptions<TData> {
  queryKey: string[]
  mutationFn: (id: number | string) => Promise<TData>
  getUpdatedData?: (oldData: TData[], id: number | string) => TData[]
}

export function useOptimisticDelete<TData>({
  queryKey,
  mutationFn,
  getUpdatedData,
}: UseOptimisticDeleteOptions<TData>) {
  const queryClient = useQueryClient()
  let toastId: string | number

  return useMutation({
    mutationFn,
    onMutate: async (id) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey })

      // Snapshot the previous value
      const previousData = queryClient.getQueryData<TData[]>(queryKey)

      // Optimistically update to the new value
      queryClient.setQueryData<TData[]>(queryKey, (old) => {
        if (!old) return []
        if (getUpdatedData) {
          return getUpdatedData(old, id)
        }
        return old.filter((item: any) => item.id !== id)
      })

      toastId = toast.info("Eliminando...", {
        action: {
          label: "Deshacer",
          onClick: async () => {
            if (previousData) {
              queryClient.setQueryData(queryKey, previousData)
              await queryClient.cancelQueries({ queryKey })
              toast.success("Cambios revertidos")
              toast.dismiss(toastId)
            }
          }
        }
      })

      return { previousData }
    },
    onError: (err, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData)
      }
      toast.error("Error al eliminar")
    },
    onSuccess: () => {
      toast.success("Eliminado correctamente")
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })
}
