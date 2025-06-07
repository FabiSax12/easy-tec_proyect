import { Button, Card, CardBody } from "@easy-tec/ui";

interface ErrorBannerProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorBanner = ({ message, onRetry }: ErrorBannerProps) => (
  <Card className="border-danger-200 bg-danger-50">
    <CardBody className="flex flex-row items-center justify-between">
      <p className="text-danger-600">{message}</p>
      {onRetry && (
        <Button
          size="sm"
          color="danger"
          variant="ghost"
          onPress={onRetry}
        >
          Reintentar
        </Button>
      )}
    </CardBody>
  </Card>
);