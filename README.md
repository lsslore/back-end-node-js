# Proyecto Node.js - Gestión de Productos con FakeStore API

## Objetivo de la Clase
El objetivo de este proyecto es aprender a manejar la lógica a través de operaciones con **CRUD (Create, Read, Delete)** desde la terminal utilizando **Node.js y la API FakeStore**.

- Práctica:

- Uso de `ESModules en Node.js`.
- Manejo de argumentos de consola con `process.argv`.
- Interacción con una API externa usando `fetch`.
- Manejo de promesas con `async/await`.

## Requerimiento #1: Configuración Inicial

- Crear un directorio para alojar el proyecto e incluir un archivo `index.js` como punto de entrada.
- Iniciar Node.js y configurar npm con:
  ```bash
  npm init -y
- Agregar  la propiedad "type": "module" en el archivo package.json para habilitar ESModules.
- Configurar un script llamado start para ejecutar el programa con el comando npm run start.

## Requerimiento #2: Lógica de Gestión de Productos (comandos de prueba)

- npm run start GET products  (Consultar Todos los Productos)
- npm run start GET products/15  (Consultar un Producto Específico)
- npm run start POST products T-Shirt-Rex 300 remeras  (Crear un Producto Nuevo)
- npm run start DELETE products/7  (Eliminar un Producto)