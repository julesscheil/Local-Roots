const router = require("express").Router();
const savedController = require("../../controllers/savedController");

// Matches with "/api/books"
router.route("/")
    .get(savedController.findAll)
    .post(savedController.create)

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports = router;
