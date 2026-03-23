# GTD UI

La plataforma de GTD es un proyecto que tiene como objetivo automatizar la gestión de solicitudes de tramite del personal docente de la Facultad de Ciencias de la Universidad Central de Venezuela, con la participación de forma activa de docentes y el personal administrativo.

## 📋 Tabla de Contenidos

- [Prerequisitos](#prerequisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts](#scripts)
- [Tecnologías](#tecnologías)

## Prerequisitos

- [Node.js](https://nodejs.org/) (v16 o superior)
- [pnpm](https://pnpm.io/)

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone <repository-url>
   cd gtd-ui
   ```

2. Instalar dependencias:
   ```bash
   pnpm install
   ```

## Uso

Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
gtd-ui/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.js
├── package.json
└── README.md
```

## Scripts

| Comando      | Descripción                              |
| ------------ | ---------------------------------------- |
| `pnpm dev`   | Ejecuta la aplicación en modo desarrollo |
| `pnpm build` | Construye la aplicación para producción  |

## Tecnologías

- React
- CSS / Styled Components
- Axios
