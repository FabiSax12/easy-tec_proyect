import { FormEvent, useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { periodLongToShort } from "@/shared/utils"
import { useAuthStore } from "@/auth/store"
import { periodsByUserId } from "@/period/services/periods.service"
import { Chip, Form, Input, Select, SelectItem } from "@nextui-org/react"
import { courseInputs, statusColorMap, statusOptions } from "./constants"

import type { Course, Period } from "@/shared/interfaces"

interface Props {
  onSubmit: (data: Course) => void;
  courseData?: Course;
}

export const CourseFormFields = ({ onSubmit, courseData }: Props) => {
  const { user } = useAuthStore()

  const [defaultSelectedPeriod] = useState(new Set([courseData?.academicPeriodId.toString() ?? ""]))
  const [defaultSelectedStatus] = useState(new Set([courseData?.state ?? ""]))

  const periodsQuery = useQuery<Period[]>({
    queryKey: ["userPeriods"],
    queryFn: () => periodsByUserId(user!.id),
    enabled: !!user
  })

  const periods = useMemo(() => {
    if (periodsQuery.data) {
      return periodsQuery.data?.map(p => ({
        label: `${p.type} ${p.typeId}`,
        value: p.id.toString(),
      }))
    }

    return []
  }, [periodsQuery])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const periodId = formData.get("academicPeriodId")?.toString()
    const period = periodsQuery.data?.find(p => p.id.toString() === periodId)
    const newCourseData = {
      ...courseData,
      ...Object.fromEntries(formData),
      credits: Number(formData.get("credits")),
      academicPeriodId: Number(formData.get("academicPeriodId")),
      period: period ? periodLongToShort(`${period.type} ${period.typeId}`) : ""
    } as Course
    onSubmit(newCourseData)
  }

  return <Form
    className="w-full max-w-xs flex flex-col gap-4"
    onSubmit={handleSubmit}
    validationBehavior="native"
    id="course-form"
  >
    {courseInputs.map(({ label, key, type, min }) => (
      <Input
        key={key}
        isRequired
        label={label}
        labelPlacement="outside"
        name={key}
        type={type}
        min={min}
        defaultValue={courseData?.[key as keyof Course].toString()}
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) return "Este campo es requerido"
          if (validationDetails.rangeUnderflow) return "El valor mínimo es 0"
        }}
      />
    ))}

    <Select
      isRequired
      label="Periodo"
      labelPlacement="outside"
      name="academicPeriodId"
      placeholder="Periodo"
      items={periods}
      defaultSelectedKeys={defaultSelectedPeriod}
    >
      {periods.map((period) => (
        <SelectItem key={period.value} value={period.value} textValue={period.label}>
          {period.label}
        </SelectItem>
      ))}
    </Select>

    <Select
      isRequired
      label="Estado"
      labelPlacement="outside"
      name="state"
      placeholder="Estado"
      items={statusOptions}
      defaultSelectedKeys={defaultSelectedStatus}
    >
      {
        statusOptions.map((status) => (
          <SelectItem key={status.value} value={status.value} textValue={status.label}>
            <Chip color={statusColorMap[status.value]} size="sm" variant="flat">
              {status.label}
            </Chip>
          </SelectItem>
        ))
      }
    </Select>
  </Form >
}