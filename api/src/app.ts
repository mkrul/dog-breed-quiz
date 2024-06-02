import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import * as AboutRoutes from "./routes/about";
import * as ResultsRoutes from "./routes/results";
import * as TestRoutes from "./routes/test";
import * as UserRoutes from "./routes/user";
import * as DogsRoutes from "./routes/dogs";
import cors from "cors";

const app = express();

// const origin = process.env.NODE_ENV === 'production' ? 'https://ban-this-breed-b3bc9b835a36.herokuapp.com' : 'http://localhost:3000';

app.use(cors());

app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(UserRoutes.router);

// app.use(express.static(path.resolve('client/build')))
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

export default app;