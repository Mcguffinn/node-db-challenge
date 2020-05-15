const express = require("express");
const router = express.Router();

const Projects = require("../models/project-model.js");

router.get("/", async (req, res, next) => {
  try {
    const project = await Projects.findProject(req.params.id);
    res.status(200).json({ project });
  } catch (err) {
    next(err);
  }
});

router.get("/resources", async (req, res, next) => {
  try {
    const proc = await Projects.findResources();
    res.status(200).json({ proc });
  } catch (err) {
    next(err);
  }
});

router.get("/tasks", async (req, res, next) => {
  try {
    const proc = await Projects.findTask();
    res.status(200).json({ proc });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const body = req.body;

  try {
    const project = await Projects.add(body, "projects");
    res.status(200).json({ project });
  } catch (err) {
    next(err);
  }
});

router.post("/resources", async (req, res, next) => {
  const resources = req.body;

  try {
    const proc = await Projects.addResource(resources);
    res.status(200).json({ proc });
  } catch (err) {
    next(err);
  }
});

router.post("/tasks", async (req, res, next) => {
  const tasks = req.body;

  try {
    const proc = await Projects.addTask(tasks);
    res.status(200).json({ proc });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
