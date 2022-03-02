"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const clothesRouter = require("./routes/clothes.js");
const foodRouter = require("./routes/food.js");
const handlerNotfound = require("./error-handlers/404.js");
const handlerServer = require("./error-handlers/500.js");
const handlerLogger = require("./middleware/logger.js");


app.use(express.json());
app.use(cors());
app.use(clothesRouter);
app.use(foodRouter);
app.use(handlerLogger);

function start(port) {
  app.listen(port, () => {
    console.log(`listening to port ${port}`);
  });
}

app.get("/", (req, res) => {
  res.send("server is on");
});

app.use("*",handlerNotfound);
app.use(handlerServer);

module.exports = {
  app: app,
  start: start,
};
