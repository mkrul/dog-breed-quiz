import "dotenv/config";
import express from "express";
import path from "path";
import * as AboutRoutes from "./routes/about";
import * as ResultsRoutes from "./routes/results";
import * as TestRoutes from "./routes/test";
import * as UserRoutes from "./routes/user";
import * as DogsRoutes from "./routes/dogs";
import cors from "cors";

const app = express();

app.use(cors());

// Register API routes before the static files middleware
app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(UserRoutes.router);

// Serve static files from the React app build directory
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // This route configuration must come after all other API and middleware routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

export default app;