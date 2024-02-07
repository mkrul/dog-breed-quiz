import "dotenv/config";
import express from "express";
import * as AboutRoutes from "./routes/about";
import * as ResultsRoutes from "./routes/results";
import * as TestRoutes from "./routes/test";
import * as UserRoutes from "./routes/user";

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/user', UserRoutes.router);

app.use(AboutRoutes.router);
app.use(ResultsRoutes.router);
app.use(TestRoutes.router);
app.use(UserRoutes.router);

export default app;