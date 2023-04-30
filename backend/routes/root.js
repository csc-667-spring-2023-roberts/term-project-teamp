const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = "Name";
  res.render("home", {
    title: "Hello world",
    message: `First template ${name}`,
  });
});

module.exports = router;
