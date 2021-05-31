const router = require("express").Router();
const savedController = require("../../controllers/savedController");

router.route("/")
    .post(savedController.findAll)
    .post(savedController.create)
    .delete(savedController.remove)

module.exports = router;
