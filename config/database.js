const Sequelize = require('sequelize');

// Define your database connection here
DB_HOST=process.env.DB_HOST
DB_USER=process.env.DB_USER
DB_PASSWORD=process.env.DB_PASSWORD
DB_NAME=process.env.DB_NAME
const sequelize = new Sequelize('train_booking','root', 'root31', {
  host: 'localhost', // Replace with your database host if it's not on localhost
  dialect: 'mysql', // Change this if using PostgreSQL, etc.
  port: 3306,
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

