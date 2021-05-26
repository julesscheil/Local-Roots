const {
  Sequelize,
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class ForumPost extends Model {}

Post.init(
  {
    forum_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  title: DataTypes.STRING,
  description: DataTypes.STRING
}, {
  sequelize
});

module.exports = ForumPost;