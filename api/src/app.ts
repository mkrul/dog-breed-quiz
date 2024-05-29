import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import * as AboutRoutes from "./routes/about";
import * as ResultsRoutes from "./routes/results";
import * as TestRoutes from "./routes/test";
import * as UserRoutes from "./routes/user";
import * as DogsRoutes from "./routes/dogs";

const cors = require("cors");

const app = express();

app.use(cors());
// app.use(express.static(__dirname + "/public"));
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  });
// }
// set content security policy to allow loading of scripts and css from same origin
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'self'; style-src 'self'");
  next();
})

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(TestRoutes.router);
app.use(UserRoutes.router);

export default app;