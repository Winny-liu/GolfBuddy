"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//importing the routers
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");

const PORT = 8000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //using routers as middleware
  .use(postsRouter)
  .use(usersRouter)

  // REST endpoints?

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
