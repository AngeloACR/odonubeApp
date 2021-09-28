const express = require('express');
const router = express.Router();

const controller = require('../controller/main');

router.post('/', controller.create);
router.get('/all', controller.getAll);
router.get('/', controller.getOne);
router.delete('/all', controller.deleteAll);
router.delete('/', controller.deleteOne);
router.put('/', controller.update);
module.exports = router;