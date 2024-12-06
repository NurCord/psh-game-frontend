# Proyecto de Estadisticas de jugadores

El proyecto muestra una tabla con estadísticas de jugadores, obtenidas de la API configurada en el archivo .env. La tabla se actualiza automáticamente cada 10 segundos sin necesidad de refrescar la página.

## Tabla de Contenidos

- [Demo en Producción](#demo-en-producción)
- [Variables de Entorno](#variables-de-entorno)
- [Instalación](#instalación)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Demo en Producción

Puedes acceder al Static Site desplegada en Render a través del siguiente enlace: [https://psh-game-frontend.onrender.com/](https://psh-game-frontend.onrender.com/)

## Variables de Entorno

Crea un archivo .env en la raíz del proyecto y define la URL de la API:

```sh
REACT_APP_API_URL=https://psh-game.onrender.com/api/stats
```

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/psh-game-frontend.git
   cd psh-game-frontend
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Inicia el servidor:

   ```sh
   npm start
   ```

4. La API estará disponible en http://localhost:3000.

## Tecnologías Utilizadas

- [React](https://react.dev/) (v19.0.0)
- [TypeScript](https://www.typescriptlang.org/) (v4.9.5)
- [Tailwind CSS](https://v2.tailwindcss.com/docs) (v3.4.16)
- [Axios](https://axios-http.com/docs/intro) (v1.7.9)
