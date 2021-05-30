const router = require("express").Router();
const savedController = require("../../controllers/savedController");

// Matches with "/api/books"
router.route("/")
    .post(savedController.findAll)
    .post(savedController.create)
    .delete(savedController.remove)

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports = router;
