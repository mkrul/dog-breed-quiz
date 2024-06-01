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

app.use(express.static(path.resolve('client/build')))

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(TestRoutes.router);
app.use(UserRoutes.router);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const origin = process.env.NODE_ENV === 'production' ? 'https://ban-this-breed-b3bc9b835a36.herokuapp.com' : 'http://localhost:3000';
const corsOptions = {
  origin,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'self'; style-src 'self'");
  next();
})

export default app;