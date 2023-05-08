const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    title: `Uno homepage`,
    message: `Welcome to Uno`,
  });
});

module.exports = router;
