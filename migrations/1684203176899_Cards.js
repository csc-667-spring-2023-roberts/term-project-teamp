/**
 *@param {import("node-pg-migrate/dist/types").MigrationBuilder} pgm
 */

exports.up = (pgm) => {
  pgm.createTable("Cards", {
    card_id: {
      type: "id",
      notNull: true,
      autoIncrement: true,
    },
    cardColor: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    cardNumber: {
      type: "INTEGER",
    },
    cardSpecial: {
      type: "INTEGER",
      notNull: true,
    },
    cardName: {
      type: "VARCHAR(255)",
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("Cards");
};
