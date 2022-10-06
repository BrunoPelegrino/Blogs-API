const jwt = require('jsonwebtoken');

require('dotenv/config');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;

const authToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
  const decoded = jwt.verify(token, secret);

  const user = await loginService.authService(decoded.data.email);

  if (!user) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.user = user;
  next();
} catch (error) {
  return res.status(401).json({ message: 'Expired or invalid token' });
}
};

module.exports = {
  authToken,
};