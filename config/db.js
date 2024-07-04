const mongoose = require('mongoose'); // importamos la libreria de mongoose
require('dotenv').config({ path: 'variables.env' }); // accedemos a la variable de entorno pasando la ruta

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, { // conexión - Como primer parametro pasamos la ruta
            useNewUrlParser: true,
            // useUnifiedTopology: true, # la opción useUnifiedTopology que estás intentando usar al conectarte a MongoDB no es compatible con la versión de MongoDB que estás utilizando
            // useFindAndModify: false  # la opción useFindAndModify que estás intentando usar al conectarte a MongoDB no es compatible con la versión de MongoDB que estás utilizando
        });
        console.log('BD Conectada');
    } catch (error) {
        console.error(error);
        process.exit(1); // Detenemos la app
    }
};

module.exports = conectarDB;