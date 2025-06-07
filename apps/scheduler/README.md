# 📚 Sistema de Gestión de Horarios TEC

Un sistema web moderno y eficiente para la generación automática de horarios en el Tecnológico de Costa Rica, desarrollado con React, TypeScript y componentes optimizados.

## 🌟 Características Principales

### 🔄 Generación Automática de Horarios
- **Algoritmo inteligente** que genera todas las combinaciones posibles de horarios
- **Filtrado automático** de conflictos de horario
- **Optimización** para múltiples cursos y campus
- **Navegación** entre diferentes opciones de horario

### 🎯 Gestión Manual de Horarios
- **Búsqueda avanzada** por sede, escuela y período académico
- **Visualización agrupada** de cursos por código
- **Filtros dinámicos** por nombre de curso
- **Paginación** para manejar grandes volúmenes de datos

### 🎓 Sistema de Tours Interactivos
- **Guías paso a paso** para nuevos usuarios
- **Tours contextuales** que se activan según las acciones del usuario
- **Interfaz profesional** con Driver.js
- **Progreso persistente** en localStorage

### 📱 Diseño Responsivo
- **Mobile-first** design
- **Componentes adaptativos** para diferentes tamaños de pantalla
- **UX optimizada** para dispositivos táctiles
- **Accesibilidad** con ARIA labels y navegación por teclado

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de utilidades CSS
- **Hero UI** - Biblioteca de componentes
- **Driver.js** - Tours y guías interactivas
- **React Icons** - Iconografía moderna

### Estado y Hooks
- **Custom Hooks** - Lógica de negocio reutilizable
- **useState/useCallback/useMemo** - Gestión de estado optimizada
- **useEffect** - Efectos secundarios controlados
- **localStorage** - Persistencia de datos del cliente

### HTTP y API
- **Axios** - Cliente HTTP para comunicación con backend
- **RESTful API** - Arquitectura de servicios web estándar
- **Error Handling** - Manejo robusto de errores de red

### Herramientas de Desarrollo
- **ESLint** - Linter para calidad de código
- **Prettier** - Formateador de código
- **TypeScript Compiler** - Verificación de tipos

## 📂 Estructura del Proyecto

```
src/
├── components/                 # Componentes reutilizables
│   ├── ui/                    # Componentes base de UI
│   ├── schedule-views/        # Vistas de horarios
│   └── shared/                # Componentes compartidos
├── features/                  # Características por módulo
│   ├── automatic/             # Generación automática
│   │   ├── components/        # Componentes específicos
│   │   ├── hooks/            # Hooks personalizados
│   │   ├── types/            # Tipos TypeScript
│   │   └── utils/            # Utilidades
│   ├── manual/               # Gestión manual
│   └── tours/                # Sistema de tours
├── interfaces/               # Tipos globales
├── api/                     # Configuración de API
├── utils/                   # Utilidades globales
└── assets/                  # Recursos estáticos
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 o **yarn** >= 1.22.0
- **Git** para control de versiones

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/sistema-horarios-academicos.git
   cd sistema-horarios-academicos
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o usando yarn
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus configuraciones:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:3001/api
   REACT_APP_ENVIRONMENT=development
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   # o usando yarn
   yarn start
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📖 Guía de Uso

### 🔄 Generación Automática de Horarios

1. **Ingreso de Carnet**
   - Introduce tu número de carnet estudiantil
   - El sistema validará y cargará tus cursos disponibles

2. **Selección de Cursos**
   - Selecciona los cursos que deseas matricular
   - Configura campus y modalidades por curso
   - Utiliza selección múltiple para mayor flexibilidad

3. **Generación de Horarios**
   - Haz clic en "Generar Horarios"
   - El sistema calculará todas las combinaciones posibles
   - Navega entre las diferentes opciones

### 🎯 Gestión Manual de Horarios

1. **Filtros de Búsqueda**
   - Selecciona sede, escuela y período académico
   - Los filtros son dinámicos y se actualizan automáticamente

2. **Visualización de Resultados**
   - Los cursos se agrupan automáticamente por código
   - Utiliza la búsqueda para filtrar por nombre
   - Navega usando la paginación

3. **Configuración de Vista**
   - Cambia entre vista horizontal y vertical
   - Ajusta según tus preferencias de pantalla

## 📦 Build y Deployment

### Build de Producción
```bash
npm run build
```

### Análisis de Bundle
```bash
npm run analyze
```

### Variables de Entorno por Ambiente
```bash
# Desarrollo
REACT_APP_API_BASE_URL=http://localhost:3001/api

# Staging
REACT_APP_API_BASE_URL=https://staging-api.universidad.edu

# Producción
REACT_APP_API_BASE_URL=https://api.universidad.edu
```

## 🚀 Performance

### Optimizaciones Implementadas
- **Code Splitting** por rutas
- **Lazy Loading** de componentes pesados
- **Memoización** con useMemo y useCallback
- **Debouncing** en búsquedas y filtros

### Métricas de Performance
- **First Contentful Paint** < 2s
- **Largest Contentful Paint** < 3s
- **Time to Interactive** < 4s
- **Cumulative Layout Shift** < 0.1

## 🤝 Contribución

### Flujo de Contribución
1. **Fork** el repositorio
2. **Crea** una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Crea** un Pull Request

### Estándares de Código
- **ESLint** para linting
- **Prettier** para formateo
- **Conventional Commits** para mensajes
- **TypeScript strict** mode

### Review Process
- **Code Review** obligatorio
- **Tests** deben pasar
- **Coverage** mínimo del 80%
- **Performance** sin regresiones

## 👥 Equipo

- **Desarrollador Principal** - [@FabiSax12](https://github.com/FabiSax12)

## 📞 Soporte

### Reportar Bugs
- Usa [GitHub Issues](https://github.com/FabiSax12/easy-tec_proyect/issues)
- Incluye pasos para reproducir
- Agrega capturas de pantalla si es relevante

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐