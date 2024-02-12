const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database')

const app = express();

// CONFIGURACION (Setting)
app.set('port', process.env.PORT || 3000);

// FUNCIONES QUE SE EJECUTAN ANTES DE QUE LLEGUEN A LAS RUTAS (Middlewares)
app.use(morgan('dev'));
app.use(express.json());

// RUTAS O URL (Routes)
app.use('/api/task', require('./routes/task.routes'));

// ARCHIVOS ESTÁTICOS  (Static Files)
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static());

// EMPEZANDO EL SERVIDOR  (Starting the server)
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});