const router = require("express").Router();
const { User } = require("../../models");

router.post("/session", (req, res) => {
  if (req.session.logged_in) {
    req.session.reload(() => {
      res.json({
        logged_in: req.session.logged_in,
        user_id: req.session.user_id,
        message: "You are logged in.",
      });
    });
  } else {
    res.status(404).end();
  }
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;

      res.status(200).json({
        logged_in: true,
        user_id: userData.user_id,
        message: "You are now signed up!",
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;

      res.json({
        logged_in: true,
        user_id: userData.user_id,
        message: "You are now logged in!",
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
