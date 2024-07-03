const express = require('express');

// Creando el servidor
const app = express()

const port = 4000

// Definiendo ruta principal
app.get('/', (req, res) => {
    res.send('Hello World!') // enviando datos a pantalla
  })

app.listen(port, () => {
    console.log('Servidor arriba');
})




