# Digital Money

Digital Money es una aplicación de billetera virtual desarrollada con Next.js. La aplicación permite a los usuarios realizar pagos de servicios, gestionar sus finanzas personales y utilizar la billetera desde dispositivos de escritorio, tabletas y móviles.

## Instalación

1. Clonar el archivo .env.example y renombrarlo a .env:

```bash
   cp .env.example .env
```

2. Para instalar y ejecutar el proyecto localmente:

```bash
   git clone <URL_DEL_REPOSITORIO>
```

3. Instala las dependencias del proyecto:

```bash
   npm install
```

4. Ejecuta el proyecto en modo de desarrollo:

```bash
   npm run dev
```

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para diseñar interfaces de usuario modernas y responsivas.
- **React Hook Form**: Librería para manejar formularios en React.
- **clsx**: Utilidad para construir clases condicionales.
- **html-react-parser**: Librería para parsear y convertir HTML en React.

## Funcionalidades Principales

### Sprint 1: Inicio, Registro y Acceso

#### Épica: Inicio, registro y acceso

- **Inicio**
  - Posibilidad de usar el producto desde desktop, tablet y mobile.
  - Visualización de la comunicación del producto y funcionalidades principales (transferencias y pago de servicios).
  - Textos e imagen principal desde la base de datos.
  - Acceso directo a "Iniciar sesión" y "Registro".

- **Registro**
  - Validaciones de los datos ingresados.
  - Registro correcto tras validación de datos.
  - Mensaje acorde ante datos incorrectos.
  - Redirección a la página de Login tras registro correcto.

- **Acceso**
  - Validar campos requeridos (email y contraseña).
  - Mensaje acorde en la pantalla de login.
  - Ingreso de usuario y contraseña en dos pasos/pantallas distintas.
  - Redirección a /home tras login correcto.
  - Link de registrar cuenta redirige a la pantalla de "Registro".

- **Cierre de Sesión**
  - La sesión no se cierra al recargar el navegador.
  - Redirección a la página promocional tras cerrar sesión.
  - Eliminación del token del local storage al cerrar sesión.

#### Épica: Testing & Calidad

- **Testing kickoff**
  - Plan de pruebas incluyendo cómo escribir un caso de prueba, reportar un defecto, criterios para incluir casos en suites de humo y regresión.

- **Testing manual**
  - Agregar casos de prueba del sprint 1 a la planilla.
  - Mantenimiento de casos de prueba manuales del sprint 1.
  - Clasificación de casos de prueba en suites de smoke y regression test.
  - Generación y ejecución de la suite de prueba.
  - Subida de la planilla de casos de prueba a GitLab o link al archivo.

#### Épica: Infraestructura

- **Infraestructura**
  - Herramientas necesarias para el funcionamiento local del proyecto (Git, Docker, microservicios).
  - Diseño de la infraestructura necesaria.
  - Boceto de la red y sus componentes (servidores, almacenamiento, red interna, base de datos).

### Sprint 2: Dashboard, Mi Perfil y Gestión de Medios de Pago

#### Épica: Dashboard

- **Inicio**
  - Dos centavos de detalle en el importe expresados en ARS.
  - Visualización de la cantidad de dinero disponible con accesos directos a las secciones de “Ingresar dinero” y “Ver mi CVU”.
  - Barra lateral con el menú siempre visible.

- **Actividad**
  - Resumen de los últimos movimientos de ingreso y egreso de dinero con un buscador.
  - Botón de “Ver toda la actividad”.
  - Campo para ingresar la búsqueda con funcionalidad futura.

#### Épica: Mi Perfil

- **Datos Personales**
  - Editar los datos personales y el alias desde la misma pantalla y guardar los nuevos datos.
  - Alias conformado por 3 palabras separadas por puntos “X.X.X”.
  - Copiar el CVU y alias al clipboard.
  - La contraseña debe aparecer invisible con (******).
  - Al presionar el botón de “Gestionar medios de pago”, redirigir a la página de “Gestión de medios de pago”.

#### Épica: Gestión de Medios de Pago

- **Agregar Tarjeta**
  - Al apretar el botón de “Alta de tarjeta”, redirigir a la pantalla de alta de tarjeta.
  - Máximo de 10 tarjetas. Mensaje si se llega al límite.
  - Mostrar tipo de tarjeta (Visa, Mastercard, AMEX) detectado por los primeros 4 dígitos de la tarjeta.

- **Ver Tarjetas**
  - Mostrar todas las tarjetas asociadas a la cuenta.
  - Mostrar solo los últimos 4 dígitos de la tarjeta.

- **Eliminar Tarjeta**
  - Al eliminar la última tarjeta, mostrar el mensaje: “No tienes tarjetas asociadas”.

#### Épica: Testing & Calidad

- **Testing manual**
  - Agregar a la planilla de casos de prueba sobre las funcionalidades del sprint 2.
  - Mantenimiento de los casos de prueba manuales del sprint 1.
  - Clasificación de casos de prueba en suite de smoke y regression test.
  - Generación y ejecución de la suite de prueba.

- **Testing automatizado**
  - Automatizar los casos de prueba de la suite de smoke utilizando Java y Selenium.
  - Subir el framework de automatización a GitLab.
  - Subir a GitLab la planilla de casos de prueba adjunta o el link al archivo.

### Sprint 3: Ingreso de Dinero y Mi Actividad

#### Épica: Ingreso de Dinero

- **Medios de Pago**
  - Listar medios de pagos dados de alta.
  - Seleccionar medios de pago adheridos.
  - Ingresar el monto a cargar.
  - Pantalla resumen de comprobante de ingreso.
  - Ver CVU y alias de cuenta.
  - Copiar y guardar en memoria CVU y alias.

#### Épica: Mi Actividad

- **Historial de Transacciones**
  - Ver toda la actividad realizada, paginada y filtrada.
  - Filtrar por período (hoy, ayer, semanas, meses).
  - Filtrar por tipo de operaciones (ingresos o egresos).
  - Paginación de 10 transacciones por página.
  - Buscar por palabras claves en el título de la transacción.
  - Borrar filtros mediante un botón.
  - Ver detalle de cada transacción al hacer clic.

#### Épica: Testing & Calidad

- **Testing manual**
  - Diseñar nuevos casos de prueba: smoke o regression test.
  - Generación y ejecución de la suite de prueba.

- **Testing automatizado**
  - Agregar casos de prueba del sprint anterior al framework.

- **Testing exploratorio**
  - Realizar test exploratorio y documentar (sesiones, tours, escenarios).

### Sprint 4: Pago de Servicios

#### Épica: Pago de Servicios

- **Servicios Disponibles**
  - Ver lista de servicios disponibles para pago.
  - Ver servicios sin paginar.
  - Usar buscador por título.

- **Pago de Servicio**
  - Ingresar número de cuenta del servicio.
  - Verificar validez del número y existencia de facturas pendientes.
  - Seleccionar medio de pago.
  - Agregar nuevo medio de pago.
  - Seleccionar medio de pago existente.
  - Ver resultado del pago.
  - Mostrar resumen de transacción.
  - Mostrar mensaje de error por insuficiencia de fondos o autorización.

#### Épica: Testing & Calidad

- **Testing exploratorio**
  - Realizar y documentar test exploratorio (sesiones, tours, escenarios).

- **Testing manual**
  - Diseñar nuevos casos de prueba: smoke o regression test.

- **Testing automatizado**
  - Agregar casos de prueba del sprint anterior al framework.

- **QA Sign Off**
  - Reporte de casos de prueba ejecutados, pasados, defectos reportados y resueltos, pruebas automatizadas.

#### Épica: Infraestructura

- **Infraestructura**
  - Generar archivo Docker Compose.
  - Generar imagen de container Docker para despliegue en AWS.

### Opcionales

- **Recuperación de Contraseña**
  - Envío de un mail con un link para recuperar la contraseña.
  - Pantalla para ingresar y repetir la nueva contraseña.
  - Botón para visualizar los caracteres ingresados en la contraseña.

- **Validación de Correo Electrónico**
  - Solicitud de código de 6 dígitos al intentar login por primera vez.
  - Mensaje de error si el código es incorrecto, redirección a Dashboard si es correcto.

- **Filtrar Actividades por Montos Aproximados**
  - $0 a $1000
  - $1000 a $5000
  - $5000 a $20000
  - $20000 a $100000
  - Más de $100000

- **Descargar Comprobante de Pago**
  - Descargar archivo como comprobante del pago del servicio.
  - Detalles iguales a los mostrados en el detalle de transacción.
  - Formato de archivo PDF.
