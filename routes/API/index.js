const router = require("express").Router();
const userRoutes = require("./users");
const salesRoutes = require("./sales");

// User routes
router.use("/users", userRoutes);
router.use("/sales", salesRoutes);

module.exports = router;