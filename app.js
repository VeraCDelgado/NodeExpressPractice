const express = require('express');
const app = express();

//utilizacion de metodos get, post, put, delete


app.listen(5000, (req, res) => {
    console.log('Servidor está escuchando en el puerto 5000');
})