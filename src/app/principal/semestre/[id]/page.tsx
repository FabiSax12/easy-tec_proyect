import SectionCard from "@/components/SectionCard"
import CoursesMainTable from "@/ui/nextui/Table/CoursesMainTable"

interface Props {
  params: { id: string }
}

export default function Page({ params }: Props) {
  return (
    <SectionCard><CoursesMainTable filter={{ semester: params.id }} /></SectionCard>
  )
}