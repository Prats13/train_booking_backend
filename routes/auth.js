const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/signup
router.post('/signup', authController.signup);

// POST /api/login
router.post('/login', authController.login);

module.exports = router;
