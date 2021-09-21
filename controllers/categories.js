const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
// GET
const getCategories = (req, res) => {
  const tasks = db.get("categories");

  res.jsonp({
    tasks,
  });
};
module.exports = {
  getCategories,
};
