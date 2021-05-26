const router = require("express").Router();
const forumPostController = require("../../controllers/forumPostController");

// Matches with "/api/books"
router.route("/")
    .get(forumPostController.findAll)
    .post(forumPostController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports = router;
