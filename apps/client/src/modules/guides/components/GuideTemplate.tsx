import { Link as RouterLink } from "react-router-dom"
import { LuArrowLeft } from "react-icons/lu"
import { Divider } from "@heroui/react"

interface Step {
  icon: React.ReactNode
  description: React.ReactNode
}

interface Section {
  title: string
  subContent?: React.ReactNode
  listItems: React.ReactNode[]
}

interface Example {
  description: string
  steps: React.ReactNode[]
}

interface Props {
  title: string
  subtitle: string
  description: string
  steps: Step[]
  sections?: Section[]
  example?: Example[]
}

export const GuideTemplate = ({ title, subtitle, description, steps, sections, example }: Props) => {
  return <article>
    <div className="bg-white max-w-7xl mx-auto px-4 shadow overflow-hidden sm:rounded-lg sm:px-6 lg:px-8">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <span>
          <h2 className="text-lg leading-6 font-medium text-default-900">
            {title}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-default-500">
            {subtitle}
          </p>
        </span>

        <RouterLink to="/dashboard/guias" className="text-blue-600 flex items-center hover:text-blue-800">
          <LuArrowLeft className="mr-2" />
          Volver a las guías
        </RouterLink>
      </div>

      <Divider />

      <div className="px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-default-500">
              Descripción
            </dt>
            <dd className="mt-1 text-sm text-default-900">
              {description}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-default-500">
              Pasos
            </dt>
            <dd className="mt-1 text-sm text-default-900">
              <ol className="list-decimal list-inside space-y-2">
                {
                  steps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      {step.icon}
                      <span>{step.description}</span>
                    </li>
                  ))
                }
              </ol>
            </dd>
          </div>

          {
            sections?.map((section, idx) => (
              <div key={idx} className="sm:col-span-2">
                <dt className="text-sm font-medium text-default-500">
                  {section.title}
                </dt>
                <dd className="mt-1 text-sm text-default-900">
                  {section.subContent && <div className="mt-1 text-sm text-default-900">{section.subContent}</div>}
                  <ul className="list-disc list-inside space-y-2">
                    {
                      section.listItems.map((item, idx) => <li key={idx}>{item}</li>)
                    }
                  </ul>
                </dd>
              </div>
            ))
          }

          {
            example?.map((example, idx) => (
              <div key={idx} className="sm:col-span-2">
                <dt className="text-sm font-medium text-default-500">
                  Ejemplo Práctico
                </dt>
                <dd className="mt-1 text-sm text-default-900">
                  <p className="mb-2">{example.description}</p>
                  <ol className="list-decimal list-inside space-y-2">
                    {
                      example.steps.map((step, idx) => <li key={idx}>{step}</li>)
                    }
                  </ol>
                </dd>
              </div>
            ))
          }
        </dl>
      </div>
    </div>
  </article>
}
