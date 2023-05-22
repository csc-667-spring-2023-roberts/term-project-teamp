const express = require("express");
const router = express.Router();

router.post("/:id", (req, res) => {
  const io = req.app.get("io");
  const message = req.body;
  const sender = "TEST SENDER";
  io.emit("chat-message", { message, sender });
});

module.exports = router;
