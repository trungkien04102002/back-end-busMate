const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');


router.get('/', busController.getListOfBuses);
router.get('/:id', busController.getBusByNumber);

module.exports = router;