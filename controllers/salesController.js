const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    db.ForSalePost.findAll({ raw: true })
      .then((dbSales) => {
        res.json(dbSales);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.ForSalePost.create(req.body)
      .then((dbSales) => res.json(dbSales))
      .catch((err) => res.status(422).json(err));
  },
  findComment: function (req, res) {
    db.ForSaleComment.findAll({
      raw: true,
      include:[db.User]
    })
      .then((dbComment) => {
        res.json(dbComment);
      })
      .catch((err) => res.status(422).json(err));
  },
  newComment: function (req, res) {
    db.ForSaleComment.create(req.body)
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
