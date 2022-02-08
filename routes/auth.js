const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    const { name } = req.body;
    if (name) {
        // res.status(200).send(`Welcome ${name}`);
        res.status(200).json({ success: true, msg: `welcome ${name}` });
    } else {
        // res.status(401).send('Please provide credentials');
        res.status(404).json({ success: false, msg: `No existe una persona llamada ${name}` });
    }
})

module.exports = router;