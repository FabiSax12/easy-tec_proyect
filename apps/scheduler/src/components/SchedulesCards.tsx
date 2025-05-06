import { useCallback, useMemo, useState } from "react";
import { useSchedule } from "@/hooks/useSchedules"; // Reutiliza el mismo hook
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Pagination, Spinner } from "@heroui/react"; // Solo necesitamos Pagination y Spinner
import { ScheduleRow } from "@/interfaces/courses-schedule";
import { IoInformationCircleOutline, IoLocationOutline, IoPeopleOutline, IoPersonOutline, IoPricetagOutline, IoSchoolOutline, IoTimeOutline } from "react-icons/io5"

interface Props {
  schedules: ScheduleRow[];
  isLoading: boolean;
}

export const SchedulesCards = ({ schedules, isLoading }: Props) => {
  const {
    selectedSubjects = [],
    selectedSubjectsIds,
    addSubject,
    removeSubject,
  } = useSchedule();

  // --- Lógica de Disabled Keys (idéntica a la tabla) ---
  const disabledKeys = useMemo(() => {
    const selectedCodes = new Set(selectedSubjects.map((s) => s.code));
    return schedules
      .filter(
        (schedule) =>
          selectedCodes.has(schedule.code) &&
          !selectedSubjectsIds.has(schedule.id)
      )
      .map((item) => item.id);
  }, [schedules, selectedSubjects, selectedSubjectsIds]);

  // --- Lógica de Paginación (idéntica a la tabla) ---
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pages = Math.ceil(schedules.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return schedules.slice(start, end);
  }, [page, schedules]);

  // --- Manejador de Clic para Tarjetas ---
  const handleCardClick = useCallback(
    (item: ScheduleRow) => {
      // No hacer nada si la tarjeta está deshabilitada
      if (disabledKeys.includes(item.id)) {
        return;
      }

      // Alternar selección
      if (selectedSubjectsIds.has(item.id)) {
        removeSubject(item.id);
      } else {
        addSubject(item);
      }
    },
    [disabledKeys, selectedSubjectsIds, addSubject, removeSubject]
  );

  // --- Renderizado ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Spinner label="Buscando en TEC Digital..." />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center p-8 text-neutral-500 dark:text-neutral-400">
        No hay horarios disponibles
      </div>
    );
  }

  return (
    <div className="space-y-4 p-2"> {/* Espacio entre tarjetas */}
      {items.map((item) => {
        const isSelected = selectedSubjectsIds.has(item.id);
        const isDisabled = disabledKeys.includes(item.id);

        return (
          <Card
            key={item.id}
            isPressable={!isDisabled}
            onPress={() => handleCardClick(item)}
            className={`
              transition-opacity duration-200 w-full
              ${isDisabled ? "opacity-60 cursor-not-allowed" : ""}
              ${isSelected
                ? "ring-2 ring-primary-500 dark:ring-primary-400 bg-primary-50 dark:bg-primary-900/30" // Estilo seleccionado
                : "bg-white dark:bg-neutral-800"
              }
            `}
          >
            <CardHeader className="flex gap-3 items-center pb-2">
              {/* Código como Chip */}
              <Chip
                size="sm"
                color={isSelected ? "primary" : "default"}
                variant="flat"
              >
                {item.code}
              </Chip>
              {/* Nombre de la materia */}
              <p className="text-md font-semibold text-neutral-800 dark:text-neutral-100 truncate">
                {item.subject}
              </p>
            </CardHeader>
            <Divider />
            <CardBody className="py-3 px-4 space-y-2 text-sm">
              {/* Grupo */}
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <IoPeopleOutline className="text-lg" />
                <span>Grupo: {item.group}</span>
              </div>

              {/* Profesor(es) */}
              <div className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                <IoPersonOutline className="text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Profesor(es):</span>
                  {item.teachers && item.teachers.length > 0 ? (
                    <div className="flex flex-col text-neutral-600 dark:text-neutral-400">
                      {item.teachers.map((teacher, idx) => (
                        <span key={idx}>{teacher}</span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-neutral-500 dark:text-neutral-500 italic ml-1">
                      No asignado
                    </span>
                  )}
                </div>
              </div>

              {/* Horario(s) */}
              <div className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                <IoTimeOutline className="text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Horario(s):</span>
                  {item.schedules && item.schedules.length > 0 ? (
                    <div className="flex flex-col text-neutral-600 dark:text-neutral-400">
                      {item.schedules.map((schedule, idx) => (
                        <span key={idx}>
                          {`${schedule.day} ${schedule.start} - ${schedule.end}`}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-neutral-500 dark:text-neutral-500 italic ml-1">
                      No definido
                    </span>
                  )}
                </div>
              </div>

              {/* Aula */}
              {item.classroom && ( // Mostrar solo si hay aula definida
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <IoLocationOutline className="text-lg" />
                  <span>Aula: {item.classroom}</span>
                </div>
              )}

              {/* Créditos */}
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <IoSchoolOutline className="text-lg" />
                <span>Créditos: {item.credits}</span>
              </div>

              {/* Tipo de Grupo */}
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <IoPricetagOutline className="text-lg" />
                <span>Tipo Grupo: {item.typeOfGroup}</span>
              </div>

              {/* Tipo de Materia */}
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <IoInformationCircleOutline className="text-lg" />
                <span>Tipo Materia: {item.typeOfSubject}</span>
              </div>

              {/* Espacios (Opcional, si quieres mostrarlo) */}
              {/* <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <IoPeopleOutline className="text-lg" />
                <span>Espacios: {item.reserved}/{item.totalSpaces}</span>
              </div> */}

            </CardBody>
            <Divider />
            <CardFooter className="flex justify-end pt-2 pb-2 px-4">
              {/* Botón de Selección/Deselección */}
              <Button
                size="sm" // Botón pequeño
                isDisabled={isDisabled}
                variant={isSelected ? "solid" : "ghost"} // Ghost por defecto, solid si seleccionado
                color="primary" // Siempre color primario, el variant cambia la apariencia
                onPress={() => handleCardClick(item)}
                aria-label={isSelected ? "Deseleccionar este horario" : "Seleccionar este horario"}
              >
                {isSelected ? "Seleccionado" : "Seleccionar"}
              </Button>
            </CardFooter>
          </Card>
        );
      })}

      {/* Paginación */}
      {pages > 1 && (
        <div className="flex w-full justify-center py-4">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary" // Asegúrate que coincida con tu tema
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          // className="bg-white dark:bg-neutral-800 rounded-full" // Estilo opcional para la paginación
          />
        </div>
      )}
    </div>
  );
};
