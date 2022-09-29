'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        refernces: {
          model: 'blog_posts',
          key: 'post_id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        refernces: {
          model: 'categories',
          key: 'category_id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
  });
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('posts_categories');
  }
};
