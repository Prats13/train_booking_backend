const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

// POST /api/trains/create
router.post('/create', trainController.createTrain);

router.put('/:train_id', trainController.updateTrain);

module.exports = router;
