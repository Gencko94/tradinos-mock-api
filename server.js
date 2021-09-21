const jsonServer = require("json-server");
const { getTasks, createTask } = require("./controllers/tasks");
const { getCategories } = require("./controllers/categories");
const { activateTask } = require("./controllers/toggleTask");
const morgan = require("morgan");
const server = jsonServer.create();
jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
//define port
const PORT = process.env.PORT || 4000;

server.use(middlewares);
// server.use(cors());
server.use(morgan("tiny"));
// server.use(router);
server.use(jsonServer.bodyParser);

server.patch("/tasks", activateTask);
server.get("/tasks", getTasks);
server.post("/tasks", createTask);
server.get("/categories", getCategories);

server.listen(PORT, () => {
  console.log("JSON Server is running", PORT);
});
