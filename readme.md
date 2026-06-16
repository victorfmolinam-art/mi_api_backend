
# API DE PRODUCTOS - EXPRESS JS

## Descripción
Esta API permite gestionar productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando Node.js y Express.

---

## Instalación
1. Abrir la carpeta del proyecto
2. Ejecutar:
npm install

---

## Ejecución
Ejecutar el servidor con:
node index.js

Servidor disponible en:
http://localhost:3000

---

## Endpoints

### GET → Listar productos
GET /api/productos

---

### POST → Crear producto
POST /api/productos

Body:
{
  "nombre": "Teclado",
  "precio": 20000,
  "categoria": "Accesorios"
}

---

### PUT → Actualizar producto
PUT /api/productos/1

---

### DELETE → Eliminar producto
DELETE /api/productos/1

---

## Manejo de errores
- 400 → Datos inválidos
- 404 → Producto no encontrado

---

## Evidencias
- GET funcionando ✅
- POST funcionando ✅
- Servidor activo ✅
- Código fuente ✅

---

## Conclusión
Este proyecto permitió comprender la creación de una API RESTful, el uso de Express y la manipulación de datos en backend.
