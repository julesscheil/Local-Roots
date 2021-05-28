const router = require("express").Router();
const salesController = require("../../controllers/salesController");

// Matches with "/api/books"
router.route("/")
    .get(salesController.findAll)
    .post(salesController.create)

    router.route("/comment")
    .get(salesController.findComment)

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports = router;
