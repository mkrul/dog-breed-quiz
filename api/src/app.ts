import "dotenv/config";
import express from "express";
import * as AboutRoutes from "./routes/about";
import * as ResultsRoutes from "./routes/results";
import * as TestRoutes from "./routes/test";
import * as UserRoutes from "./routes/user";
import User from "./models/user";

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  const uuid = localStorage.getItem("btb_uuid") || "";
  console.log("uuid", uuid)
  try {
    // Check if user exists in database
    let user = await User.findOne({ uuid });

    // If user doesn't exist, create a new user
    if (!user) {
      localStorage.setItem("btb_uuid", uuid);
      user = await User.create({ uuid });
    }

    // Send user data back to client
    res.json(user);
  } catch (error) {
    console.error('Error handling homepage request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/user', UserRoutes.router);

app.use(AboutRoutes.router);
app.use(ResultsRoutes.router);
app.use(TestRoutes.router);
app.use(UserRoutes.router);

export default app;