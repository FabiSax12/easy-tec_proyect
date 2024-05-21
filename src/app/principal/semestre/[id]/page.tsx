import { Suspense } from "react"
import { CoursesMainTable, SectionCard } from "@/components"
import { Spinner } from "@nextui-org/react"

interface Props {
  params: { id: string }
}

export default function Page({ params }: Props) {
  return (
    <SectionCard>
      <Suspense fallback={<Spinner color="primary" />}>
        <CoursesMainTable filter={{ period: params.id }} />
      </Suspense>
    </SectionCard>
  )
}