const { User } = require('../models');
// const { generateToken } = require('../utils/JWT'); 

const authService = (email) => User.findOne({ where: { email } });

module.exports = {
  authService,
};