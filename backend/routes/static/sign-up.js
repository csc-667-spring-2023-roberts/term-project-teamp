const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("sign-up", {
    title: `Sign up`,
    message: `Sign up to begin playing`,
  });
});

module.exports = router;
