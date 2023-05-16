/**
 *@param {import("node-pg-migrate/dist/types").MigrationBuilder} pgm
 */

exports.up = (pgm) => {
  pgm.createTable("Cards", {
    card_id: "id",
    cardColor: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    cardNumber: {
      type: "INTEGER",
      notNull: true,
    },
    cardSpecial: {
      type: "INTEGER",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("Cards");
};
