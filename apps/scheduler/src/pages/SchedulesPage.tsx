import { useState } from "react";
import { useScheduleFilters } from "@/features/manual/hooks/useScheduleFilters";
import { useScheduleData } from "@/features/manual/hooks/useScheduleData";
import { ScheduleControlPanel } from "@/features/manual/components/ScheduleControlPanel";
import { ScheduleContent } from "@/features/manual/components/ScheduleContent";

export const SchedulesPage = () => {
  const [isRowLayout, setIsRowLayout] = useState(true);

  const {
    filters,
    setCampus,
    setCarrier,
    setPeriod,
    campusSelectOptions,
    schoolsOptions,
    periodSelectOptions,
    isFormValid,
  } = useScheduleFilters();

  const {
    schedules,
    isLoading,
    error,
    fetchSchedules,
  } = useScheduleData();

  const handleSearch = () => {
    fetchSchedules(filters);
  };

  const handleRetry = () => {
    fetchSchedules(filters);
  };

  return (
    <section className="flex flex-col gap-5 xl:h-full">
      <ScheduleControlPanel
        filters={filters}
        campusOptions={campusSelectOptions}
        schoolsOptions={schoolsOptions}
        periodOptions={periodSelectOptions}
        isFormValid={isFormValid}
        isLoading={isLoading}
        isRowLayout={isRowLayout}
        error={error}
        onCampusChange={setCampus}
        onCarrierChange={setCarrier}
        onPeriodChange={setPeriod}
        onSearch={handleSearch}
        onLayoutToggle={setIsRowLayout}
        onRetry={handleRetry}
      />

      <ScheduleContent
        schedules={schedules}
        isLoading={isLoading}
        isRowLayout={isRowLayout}
      />
    </section>
  );
};