import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { Provider as ReduxProvider } from "react-redux";
import ReactDOMServer from "react-dom/server";
import App from "../client/src/App"; // Adjust the path as needed
import { store } from "../client/src/redux/store"; // Adjust the path as needed
import env from "./src/util/validateEnv";
import db from "./db/conn";
import apiApp from "./src/app"; // Adjust the path as needed

const server = express();
const PORT = process.env.PORT || 3000;

// Serve static files
server.use(express.static(path.resolve(__dirname, "..", "client", "build")));

// Use the existing API routes and middleware
server.use(apiApp);

// Server-side rendering
server.get("*", (req, res) => {
  const context = {};
  const appHTML = ReactDOMServer.renderToString(
    <ReduxProvider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );

  const indexFile = path.resolve(
    __dirname,
    "..",
    "client",
    "build",
    "index.html"
  );
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`)
    );
  });
});

(async () => {
  const port = env.PORT || 3000;

  try {
    server.listen(port, () => {
      db.on("error", console.error.bind(console, "connection error:"));
      db.on("connected", function () {
        console.log("Connected to MongoDB");
      });
      console.log(`Server started at ${env.DOMAIN_URL}:${port}`);
    });
  } catch (err) {
    const error = new Error("Request failed");
    console.log(err);
    throw error;
  } finally {
    console.log("Server started");
  }
})();
