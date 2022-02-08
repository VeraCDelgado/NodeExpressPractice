let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}
const createPerson = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' });
    }
    res.status(201).send({ success: true, data: [...people, name] });
}
const createPersonPostman = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' });
    }
    res.status(201).send({ success: true, data: [...people, name] });
}
const update = (req, res) => {

    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id ${id}` });

    }
}
const eliminar = (req, res) => {

    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        res.status(404).json({ success: false, msg: `La persona con el id ${id} no existe` });
    }
    const newPeople = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({ success: true, data: newPeople });
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    update,
    eliminar

}