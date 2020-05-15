const db = require("../db-config");

module.exports = {
  findProject,
  findResources,
  findTask,
  add,
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

function add(project) {
  return db("projects")
    .insert(project)
    .then((ids) => {
      return findById(ids[0]);
    });
}
