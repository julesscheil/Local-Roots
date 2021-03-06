const {
    Sequelize,
    Model,
    DataTypes
  } = require('sequelize');
  const sequelize = require('../config/connection');
  
  class ForSalePost extends Model {}
  
  ForSalePost.init(
    {
      sale_post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      defaultValue: "default.png"
    },
    category: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {
    sequelize
  });
  
  module.exports = ForSalePost;