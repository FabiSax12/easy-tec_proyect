import { Spinner } from "@easy-tec/ui";

interface LoadingSpinnerProps {
  label?: string;
}

export const LoadingSpinner = ({
  label = "Buscando horarios..."
}: LoadingSpinnerProps) => (
  <div className="flex justify-center items-center p-8 min-h-[200px]">
    <Spinner label={label} />
  </div>
);
