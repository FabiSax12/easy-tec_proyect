import { GuideTemplate } from "./GuideTemplate"
import { LuRepeat, LuCheckCircle, LuBookOpen, LuBrain } from "react-icons/lu"

export const ActiveRecallGuidePage = () => <GuideTemplate
  title="¿Qué es Active Recall?"
  subtitle="Una técnica de aprendizaje que implica recuperar activamente información de la memoria."
  description="
    Active Recall es una técnica de aprendizaje que implica recuperar activamente información de la memoria,
    en lugar de simplemente releer o revisar pasivamente el material. Esta técnica se basa en el principio
    de que el acto de recordar fortalece las conexiones neuronales asociadas con esa información, lo que
    mejora la retención a largo plazo.
  "
  steps={[
    {
      icon: <LuBrain className="mr-2 h-5 w-5 text-blue-500" />,
      description: "Estudia el material que deseas aprender."
    },
    {
      icon: <LuBookOpen className="mr-2 h-5 w-5 text-green-500" />,
      description: "Cierra tus notas o el libro de texto."
    },
    {
      icon: <LuCheckCircle className="mr-2 h-5 w-5 text-purple-500" />,
      description: "Intenta recordar y explicar los conceptos clave sin mirar tus notas."
    },
    {
      icon: <LuRepeat className="mr-2 h-5 w-5 text-red-500" />,
      description: "Verifica tus respuestas y repite el proceso, centrándote en las áreas que te resultaron difíciles."
    },
  ]}
  sections={[
    {
      title: "Técnicas de Active Recall",
      listItems: [
        "Autoevaluación: Hazte preguntas sobre el material y trata de responderlas sin consultar tus notas.",
        "Flashcards: Crea tarjetas con preguntas en un lado y respuestas en el otro.",
        "Resúmenes de memoria: Intenta escribir un resumen del material sin mirar tus notas.",
        "Enseñar a otros: Explica los conceptos a un compañero o incluso a un objeto inanimado.",
        "Mapas mentales de memoria: Dibuja un mapa mental del tema sin consultar tus notas.",
      ]
    },
    {
      title: "Beneficios",
      listItems: [
        "Mejora la retención a largo plazo de la información",
        "Identifica lagunas en el conocimiento",
        "Aumenta la comprensión profunda del material",
        "Prepara mejor para exámenes y evaluaciones",
        "Ahorra tiempo de estudio a largo plazo",
        "Desarrolla habilidades de pensamiento crítico",
        "Aumenta la confianza en el conocimiento adquirido",
      ]
    }
  ]}
/>