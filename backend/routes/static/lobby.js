const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("lobby", {
    title: `Lobby`,
    message: `Welcome to the lobby`,
  });
});

module.exports = router;
