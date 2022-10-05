const { User } = require('../models');
// const { generateToken } = require('../utils/JWT');

const authService = async (email) => {
 await User.findOne({
  // attributes: ['id', 'email'],
  where: { email },
});
};
module.exports = {
  authService,
};