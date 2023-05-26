const express = require("express");
const querystring = require("querystring");
const bcrypt = require("bcrypt");
const Users = require("../db/users.js");
const {
  getRoomByName,
  getRoomChatByName,
  getPlayerByRoomAndName,
  getCurrentPlayerByRoom,
} = require("../room.js");
const SALT_ROUNDS = 10;

const { getCards, shuffle } = require("../deck.js");

const router = express.Router();

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    console.log("Session is valid");
    next();
  } else next("route");
}

// a middleware function with no mount path. This code is executed for every request to the router
router.use((request, response, next) => {
  console.log("Time:", Date.now());
  response.header(
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate"
  );
  response.header("Expires", "-1");
  response.header("Pragma", "no-cache");
  if (!request.session.user) {
    console.log("session timeout");
  }
  next();
});

router.get("/", isAuthenticated, (request, response) => {
  console.log(rooms);
  response.render("home", {
    title: "Welcome to Uno!",
    user: request.session.user,
    openrooms: rooms,
    login: true,
  });
});
router.get("/login", (_request, response) => {
  response.render("login", { title: "Uno Game (Login)" });
});

router.get("/signUp", (_request, response) => {
  response.render("signUp", { title: "Uno Game (signUp)" });
});

router.post("/signup", async (request, response) => {
  const { username, email, password } = request.body;

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);

  try {
    const { id } = await Users.create(username, email, hash);
    request.session.user = {
      id,
      username,
      email,
    };

    response.redirect("/");
  } catch (error) {
    console.log({ error });
    response.render("signUp", {
      title: "Jrob's Term Project",
      username,
      email,
    });
  }
});

router.get("/createGame", (_request, response) => {
  response.render("createGame", { title: "Create Game" });
});

router.get("/joingame", (request, response) => {
  console.log("----joingame----");
  let error = request.query.error;
  if (error === null) {
    error = "";
  }
  response.render("joinGame", {
    title: "Join Game",
    room: request.query.room,
    error: error,
  });
});

router.post("/joingame", (request, response) => {
  console.log("----POST joingame----");
  console.log(request.body);
  let room = getRoomByName(request.body.room);
  console.log(room);
  if (room != null) {
    if (room.password !== request.body.password) {
      response.redirect(
        "/joingame?room=" + request.body.room + "&error=password"
      );
    } else {
      room.players.push({
        name: request.session.user,
        hands: [],
      });
      const query = querystring.stringify({ room: request.body.room });
      console.log(query);
      response.redirect("/waitingroom?" + query);
    }
  } else {
    response.redirect("/joingame?room=" + request.body.room + "&error=room");
  }
});

router.get("/", function (_request, response) {
  console.log(rooms);
  response.render("landing", {
    openrooms: rooms,
  });
});

// router.post(
//   "/login",
//   express.urlencoded({ extended: false }),
//   function (request, response, next) {
//     request.session.regenerate(function (err) {
//       if (err) next(err);

//       // store user information in session, typically a user id
//       request.session.user = request.body.user;

//       // save the session before redirection to ensure page
//       // load does not happen before session is saved
//       request.session.save(function (err) {
//         if (err) return next(err);
//         response.redirect("/");
//       });
//     });
//   }
// );

router.post("/login", async (request, response) => {
  console.log("inside login========================>");
  // const { user, password } = request.body;
  console.log(request.body.user);
  try {
    const { id, username, email, password } = await Users.findByUsername(
      request.body.user
    );
    console.log(username, email, password.trim(), request.body.password);
    const isValidUser = await bcrypt.compare(
      request.body.password,
      password.trim()
    );
    console.log(isValidUser);
    if (isValidUser) {
      request.session.user = {
        id,
        username,
        email,
      };
      console.log(isValidUser);
      request.session.regenerate(function (err) {
        if (err) next(err);

        // store user information in session, typically a user id
        request.session.user = request.body.user;

        // save the session before redirection to ensure page
        // load does not happen before session is saved
        request.session.save(function (err) {
          if (err) return next(err);
          response.redirect("/");
        });
      });
    } else {
      //throw "Credentials invalid";
      response.render("login", { error: false });
    }
  } catch (error) {
    console.log({ error });
    response.render("login", { error: false });
  }
});

// Logout page
router.get("/logout", (request, response) => {
  response.header(
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate"
  );
  response.header("Expires", "-1");
  response.header("Pragma", "no-cache");
  request.session.destroy();
  // response.render("logout", {
  //   title: "Logout",
  //   message: "Your are logged out",
  // });
  response.redirect("/");
});

// new game
router.post("/newgame", isAuthenticated, (request, response) => {
  console.log("--- newgame ----");
  rooms.push({
    name: request.body.roomname,
    password: request.body.password,
    host: request.session.user,
    players: [{ name: request.session.user, hands: [] }],
    currentplayer: 0,
    discardcard: {},
    reverse: false,
    status: "Waiting",
    discardPile: [],
  });
  roomchats.push({
    name: request.body.roomname,
    chats: [],
  });
  console.log(rooms);

  const query = querystring.stringify({ room: request.body.roomname });

  response.redirect("/waitingroom?" + query);
});
router.post("/newgame", (request, response) => {
  response.redirect("/");
});

router.get("/waitingroom", isAuthenticated, (request, response) => {
  console.log("----waitingroom----");
  let room = getRoomByName(request.query.room);
  //console.log(result)
  let roomchat = getRoomChatByName(request.query.room);
  //console.log(roomchat)

  let me = getPlayerByRoomAndName(request.query.room, request.session.user);
  if (me === undefined) {
    response.redirect("/");
  } else {
    let chats = [];

    if (roomchat !== undefined) {
      chats = roomchat.chats;
    }
    response.render("waitingroom", {
      roomname: room.name,
      host: room.host,
      players: room.players,
      chats: chats,
      ishost: room.host === me.name,
    });
  }
});
router.get("/waitingroom", (request, response) => {
  response.redirect("/");
});

router.get("/startgame", isAuthenticated, (request, response) => {
  console.log("----startgame----");

  let room = getRoomByName(request.query.room);
  room.status = "In Progress";
  let c = getCards().map((x) => x);
  c = shuffle(c);
  room.deck = c;

  let x = room.players.length * 7;
  for (let i = 0; i < room.players.length; i++) {
    const hands = c.slice(0, 7);
    room.players[i].hands = hands;
    room.deck.splice(0, 7);
  }

  while (true) {
    console.log("--- re-shuffle");
    c = shuffle(room.deck);
    room.deck = c;
    console.log(room.deck[0].type);
    if (room.deck[0].type !== "wild" && room.deck[0].type !== "wild4") break;
  }
  let firstdiscard = room.deck[0];
  room.deck.splice(0, 1);
  room.discardcard = firstdiscard;
  room.discardPile.push(firstdiscard);

  const io = request.app.get("io");
  let message = JSON.stringify({ room: request.query.room });
  io.in(request.query.room).emit("startgame", message);

  const query = querystring.stringify(request.query);
  console.log(query);
  response.redirect("/game?" + query);
});

router.get("/game", isAuthenticated, (request, response) => {
  console.log("----game----");

  let result = getRoomByName(request.query.room);

  player = getPlayerByRoomAndName(request.query.room, request.session.user);

  let roomchat = getRoomChatByName(request.query.room);

  let chats = [];

  let curplayer = getCurrentPlayerByRoom(request.query.room);

  if (roomchat !== undefined) {
    chats = roomchat.chats;
  }
  player && player.name ? console.log(player.name) : "";
  player && player.name && curplayer && curplayer.name
    ? console.log(curplayer.name === player.name)
    : "";
  response.render("game", {
    roomname: result.name,
    host: result.host,
    players: result.players,
    me: player,
    chats: chats,
    firstdiscard: result.discardcard,
    cardsleft: result.deck.length,
    myturn: curplayer.name === player.name,
  });
});
router.get("/game", (request, response) => {
  response.redirect("/");
});

router.get("/youLost", (_request, response) => {
  response.render("youLost", { title: "Uno Game (Loosing Screen)" });
});
router.get("/youWin", (_request, response) => {
  response.render("youWin", { title: "Uno Game (Winning Screen)" });
});

router.post("/:id", (request, response) => {
  const io = request.app.get("io");

  const { message } = request.body;
  const sender = request.session.user.username;

  io.emit("chat-message", { message, sender });
});

module.exports = router;
