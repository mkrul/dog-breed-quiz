import express from "express";
import path from "path";
import env from "./src/util/validateEnv";
import app from "./src/app";
import db from "./db/conn";
import { router as userRouter } from "./src/routes/user";
import bodyParser from "body-parser";

(async () => {
  const port = env.PORT;
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/user', userRouter);
  app.post('/api/test', (req, res) => {
    res.json({ message: 'Hello from server!' });
  });

  try {
    app.listen(port, () => {
      db.on("error", console.error.bind(console, "connection error:"));
      db.on("connected", function () {
        console.log("Connected to MongoDB");
      });
      console.log(`Server started at http://localhost:${port}`);
    });
  } catch (err) {
    const error = new Error("Request failed");
    console.log(err);
    throw error;
  } finally {
    console.log("Server started");
  }
})();
