import { useCallback, useMemo } from "react";
import { useSchedule } from "@/hooks/useSchedules";
import { ScheduleRow } from "@/interfaces/courses-schedule";
// --- Importaciones UI (Asegúrate que sean las correctas para tu proyecto) ---
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Divider,
  Button,
} from "@heroui/react"; // O tu librería UI
// --- Importaciones Iconos ---
import {
  IoLocationOutline,
  IoTimeOutline,
  IoPersonOutline,
} from "react-icons/io5";

interface Props {
  groupSchedule: ScheduleRow; // Recibe los datos de un grupo específico
  // Ya no necesita la lista completa de schedules ni isLoading
}

export const ScheduleGroupCard = ({ groupSchedule }: Props) => {
  const { selectedSubjects, selectedSubjectsIds, addSubject, removeSubject } = useSchedule();

  // Determinar si esta tarjeta específica está seleccionada o deshabilitada
  const isSelected = selectedSubjectsIds.has(groupSchedule.id);

  // Lógica de deshabilitado: se basa en si OTRO grupo del MISMO código ya está seleccionado
  const isDisabled = useMemo(() => {
    // Si ya está seleccionada, no puede estar deshabilitada para deselección
    if (isSelected) return false;
    // Verifica si algún subject seleccionado tiene el mismo código que esta tarjeta
    return selectedSubjects.some(
      (selected) => selected.code === groupSchedule.code
    );
  }, [selectedSubjects, groupSchedule.code, isSelected]);


  // --- Manejador de Clic (igual que antes) ---
  const handleCardClick = useCallback(() => {
    if (isDisabled && !isSelected) { // Solo prevenir si está deshabilitada Y no seleccionada
      return;
    }
    if (isSelected) {
      removeSubject(groupSchedule.id);
    } else {
      addSubject(groupSchedule);
    }
  }, [
    isDisabled,
    isSelected,
    addSubject,
    removeSubject,
    groupSchedule,
  ]);

  return (
    // Añadimos un ancho fijo o mínimo para las tarjetas en el carrusel
    <Card
      isPressable={!isDisabled || isSelected} // Permite presionar si no está deshabilitada o si ya está seleccionada (para deseleccionar)
      onPress={handleCardClick}
      // Define un ancho para las tarjetas dentro del scroll horizontal
      // Ajusta 'w-72' (288px) o 'w-80' (320px) según tu preferencia
      className={`
        w-72 flex-shrink-0
        transition-opacity duration-200
        ${isDisabled && !isSelected ? "opacity-60 cursor-not-allowed" : ""}
        ${isSelected
          ? "ring-2 ring-primary-500 dark:ring-primary-400 bg-primary-50 dark:bg-primary-900/30"
          : "bg-white dark:bg-neutral-800"
        }
      `}
    >
      <CardHeader className="flex gap-3 items-center pb-2">
        {/* Ya no mostramos el código aquí, se muestra a nivel de curso */}
        {/* Mostramos el número de grupo de forma prominente */}
        <Chip
          size="sm"
          color={isSelected ? "primary" : "default"}
          variant="flat"
        >
          Grupo {groupSchedule.group}
        </Chip>
        {/* Podrías añadir el tipo de grupo si es relevante */}
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          ({groupSchedule.typeOfGroup})
        </span>
      </CardHeader>
      <Divider />
      <CardBody className="py-3 px-4 space-y-2 text-sm">
        {/* Profesor(es) */}
        <div className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
          <IoPersonOutline className="text-lg mt-0.5 flex-shrink-0" />
          <div>
            {groupSchedule.teachers && groupSchedule.teachers.length > 0 ? (
              <div className="flex flex-col text-neutral-600 dark:text-neutral-400">
                {groupSchedule.teachers.map((teacher, idx) => (
                  <span key={idx}>{teacher}</span>
                ))}
              </div>
            ) : (
              <span className="text-neutral-500 dark:text-neutral-500 italic">
                Profesor no asignado
              </span>
            )}
          </div>
        </div>
        {/* Horario(s) */}
        <div className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
          <IoTimeOutline className="text-lg mt-0.5 flex-shrink-0" />
          <div>
            {groupSchedule.schedules && groupSchedule.schedules.length > 0 ? (
              <div className="flex flex-col text-neutral-600 dark:text-neutral-400">
                {groupSchedule.schedules.map((schedule, idx) => (
                  <span key={idx}>
                    {`${schedule.day} ${schedule.start} - ${schedule.end}`}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-neutral-500 dark:text-neutral-500 italic">
                Horario no definido
              </span>
            )}
          </div>
        </div>
        {/* Aula */}
        {groupSchedule.classroom && (
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
            <IoLocationOutline className="text-lg" />
            <span>{groupSchedule.classroom}</span>
          </div>
        )}
        {/* Créditos (Quizás redundante si se muestra a nivel de curso) */}
        {/* <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <IoSchoolOutline className="text-lg" />
          <span>{groupSchedule.credits} Créditos</span>
        </div> */}
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-end pt-2 pb-2 px-4">
        <Button
          size="sm"
          isDisabled={isDisabled && !isSelected} // Deshabilitado solo si no se puede seleccionar
          variant={isSelected ? "solid" : "ghost"}
          color="primary"
          onPress={handleCardClick}
          aria-label={isSelected ? "Deseleccionar este grupo" : "Seleccionar este grupo"}
        >
          {isSelected ? "Seleccionado" : "Seleccionar"}
        </Button>
      </CardFooter>
    </Card>
  );
};
