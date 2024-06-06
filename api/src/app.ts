import "dotenv/config";
import express from "express";
import path from "path";
import * as AboutRoutes from "./routes/about";
import * as ResultsRoutes from "./routes/results";
import * as UserRoutes from "./routes/user";
import * as DogsRoutes from "./routes/dogs";
import cors from "cors";
import crypto from "crypto";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(UserRoutes.router);

app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString("base64");
  res.setHeader(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'self' 'nonce-${res.locals.nonce}';`
  );
  next();
});

export default app;
