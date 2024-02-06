import express from "express";
import path from "path";
import env from "./src/util/validateEnv";
import app from "./src/app";
import db from "./db/conn";

(async () => {
  const port = env.PORT;
  app.use(express.json());
  // get driver connection

  try {
    app.listen(port, () => {
      //connect to db
      db.on("error", console.error.bind(console, "connection error:"));
      db.on("connected", function () {
        console.log("Connected to MongoDB");
      });
      console.log(`Server started at http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Server started");
  }
})();
