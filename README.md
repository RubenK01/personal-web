# AWS Consultant Landing Page

Una landing page moderna, persuasiva y optimizada para conversión para servicios de consultoría AWS & DevOps freelance.

## 🚀 Características

- **Diseño Moderno**: Inspirado en el estilo visual de Varonis con colores oscuros y diseño profesional
- **Optimizada para Conversión**: Formularios de lead capture estratégicamente ubicados
- **Animaciones Suaves**: Implementadas con Framer Motion para mejor UX
- **Responsive**: Diseño adaptativo para todos los dispositivos
- **SEO Optimizado**: Configurado con next-seo y next-sitemap
- **Performance**: Optimizada para Static Site Generation (SSG)
- **Accesible**: Cumple con estándares de accesibilidad web
- **🚀 Vite Integration**: Desarrollo ultra-rápido con Hot Module Replacement (HMR)

## 🛠️ Tecnologías

- **Next.js 14** - Framework React con App Router
- **Vite** - Build tool ultra-rápido para desarrollo
- **TypeScript** - Tipado estático para mejor desarrollo
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconos modernos
- **next-seo** - Optimización SEO
- **next-sitemap** - Generación automática de sitemap

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales y Tailwind
│   ├── layout.tsx           # Layout principal con SEO
│   └── page.tsx             # Página principal
├── components/
│   ├── Navigation.tsx       # Navegación principal
│   ├── Hero.tsx            # Sección hero con lead form
│   ├── Services.tsx        # Servicios ofrecidos
│   ├── Technologies.tsx    # Grid de tecnologías
│   ├── About.tsx           # Sección sobre mí
│   ├── Testimonials.tsx    # Testimonios de clientes
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Footer con enlaces
├── data/
│   ├── services.ts         # Datos de servicios
│   └── technologies.ts     # Datos de tecnologías
├── types/
│   └── index.ts            # Definiciones TypeScript
├── main.tsx                # Entry point para Vite
└── App.tsx                 # Componente principal para Vite
scripts/
├── dev.js                  # Script de selección de servidor
└── performance.js          # Monitor de rendimiento
```

## 🎨 Paleta de Colores

- **Fondo Principal**: `#0B0D20` (dark-950)
- **Fondo Secundario**: `#1e293b` (dark-800)
- **Texto Principal**: `#ffffff` (white)
- **Texto Secundario**: `#cbd5e1` (gray-300)
- **Acento**: `#ef4444` (primary-500/600)
- **Bordes**: `#334155` (dark-700)

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd aws-consultant-landing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env.local
   ```
   
   Editar `.env.local` con tus datos:
   ```env
   SITE_URL=https://tu-dominio.com
   ```

### 🚀 Desarrollo Rápido con Vite

**Opción 1: Selección interactiva**
```bash
npm run dev:choose
```

**Opción 2: Vite directamente (más rápido)**
```bash
npm run dev:vite
```

**Opción 3: Next.js (funcionalidades completas)**
```bash
npm run dev
```

### 📊 Comparación de Rendimiento

| Característica | Vite | Next.js |
|----------------|------|---------|
| **Tiempo de inicio** | ⚡ Ultra-rápido | 🐌 Más lento |
| **HMR** | ⚡ Instantáneo | 🐌 Lento |
| **Build dev** | ⚡ Muy rápido | 🐌 Lento |
| **Build prod** | ⚡ Rápido | ⚡ Optimizado |
| **SSR/SSG** | ❌ No | ✅ Sí |
| **SEO** | ⚠️ Básico | ✅ Completo |

### 🏗️ Construcción

**Para producción con Next.js (recomendado):**
```bash
npm run build
```

**Para desarrollo rápido con Vite:**
```bash
npm run build:vite
```

**Medir rendimiento:**
```bash
npm run performance
```

## 📝 Personalización

### 1. Información Personal

Edita los siguientes archivos con tu información:

- `src/app/layout.tsx` - Meta tags y SEO
- `src/components/About.tsx` - Información personal
- `src/components/Contact.tsx` - Datos de contacto
- `src/components/Footer.tsx` - Enlaces sociales

### 2. Servicios

Modifica `src/data/services.ts` para personalizar los servicios ofrecidos.

### 3. Tecnologías

Actualiza `src/data/technologies.ts` con las tecnologías que manejas.

### 4. Colores y Estilos

Personaliza la paleta de colores en `tailwind.config.js`.

## 🔧 Configuración SEO

El proyecto incluye:

- **Meta tags dinámicos** con next-seo
- **Open Graph** para redes sociales
- **Twitter Cards** optimizadas
- **Sitemap automático** con next-sitemap
- **Robots.txt** generado automáticamente
- **Structured data** para mejor indexación

## 📱 Características Responsive

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navegación**: Menú hamburguesa en móviles
- **Grids adaptativos**: Se ajustan automáticamente

## 🎯 Optimización de Conversión

### Elementos de Conversión

1. **Hero Section**: Formulario de lead capture prominente
2. **CTA Intermedio**: Llamado a la acción en sección de servicios
3. **Testimonios**: Prueba social para generar confianza
4. **Formulario de Contacto**: Múltiples puntos de contacto
5. **Beneficios Claros**: Lista de ventajas en hero section

### Copy Persuasivo

- **Beneficios orientados**: "Reduzco costes hasta un 40%"
- **Urgencia**: "Consulta gratuita"
- **Prueba social**: Testimonios reales
- **Garantías**: "Soporte 24/7 durante la transición"

## ⚡ Optimizaciones de Rendimiento

### Vite Optimizations

- **HMR ultra-rápido**: Cambios instantáneos en desarrollo
- **Pre-bundling**: Dependencias optimizadas
- **Code splitting**: Chunks automáticos
- **Tree shaking**: Eliminación de código no usado

### Next.js Optimizations

- **SWC**: Compilador ultra-rápido
- **Image optimization**: Optimización automática de imágenes
- **Font optimization**: Carga optimizada de fuentes
- **Bundle analyzer**: Análisis de bundles

### Tailwind Optimizations

- **Purge CSS**: Eliminación de CSS no usado
- **JIT mode**: Compilación just-in-time
- **Future flags**: Optimizaciones experimentales

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `out`

### Otros

El proyecto está configurado para SSG, por lo que puede desplegarse en cualquier hosting estático.

## 📊 Analytics y Tracking

Para agregar analytics:

1. **Google Analytics 4**
2. **Hotjar** para heatmaps
3. **Google Tag Manager** para tracking avanzado

## 🔒 Seguridad

- **HTTPS** obligatorio en producción
- **CSP headers** configurados
- **Formularios seguros** con validación
- **No almacenamiento** de datos sensibles

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Next.js development
npm run dev:vite         # Vite development (más rápido)
npm run dev:choose       # Selección interactiva

# Construcción
npm run build            # Next.js production build
npm run build:vite       # Vite production build

# Calidad de código
npm run lint             # ESLint
npm run lint:fix         # ESLint con auto-fix
npm run format           # Prettier
npm run type-check       # TypeScript check

# Rendimiento
npm run performance      # Medir rendimiento de builds
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:

- Email: tu@email.com
- LinkedIn: [Tu perfil]
- GitHub: [Tu usuario]

---

**¡Gracias por usar esta landing page!** 🚀 