import { Button } from '@easy-tec/ui';
import { BiQuestionMark } from 'react-icons/bi';

interface TourHelpButtonProps {
  onStartTour: () => void;
}

export const TourHelpButton = ({ onStartTour }: TourHelpButtonProps) => {
  return (
    <Button
      isIconOnly
      variant="flat"
      color="primary"
      size="sm"
      onPress={onStartTour}
      className="fixed bottom-4 right-4 z-50 shadow-lg"
      aria-label="Ayuda - Cómo usar esta página"
      title="¿Necesitas ayuda? Haz clic para ver el tutorial"
    >
      <BiQuestionMark className="text-lg" />
    </Button>
  );
};
