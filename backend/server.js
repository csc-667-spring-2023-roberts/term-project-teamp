const path = require("path");
const createError = require("http-errors");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

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
