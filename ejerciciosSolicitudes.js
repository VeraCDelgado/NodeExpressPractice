const express = require('express');

// importamos el archivo data para tener acceso objeto products
const { products } = require('./data.js');

const app = express();

// muestra la pagina de inicio o home
app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href=/api/products>Products</a></br><a href=/api/products/details>Detalle</a>');

})

// muestra todos los productos
app.get('/api/products', (req, res) => {

    res.json(products);
});
// muestra la informacion especifica de cada producto (id, nombre, imagen)
app.get('/api/products/details', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProduct);

});
//obtenemos informacion del producto deseado
app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId))
        // si el producto no existe devolvemos un status 404
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist');
    }

    //evaluar detenidamiente este codigo ya que funciona de esta manera pero
    //no si se utiliza la sentencia if.
    res.json(singleProduct);




});
//busca y limita la cantidad de coincidencias
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] });
    }
    return res.status(200).json(sortedProducts);

})

app.get('/api/products/:productId/reviews/:reviewID', (req, res) => {

    console.log(req.params);
    res.send('Hello World');
})


app.listen(5000, (req, res) => {
    console.log('Server is listening on port 5000...');
})