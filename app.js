const express = require('express');
const app = express();
const path = require('path');
app.listen(5000, (req, res) => {
    console.log('Server is listening on port 5000');
});
//setup static and middlewares

app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).send('Resource not found');
})