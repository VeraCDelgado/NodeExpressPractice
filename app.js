const express = require('express');
let { people } = require('./data');
const app = express();

//llamamos al metodo static(middleware) que ya esta incorporado en express
app.use([express.urlencoded({ extended: false }), express.static('./methods-public'), express.json()]);
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' });
    }
    res.status(201).send({ success: true, person: name });
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' });
    }
    res.status(201).send({ success: true, data: [...people, name] });
})
app.put('/api/people/:id', (req, res) => {

    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id ${id}` });

    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;

        }
        return person;
    })

    res.status(200).json({ success: true, data: newPeople });
})
app.delete('/api/people/:id', (req, res) => {

    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        res.status(404).json({ success: false, msg: `La persona con el id ${id} no existe` });
    }
    const newPeople = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({ success: true, data: newPeople });
})
app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.status(200).send(`Welcome ${name}`);
    } else {
        res.status(401).send('Please provide credentials');
    }
})

app.listen(5000, (req, res) => {

    console.log('Servidor está escuchando en el puerto 5000');
})