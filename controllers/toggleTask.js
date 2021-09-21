const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
const activateTask = (req, res) => {
  const { id, isDone } = req.body;

  const task = db.get("tasks").find({ id }).assign({ isDone }).write();

  res.status(200).jsonp({
    id,
    isDone: task.isDone,
  });
};
module.exports = {
  activateTask,
};
