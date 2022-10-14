const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create(displayName, email, password, image);
  
  return newUser;
  };

const getUsers = async () => {
  const getAll = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return getAll;
};

const getUserById = async (id) => {
  const getById = await User.findOne({ 
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { id }, 
  });
  return getById;
};

const deleteMe = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteMe,
};