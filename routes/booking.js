const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST /api/trains/:train_id/book
router.post('/:train_id/book', bookingController.bookSeat);

// GET /api/bookings/:booking_id
router.get('/:booking_id', bookingController.getBookingDetails);

module.exports = router;
