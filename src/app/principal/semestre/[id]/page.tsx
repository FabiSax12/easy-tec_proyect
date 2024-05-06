import { CoursesMainTable, SectionCard } from "@/components"

interface Props {
  params: { id: string }
}

export default function Page({ params }: Props) {
  return (
    <SectionCard><CoursesMainTable filter={{ semester: params.id }} /></SectionCard>
  )
}