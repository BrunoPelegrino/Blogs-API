const postService = require('../services/postService');
// const { PostCategory } = require('../models');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;
  const post = await postService.createPost({ title, content, userId: user.id });
  categoryIds
    .map(async (categoryId) => 
     postService.createPostCategory({ postId: post.id, categoryId }));

  return res.status(201).json(post);
};

module.exports = {
  createPost,
};