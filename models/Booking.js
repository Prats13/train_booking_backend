const Sequelize = require('sequelize');
const sequelize = require('../config/database'); 

const Booking = sequelize.define('Booking', {
  no_of_seats: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  seat_numbers: {
    type: Sequelize.JSON,
    allowNull: false,
  },
  arrival_time_at_source: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  arrival_time_at_destination: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Booking;
