const User= require('./users');
const ForSalePost= require('./forSalePost');
const ForSaleComment= require('./forSaleComment');
const ForumPost= require('./forumPost');
const ForumComment= require('./forumComment');
const SavedPost = require('./saved');

ForSalePost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

ForSalePost.hasMany(ForSaleComment, {
    foreignKey: 'sale_post_id',
    onDelete: 'CASCADE'
})

ForSaleComment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

ForumPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

ForumPost.hasMany(ForumComment, {
    foreignKey: 'forum_post_id',
    onDelete: 'CASCADE'
})

ForumComment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

SavedPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

ForSalePost.hasMany(SavedPost, {
    foreignKey: 'sale_post_id',
    onDelete: 'CASCADE'
})

module.exports = {
    User,
    ForSalePost,
    ForSaleComment,
    ForumPost,
    ForumComment,
    SavedPost
};
  