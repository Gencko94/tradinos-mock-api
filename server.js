const jsonServer = require("json-server");
const { getTasks, createTask } = require("./controllers/tasks");
const { getCategories } = require("./controllers/categories");
const { activateTask } = require("./controllers/toggleTask");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
//define port
const PORT = process.env.PORT || 4000;
server.use(middlewares);
// server.use(cors());

server.use(jsonServer.bodyParser);
server.patch("/activate-task", activateTask);

server.get("/tasks", getTasks);
server.post("/tasks", createTask);
server.get("/categories", getCategories);

server.use(router);

server.listen(PORT, () => {
  console.log("JSON Server is running");
});
