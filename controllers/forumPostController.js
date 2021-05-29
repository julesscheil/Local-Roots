const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    db.ForumPost.findAll({ raw: true })
      .then((dbForum) => {
        console.log(dbForum);
        res.json(dbForum);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    db.ForumPost.create(req.body)
      .then(dbForum => res.json(dbForum))
      .catch(err => res.status(422).json(err));
  },
  findComment: function (req, res) {
    db.ForumComment.findAll({ raw: true, 
      include:[db.User] })
      .then((dbComment) => {
        console.log(dbComment);
        res.json(dbComment);
      })
      .catch((err) => res.status(422).json(err));
  },
  newComment: function (req, res) {
    db.ForumComment.create(req.body)
      .then((dbComment) => res.json(dbComment))
      .catch((err) => res.status(422).json(err));
  },
  //   findById: function(req, res) {
  //     db.Book.findById(req.params.id)
  //       .then(dbBook => res.json(dbBook))
  //       .catch(err => res.status(422).json(err));
  //   },

  //   update: function(req, res) {
  //     db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
  //       .then(dbBook => res.json(dbBook))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   remove: function(req, res) {
  //     db.Book.findById(req.params.id)
  //       .then(dbBook => dbBook.remove())
  //       .then(dbBook => res.json(dbBook))
  //       .catch(err => res.status(422).json(err));
  //   }
};