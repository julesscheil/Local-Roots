const sequelize = require('../config/connection');
const { User, ForumPost, ForSalePost } = require('../models');
const userData = require('./userData.json');
const forumPostData = require('./forumPostData.json');
const forSalePostData = require('./forSalePostData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const forumPost = await ForumPost.bulkCreate(forumPostData, {
    returning: true,
  });

  const forSalePost = await ForSalePost.bulkCreate(forSalePostData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();