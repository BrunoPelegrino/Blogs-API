module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {},
  {
    timestamps: false,
    underscored: true,
    tableName: 'post_categories',
  });
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'categoryId'
    })
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    })
  }
  return PostCategory;
};