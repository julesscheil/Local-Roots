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
    db.SavedPost.findById(req.params.id)
      .then((dbSaved) => dbSaved.remove())
      .then((dbSaved) => res.json(dbSaved))
      .catch((err) => res.status(422).json(err));
  }
};
