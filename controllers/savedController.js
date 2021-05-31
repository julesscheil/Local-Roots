const db = require("../models");

module.exports = {
  findAll: function (req, res) {
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
    console.log(req.body);
    db.SavedPost.findAll({
      where: { sale_post_id: req.body.sale_post_id, user_id: req.body.user_id },
    })
      .then((dbSaved) => dbSaved.remove())
      .then((dbSaved) => res.json(dbSaved))
      .catch((err) => res.status(422).json(err));
  },
};
