const Sequelize = require('sequelize');
const sequelize = require('../config/database'); 

const Train = sequelize.define('Train', {
  train_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  source: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destination: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  seat_capacity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  arrival_time_at_source: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  arrival_time_at_destination: {
    type: Sequelize.TIME,
    allowNull: false,
  },
});

module.exports = Train;
