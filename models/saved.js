const {
    Sequelize,
    Model,
    DataTypes
  } = require('sequelize');
  const sequelize = require('../config/connection');
  
  class SavedPost extends Model {}
  
  SavedPost.init(
    {
        saved_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          }
  }, {
    sequelize
  });
  
  module.exports = SavedPost;