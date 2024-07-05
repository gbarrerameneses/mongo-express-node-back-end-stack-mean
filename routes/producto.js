// Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')

// api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto); // recibe un id como parámetro
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router