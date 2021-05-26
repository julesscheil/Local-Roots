const {
    Sequelize,
    Model,
    DataTypes
  } = require('sequelize');
  const sequelize = require('../config/connection');
  
  class ForumComment extends Model {}
  
  ForumComment.init(
    {
      forum_comment_id: {
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
  
  module.exports = ForumComment;