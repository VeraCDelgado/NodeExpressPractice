const express = require('express');

const router = express.Router();


const {
    getPeople,
    createPerson,
    createPersonPostman,
    update,
    eliminar
} = require('../controllers/people');

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(update).delete(eliminar);

// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/postman', createPersonPostman);
// router.put('/:id', update)
// router.delete('/:id', eliminar);

module.exports = router;