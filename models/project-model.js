const db = require("../db-config");

module.exports = {
  findProject,
  findResources,
  findTask,
  add,
  addTask,
  addResource,
};

// const dbName = "todoList";

function findById(id) {
  return db("projects").where({ id }).first();
}

function findProject() {
  return db("projects");
}

function findResources() {
  return db("resources");
}

function findTask() {
  return db("tasks");
}

function add(action) {
  return db("projects")
    .insert(action, "id")
    .then((ids) => {
      return findById(ids).first();
    });
}

function addTask(action) {
  return db("tasks")
    .insert(action, "id")
    .then((ids) => {
      return ids[0];
    });
}

function addResource(action) {
  return db("resources")
    .insert(action, "id")
    .then((ids) => {
      return ids[0];
    });
}
