const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.ForSalePost.findAll({ raw: true })
      .then((dbSales) => {
        res.json(dbSales);
      })
      .catch((err) => res.status(422).json(err));
  },
  findMine: function (req, res) {
    db.ForSalePost.findAll({ where: { user_id: req.body.user_id } })
      .then((dbSales) => {
        res.json(dbSales);
      })
      .catch((err) => res.status(422).json(err));
  },
  findFavorites: function (req, res) {
    db.ForSalePost.findAll({ where: { sale_post_id: req.body } })
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
  removeMine: function (req, res) {
    db.ForSalePost.destroy({
      where: { sale_post_id: req.body.sale_post_id },
    })
      .then((dbSales) => res.json(dbSales))
      .catch((err) => res.status(422).json(err));
  },
  findComment: function (req, res) {
    db.ForSaleComment.findAll({
      raw: true,
      include: [db.User],
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
};
