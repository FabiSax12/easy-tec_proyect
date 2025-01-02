import { useMutation, useQueryClient } from "@tanstack/react-query"

interface UseOptimisticUpdateOptions<TData> {
  queryKey: string[]
  mutationFn: (data: TData) => Promise<any>
  getUpdatedData?: (oldData: TData[], newData: TData) => TData[]
}

export function useOptimisticUpdate<TData>({
  queryKey,
  mutationFn,
  getUpdatedData,
}: UseOptimisticUpdateOptions<TData>) {
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
        if (!old) return []
        if (getUpdatedData) {
          return getUpdatedData(old, newData)
        }
        return old.map((item: any) =>
          item.id === (newData as any).id ? newData : item
        )
      })

      // Return context with the previous data
      return { previousData }
    },
    onError: (err, variables, context) => {
      // If the mutation fails, use the context returned from onMutate to roll back
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData)
      }
    },
    onSettled: () => {
      // Always refetch after error or success to ensure data is in sync
      queryClient.invalidateQueries({ queryKey })
    },
  })
}
