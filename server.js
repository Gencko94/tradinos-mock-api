const jsonServer = require("json-server");
const {
  getTasks,
  createTask,
  toggleTaskStatus,
} = require("./controllers/tasks");
const { getCategories } = require("./controllers/categories");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
//define port
const PORT = process.env.PORT || 4000;
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
server.post("/tasks-update", toggleTaskStatus);
server.get("/tasks", getTasks);
server.post("/tasks", createTask);
server.get("/categories", getCategories);
server.listen(PORT, () => {
  console.log("JSON Server is running");
});
