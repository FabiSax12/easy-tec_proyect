import { Link as RouterLink } from "react-router"
import { guidesCards } from "@/modules/guides/data/guides-cards"
import { Card, CardBody, CardHeader, Chip } from "@easy-tec/ui"

export const GuidesPage = () => {

  return <div className="px-4 py-6 sm:px-0">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {guidesCards.map((guide) => (
        <Card key={guide.slug} className="p-4 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <guide.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1>{guide.title}</h1>
              <Chip variant="flat" color="primary" size="sm">{guide.category}</Chip>
            </div>
          </CardHeader>
          <CardBody>
            <p>{guide.description}</p>
            <RouterLink
              to={`/dashboard/guias/${guide.slug}`}
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              Leer más →
            </RouterLink>
          </CardBody>
        </Card>
      ))}
    </div>
  </div>
}