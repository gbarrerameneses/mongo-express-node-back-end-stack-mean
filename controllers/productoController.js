const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    console.log('Desde controller crear producto');
    console.log(req.body);

    try {
        let producto;

        // Creamos nuestro producto
        producto = new Producto(req.body); // pasamos los parametros (objeto  ) de model Producto

        await producto.save(); // almacenando el producto
        res.send(producto); // devolvemos el mensaje con los datos ya guardados

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => { // petición a la BD
    try {

        const productos = await Producto.find();
        res.json(productos) // devolvemos un json al cliente con los productos

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}