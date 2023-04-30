const path = require("path");
const createError = require("http-errors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const express = require("express");

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
  livereloadServer.watch(path.join(__dirname, "backend", "static"));
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
app.use("/", rootRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use((req, res, next) => {
  next(createError(404));
});
