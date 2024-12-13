import { GuideTemplate } from "./GuideTemplate"
import { LuBrainCircuit, LuLightbulb, LuMap, LuNetwork, LuPencil } from "react-icons/lu"

export const MindMappingGuidePage = () => <GuideTemplate
  title="¿Qué es el Mind Mapping?"
  subtitle="Una técnica visual para organizar información y estimular el pensamiento creativo."
  description="
    El Mind Mapping, o mapeo mental, es una técnica de visualización de ideas que ayuda a estructurar información de manera gráfica.
    Utiliza un diagrama no lineal para representar ideas, conceptos y sus relaciones,
    partiendo de una idea central y ramificándose hacia conceptos más específicos.
  "
  steps={[
    {
      icon: <LuMap className="mr-2 h-5 w-5 text-blue-500" />,
      description: "Comienza con una idea central en el medio de una página en blanco."
    },
    {
      icon: <LuBrainCircuit className="mr-2 h-5 w-5 text-green-500" />,
      description: "Dibuja ramas que se extiendan desde el centro, cada una representando un subtema principal."
    },
    {
      icon: <LuNetwork className="mr-2 h-5 w-5 text-purple-500" />,
      description: "Añade ramas más pequeñas a estas ramas principales para representar ideas relacionadas."
    },
    {
      icon: <LuPencil className="mr-2 h-5 w-5 text-red-500" />,
      description: "Usa palabras clave, símbolos y colores para representar ideas y conexiones."
    },
    {
      icon: <LuLightbulb className="mr-2 h-5 w-5 text-yellow-500" />,
      description: "Continúa expandiendo el mapa añadiendo más ramas y conexiones según sea necesario."
    }
  ]}
  sections={[
    {
      title: "Aplicaciones del Mind Mapping",
      listItems: [
        "Toma de notas y resumen de información",
        "Planificación de proyectos y tareas",
        "Brainstorming y generación de ideas",
        "Organización de pensamientos para escritura o presentaciones",
        "Estudio y repaso de material académico",
        "Resolución de problemas y toma de decisiones",
        "Visualización de conceptos complejos",
      ]
    },
    {
      title: "Beneficios",
      listItems: [
        "Mejora la comprensión y retención de información",
        "Fomenta el pensamiento creativo y la generación de ideas",
        "Ayuda a ver el panorama general y los detalles simultáneamente",
        "Facilita la organización y estructuración de pensamientos",
        "Mejora la capacidad de resolver problemas",
        "Aumenta la productividad en la planificación y gestión de proyectos",
        "Estimula ambos hemisferios del cerebro",
      ]
    },
    {
      title: "Herramientas para Mind Mapping",
      listItems: [
        "MindMeister: Herramienta online colaborativa para crear mind maps.",
        "XMind: Software de mapeo mental con versiones para escritorio y móvil.",
        "Coggle: Herramienta simple y fácil de usar para crear mind maps online.",
        "MindNode: Aplicación de mind mapping para dispositivos Apple.",
        "Freemind: Software de código abierto para crear mind maps.",
      ]
    }
  ]}
/>