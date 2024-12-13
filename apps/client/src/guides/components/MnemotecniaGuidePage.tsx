import { GuideTemplate } from "./GuideTemplate"
import { LuLightbulb, LuBrain, LuLink, LuImage, LuMusic, LuMap } from "react-icons/lu"

export const MnemotecniaGuidePage = () => <GuideTemplate
  title="¿Qué es la Mnemotecnia?"
  subtitle="Técnicas y estrategias para mejorar la memoria y facilitar el aprendizaje."
  description="
    La mnemotecnia engloba un conjunto de técnicas y estrategias diseñadas para mejorar la memoria
    y facilitar el recuerdo de información. Estas técnicas se basan en principios como la asociación,
    la visualización y la organización de la información de manera que sea más fácil de recordar.
    La mnemotecnia es especialmente útil para memorizar datos, fechas, nombres, listas y conceptos
    complejos en diversas áreas de estudio.
  "
  steps={[
    {
      icon: <LuLightbulb className="mr-2 h-5 w-5 text-yellow-500" />,
      description: "Acrónimos y Acrósticos: Crear palabras o frases con las iniciales de la información a recordar.",
    },
    {
      icon: <LuBrain className="mr-2 h-5 w-5 text-purple-500" />,
      description: "Método de Loci (Palacio de la Memoria): Asociar información con lugares físicos familiares.",
    },
    {
      icon: <LuLink className="mr-2 h-5 w-5 text-blue-500" />,
      description: "Método de la Cadena: Crear una historia o secuencia que conecte los elementos a recordar.",
    },
    {
      icon: <LuImage className="mr-2 h-5 w-5 text-green-500" />,
      description: "Visualización: Crear imágenes mentales vívidas y exageradas de la información.",
    },
    {
      icon: <LuMusic className="mr-2 h-5 w-5 text-red-500" />,
      description: "Rimas y Canciones: Convertir la información en rimas o melodías pegajosas.",
    },
    {
      icon: <LuMap className="mr-2 h-5 w-5 text-indigo-500" />,
      description: "Mapas Mentales: Organizar la información visualmente en un diagrama ramificado.",
    },
  ]}
  sections={[
    {
      title: "Beneficios de la Mnemotecnia",
      listItems: [
        "Mejora significativa de la capacidad de memorización",
        "Facilita la retención de información a largo plazo",
        "Aumenta la velocidad de aprendizaje",
        "Ayuda a organizar y estructurar la información",
        "Fomenta la creatividad y el pensamiento asociativo",
        "Reduce el estrés asociado con el estudio y los exámenes",
        "Mejora la comprensión de conceptos complejos"
      ]
    },
    {
      title: "Aplicaciones de la Mnemotecnia",
      listItems: [
        "Aprendizaje de idiomas (vocabulario, gramática)",
        "Memorización de fórmulas y conceptos científicos",
        "Estudio de historia y fechas importantes",
        "Preparación para exámenes y oposiciones",
        "Memorización de discursos y presentaciones",
        "Aprendizaje de nombres y rostros",
        "Recordar listas de tareas o compras"
      ]
    },
    {
      title: "Ejemplo Práctico",
      subContent: <>
        <p className="mb-4 text-gray-700 dark:text-gray-300">Supongamos que necesitas memorizar los planetas del sistema solar en orden:</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Frase mnemotécnica:</strong> "Mi Vecina Tiene Muchas Joyas Siempre Usa Nuestro Perfume"</p>
      </>,
      listItems: [
        "M - Mercurio",
        "V - Venus",
        "T - Tierra",
        "M - Marte",
        "J - Júpiter",
        "S - Saturno",
        "U - Urano",
        "N - Neptuno",
        "P - Plutón (aunque ya no se considera un planeta, se incluye por tradición)"
      ]
    }
  ]}
/>