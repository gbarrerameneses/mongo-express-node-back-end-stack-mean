const express = require('express');
const conectarDB = require('./config/db')

// Creando el servidor
const app = express()

// Definiendo puerto
const port = 4000

// Conectamos a la BD
conectarDB();

app.use('/api/productos', require('./routes/producto'));

// Definiendo ruta principal
// app.get('/', (req, res) => {
//     res.send('Hello World!') // enviando datos a pantalla
//   })

app.listen(port, () => {
    console.log('Servidor arriba');
})




