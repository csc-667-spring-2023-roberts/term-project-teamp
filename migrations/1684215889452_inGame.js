/* eslint-disable camelcase */

/**
 *@param {import("node-pg-migrate/dist/types").MigrationBuilder} pgm
 */

exports.up = (pgm) => {
  pgm.createTable("inGames", {
    user_id: {
      type: "id",
      references: '"Users"',
    },
    game_id: {
      type: "INTEGER",
      references: '"Games"',
      notNull: true,
    },
    //Here we will store if it's
    //the plyers turn as 1 or 0
    turn: {
      type: "INTEGER",
      notNull: true,
    },
    //Here we will store the players
    //order in the game from 1-10
    order: {
      type: "INTEGER",
      notNull: false,
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("inGames");
};
