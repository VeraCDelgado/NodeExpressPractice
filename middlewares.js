const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

const app = express();
// app.use([logger, authorize]);
app.use(morgan('tiny'));
//practicando middlewares
//req => middleware => res

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/About', (req, res) => {
    res.send('About');
})

app.get('/api/product', (req, res) => {
    res.send('Product');
})

app.get('/api/items', (req, res) => {
    res.send('Items');
})

app.listen(5000, (req, res) => {
    console.log('Servidor está escuchando en el puerto 5000');
})