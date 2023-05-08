const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const gameTitle = "John.Doe1";
  res.render("game", {
    title: `${gameTitle}'s game `,
    message: `Game id: ${id}`,
  });
});

module.exports = router;
