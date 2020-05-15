const db = require("../db-config");

module.exports = {
  findProject,
  findResources,
  findTask,
  add,
  //   addTask,
  //   addResource,
};

const dbName = "todoList";

function findById(id) {
  return db(dbName).where({ id }).first();
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

function add(project) {
  return db(dbName)
    .insert(project, "id")
    .then((ids) => {
      return ids[0];
    });
}

// function addTask(action) {
//   return db("tasks")
//     .insert(action, "id")
//     .then(([id]) => get(id));
// }

// function addResource(action) {
//   return db("tasks")
//     .insert(action, "id")
//     .then(([id]) => get(id));
// }
