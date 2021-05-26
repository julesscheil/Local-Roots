const sequelize = require('../config/connection');
const { User, ForumPost, ForSalePost, ForSaleComment, ForumComment, SavedPost } = require('../models');
const userData = require('./userData.json');
const forumPostData = require('./forumPostData.json');
const forumCommentData = require('./forumComments.json');
const forSalePostData = require('./forSalePostData.json');
const forSaleCommentData = require('./forSaleComments.json');
const savedPostData = require('./savedPost.json');

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

  const forSaleComment = await ForSaleComment.bulkCreate(forSaleCommentData, {
    returning: true,
  });

  const forumComment = await ForumComment.bulkCreate(forumCommentData, {
    returning: true,
  });

  const savedPost = await SavedPost.bulkCreate(savedPostData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();