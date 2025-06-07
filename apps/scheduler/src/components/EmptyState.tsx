interface EmptyStateProps {
  message?: string;
}

export const EmptyState = ({
  message = "No hay horarios disponibles que coincidan con tu búsqueda."
}: EmptyStateProps) => (
  <div className="text-center p-8 text-neutral-500 dark:text-neutral-400 min-h-[200px] flex items-center justify-center">
    <p>{message}</p>
  </div>
);