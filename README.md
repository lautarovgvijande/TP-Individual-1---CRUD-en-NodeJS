Mini API de la Cafetería del CRUI

Trabajo Práctico Individual - Prácticas Profesionalizantes I
 Alumno: Vijande Lautaro Gaston

Este proyecto consiste en una API desarrollada con Node.js y Express para realizar la gestión de los productos de la cafetería del CRUI. Permite consultar, agregar, modificar y eliminar productos mediante distintas rutas HTTP.

Los datos se almacenan en memoria utilizando un array, por lo que al reiniciar el servidor la información vuelve a su estado inicial.

Ejecución del proyecto

Instalar las dependencias:

Shell
npm install

Iniciar el servidor:

Shell
npm start

Una vez iniciado, la aplicación queda disponible en:

http://localhost:3000

Rutas implementadas
GET / → Muestra un mensaje de bienvenida.
GET /api/productos → Devuelve el listado completo de productos.
GET /api/productos/:id → Busca y devuelve un producto según su ID.
POST /api/productos → Permite agregar un nuevo producto.
PUT /api/productos/:id → Actualiza los datos de un producto existente.
DELETE /api/productos/:id → Elimina un producto de la lista.
Validaciones realizadas

Para el alta y modificación de productos se implementaron las siguientes validaciones:

El nombre es obligatorio.
El nombre no puede estar vacío.
El precio debe ser un valor numérico mayor a cero.

En caso de ingresar datos incorrectos, la API responde con código 400 (Bad Request). Si se intenta acceder a un producto inexistente, responde con código 404 (Not Found).

Pruebas

Las pruebas de funcionamiento fueron realizadas utilizando solicitudes desde la consola del navegador mediante fetch.

Las evidencias de las pruebas realizadas se encuentran en la carpeta capturas incluida en el proyecto.

Se realizo el trabajo con StackBlitz por falta de PC para realizar el trabajo ya que la mia tiene protocolos de seguridad de poweshell impidiendome ejecutar lo programado.