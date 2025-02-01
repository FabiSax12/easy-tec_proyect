import { LuBookOpen, LuMessageCircle, LuPencil, LuUsers } from "react-icons/lu"
import { GuideTemplate } from "./GuideTemplate"

export const FeynmanMethodGuidePage = () => <GuideTemplate
  title="¿Qué es el Método Feynman?"
  subtitle="Una técnica de aprendizaje que implica explicar un concepto en términos simples para profundizar la comprensión."
  description="
    El Método Feynman, nombrado en honor al físico Richard Feynman, es una técnica de aprendizaje que se basa en la idea de que
    para realmente entender algo, debes ser capaz de explicarlo de manera simple.
    Este método ayuda a identificar lagunas en tu comprensión y a profundizar tu conocimiento sobre un tema.
  "
  steps={[
    {
      icon: <LuBookOpen className="mr-2 h-5 w-5 text-blue-500" />,
      description: "Elige un concepto para estudiar.",
    },
    {
      icon: <LuPencil className="mr-2 h-5 w-5 text-green-500" />,
      description: "Escribe una explicación del concepto como si se lo estuvieras enseñando a alguien que no tiene conocimientos previos sobre el tema.",
    },
    {
      icon: <LuUsers className="mr-2 h-5 w-5 text-purple-500" />,
      description: "Identifica las áreas donde tu explicación es confusa o incompleta."
    },
    {
      icon: <LuBookOpen className="mr-2 h-5 w-5 text-red-500" />,
      description: "Vuelve a las fuentes originales y estudia para llenar los vacíos en tu comprensión."
    },
    {
      icon: <LuMessageCircle className="mr-2 h-5 w-5 text-yellow-500" />,
      description: "Simplifica tu explicación, utilizando analogías y ejemplos para hacer el concepto más accesible."
    }
  ]}
  sections={[
    {
      title: "Aplicaciones del Método Feynman",
      listItems: [
        "Estudio de conceptos complejos en ciencias, matemáticas o cualquier otra disciplina.",
        "Preparación para exámenes o presentaciones.",
        "Mejora de habilidades de comunicación y enseñanza.",
        "Desarrollo de una comprensión más profunda de temas de trabajo o estudio.",
        "Identificación y corrección de malentendidos o lagunas en el conocimiento.",
      ]
    },
    {
      title: "Beneficios",
      listItems: [
        "Mejora significativamente la comprensión de conceptos complejos",
        "Ayuda a identificar y corregir lagunas en el conocimiento",
        "Desarrolla habilidades de comunicación y explicación",
        "Fomenta un aprendizaje activo y profundo",
        "Mejora la retención a largo plazo de la información",
        "Aumenta la confianza en el dominio de un tema",
        "Prepara para enseñar o presentar información de manera efectiva",
      ]
    }
  ]}
  example={[
    {
      description: "Supongamos que quieres entender el concepto de 'inflación' en economía:",
      steps: [
        "Elige el concepto: Inflación",
        "Escribe una explicación simple: 'La inflación es cuando los precios de las cosas suben con el tiempo.'",
        "Identifica áreas confusas: ¿Por qué suben los precios? ¿Cómo se mide?",
        "Estudia más: Investiga sobre oferta y demanda, política monetaria, etc.",
        "Simplifica y usa analogías: 'La inflación es como si el dinero se encogiera. Imagina que tu billete de $10 se vuelve más pequeño y ya no puede comprar tanto como antes.'",
      ]
    }
  ]}
/>