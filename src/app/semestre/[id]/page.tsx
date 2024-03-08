import { NextPage } from 'next'

interface Props {
  params: {id: string}
}

const SemestreDashboard: NextPage<Props> = ({params}) => {
  return <div>
    {params.id}
  </div>
}

export default SemestreDashboard