const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const createError = require("http-errors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config;

const gameRoutes = require("./routes/static/game.js");
const homeRoutes = require("./routes/static/home.js");
const lobbyRoutes = require("./routes/static/lobby.js");
const signUpRoutes = require("./routes/static/sign-up.js");
const testRoute = require("./routes/testing/index.js");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  const livereload = require("livereload");
  const connectLiveReload = require("connect-livereload");

  const livereloadServer = livereload.createServer();
  livereloadServer.watch(path.join(".", "backend", "static"));
  livereloadServer.server.once("connection", () => {
    setTimeout(() => {
      livereloadServer.refresh("/");
    }, 100);
  });
  app.use(connectLiveReload());
}
app.set("views", path.join(".", "backend", "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(".", "backend", "static")));

const rootRoutes = require("../backend/routes/root.js");
const requestTime = require("../backend/middleware/request-time.js");

app.use(requestTime);
app.use("/", homeRoutes);
app.use("/testing", testRoute);
app.use("/games", gameRoutes);
app.use("/lobby", lobbyRoutes);
app.use("/sign-up", signUpRoutes);

const server = http.createServer(app);
const io = new Server(server);

//io.engine.use(Session information will go in here)

io.on("connection", (socket) => {
  console.log("Connection");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use((req, res, next) => {
  next(createError(404));
});
