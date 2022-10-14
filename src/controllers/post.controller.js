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

const getPosts = async (_req, res) => {
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
};

const getPostsById = async (req, res) => {
  const { id } = req.params;
  const posts = await postService.getPostsById(id);
  if (!posts) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(posts);
};

const updatePost = async (req, res) => {
  const { id } = req.user;
  const { title, content } = req.body;
  const teste = await postService.getPostsById(id);
  // console.log(teste.userId);
  await postService.updatePost(id, title, content);
  if (id !== teste.userId) return res.status(401).json({ message: 'Unauthorized user' });
  const newPost = await postService.getPostsById(id);
  return res.status(200).json(newPost);
};

module.exports = {
  createPost,
  getPosts,
  getPostsById,
  updatePost,
};