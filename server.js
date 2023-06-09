const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const createError = require("http-errors");
const morgan = require("morgan");

require("dotenv").config();
const initSockets = require("./backend/sockets/init.js");
const app = express();

const db = require("./backend/db/connection.js");

const oneDay = 1000 * 60 * 60 * 24;



const sessionMiddleware = session({
  store: new pgSession({
    pgPromise: db,
  }),
  secret: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: oneDay },
  createTableIfMissing: true,
});
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "backend", "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "backend", "static")));

const PORT = process.env.PORT || 3000;
app.use(sessionMiddleware);

const routes = require("./backend/routes/route");
app.use("/", routes);

const server = initSockets(app, sessionMiddleware);
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use((request, response, next) => {
  next(createError(404));
});

if (process.env.NODE_ENV === "development") {
  const livereload = require("livereload");
  const connectLiveReload = require("connect-livereload");

  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, "backend", "static"));
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLiveReload());
}

