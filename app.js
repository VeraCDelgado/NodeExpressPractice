const express = require('express');
const { products } = require('./data.js');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href=/api/products>Products</a></br><a href=/api/products/details>Detalle</a>');

})

app.get('/api/products', (req, res) => {

    res.json(products);
});
app.get('/api/products/details', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProduct);

});
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1)
        //evaluar detenidamiente este codigo ya que funciona de esta manera pero
        //no si se utiliza la sentencia if.
    res.json(singleProduct);




});


app.listen(5000, (req, res) => {
    console.log('Server is listening on port 5000...');
})