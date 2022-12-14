const { Op } = require('sequelize');
const { BlogPost } = require('../models');
const { PostCategory } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');
// const Category = require('../models/Category');

const createPost = async ({ title, content, userId }) => {
    const newPost = await BlogPost.create({ 
      title,
      content,
      userId,
      published: Date.now(), 
      updated: Date.now(),
     });
    return newPost;  
};

const getPosts = async () => {
  // https://stackoverflow.com/questions/37747904/sequelize-findall-with-association-and-foreign-key
  const posts = await BlogPost.findAll({
    // where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] }, 
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  });
  return posts;
};

const getPostsById = async (id) => {
  const posts = await BlogPost.findByPk(id, {
    // where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] }, 
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  });
  return posts;
};

const updatePost = async (id, title, content) => {
  const update = await BlogPost.update({ title, content }, {
    where: { id },
  });
  return update;
};

const deletePost = async (id) => {
  const erase = await BlogPost.destroy({
    where: { id },
  });
  return erase;
};

const getByQyery = async (q) => {
  const getAll = await BlogPost.findAll({
    where: {
      [Op.or]: [
      { title: { [Op.like]: q } },
      { content: { [Op.like]: q } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] }, 
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  });
  return getAll;
};

const createPostCategory = async ({ postId, categoryId }) => { 
const newPostCategory = await PostCategory.create({ postId, categoryId });
return newPostCategory;
};
module.exports = {
  createPost,
  createPostCategory,
  getPosts,
  getPostsById,
  updatePost,
  deletePost,
  getByQyery,
};