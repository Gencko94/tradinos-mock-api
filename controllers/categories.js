const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
// GET
const getCategories = (req, res) => {
  const categories = db.get("categories");

  res.jsonp({
    categories,
  });
};
module.exports = {
  getCategories,
};
