# Candidatura Ing. Juan Altamirano — Cantón Guamote

Sitio web informativo moderno para la candidatura a Alcalde del Cantón Guamote.

## Tecnologías

- React + Vite
- CSS puro (sin Tailwind / Bootstrap)
- Lucide React (iconos)
- Despliegue en GitHub Pages

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre http://localhost:5173

## Compilar para producción

```bash
npm run build
```

La carpeta `dist/` contiene los archivos listos para desplegar.

## Subir a GitHub

1. Crea un repositorio nuevo en GitHub (ejemplo: `guamote-candidatura`).
2. Actualiza el valor de `base` en `vite.config.js` con el nombre de tu repositorio:

```js
base: '/guamote-candidatura/',
```

3. Sube el código:

```bash
git init
git add .
git commit -m "Sitio candidatura Juan Altamirano"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/guamote-candidatura.git
git push -u origin main
```

## Activar GitHub Pages

1. En el repositorio de GitHub ve a **Settings → Pages**.
2. En **Source** selecciona **GitHub Actions**.
3. El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente al hacer push a `main`.
4. La URL será: `https://TU_USUARIO.github.io/guamote-candidatura/`

## Personalizar contenido

### Fotografías

Coloca las imágenes en:

- `public/images/candidato/juan-altamirano.jpg` — foto principal del candidato
- `public/images/concejales/` — fotos de cada concejal

Si no hay foto, se muestra un placeholder. Actualiza las rutas en:

- `src/data/candidate.js`
- `src/data/candidates.js`

### Nombres y biografías

Edita los archivos de datos:

- `src/data/candidate.js` — datos del candidato a alcalde
- `src/data/candidates.js` — concejales urbanos y rurales
- `src/data/proposals.js` — propuestas del plan de trabajo

### Redes sociales / contacto

Edita `src/components/Contact.jsx` para agregar teléfono, correo y enlaces reales.

### Colores

Los colores de identidad están en `src/styles/variables.css`.

## Estructura

```
src/
├── components/     # Componentes React
├── data/           # Datos (candidato, propuestas, concejales)
├── styles/         # CSS (variables, global, components, responsive)
├── App.jsx
└── main.jsx
public/
└── images/
```

## Notas

- Navegación por anclas (`#inicio`, `#perfil`, etc.) compatible con GitHub Pages.
- Diseño mobile-first y responsive.
- Accesibilidad básica (ARIA, focus, contraste).
- No se inventan datos: solo se usa la información del documento fuente.
