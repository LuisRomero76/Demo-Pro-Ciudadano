# Pro Ciudadano

**Pro Ciudadano** es una plataforma web moderna y accesible que centraliza información sobre trámites ciudadanos, proporcionando guías paso a paso, requisitos detallados y acompañamiento asistido por IA para facilitar procesos gubernamentales.

![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🚀 Características

- **Guías interactivas**: Información detallada de cada trámite con pasos, requisitos, costos, tiempos y ubicaciones.
- **Sistema de estado**: Marca tu avance en cada proceso (Pendiente → En progreso → Completado).
- **Chat de orientación**: Asistente virtual para resolver dudas sobre cada trámite.
- **Tema oscuro/claro**: Alterna entre modo día y noche según tu preferencia.
- **Diseño responsive**: Optimizado para escritorio, tablet y móvil.
- **Rutas dedicadas**: Cada trámite tiene su página con contenido específico.

---

## 📋 Requisitos previos

Antes de instalar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar](https://nodejs.org/)
- **pnpm** (gestor de paquetes) - Instálalo ejecutando:
  ```sh
  npm install -g pnpm
  ```

---

## 🔧 Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```sh
git clone https://github.com/LuisRomero76/Demo-Pro-Ciudadano.git
cd Demo-Pro-Ciudadano
```

### 2. Instalar dependencias

```sh
pnpm install
```

### 3. Iniciar el servidor de desarrollo

```sh
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173`

### 4. Compilar para producción

```sh
pnpm build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### 5. Previsualizar compilación de producción

```sh
pnpm preview
```

---

## 📂 Estructura del proyecto

```
pro-ciudadano/
├── src/
│   ├── assets/           # Archivos CSS y recursos estáticos
│   ├── components/       # Componentes reutilizables (ChatPanel, Modales, ThemeToggle)
│   ├── composables/      # Lógica compartida (useTheme)
│   ├── router/           # Configuración de rutas (Vue Router)
│   ├── views/            # Vistas principales (Login, Dashboard, DetalleTramite)
│   ├── App.vue           # Componente raíz
│   └── main.js           # Punto de entrada de la aplicación
├── public/               # Recursos públicos (favicon, imágenes)
├── index.html            # Plantilla HTML principal
├── vite.config.js        # Configuración de Vite
└── package.json          # Dependencias y scripts del proyecto
```

---

## 🎯 Funcionamiento de la plataforma

### 1. **Página de inicio (Login)**

- **Ruta:** `/`
- **Descripción:** Pantalla de autenticación con validación de credenciales.
- **Credenciales de prueba:**
  - Email: `admin@gmail.com`
  - Contraseña: `123456`
- **Funcionalidades:**
  - Modo oscuro/claro con toggle visible.
  - Animaciones de fondo con gradientes y rejilla.
  - Validación de errores en tiempo real.

### 2. **Dashboard (Panel principal)**

- **Ruta:** `/dashboard`
- **Descripción:** Resumen de trámites disponibles con estadísticas y accesos rápidos.
- **Elementos destacados:**
  - **Tarjetas de trámites:** Licencia de Funcionamiento, Cédula de Identidad, NIT, Licencia de Conducir, Antecedentes, etc.
  - **Estadísticas rápidas:** Total de trámites, completados y tiempo estimado.
  - **Notificaciones:** Modal con alertas sobre trámites en curso.
  - **Perfil de usuario:** Información personal y configuración.
- **Interacción:**
  - Al hacer clic en una tarjeta de trámite, redirige a la página de detalle específica.

### 3. **Detalle de trámite**

- **Rutas disponibles:**
  - `/tramite/licencia` o `/tramite/licencia-funcionamiento`
  - `/tramite/cedula-identidad`
  - `/tramite/nit`
  - `/tramite/licencia-conducir`
  - `/tramite/antecedentes`
  - `/tramite/permiso-evento`
  - `/tramite/certificado-estrato`

- **Descripción:** Cada trámite tiene su página dedicada con contenido específico.

- **Secciones de información:**

  #### **Encabezado (Hero)**
  - Nombre del trámite
  - Descripción breve (heroSubtitle)
  - Estado actual: Pendiente / En progreso / Completado
  - Botón "Activar trámite" → "Marcar como completado"

  #### **Contenido principal**
  - **Paso a paso:** Lista ordenada con ubicación y descripción de cada paso.
  - **Requisitos:** Documentos necesarios con explicación.
  - **Antes de empezar:** Tips previos al trámite.
  - **Checklist previo:** Validaciones antes de iniciar.
  - **Notas y recursos:** Información adicional y recomendaciones.

  #### **Barra lateral (Sidebar)**
  - **Guía informativa:** Clarifica que la página no procesa el trámite, solo informa.
  - **Datos rápidos:** Tiempo estimado, costo, entidad responsable.
  - **Dónde hacerlo:** Dirección física de la oficina.
  - **Contacto y horarios:** Teléfono, correo y horario de atención.
  - **Chat de orientación:** Panel flotante para resolver dudas específicas del trámite.

  #### **Alertas importantes**
  - Recordatorios sobre verificación de horarios y direcciones.

### 4. **Sistema de chat (ChatPanel)**

- **Disponibilidad:** Solo visible en páginas de detalle de trámite.
- **Funcionalidad:**
  - Botón flotante "Iniciar Chat" en la esquina inferior derecha.
  - Panel lateral deslizable con historial de mensajes.
  - Respuestas simuladas de IA con información contextual del trámite.
  - Cierre del panel con botón dedicado.

### 5. **Modo oscuro/claro (ThemeToggle)**

- **Ubicación:** Presente en el header de todas las vistas.
- **Funcionamiento:**
  - Icono de luna (modo oscuro activo) o sol (modo claro activo).
  - Cambia el tema de toda la aplicación con transiciones suaves.
  - Preferencia guardada en `localStorage`.

### 6. **Compartir trámite (ShareModal)**

- **Activación:** Botón de compartir en el header del detalle de trámite.
- **Opciones:**
  - Copiar enlace al portapapeles.
  - Compartir por WhatsApp.
  - Compartir por correo electrónico.
  - Descargar guía en PDF (funcionalidad placeholder).

---

## 🎨 Temas y personalización

El proyecto utiliza variables CSS que se adaptan automáticamente al tema seleccionado:

```css
/* Variables principales */
--color-background
--color-background-elevated
--color-background-secondary
--color-text-primary
--color-text-secondary
--color-accent
--color-border
```

Las variables están definidas en `src/assets/base.css` y se ajustan con el atributo `data-theme` en el HTML.

---

## 🛠️ Tecnologías utilizadas

- **Vue 3** (Composition API con `<script setup>`)
- **Vue Router 4** (Navegación SPA)
- **Vite 5** (Build tool y dev server)
- **CSS moderno** (Variables CSS, Grid, Flexbox, animaciones)
- **JavaScript ES2022+**

---

## 📝 Scripts disponibles

| Comando        | Descripción                                  |
| -------------- | -------------------------------------------- |
| `pnpm install` | Instala todas las dependencias               |
| `pnpm dev`     | Inicia servidor de desarrollo con hot-reload |
| `pnpm build`   | Compila la aplicación para producción        |
| `pnpm preview` | Previsualiza la compilación de producción    |
| `pnpm lint`    | Ejecuta ESLint para revisar el código        |

---

## 🔍 Navegación y rutas

| Ruta                           | Vista              | Descripción                    |
| ------------------------------ | ------------------ | ------------------------------ |
| `/`                            | LoginView          | Pantalla de inicio de sesión   |
| `/dashboard`                   | DashboardView      | Panel principal con trámites   |
| `/tramite/licencia`            | DetalleTramiteView | Licencia de Funcionamiento     |
| `/tramite/cedula-identidad`    | DetalleTramiteView | Cédula de Identidad            |
| `/tramite/nit`                 | DetalleTramiteView | NIT (Impuestos)                |
| `/tramite/licencia-conducir`   | DetalleTramiteView | Licencia de Conducir           |
| `/tramite/antecedentes`        | DetalleTramiteView | Certificado de Antecedentes    |
| `/tramite/permiso-evento`      | DetalleTramiteView | Permiso para Evento Público    |
| `/tramite/certificado-estrato` | DetalleTramiteView | Certificado de Estratificación |

---

## 🌐 Configuración de Vite

El proyecto está configurado con alias de rutas para importaciones más limpias:

```js
// vite.config.js
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}
```

Esto permite importar componentes usando `@/components/...` en lugar de rutas relativas.

---

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama con tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m 'Agrega nueva funcionalidad'`
4. Sube los cambios: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Luis Romero**  
GitHub: [@LuisRomero76](https://github.com/LuisRomero76)

---

## 📞 Soporte

Si tienes preguntas o encuentras algún problema, abre un [issue en GitHub](https://github.com/LuisRomero76/Demo-Pro-Ciudadano/issues).

---

**Hecho con ❤️ usando Vue 3 + Vite**
