// routes/train.js
const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

// GET /api/trains/availability
router.get('/availability', trainController.getTrainAvailability);

module.exports = router;
