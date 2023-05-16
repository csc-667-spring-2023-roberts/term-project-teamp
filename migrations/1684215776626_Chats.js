/* eslint-disable camelcase */

/**
 *@param {import("node-pg-migrate/dist/types").MigrationBuilder} pgm
 */

exports.up = (pgm) => {
  pgm.createTable("Chats", {
    message_id: "id",
    sender_id: {
      type: "INTEGER",
      notNull: true,
    },
    game_id: {
      type: "INTEGER",
      notNull: true,
      references: '"Games"',
    },
    message: {
      type: "TEXT",
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
  pgm.dropTable("Chats");
};
