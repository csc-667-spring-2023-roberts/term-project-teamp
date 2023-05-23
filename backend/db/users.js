const db = require("./connection");

const create = (username, email, password) =>
  db.one(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id",
    [username, email, password]
  );

const findByEmail = (email) =>
  db.one("SELECT * FROM users WHERE email=$1", [email]);

const findByUsername = (username) =>
  db.one("SELECT * FROM users WHERE username=$1", [username]);

module.exports = {
  create,
  findByEmail,
  findByUsername,
};
