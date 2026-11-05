# Saucedo Legal — Sitio Renovado Desacoplado

Renovación integral del sitio web oficial de **Saucedo Legal (Consultoría Jurídica y Mediación)**. El proyecto ha sido migrado de WordPress a una arquitectura desacoplada moderna, manteniendo la elegancia, identidad visual y estructura del sitio original, con mejoras clave como el selector de idiomas en el encabezado y administración dinámica mediante Payload CMS.

---

## 📁 Estructura del Proyecto

```text
Saucedo-legal/
├── frontend/             # Aplicación desacoplada (React + Vite + Tailwind CSS)
│   ├── public/
│   │   ├── images/       # Fotografías del equipo, oficinas y logotipo
│   │   └── videos/       # Videos institucionales (.webm)
│   ├── src/
│   │   ├── components/   # Navbar, Hero, Nosotros, Equipo, Áreas, Videos, Galería, etc.
│   │   ├── i18n/         # Sistema de traducción interactivo (ES, EN, ZH, KO)
│   │   ├── services/     # Cliente API conectado a Payload CMS con fallback
│   │   └── types/        # Tipos TypeScript
├── backend/              # Payload CMS 3.x (Next.js 15 + SQLite nativo)
│   ├── src/
│   │   ├── collections/  # Colecciones: Equipo, Área de Práctica, Galería, Videos, Media, Users
│   │   ├── seed.ts       # Script de población automática con datos reales
│   │   └── payload.config.ts
│   └── payload.db        # Base de datos SQLite autónoma pre-poblada
├── Images/               # Archivos multimedia originales
├── Videos/               # Videos originales
└── package.json          # Orquestador raíz para ejecutar todo el proyecto
```

---

## 🎨 Especificaciones de Diseño Implementadas

- **Tipografías:**
  - **Principal (Títulos y branding):** `Lora` (Google Fonts)
  - **Secundaria (Navegación, botones, badges):** `Raleway` (Google Fonts)
  - **Texto (Párrafos y lectura):** `Lora` (Google Fonts)
- **Colores Corporativos:**
  - **Principal:** `#3B3C3D` (Gris oscuro ejecutivo)
  - **Secundaria / Énfasis:** `#959597` (Gris pizarra / acento)
  - **Texto:** `#ffffff` (Blanco puro para alto contraste sobre fondos oscuros)
  - **Fondos:** `#242526` y `#202122`

---

## 🌐 Soporte Multilenguaje (4 Idiomas)

El sitio cuenta con un selector de idiomas funcional ubicado estratégicamente en el **Header** (barra superior y menú móvil):
- 🇲🇽 **Español (`es`)**
- 🇺🇸 **Inglés (`en`)**
- 🇨🇳 **Chino (`zh`)**
- 🇰🇷 **Coreano (`ko`)**

El traductor cambia instantáneamente todos los textos del sitio: menú, banners, misión, visión, biografía del equipo, catálogo de áreas de práctica, videos, formularios y notas de privacidad.

---

## 🛠️ Administración en Payload CMS

Únicamente las 4 áreas solicitadas son administrables de forma dinámica a través de Payload CMS:
1. **Equipo (`/api/equipo`):**
   - Fotografía de pie y sentado (con alternador interactivo)
   - Nombre, cargo y especialidad
   - Biografía completa y formación académica
   - Correo electrónico y teléfono directo
2. **Área Práctica (`/api/area-practica`):**
   - Las 11 áreas de derecho corporativo y litigio con descripción breve y detallada.
3. **Galería (`/api/galeria`):**
   - Fotografías clasificadas por categoría (Oficinas, Eventos, Medios, Equipo).
4. **Videos (`/api/videos`):**
   - Videos locales en formato `.webm` y enlaces a transmisiones del podcast *“Entre Abogados Te Veas”* en YouTube.

### Acceso al Panel de Administración de Payload:
- **URL:** [http://localhost:3000/admin](http://localhost:3000/admin)
- **Correo:** `admin@saucedolegal.com`
- **Contraseña:** `Saucedo2026!`

---

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Ejecutar todo desde la raíz (Recomendado)

En la carpeta raíz `Saucedo-legal/`:

```bash
# Inicia tanto el backend (puerto 3000) como el frontend (puerto 5173) en paralelo:
npm run dev
```

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend Admin:** [http://localhost:3000/admin](http://localhost:3000/admin)
- **API REST:** [http://localhost:3000/api](http://localhost:3000/api)

---

### Opción 2: Ejecutar por separado

#### Backend (Payload CMS):
```bash
cd backend
npm run dev
```

#### Frontend (React + Vite):
```bash
cd frontend
npm run dev
```

---

## 🔄 Re-sembrado de Datos (Opcional)

Si en algún momento deseas restablecer o volver a cargar los datos originales de Saucedo Legal en Payload CMS:

```bash
npm run seed
```
