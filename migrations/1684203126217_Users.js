/**
 *@param {import("node-pg-migrate/dist/types").MigrationBuilder} pgm
 */

exports.up = (pgm) => {
  pgm.createTable("Users", {
    user_id: {
      type: "id",
      autoIncrement: true,
    },
    userName: {
      type: "VARCHAR(255)",
      unique: true,
      notNull: true,
    },
    userPassword: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    userWins: {
      type: "INTEGER",
      notNull: true,
      default: 0,
    },
    userLosses: {
      type: "INTEGER",
      notNull: true,
      default: 0,
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("Users");
};
