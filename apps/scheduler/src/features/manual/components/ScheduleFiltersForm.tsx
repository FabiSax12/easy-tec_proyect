import { ValidatedSelect as Select } from "@/components/ui";
import { Button } from "@easy-tec/ui";
import { BiSearchAlt } from "react-icons/bi";
import { SelectOption, ScheduleFilters } from "../types/schedule-types";

interface ScheduleFiltersFormProps {
  filters: ScheduleFilters;
  campusOptions: SelectOption[];
  schoolsOptions: SelectOption[];
  periodOptions: SelectOption[];
  isFormValid: boolean;
  isLoading: boolean;
  onCampusChange: (value: string | null) => void;
  onCarrierChange: (value: string | null) => void;
  onPeriodChange: (value: string | null) => void;
  onSearch: () => void;
}

export const ScheduleFiltersForm = ({
  filters,
  campusOptions,
  schoolsOptions,
  periodOptions,
  isFormValid,
  isLoading,
  onCampusChange,
  onCarrierChange,
  onPeriodChange,
  onSearch,
}: ScheduleFiltersFormProps) => {
  return (
    <div className="w-xs md:flex-1 flex flex-col md:flex-row md:flex-wrap items-center md:justify-evenly gap-2">
      <Select
        label="Sede"
        placeholder="Selecciona una sede"
        errorMessage="Debe seleccionar una sede"
        options={campusOptions}
        value={filters.campus ?? undefined}
        size="sm"
        onValueChange={onCampusChange}
        isDisabled={isLoading}
      />

      <Select
        label="Escuela"
        placeholder="Selecciona una escuela"
        errorMessage="Debe seleccionar una escuela"
        options={schoolsOptions}
        value={filters.carrier ?? undefined}
        size="sm"
        onValueChange={onCarrierChange}
        isDisabled={isLoading || !filters.campus}
      />

      <Select
        label="Periodo Académico"
        placeholder="Selecciona un período"
        errorMessage="Debe seleccionar un periodo académico"
        options={periodOptions}
        value={filters.period ?? undefined}
        size="sm"
        onValueChange={onPeriodChange}
        isDisabled={isLoading}
      />

      {/* Botón desktop (solo icono) */}
      <Button
        onPress={onSearch}
        color="primary"
        isDisabled={!isFormValid}
        isLoading={isLoading}
        startContent={<BiSearchAlt />}
        className="hidden md:inline-flex"
        aria-label="Buscar horarios"
      >
        Buscar
      </Button>

      {/* Botón móvil (con texto) */}
      <Button
        onPress={onSearch}
        color="primary"
        isDisabled={!isFormValid}
        isLoading={isLoading}
        startContent={<BiSearchAlt />}
        className="w-xs justify-center max-w-sm md:hidden"
      >
        {isLoading ? 'Buscando...' : 'Buscar'}
      </Button>
    </div>
  );
};