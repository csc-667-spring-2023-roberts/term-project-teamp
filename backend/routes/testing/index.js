const express = require("express");
const route = express.Router();
const db = require("../../db/connection.js");

route.get("/", async (req, res) => {
  await db
    .any(`INSERT INTO "Users" ("userName","userPassword") VALUES ($1,$2)`, [
      "Username 2",
      "Password12!",
    ])
    .catch((e) => {
      console.log({ e });
      res.json({ e });
    });

  const rows = await db.any(`SELECT * FROM "Users"`).catch((e) => {
    console.log({ e });
    res.json({ e });
  });

  res.json(rows);
});

module.exports = route;
