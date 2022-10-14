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
  const postById = await postService.getPostsById(id);
  // console.log(postById.userId);
  await postService.updatePost(id, title, content);
  if (id !== postById.userId) return res.status(401).json({ message: 'Unauthorized user' });
  const newPost = await postService.getPostsById(id);
  return res.status(200).json(newPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const teste = await postService.getPostsById(id);
  if (!teste) { return res.status(404).json({ message: 'Post does not exist' }); }
  if (req.user.id !== teste.userId) {
 return res
    .status(401).json({ message: 'Unauthorized user' }); 
}
  await postService.deletePost(id);
  return res.status(204).end();
};

const getByQyery = async (req, res) => {
  const { q } = req.query;
  if (!q) { 
    const all = await postService.getPosts(); 
    return res.status(200).json(all); 
  }
  const query = await postService.getByQyery(q);
  return res.status(200).json(query);
};

module.exports = {
  createPost,
  getPosts,
  getPostsById,
  updatePost,
  deletePost,
  getByQyery,
};