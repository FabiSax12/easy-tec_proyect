import { useMutation, useQueryClient, MutationKey, MutationFunction } from "@tanstack/react-query"
import { toast } from "sonner"

type UseOptimisticMutationOptions<TData, TError, TVariables> = {
  mutationKey: MutationKey
  mutationFn: MutationFunction<TData, TVariables>
  onSuccessMessage?: (data: TData) => string
  onErrorMessage?: (error: TError) => string
  onMutateOptimistic?: (variables: TVariables, previousData: TData[]) => TData[]
  rollbackOptimistic?: (previousData: TData[]) => void
  onRetry?: (variables: TVariables) => void
  onUndo?: (variables: TVariables) => void
  replaceOldData?: (data: TData) => void
}

type MutationContext<TData> = {
  previousData: TData[]
}

export function useOptimisticMutation<TData, TError, TVariables>({
  mutationKey,
  mutationFn,
  onSuccessMessage,
  onErrorMessage,
  onMutateOptimistic,
  rollbackOptimistic,
  onRetry,
  onUndo,
  replaceOldData
}: UseOptimisticMutationOptions<TData, TError, TVariables>) {
  const queryClient = useQueryClient()

  return useMutation<TData, TError, TVariables, MutationContext<TData>>({
    mutationKey,
    mutationFn,
    onMutate: async (variables) => {
      // Cancel current queries to avoid overwrites
      await queryClient.cancelQueries({ queryKey: mutationKey })

      // Store the previous data
      const previousData = queryClient.getQueryData<TData[]>(mutationKey) || []

      // Update the cache optimistically
      if (onMutateOptimistic) {
        queryClient.setQueryData<TData[]>(mutationKey, () =>
          onMutateOptimistic(variables, previousData)
        )
      }

      // Return context to rollback if needed
      return { previousData, variables }
    },
    onError: (error, variables, context) => {
      // Rollback cache if needed
      if (context?.previousData && rollbackOptimistic) {
        rollbackOptimistic(context.previousData)
      }

      // Show error toast with retry option
      toast.error(onErrorMessage?.(error) || "Ha occurrido un error", {
        action: onRetry && {
          label: "Reintentar",
          onClick: () => onRetry(variables),
        }
      })
    },
    onSuccess: (data, variables, context) => {
      // Show success toast with undo option
      console.log("onSuccessMessage data: ", data)
      replaceOldData?.(data)

      toast.success(onSuccessMessage?.(data) || "Action completada satisfactoriamente", {
        action: onUndo && {
          label: "Deshacer",
          onClick: () => {
            if (context?.previousData && rollbackOptimistic) {
              rollbackOptimistic(context.previousData)
            }
            onUndo(variables)
          },
        },
      })
    },
    onSettled: () => {
      // Refetch queries to sync state
      console.log("Refetching queries")
      queryClient.invalidateQueries({ queryKey: mutationKey })
    },
  })
}

