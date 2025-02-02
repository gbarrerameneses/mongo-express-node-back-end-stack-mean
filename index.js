const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')

// Creando el servidor
const app = express()

// Definiendo puerto
const port = 4000

// Conectamos a la BD
conectarDB();

// agregando un middleware
app.use(cors());

// configurando middleware
app.use(express.json()); // habilitando para mandar json a la aplicación

app.use('/api/productos', require('./routes/producto'));

// Definiendo ruta principal
// app.get('/', (req, res) => {
//     res.send('Hello World!') // enviando datos a pantalla
//   })

app.listen(port, () => {
    console.log('Servidor arriba');
})




