import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

interface UseOptimisticCreateOptions<TData> {
  queryKey: string[]
  mutationFn: (data: TData) => Promise<any>
  getUpdatedData?: (oldData: TData[], newData: TData) => TData[]
}

export function useOptimisticCreate<TData>({
  queryKey,
  mutationFn,
  getUpdatedData,
}: UseOptimisticCreateOptions<TData>) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn,
    onMutate: async (newData) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey })

      // Snapshot the previous value
      const previousData = queryClient.getQueryData<TData[]>(queryKey)

      // Optimistically update to the new value
      queryClient.setQueryData<TData[]>(queryKey, (old) => {
        if (!old) return [newData]
        if (getUpdatedData) {
          return getUpdatedData(old, newData)
        }
        return [...old, newData]
      })

      // Return context with the previous data
      return { previousData }
    },
    onError: (err, variables, context) => {
      // If the mutation fails, use the context returned from onMutate to roll back
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData)
      }
      toast.error("Error al crear")
    },
    onSuccess: () => {
      toast.success("Creado correctamente")
    },
    onSettled: () => {
      // Always refetch after error or success to ensure data is in sync
      queryClient.invalidateQueries({ queryKey })
    },
  })
}
