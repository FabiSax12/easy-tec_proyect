import { Card, CardBody } from "@easy-tec/ui";
import { ScheduleFiltersForm } from "./ScheduleFiltersForm";
import { LayoutToggle } from "./LayoutToggle";
import { ErrorBanner } from "./ErrorBanner";
import { ScheduleFilters, SelectOption } from "../types/schedule-types";

interface ScheduleControlPanelProps {
  filters: ScheduleFilters;
  campusOptions: SelectOption[];
  schoolsOptions: SelectOption[];
  periodOptions: SelectOption[];
  isFormValid: boolean;
  isLoading: boolean;
  isRowLayout: boolean;
  error: string | null;
  onCampusChange: (value: string | null) => void;
  onCarrierChange: (value: string | null) => void;
  onPeriodChange: (value: string | null) => void;
  onSearch: () => void;
  onLayoutToggle: (value: boolean) => void;
  onRetry?: () => void;
}

export const ScheduleControlPanel = ({
  filters,
  campusOptions,
  schoolsOptions,
  periodOptions,
  isFormValid,
  isLoading,
  isRowLayout,
  error,
  onCampusChange,
  onCarrierChange,
  onPeriodChange,
  onSearch,
  onLayoutToggle,
  onRetry,
}: ScheduleControlPanelProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Card fullWidth>
        <CardBody className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2">
          <ScheduleFiltersForm
            filters={filters}
            campusOptions={campusOptions}
            schoolsOptions={schoolsOptions}
            periodOptions={periodOptions}
            isFormValid={isFormValid}
            isLoading={isLoading}
            onCampusChange={onCampusChange}
            onCarrierChange={onCarrierChange}
            onPeriodChange={onPeriodChange}
            onSearch={onSearch}
          />

          <LayoutToggle
            isRowLayout={isRowLayout}
            onToggle={onLayoutToggle}
          />
        </CardBody>
      </Card>

      {error && (
        <ErrorBanner
          message={error}
          onRetry={onRetry}
        />
      )}
    </div>
  );
};