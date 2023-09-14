const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); 
const authRoutes = require('./routes/auth');
const trainRoutes = require('./routes/train');
const bookingRoutes = require('./routes/booking');
const adminRoutes = require('./routes/admin');
const adminAuthMiddleware = require('./middleware/adminAuth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

sequelize.sync().then(() => {
  console.log('Database synchronized.');
});

app.use('/api/auth', authRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminAuthMiddleware, adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


