// run `node index.js` in the terminal
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const productos = [
  { id: 1, nombre: 'Café con leche', precio: 1800, categoria: 'bebida' },
  { id: 2, nombre: 'Medialuna', precio: 900, categoria: 'comida' },
  {
    id: 3,
    nombre: 'Tostado de jamón y queso',
    precio: 3500,
    categoria: 'comida',
  },
  { id: 4, nombre: 'Agua mineral', precio: 1200, categoria: 'bebida' },
];

let siguienteId = 5;

function validar({ nombre, precio }) {
  if (typeof nombre !== 'string' || nombre.trim() === '') {
    return 'El nombre es obligatorio y no puede estar vacío';
  }
  if (typeof precio !== 'number' || !Number.isFinite(precio) || precio <= 0) {
    return 'El precio debe ser un número mayor que cero';
  }
  return null;
}

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de la Cafetería del CRUI');
});

app.get('/api/productos', (req, res) => {
  res.status(200).json(productos);
});

app.get('/api/productos/:id', (req, res) => {
  const producto = productos.find((p) => p.id === Number(req.params.id));
  if (!producto)
    return res.status(404).json({ error: 'Producto no encontrado' });
  res.status(200).json(producto);
});

app.post('/api/productos', (req, res) => {
  const error = validar(req.body || {});
  if (error) return res.status(400).json({ error });

  const { nombre, precio, categoria } = req.body;
  const nuevo = { id: siguienteId++, nombre: nombre.trim(), precio, categoria };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

app.put('/api/productos/:id', (req, res) => {
  const producto = productos.find((p) => p.id === Number(req.params.id));
  if (!producto)
    return res.status(404).json({ error: 'Producto no encontrado' });

  const error = validar(req.body || {});
  if (error) return res.status(400).json({ error });

  const { nombre, precio, categoria } = req.body;
  producto.nombre = nombre.trim();
  producto.precio = precio;
  if (categoria !== undefined) producto.categoria = categoria;
  res.status(200).json(producto);
});

app.delete('/api/productos/:id', (req, res) => {
  const indice = productos.findIndex((p) => p.id === Number(req.params.id));
  if (indice === -1)
    return res.status(404).json({ error: 'Producto no encontrado' });

  const [eliminado] = productos.splice(indice, 1);
  res.status(200).json(eliminado);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
