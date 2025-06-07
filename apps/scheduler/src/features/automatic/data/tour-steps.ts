import { TourStep } from '../types/tour-types';

export const welcomeTourSteps: TourStep[] = [
  {
    element: 'body',
    popover: {
      title: '🎉 ¡Bienvenido al Generador Automático de Horarios!',
      description: `
        <div class="space-y-3">
          <p class="text-lg">¡Hola! 👋 Te voy a enseñar cómo usar esta herramienta súper fácil.</p>
          <p>En solo <strong>3 pasos simples</strong> tendrás todos tus horarios listos:</p>
          <ol class="list-decimal list-inside space-y-1 text-left ml-4">
            <li>✍️ Escribes tu número de carnet</li>
            <li>📚 Seleccionas los cursos que quieres llevar</li>
            <li>⚡ La app te genera TODAS las combinaciones posibles</li>
          </ol>
        </div>
      `,
      side: 'bottom',
    },
  },
];

export const studentIdTourSteps: TourStep[] = [
  {
    element: '#input-student-id',
    popover: {
      title: '🎯 Paso 1: Tu Número de Carnet',
      description: `
        <div class="space-y-2">
          <p class="text-lg">¡Aquí va tu número de carnet! 🆔</p>
          <p>Escribe tu carnet <strong>exactamente como aparece en tu tarjeta de estudiante</strong>.</p>
          <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
            <p class="text-sm">💡 <strong>Ejemplo:</strong> 2023123456</p>
          </div>
          <p class="text-sm text-gray-600">Con tu carnet, encontraremos solo los cursos que TÚ puedes llevar según tu carrera.</p>
        </div>
      `,
      side: 'bottom',
    },
  },
  {
    element: '#btn-search-student',
    popover: {
      title: '🔍 ¡Dale clic aquí!',
      description: `
        <div class="space-y-2">
          <p class="text-lg">Después de escribir tu carnet, <strong>haz clic en este botón</strong> 👆</p>
          <p>Esto buscará todos los cursos disponibles para ti.</p>
          <div class="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
            <p class="text-sm">⏱️ <strong>Espera unos segundos</strong> mientras cargamos tus cursos</p>
          </div>
          <p class="text-sm text-green-600">¡Ya casi estamos listos para el paso 2! 🚀</p>
        </div>
      `,
      side: 'left',
    },
  },
];

export const courseSelectionTourSteps: TourStep[] = [
  {
    element: '#container-selected-courses',
    popover: {
      title: '📚 Paso 2: Selecciona tus Cursos',
      description: `
        <div class="space-y-3">
          <p class="text-lg">¡Perfecto! Ya tienes tus cursos disponibles 🎉</p>
          <p>Ahora solo tienes que <strong>elegir los cursos que quieres llevar</strong> este semestre.</p>
          <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
            <p class="text-sm">✨ <strong>¡No te preocupes por los horarios!</strong><br/>
            La app hará TODAS las combinaciones por ti</p>
          </div>
          <p class="text-sm">Solo dinos QUÉ cursos quieres, nosotros nos encargamos del resto 😎</p>
        </div>
      `,
      side: 'top',
    },
  },
  {
    element: '#autocomplete-course-0',
    popover: {
      title: '🎯 Escoge tu primer curso',
      description: `
        <div class="space-y-2">
          <p class="text-lg">Aquí selecciona tu <strong>primer curso</strong></p>
          <p>Haz clic y verás una lista con todos tus cursos disponibles.</p>
          <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
            <p class="text-sm">💡 <strong>Tip:</strong> Puedes escribir el nombre del curso para encontrarlo más rápido</p>
          </div>
        </div>
      `,
      side: 'bottom',
    },
  },
];

export const campusConfigTourSteps: TourStep[] = [
  {
    element: '#select-campus-0-0',
    popover: {
      title: '🏫 Escoge el Campus',
      description: `
        <div class="space-y-2">
          <p class="text-lg">¡Excelente elección! 🌟</p>
          <p>Ahora dinos <strong>en qué campus</strong> te gustaría llevar este curso.</p>
        </div>
      `,
      side: 'bottom',
    },
  },
  {
    element: '#select-type-of-group-0-0',
    popover: {
      title: '👥 Tipo de Grupo',
      description: `
        <div class="space-y-2">
          <p class="text-lg">¡Última configuración! 🎯</p>
          <p>Selecciona el <strong>tipo de grupo</strong> que prefieres para ese campus</p>
        </div>
      `,
      side: 'bottom',
    },
  },
  {
    element: '#btn-add-course',
    popover: {
      title: '➕ ¿Más cursos?',
      description: `
        <div class="space-y-2">
          <p class="text-lg">Si quieres agregar <strong>más cursos</strong>, haz clic aquí 👆</p>
          <p>Puedes agregar tantos cursos como quieras llevar este semestre.</p>
          <div class="bg-cyan-50 p-3 rounded-lg border-l-4 border-cyan-400">
            <p class="text-sm">🤔 <strong>Consejo:</strong><br/>
            ¡Entre más cursos agregues, más opciones de horarios tendrás!</p>
          </div>
          <p class="text-sm">Cuando termines, ¡vamos al paso final! 🚀</p>
        </div>
      `,
      side: 'left',
    },
  },
];

export const generateSchedulesTourSteps: TourStep[] = [
  {
    element: '#btn-generate-schedules',
    popover: {
      title: '🎉 Paso 3: ¡Generar Horarios!',
      description: `
        <div class="space-y-3">
          <p class="text-lg">¡Ya casi terminamos! Este es el <strong>botón mágico</strong> ✨</p>
          <p>Cuando hagas clic aquí, la app va a:</p>
          <ol class="list-decimal list-inside space-y-1 text-left ml-4">
            <li>🔍 Buscar todos los grupos disponibles</li>
            <li>🧮 Crear TODAS las combinaciones posibles</li>
            <li>📅 Mostrártelas en un horario bonito</li>
          </ol>
          <div class="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
            <p class="text-sm">⚡ <strong>¡Es súper rápido!</strong> En unos segundos tendrás cientos de opciones</p>
          </div>
        </div>
      `,
      side: 'top',
    },
  },
];

export const schedulesGeneratedTourSteps: TourStep[] = [
  {
    element: '.schedule-view-container',
    popover: {
      title: '🎊 ¡Felicidades! Tus horarios están listos',
      description: `
        <div class="space-y-3">
          <p class="text-lg">¡WOW! 🤩 Mira todas las opciones que tienes:</p>
          <ul class="space-y-2 text-left ml-4">
            <li>⬅️➡️ <strong>Navega</strong> entre diferentes combinaciones</li>
            <li>👀 <strong>Revisa</strong> qué horarios te gustan más</li>
            <li>📱 <strong>Guarda</strong> una captura de tu favorito</li>
            <li>📋 <strong>Anota</strong> los códigos de grupo que necesitas</li>
          </ul>
          <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
            <p class="text-sm">🏆 <strong>¡Ya eres un experto!</strong><br/>
            Ahora puedes usar esta herramienta cuando quieras</p>
          </div>
        </div>
      `,
      side: 'left',
    },
  },
];