import "dotenv/config";
import express from "express";
import path from "path";
// import * as AboutRoutes from "./routes/about";
import * as ResultsRoutes from "./routes/results";
import * as UserRoutes from "./routes/user";
import * as DogsRoutes from "./routes/dogs";
import cors from "cors";

const app = express();

app.use(cors());

// app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(UserRoutes.router);

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

export default app;