const sequelize = require('../config/connection');
const { User, ForumPost } = require('../models');
const userData = require('./userData.json');
const forumPostData = require('./forumPostData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const forumPost = await ForumPost.bulkCreate(forumPostData, {

  });

  process.exit(0);
};

seedDatabase();