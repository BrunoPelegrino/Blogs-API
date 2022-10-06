const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.createUser({ displayName, email, password, image });
  // return res.status(201).json(user);
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email: user.email } }, secret, jwtConfig);
  
  res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const allUsers = await userService.getUsers();
  return res.status(200).json(allUsers);
};

const getUsersById = async (req, res) => {
  const { id } = req.params;
  const userById = await userService.getUserById(id);
  if (!userById) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(userById);
};

module.exports = {
  createUser,
  getUsers,
  getUsersById,
};