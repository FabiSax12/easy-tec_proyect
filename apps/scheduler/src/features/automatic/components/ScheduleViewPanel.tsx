import { Card, CardBody } from "@easy-tec/ui";
import { AutoScheduleView } from "@/components/schedule-views/AutoScheduleView";
import { SimpleCourseRow } from "../types/auto-schedule-types";

interface ScheduleViewPanelProps {
  isGenerating: boolean;
  scheduleCombinations: SimpleCourseRow[][];
  currentCombination: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const ScheduleViewPanel = ({
  isGenerating,
  scheduleCombinations,
  currentCombination,
  onNavigate,
}: ScheduleViewPanelProps) => {
  const handlePrev = () => onNavigate('prev');
  const handleNext = () => onNavigate('next');

  return (
    <Card className="col-span-1">
      <CardBody className="flex flex-col justify-center items-center flex-1 relative">
        <AutoScheduleView
          isGenerating={isGenerating}
          scheduleCombinations={scheduleCombinations}
          currentCombination={currentCombination}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </CardBody>
    </Card>
  );
};