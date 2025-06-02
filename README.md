# React + Vite

1. Instalar dependencia gh-pages
2. Agregar configuración en el archivo vite.config.js
    -   base: "/vite-react-counter/", // 👈 nombre de tu repositorio
3. Agregar configuración en el archivo package.json
    - "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "deploy": "gh-pages -d dist"  
        }
4. Ejecutar los comandos:
    - npm run build
    - npm run deploy
