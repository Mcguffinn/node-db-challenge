exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (projects) => {
      projects.increments();
      projects.string("project_name").notNullable().unique();
      projects.boolean("completed").defaultTo(false);
    })

    .createTable("tasks", (tasks) => {
      tasks.increments();
      tasks.string("task").notNullable();
      tasks.string("task_discription").notNullable();
      tasks.string("notes");
      tasks
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tasks.boolean("completed").defaultTo(false);
    })

    .createTable("resources", (resources) => {
      resources.increments();
      resources.string("resource").notNullable();
      resources.string("resource_description");
    })

    .createTable("projectResources", (pr) => {
      pr.increments();
      pr.integer("project_Id")
        .notNullable()
        .references("id")
        .inTable("projects");
      pr.integer("resource_Id")
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projectResources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
