const db = require("../db-config");

module.exports = {
  findProject,
  findResources,
  findTask,
  addProject,
  addResources,
  addTask,
};

function findProject() {
  return db("projects");
}

function findResources() {
  return db("resources");
}

function findTask() {
  return db("tasks");
}
