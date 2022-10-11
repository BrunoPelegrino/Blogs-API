const categoryService = require('../services/categoryService');

const createPostValidation = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }
  next();
};

const catergoryValidation = async (req, res, next) => {
  const { categoryIds } = req.body;
  const validate = await categoryService.getByid();
  const ids = validate.map((cateorie) => cateorie.dataValues.id);
  const verifyId = categoryIds.every((id) => ids.includes(id));
  if (!verifyId) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  createPostValidation,
  catergoryValidation,
};