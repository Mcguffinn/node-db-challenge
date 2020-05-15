//dependencies
const express = require("express");
const morgan = require("morgan");

const projectRouter = require("./actions/project-router.js");

const server = express();

//middleware
server.use(logger);
server.use(morgan("dev"));
server.use(express.json());

//routing
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.send("<h2> Server running... <h2>");
});

//terminal logger
function logger(req, res, next) {
  console.log(`${req.method} Request to ${req.originalUrl}`);

  next();
}
