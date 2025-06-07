interface ErrorDisplayProps {
  errors: string[];
}

export const ErrorDisplay = ({ errors }: ErrorDisplayProps) => {
  if (errors.length === 0) return null;

  return (
    <div className="bg-danger-50 border border-danger-200 rounded-lg p-3">
      {errors.map((error, index) => (
        <p key={index} className="text-danger-600 text-sm">
          {error}
        </p>
      ))}
    </div>
  );
};