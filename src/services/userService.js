const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  
  return newUser;
  };

const getUsers = async () => {
  const getAll = await User.findAll({
    attributes: ['displayName', 'email', 'image'],
  });
  return getAll;
};

module.exports = {
  createUser,
  getUsers,
};