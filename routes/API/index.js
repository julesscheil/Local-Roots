const router = require("express").Router();
const userRoutes = require("./users");
const salesRoutes = require("./sales");
const forumRoutes = require('./forumPost');

// User routes
router.use("/users", userRoutes);
router.use("/sales", salesRoutes);
router.use("/forum", forumRoutes)

module.exports = router;