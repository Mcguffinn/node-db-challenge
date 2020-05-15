//dependencies
const express = require("express");
const morgan = require("morgan");

const projectRouter = require("./actions/project-router.js");

const server = express();

//middleware
server.use(morgan("dev"));
server.use(express.json());

//routing
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.send("<h2> Server running... <h2>");
});

//terminal logger
server.use((err, req, res, next) => {
  console.log(`${req.method} Request to ${req.originalUrl}`);
  console.log(err);
  res.status(500).json(err);
  next();
});

module.exports = server;
