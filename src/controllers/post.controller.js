const postService = require('../services/postService');

// const { PostCategory } = require('../models');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;
  const post = await postService.createPost({ title, content, userId: user.id });
  await Promise.all(categoryIds
    .map(async (categoryId) => 
     postService.createPostCategory({ postId: post.id, categoryId })));

  return res.status(201).json(post);
};

const getPosts = async (req, res) => {
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getPosts,
};