const router = require("express").Router();
const salesController = require("../../controllers/salesController");

router.route("/").get(salesController.findAll).post(salesController.create);

router.route("/favorites").post(salesController.findFavorites);

router.route("/me").post(salesController.findMine);

router.route("/delete").post(salesController.removeMine);

router
  .route("/comment")
  .get(salesController.findComment)
  .post(salesController.newComment);

module.exports = router;
