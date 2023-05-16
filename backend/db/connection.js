const pgp = require("pg-promise")();

const connection = pgp("postgres://user@localhost:5432/term-project-teamp");

module.exports = connection;
