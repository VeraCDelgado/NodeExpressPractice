const express = require('express');
const people = require('./routes/people');
const auth = require('./routes/auth');

const app = express();

//llamamos al metodo static(middleware) que ya esta incorporado en express
app.use([express.urlencoded({ extended: false }), express.static('./methods-public'), express.json()]);
app.use('/api/people', people);
app.use('/login', auth);


app.listen(5000, (req, res) => {

    console.log('Servidor está escuchando en el puerto 5000');
})