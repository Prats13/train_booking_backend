const Booking = require('../models/Booking');
const Train = require('../models/Train');

exports.bookSeat = async (req, res) => {
  try {
    const { user_id, no_of_seats } = req.body;
    const { train_id } = req.params;
    const train = await Train.findById(train_id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }

    if (train.available_seats < no_of_seats) {
      return res.status(400).json({ error: 'Not enough seats available' });
    }

    const seat_numbers = Array.from({ length: no_of_seats }, (_, index) => index + 1);
    train.available_seats -= no_of_seats;
    await train.save();

    const booking = new Booking({
      user_id,
      train_id,
      train_name: train.train_name,
      no_of_seats,
      seat_numbers,
      arrival_time_at_source: train.arrival_time_at_source,
      arrival_time_at_destination: train.arrival_time_at_destination,
    });
    await booking.save();
    res.status(201).json({ message: 'Seat booked successfully', booking_id: booking.booking_id, seat_numbers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBookingDetails = async (req, res) => {
  try {
    const { booking_id } = req.params;
    const booking = await Booking.findById(booking_id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
