/**
 *@param {import("node-pg-migrate/dist/types").MigrationBuilder} pgm
 */

/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable("test_table", {
    id: "id",
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    test_string: {
      type: "varchar(10000)",
      notNull: "true",
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("test_table");
};
