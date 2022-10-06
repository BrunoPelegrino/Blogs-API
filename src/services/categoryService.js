const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create(name);
    
  return newCategory;
};

const getCategories = async () => {
  const getAllCategories = await Category.findAll({
    attributes: ['id', 'name'],
  });
  return getAllCategories;
};

module.exports = {
  createCategory,
  getCategories,
};