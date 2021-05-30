const db = require("../models");
// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    console.log(req.body);
    db.SavedPost.findAll({
      where: { user_id: req.body.user_id },
    })
      .then((dbSaved) => res.json(dbSaved))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.SavedPost.create(req.body)
      .then((dbSaved) => res.json(dbSaved))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.SavedPost.findById(req.params.id)
      .then((dbSaved) => dbSaved.remove())
      .then((dbSaved) => res.json(dbSaved))
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
};
