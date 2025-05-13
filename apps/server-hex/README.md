# Easy Tec (Server/Api)

¡Bienvenido al repositorio de [Nombre del Proyecto]! Este documento explica la arquitectura utilizada en este proyecto, combinando los principios de **Screaming Architecture** y **Hexagonal Architecture (Ports and Adapters)**, implementada utilizando **NestJS** y **Prisma**.

Nuestro objetivo es construir una aplicación mantenible, testeable, flexible y escalable que sea fácil de entender para nuevos colaboradores.

## Arquitectura Utilizada

La estructura de nuestro proyecto está diseñada para reflejar el dominio del negocio ("Screaming Architecture") y para separar el núcleo de la aplicación de los detalles externos ("Hexagonal Architecture").

### 1. Screaming Architecture: Organizado por Dominio

Cuando exploras la estructura de carpetas en `src/modules/`, verás que está organizada en base a las principales áreas funcionales de nuestro negocio (Ej: `users`, `courses`, `tasks`). Esto significa que la arquitectura "grita" sobre *qué hace la aplicación* en lugar de *cómo lo hace*.

```
src/
├── modules/          # Aquí es donde "grita" la arquitectura, organizado por funcionalidades de negocio.
│   ├── users/        # Módulo de Usuarios
│   ├── courses/      # Módulo de Cursos
│   ├── tasks/        # Módulo de Tareas
│   └── ... otros módulos de negocio
├── core/             # Componentes transversales del dominio y aplicación.
├── infrastructure/ # Adaptadores globales o compartidos.
├── shared/           # Código de utilidad compartido.
├── app.module.ts
├── main.ts
└── ...
```

### 2. Hexagonal Architecture (Ports and Adapters): Separación de Preocupaciones

Dentro de cada módulo de negocio (por ejemplo, `src/modules/users/`), aplicamos los principios de la Arquitectura Hexagonal para separar el **núcleo del dominio y la lógica de negocio** de los **detalles de infraestructura**.

```
src/modules/<nombre_modulo>/
├── domain/         # Capa interna: Entidades y Value Objects específicos del módulo.
├── application/    # Capa de Aplicación: Casos de Uso y Puertos (Interfaces) que el dominio espera.
│   ├── use-cases/  # Lógica de negocio, independiente de la infraestructura.
│   └── ports/      # Interfaces que definen interacciones con el exterior.
│       ├── repositories/ # Interfaces para la persistencia de datos.
│       └── services/     # Interfaces para otros servicios externos.
└── infrastructure/ # Capa externa (Adaptadores): Implementaciones concretas de los puertos.
    ├── persistence/    # Adaptadores para la base de datos (Prisma).
    ├── http/           # Adaptadores de entrada (Controladores REST, DTOs).
    └── services/       # Adaptadores para servicios externos (email, etc.).
```

#### Explicación Detallada de las Capas dentro de un Módulo:

*   **`domain/`:** Contiene las definiciones fundamentales de los elementos de negocio relevantes para este módulo. Aquí encontrarás las **Entidades** (la identidad de los objetos del negocio con un ciclo de vida) y **Value Objects** (objetos que representan un valor, sin identidad propia). Esta capa es pura lógica de negocio y no tiene dependencias de frameworks o bases de datos.
*   **`application/`:** Esta capa contiene la lógica de negocio real de la aplicación, organizada en **Casos de Uso (Use Cases)**. Un caso de uso representa una acción específica que un usuario o sistema externo puede realizar (ej. "Crear Usuario", "Obtener Tareas de un Curso"). La capa de aplicación también define los **Puertos**. Los puertos son interfaces que especifican las interacciones que la capa de aplicación necesita de las capas externas (por ejemplo, una interfaz `UserRepository` que defina cómo obtener o guardar usuarios). La capa de aplicación depende de los puertos, no de sus implementaciones concretas.
*   **`infrastructure/`:** Esta es la capa más externa y contiene los **Adaptadores**. Los adaptadores son las implementaciones concretas de los puertos definidos en la capa de aplicación.
    *   **`persistence/`:** Contiene la lógica para interactuar con la base de datos. Aquí se implementan los puertos de repositorio utilizando nuestro ORM, **Prisma**. También puede contener **Mappers** para convertir entre las entidades del dominio y los modelos específicos del ORM.
    *   **`http/`:** Actúa como un adaptador de entrada para solicitudes HTTP. Contiene los **Controladores** de NestJS que reciben las peticiones, **DTOs (Data Transfer Objects)** para validar y formatear la entrada/salida, y **Mappers** para convertir entre entidades del dominio y DTOs. Los controladores llaman a los casos de uso en la capa de aplicación.
    *   **`services/`:** Contiene las implementaciones concretas de otros servicios externos (ej. un servicio que implementa un puerto de notificación para enviar emails).

### 3. Capas Transversales

*   **`core/`:** Contiene elementos del dominio y la aplicación que son compartidos entre múltiples módulos de negocio (ej. entidades como `Major`, `Role`, o puertos genéricos).
*   **`infrastructure/`:** Contiene adaptadores que son globales o compartidos por varios módulos (ej. la configuración del cliente de Prisma global, servicios de logging genéricos).
*   **`shared/`:** Contiene código de utilidad o excepciones que no se ajustan a ninguna capa específica.

### 4. Ensamblaje con NestJS

NestJS, con su potente sistema de **Módulos** e **Inyección de Dependencias**, es fundamental para unir las piezas de esta arquitectura.

*   Cada módulo de negocio (`src/modules/<nombre_modulo>/`) generalmente tendrá un **Módulo de NestJS** asociado (ej. `src/modules/users/users.module.ts`).
*   Dentro de los módulos de NestJS, configuramos los **Proveedores**. Aquí es donde le decimos a NestJS qué implementación concreta debe usar para cada puerto (ej. "cuando se solicite `UserRepository`, proporcionar una instancia de `PrismaUserRepository`").
*   Los **Controladores** de NestJS (en la capa `infrastructure/http/`) declaran las dependencias de los **Casos de Uso** (en la capa `application/use-cases/`) en sus constructores. NestJS inyecta automáticamente las instancias correctas.
*   El **Módulo Raíz (`app.module.ts`)** importa los módulos de negocio y configura las dependencias globales.

### Flujo de una Petición Típica (Ejemplo: Crear un Usuario)

1.  Una solicitud HTTP llega al **Controlador de Usuarios** (`infrastructure/http/controllers/users.controller.ts`).
2.  El controlador valida los datos de entrada utilizando un **DTO** (`infrastructure/http/dtos/create-user.dto.ts`).
3.  El controlador llama al **Caso de Uso "Crear Usuario"** (`application/use-cases/create-user.use-case.ts`).
4.  El Caso de Uso implementa la lógica de negocio. Para guardar el usuario, llama al **Puerto `UserRepository`** (`application/ports/repositories/user.repository.ts`). El caso de uso no sabe que se está usando Prisma.
5.  NestJS, configurado en el módulo de NestJS (`users.module.ts`), inyecta la **implementación concreta `PrismaUserRepository`** (`infrastructure/persistence/prisma/repositories/prisma-user.repository.ts`) en el Caso de Uso.
6.  `PrismaUserRepository` utiliza el cliente de **Prisma** para interactuar con la base de datos, posiblemente usando un **Mapper** para convertir entre entidades del dominio y modelos de Prisma.
7.  El resultado se devuelve a través de las capas: de `PrismaUserRepository` al Caso de Uso, y del Caso de Uso al Controlador.
8.  El Controlador utiliza un **Mapper** (`infrastructure/http/mappers/user-response.mapper.ts`) para convertir la entidad del dominio en un **DTO de respuesta** (`infrastructure/http/dtos/user-details.dto.ts`) antes de enviar la respuesta HTTP.

## Beneficios de esta Arquitectura

*   **Claridad y Enfoque en el Negocio:** La estructura de carpetas habla directamente sobre las funcionalidades del negocio.
*   **Separación de Preocupaciones:** El núcleo de la aplicación está aislado de los detalles tecnológicos, haciendo que sea más fácil de entender y modificar.
*   **Testeabilidad:** Las capas internas (dominio y aplicación) pueden ser testeadas de forma aislada, sin necesidad de bases de datos reales o servidores HTTP.
*   **Flexibilidad:** Es más sencillo cambiar adaptadores externos (ej. usar otro ORM, otro framework de UI) sin afectar la lógica de negocio central.
*   **Mantenibilidad:** Los cambios en una parte del sistema tienen menos probabilidades de impactar negativamente en otras partes.
*   **Escalabilidad:** La modularidad basada en el dominio facilita el crecimiento del proyecto.

## Cómo Colaborar

1.  Familiarízate con los principios de Screaming Architecture y Hexagonal Architecture si no estás ya familiarizado.
2.  Explora la estructura de carpetas en `src/modules/` para entender las funcionalidades de negocio existentes.
3.  Para trabajar en una funcionalidad existente o añadir una nueva:
    *   Identifica o crea la carpeta del módulo de negocio correspondiente en `src/modules/`.
    *   Define o modifica las **Entidades** y **Value Objects** en la capa `domain/`.
    *   Define o modifica los **Casos de Uso** en la capa `application/use-cases/`.
    *   Define o modifica los **Puertos (Interfaces)** en la capa `application/ports/` que los casos de uso necesitan.
    *   Implementa los **Adaptadores** en la capa `infrastructure/` (persistencia, http, servicios externos) para cumplir con los puertos.
    *   Configura el **Módulo de NestJS** de la funcionalidad para asegurar que las dependencias se inyecten correctamente.
    *   Escribe pruebas para cada capa, enfocándote en las capas internas para una mayor velocidad y aislamiento.

Si tienes alguna duda o sugerencia, no dudes en abrir un Issue o contactar a los mantenedores.

¡Gracias por tu interés en contribuir a Easy TEC!