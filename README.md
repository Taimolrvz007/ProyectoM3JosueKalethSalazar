# Habla con Goku - Proyecto Integrador 3

## Autor
**Nombre:** Josue Kaleth Salazar (Taimolrvz)  
**Curso:** Henry - Módulo 3

---

## Descripción

Single Page Application (SPA) que permite chatear con Goku, el guerrero Saiyan de Dragon Ball Z, usando inteligencia artificial. La app integra la API de Google Gemini a través de una Vercel Serverless Function para mantener la API key segura.

---

## Demo

🔗 [https://proyecto-m3-josue-kaleth-salazar.vercel.app](https://proyecto-m3-josue-kaleth-salazar.vercel.app)

---

## Tecnologías

- JavaScript Vanilla
- CSS3 (Flexbox)
- History API (routing SPA)
- Google Gemini AI
- Vercel Serverless Functions
- Vitest (tests unitarios)

---

## Estructura del proyecto

```
project/
├── api/
│   └── functions.js      # Serverless function (proxy a Gemini)
├── src/
│   ├── views/
│   │   ├── home.js
│   │   ├── chat.js
│   │   ├── about.js
│   │   └── notFound.js
│   ├── main.js
│   ├── router.js
│   ├── navigation.js
│   └── utils.js
├── tests/
│   └── utils.test.js
├── index.html
├── style.css
├── serve.json
├── vercel.json
├── .env.example
└── README.md
```

---

## Cómo correr el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/Taimolrvz007/ProyectoM3JosueKalethSalazar
cd ProyectoM3JosueKalethSalazar
```

### 2. Crear el archivo .env

```bash
cp .env.example .env
```

Edita `.env` y agrega tu API key de Gemini:

```
GEMINI_API_KEY=tu_api_key_aqui
```

Obtén tu API key en: https://aistudio.google.com/apikey

### 3. Instalar dependencias

```bash
npm install
```

### 4. Correr el servidor local

```bash
npx serve .
```

Abrir en el navegador: `http://localhost:3000`

---

## Correr los tests

```bash
npm test
```

---

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `GEMINI_API_KEY` | API key de Google Gemini |

---

## Uso de IA en el desarrollo

Durante el desarrollo se utilizó Claude (Anthropic) como herramienta de apoyo para:
- Resolver errores de configuración en Vercel
- Entender el patrón de routing SPA con History API
- Estructurar la Serverless Function para Gemini
correspondiendo un 40% de ayuda  de AI y un 60% de programacion a solas por parte del Programador
---

## Casos de prueba verificados

- ✅ Navegación SPA sin recarga
- ✅ Back/Forward del navegador funciona
- ✅ Deep link (abrir `/about` directamente)
- ✅ Ruta inexistente muestra 404
- ✅ Ctrl+click abre nueva pestaña
- ✅ Links externos no se interceptan