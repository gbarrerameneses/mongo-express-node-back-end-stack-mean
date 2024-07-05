const Producto = require("../models/Producto");

// POST
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

// GET
exports.obtenerProductos = async (req, res) => { // petición a la BD
    try {

        const productos = await Producto.find();
        res.json(productos) // devolvemos un json al cliente con los productos

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// PUT id
exports.actualizarProducto = async (req, res) => {
    try {

        const { nombre, categoria, ubicacion, precio } = req.body; // destructuring
        let producto = await Producto.findById(req.params.id);  // petición a la BD para obtener un producto de la BD

        if(!producto) {
            res.status(404).json({msg: 'No existe el producto'})
        }

        // actualizando el producto
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        // actualizar el nuevo producto
        //# pasamos 3 parámetros
        // 1.- id como está en mongo db compass
        // 2.- el producto ya actualozado - el objeto producto
        // 3.- new: true
        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, {new: true})
        res.json(producto)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// GET id
exports.obtenerProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);  // petición a la BD para obtener un producto de la BD

        if(!producto) {
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(producto)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// DELETE id
exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);  // petición a la BD para obtener un producto de la BD

        if(!producto) {
            res.status(404).json({msg: 'No existe el producto'})
        }

        await Producto.findOneAndDelete({ _id: req.params.id }) // eliminamos el producto
        res.json({ msg: 'Producto eliminado con éxito.'})

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}