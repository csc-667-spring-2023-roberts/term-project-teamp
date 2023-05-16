/**
 *@param {import("node-pg-migrate/dist/types").MigrationBuilder} pgm
 */

exports.up = (pgm) => {
  pgm.createTable("discardPiles", {
    discard_id: "id",
    game_id: {
      type: "INTEGER",
      references: '"Games"',
      notNull: true,
    },
    card_id: {
      type: "INTEGER",
      notNull: true,
      references: '"Cards"',
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updatedAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("discardPiles");
};
