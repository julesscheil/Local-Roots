const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    console.log(req.query);
    db.ForSalePost.findAll(req.query)
      .then((dbSales) => res.json(dbSales))
      .catch((err) => res.status(422).json(err));
  },

  //   findById: function(req, res) {
  //     db.Book.findById(req.params.id)
  //       .then(dbBook => res.json(dbBook))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   create: function(req, res) {
  //     db.Book.create(req.body)
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
