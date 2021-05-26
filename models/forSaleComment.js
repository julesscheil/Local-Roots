const {
    Sequelize,
    Model,
    DataTypes
  } = require('sequelize');
  const sequelize = require('../config/connection');
  
  class ForSaleComment extends Model {}
  
  ForSaleComment.init(
    {
      sale_comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    description: DataTypes.STRING,
  }, {
    sequelize
  });
  
  module.exports = ForSaleComment;