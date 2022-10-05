const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.createUser(displayName, email, password, image);
  // return res.status(201).json(user);
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email: user.email } }, secret, jwtConfig);

  res.status(201).json({ token });
};

module.exports = {
  createUser,
};