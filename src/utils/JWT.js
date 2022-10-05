const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const generateToken = ({ id, email }) => {
 const payload = {
  id,
  email,
 };

 const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
 };
  const token = jwt.sign(payload, secret, jwtConfig); 
  return token;
};

module.exports = {
  generateToken,
};