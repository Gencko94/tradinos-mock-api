const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
const { nanoid } = require("nanoid");
// GET
const getTasks = (req, res) => {
  const tasks = db.get("tasks");

  res.jsonp({
    tasks,
  });
};

const createTask = (req, res) => {
  // Categories are by ID here
  const {
    title,
    description,
    deadline,
    created_at,
    categories,
    subtasks,
    isDone,
  } = req.body;
  const products = db.get("tasks");
  const newId = nanoId(3);
  products
    .push({
      id: newId,
      title,
      description,
      deadline,
      created_at,
      categories,
      subtasks,
      isDone,
    })
    .write();
  const newTask = db.get("tasks").find({ id: newId }).value();
  res.status(201).jsonp({
    newTask,
  });
};

module.exports = {
  getTasks,
  createTask,
};
