# Proyecto Vue 3 con Tailwind CSS

## Descripción
Este proyecto es una aplicación web desarrollada con Vue.js 3 y estilizada con Tailwind CSS. Proporciona un punto de partida optimizado para crear aplicaciones web modernas y responsivas.

## Requisitos Previos
- Node.js (versión 16.x o superior)
- npm o yarn

## Instalación

1. Clona este repositorio:
```bash
git clone [URL-del-repositorio]
cd Vue3_Tailwind4
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila y minimiza para producción
- `npm run preview` - Previsualiza la compilación de producción localmente

## Estructura del Proyecto

```
Vue3_Tailwind4/
├── public/                 # Archivos estáticos
├── src/
│   ├── assets/             # Imágenes, fuentes, etc.
│   ├── components/         # Componentes Vue reutilizables
│   ├── views/              # Vistas/páginas de la aplicación
│   ├── router/             # Configuración del enrutador
│   ├── store/              # Estado de la aplicación (si usa Vuex/Pinia)
│   ├── App.vue             # Componente raíz
│   └── main.js             # Punto de entrada de la aplicación
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js      # Configuración de Tailwind CSS
└── vite.config.js          # Configuración de Vite
```

## Características

- ⚡️ **Vue 3** - Framework progresivo para construir interfaces de usuario
- 🎨 **Tailwind CSS** - Framework de utilidades CSS para un diseño rápido
- 📱 **Totalmente Responsivo** - Diseños adaptados a todos los dispositivos
- 🚀 **Vite** - Servidor de desarrollo ultrarrápido y compilación optimizada

## Personalización de Tailwind

La configuración de Tailwind puede ser modificada en el archivo `tailwind.config.js`. Por ejemplo:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5',
        'secondary': '#10B981',
      },
      // Añade más personalizaciones aquí
    }
  },
  plugins: []
}
```

## Recursos Útiles

- [Documentación de Vue 3](https://v3.vuejs.org/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Vite](https://vitejs.dev/guide/)

## Licencia
MIT
