const router = require("express").Router();
const savedController = require("../../controllers/savedController");

router.route("/")
    .post(savedController.findAll)
    .post(savedController.create)

router.route("/delete")
    .post(savedController.remove)

module.exports = router;
