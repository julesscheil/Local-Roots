const router = require("express").Router();
const forumPostController = require("../../controllers/forumPostController");

// Matches with "/api/books"
router.route("/")
    .get(salesController.findAll)
    .post(salesController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports = router;
