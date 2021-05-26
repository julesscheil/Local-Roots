const router = require("express").Router();
const salesController = require("../../controllers/salesController");

// const { ForSalePost } = require("../../models");

// router.get("/", async (req, res) => {
//   try {
//     const salesData = await ForSalePost.findAll({});
//     const sales = salesData.map((sale) => {
//       sale.get({ plain: true });
//     });
//     console.log(sales);
//   } catch (err) {
//     console.log(err);
//   }
// });

// Matches with "/api/books"
router.route("/").get(salesController.findAll);
//   .post(bookController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports = router;
