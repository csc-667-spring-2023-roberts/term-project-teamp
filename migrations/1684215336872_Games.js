/**
 *@param {import("node-pg-migrate/dist/types").MigrationBuilder} pgm
 */

exports.up = (pgm) => {
  pgm.createTable("Games", {
    game_id: "id",
    gameTitle: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    max_players: {
      type: "INTEGER",
      notNull: true,
    },
    password: {
      type: "VARCHAR(255)",
      notNull: false,
    },
    user_id: {
      type: "INTEGER",
      notNull: true,
      references: '"Users"',
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("Games");
};
