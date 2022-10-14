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

const createPostCategory = async ({ postId, categoryId }) => { 
const newPostCategory = await PostCategory.create({ postId, categoryId });
return newPostCategory;
};
module.exports = {
  createPost,
  createPostCategory,
  getPosts,
};