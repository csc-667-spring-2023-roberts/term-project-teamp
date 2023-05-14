const express = require("express");
const route = express.Router();
const db = require("../../db/connection.js");

route.get("/", async (req, res) => {
  await db
    .any(`INSERT INTO test_table ("test_string") VALUES ($1)`, [
      [
        `Hello on ${new Date().toLocaleDateString("en-us", {
          hour: "numeric",
          minute: "numeric",
          month: "short",
          day: "numeric",
          weekday: "long",
          year: "numeric",
        })}`,
      ],
    ])
    .catch((e) => {
      console.log({ e });
      res.json({ e });
    });

  const rows = await db.any(`SELECT * FROM test_table`).catch((e) => {
    console.log({ e });
    res.json({ e });
  });

  res.json(rows);
});

module.exports = route;
