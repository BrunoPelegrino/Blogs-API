const { BlogPost } = require('../models');
const { PostCategory } = require('../models');
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

const createPostCategory = async ({ postId, categoryId }) => { 
const newPostCategory = await PostCategory.create({ postId, categoryId });
return newPostCategory;
};
module.exports = {
  createPost,
  createPostCategory,
};