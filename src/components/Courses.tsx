import CoursesMainTable from '@/ui/nextui/Table/CoursesMainTable'
import { NextPage } from 'next'

interface Props {
  className?: string
}

const Courses: NextPage<Props> = ({className}) => {
  return <section className={className}>
    <header className='w-min mx-auto'>
      <h3 className='text-xl mb-4'>Cursos</h3>
    </header>
    <CoursesMainTable />
  </section>
}

export default Courses