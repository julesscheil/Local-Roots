const db = require("../models");
// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    db.SavedPost.findAll({
      raw: true,
    })
      .then((dbSaved) => {
        console.log(dbSaved);
        res.json(dbSaved);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.SavedPost.create(req.body)
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
  //   remove: function(req, res) {
  //     db.Book.findById(req.params.id)
  //       .then(dbBook => dbBook.remove())
  //       .then(dbBook => res.json(dbBook))
  //       .catch(err => res.status(422).json(err));
  //   }
};
