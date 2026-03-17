# 🌌 Portfolio Personal

> Portafolio web desarrollado con tecnologías modernas, enfocado en la experiencia de usuario, el rendimiento y la estética visual minimalista.

---

## 🚀 Stack Tecnológico

La base técnica del proyecto se seleccionó para garantizar velocidad, SEO y una experiencia de desarrollo (DX) fluida.

| Tecnología | Propósito |
| :--- | :--- |
| **Next.js 14** | Framework base con App Router para renderizado optimizado (SSR/ISR). |
| **TypeScript** | Robustez y seguridad en el tipado de toda la aplicación. |
| **Tailwind CSS** | Diseño responsivo y sistema de diseño basado en utilidades. |
| **Framer Motion** | Orquestación de animaciones complejas, transiciones de página y efectos de scroll. |
| **Lucide React** | Set de iconos minimalistas y altamente personalizables. |

---

## ✨ Características Destacadas

### ☯️ Intro Dinámica "Yin-Yang"
Una experiencia de carga personalizada que utiliza las iniciales de autor ("JCSA") con un efecto de entrada y salida tipo "pop" inverso, orquestado con `AnimatePresence`.

### 📱 Diseño "Mobile-First" Inmersivo
Interfaz completamente responsiva que se adapta desde dispositivos móviles hasta pantallas ultra-wide, manteniendo una jerarquía visual clara.

### 🎭 Animaciones In-View
Utilización de `whileInView` de Framer Motion para revelar secciones y elementos a medida que el usuario navega, creando un flujo de lectura orgánico.

### 💼 Showroom de Proyectos
Un componente de proyectos avanzado con:
- **Atmósfera dinámica**: El fondo cambia su gradiente según el proyecto seleccionado.
- **Carrusel inteligente**: Navegación fluida entre proyectos con estados de carga y previsualización.
- **Metadatos técnicos**: Clasificación por tipo de proyecto y tecnologías específicas.

---

## 📂 Estructura del Proyecto

```bash
portfolio-unne/
├── app/                 # Rutas, layout principal y configuración central
│   ├── globals.css      # Estilos globales y tokens de diseño
│   └── page.tsx         # Punto de entrada principal
├── components/          # Arquitectura de componentes atómicos
│   ├── Home/            # Secciones principales (Hero, About, Projects, etc.)
│   ├── Intro/           # Componentes de entrada y marca
│   └── SectionWrapper/  # HOC para animaciones de entrada consistentes
├── public/              # Activos estáticos (imágenes, iconos, etc.)
└── tailwind.config.js   # Configuración personalizada de temas y colores
```

---

## ⚙️ Configuración y Ejecución

### Requisitos Previos
- Node.js 18.x o superior
- npm o yarn

### Pasos
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jcsa87/portfolio-unne.git
   cd portfolio-unne
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Desarrollo:**
   ```bash
   npm run dev
   ```

4. **Producción:**
   ```bash
   npm run build
   npm start
   ```

---

## 🎨 Guía de Personalización

Para adaptar este portafolio a tu marca personal, sigue estos pasos:

1.  **Información de Marca**: En `components/Intro/YinYangIntro.tsx`, modifica el array `initials` con tus iniciales.
2.  **Secciones**: Las secciones se encuentran organizadas en `components/Home/`. Cada archivo es autocontenido.
3.  **Proyectos**: Edita el array `projects` en `components/Home/Projects.tsx` para añadir tus propios trabajos.
4.  **Colores**: Modifica `tailwind.config.js` para cambiar la paleta de colores global.

---

## 👨‍💻 Autor

**Estudiante de Licenciatura en Sistemas**
*Universidad Nacional del Nordeste (UNNE)*

---