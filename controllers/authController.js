const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const SECRET_KEY=process.env.SECRET_KEY;

exports.signup = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      email,
    });
    await user.save();
    res.status(201).json({ status: 'Account successfully created', user_id: user.user_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ status: 'Incorrect username/password provided. Please retry' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ status: 'Incorrect username/password provided. Please retry' });
      }
  
      const token = jwt.sign({ user_id: user.user_id }, SECRET_KEY);
      res.status(200).json({ status: 'Login successful', user_id: user.user_id, access_token: token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
