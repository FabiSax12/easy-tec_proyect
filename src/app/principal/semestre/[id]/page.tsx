import SectionCard from "@/components/SectionCard"
import CoursesMainTable from "@/ui/nextui/Table/CoursesMainTable"
import { NextPage } from "next"

interface Props {
  params: {id: string}
}

const SemestreDashboard: NextPage<Props> = ({params}) => {
  return (
    <SectionCard><CoursesMainTable filter={{semester: params.id}}/></SectionCard>
  )
}

export default SemestreDashboard