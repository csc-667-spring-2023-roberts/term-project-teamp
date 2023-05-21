/* eslint-disable camelcase */

/**
 *@param {import("node-pg-migrate/dist/types").MigrationBuilder} pgm
 */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(
    `INSERT INTO "Cards" (card_id, "cardColor","cardNumber","cardSpecial") VALUES (1, 'red', 0, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (2,'green', 0, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (3,'blue', 0, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (4,'yellow', 0, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (5,'red', 1, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (6,'red', 1, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (7,'green', 1, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (8,'green', 1, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (9,'blue', 1, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (10,'blue', 1, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (11,'yellow', 1, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (12,'yellow', 1, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (13,'red', 2, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (14,'red', 2, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (15,'green', 2, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (16,'green', 2, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (17,'blue', 2, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (18,'blue', 2, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (19,'yellow', 2, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (20,'yellow', 2, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (21,'red', 3, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (22,'red', 3, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (23,'green', 3, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (24,'green', 3, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (25,'blue', 3, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (26,'blue', 3, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (27,'yellow', 3, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (28,'yellow', 3, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (29,'red', 4, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (30,'red', 4, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (31,'green', 4, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (32,'green', 4, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (33,'blue', 4, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (34,'blue', 4, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (35,'yellow', 4, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (36,'yellow', 4, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (37,'red', 5, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (38,'red', 5, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (39,'green', 5, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (40,'green', 5, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (41,'blue', 5, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (42,'blue', 5, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (43,'yellow', 5, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (44,'yellow', 5, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (45,'red', 6, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (46,'red', 6, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (47,'green', 6, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (48,'green', 6, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (49,'blue', 6, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (50,'blue', 6, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (51,'yellow', 6, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (52,'yellow', 6, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (53,'red', 7, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (54,'red', 7, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (55,'green', 7, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (56,'green', 7, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (57,'blue', 7, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (58,'blue', 7, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (59,'yellow', 7, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (60,'yellow', 7, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (61,'red', 8, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (62,'red', 8, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (63,'green', 8, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (64,'green', 8, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (65,'blue', 8, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (66,'blue', 8, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (67,'yellow', 8, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (68,'yellow', 8, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (69,'red', 9, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (70,'red', 9, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (71,'green', 9, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (72,'green', 9, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (73,'blue', 9, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (74,'blue', 9, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (75,'yellow', 9, 0);`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardNumber","cardSpecial") VALUES (76,'yellow', 9, 0);`
  );

  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (77,'red'  , 1, 'skip');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial","cardName") VALUES (78,'red'  , 1, 'skip');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial","cardName") VALUES (79,'green',  1, 'skip');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial","cardName") VALUES (80,'green', 1, 'skip');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (81,'blue' , 1, 'skip');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (82,'blue' , 1, 'skip');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (83,'yellow',1, 'skip');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (84,'yellow', 1, 'skip');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (85,'red',1, 'reverse');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (86,'red',1, 'reverse');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (87,'green',  1, 'reverse');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (88,'green'  ,1, 'reverse');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (89,'blue',  1, 'reverse');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (90,'blue',1, 'reverse');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (91,'yellow',1, 'reverse');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (92,'yellow',  1, 'reverse');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (93,'red' , 1, '+2');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (94,'red',1, '+2');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (95,'green', 1, '+2');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (96,'green',1, '+2');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (97,  'blue' ,1, '+2');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (98,  'blue',1, '+2');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (99,  'yellow',1, '+2');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (100, 'yellow ',1, '+2');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (101, 'multicolor',1,'+4-wild');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (102,'multicolor', 1,'+4-wild');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (103,'multicolor', 1,'+4-wild');`
  );
  pgm.sql(
    `INSERT INTO "Cards" (card_id,"cardColor","cardSpecial", "cardName") VALUES (104,'multicolor',1,'+4-wild');`
  );
};

exports.down = (pgm) => {};
