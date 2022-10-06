const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
      return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await categoryService.createCategory({ name });
  return res.status(201).json(newCategory);
};

const getCategories = async (_req, res) => {
  const allUsers = await categoryService.getCategories();
  return res.status(200).json(allUsers);
};

module.exports = {
  createCategory,
  getCategories,
};