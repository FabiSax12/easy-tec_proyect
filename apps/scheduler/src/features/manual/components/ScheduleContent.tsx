import { Card, CardBody } from "@easy-tec/ui";
import { GroupedSchedulesView } from "@/features/manual/components/GroupedSchedulesView";
import { ManualScheduleView } from "@/components/schedule-views/ManualScheduleView";
import { ScheduleRow } from "@/interfaces/courses-schedule";

interface ScheduleContentProps {
  schedules: ScheduleRow[];
  isLoading: boolean;
  isRowLayout: boolean;
}

export const ScheduleContent = ({
  schedules,
  isLoading,
  isRowLayout
}: ScheduleContentProps) => {
  return (
    <div
      className={`
        w-full flex flex-col gap-4 flex-1
        ${isRowLayout ? "xl:flex-row xl:h-full" : "xl:flex-col"}
      `}
    >
      {/* Panel de horarios */}
      <Card
        className={`
          flex-1 px-1 rounded-2xl
          ${isRowLayout ? "h-[1000px]" : ""}
        `}
      >
        <GroupedSchedulesView
          schedules={schedules}
          isLoading={isLoading}
        />
      </Card>

      {/* Panel de horario manual */}
      <Card
        className={`
          ${!isRowLayout && "h-full sm:px-10 md:px-20 lg:px-32 xl:px-56"}
        `}
      >
        <CardBody>
          <ManualScheduleView />
        </CardBody>
      </Card>
    </div>
  );
};