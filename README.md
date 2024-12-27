# Easy TEC

Easy TEC es un proyecto diseñado para proporcionar a los estudiantes del TEC una solución integral de planificación y organización. Surge de la necesidad de centralizar la información dispersa en diversas herramientas y aplicaciones utilizadas por los estudiantes para gestionar sus horarios, tareas y compromisos académicos.

Durante mi primer semestre en el TEC, me enfrenté a la dificultad de encontrar una sola herramienta que cubriera todas mis necesidades de organización. Esto me llevó a utilizar una variedad de aplicaciones y métodos, incluyendo calendarios digitales, aplicaciones de recordatorios, plataformas universitarias y más. Sin embargo, ninguna de estas opciones satisfacía completamente mis requerimientos.

Como estudiante de computación, decidí aprovechar mis habilidades para abordar este desafío. El 1 de Marzo de 2024, me propuse el reto de desarrollar Easy TEC, una aplicación web que integra todas las funcionalidades necesarias para una gestión eficiente del tiempo y los recursos académicos.

Mi objetivo con Easy TEC es proporcionar a todos los estudiantes del TEC una herramienta completa que les permita mejorar su organización estudiantil y alcanzar su máximo potencial académico.

---

¡Bienvenido a Easy TEC! Con esta aplicación, podrás simplificar tu vida estudiantil y maximizar tu rendimiento académico.

## Para Contribuir

Si estás interesado en contribuir al desarrollo de **Easy TEC**, sigue los pasos a continuación para configurar tu entorno de desarrollo correctamente.

---

### **Configuración del Entorno de Desarrollo**

#### 1. Clona el Repositorio

Primero, clona el repositorio del proyecto en tu máquina local utilizando el siguiente comando:  

```bash
git clone https://github.com/FabiSax12/easy-tec.git
```

2. **Instala las Dependencias:**
Antes de continuar, asegúrate de tener Node.js y npm instalados en tu sistema. Si aún no los tienes, puedes descargarlos e instalarlos desde [Node.js](https://nodejs.org/).
Una vez que Node.js y npm estén instalados, ejecuta el siguiente comando en el directorio del proyecto para instalar las dependencias necesarias

```bash
npm install
```

3. **Configura el servidor:**

- 1. **Configura el Entorno:**
  - Copia el archivo `.env.example` y renómbralo a `.env`. 
  
  - Edita el archivo `.env` con tus credenciales y variables de entorno específicas. En el archivo se detallan las instrucciones para configurar correctamente cada variable.

- 2. **Levanta la Base de Datos:**
Utilizamos Docker para gestionar la base de datos. Construye y ejecuta el contenedor con el siguiente comando:

```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

- 3. **Sincroniza la Base de Datos con el Schema de Prisma:**
Una vez que la base de datos esté en funcionamiento, ejecuta el siguiente comando para sincronizar el esquema de la base de datos con el ORM Prisma:

```bash
npx prisma db push
```

- 4. **Inicia el Servidor de Desarrollo:**
Navega al directorio del backend y levanta el servidor:

```bash
cd ./apps/server
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a la API en [http://localhost:3000](http://localhost:3000)

- 5. **Activar la Semilla de Datos: (opcional)**
SSi deseas llenar la base de datos con datos de ejemplo, accede a: 
[http://localhost:3000/api/seed](http://localhost:3000/api/seed). 
Esto generará datos iniciales como usuarios, periodos y cursos.

4. **Configura el cliente**
- a. **Levantar el cliente en desarrollo:**
Una vez que todas las dependencias estén instaladas y el entorno esté configurado, puedes iniciar el cliente en desarrollo:
```bash
npm run dev
```

### Contribuye

¡Ahora estás listo para contribuir al desarrollo de Easy TEC! Puedes comenzar a implementar nuevas funcionalidades, corregir errores o realizar mejoras. Asegúrate de enviar tus cambios a través de las Pull Request.

¡Gracias por contribuir al proyecto!
