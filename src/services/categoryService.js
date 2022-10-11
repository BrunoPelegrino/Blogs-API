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

/* const getByid = async (ids) => {
  const verifdyIds = await Category.findOne({ 
    attributes: ['id'],
    where: ids });
  return verifdyIds;
}; */

const getByid = async () => {
  const getAllCategories = await Category.findAll({
    attributes: ['id'],
  });
  return getAllCategories;
};

module.exports = {
  createCategory,
  getCategories,
  getByid,

};