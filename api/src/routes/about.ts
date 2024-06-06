import express, { Request, Response } from "express";

const app = express();

const router = express.Router();

// GET /about
router.get("/about", (req: Request, res: Response) => {
  return app.render("/about");
});

export { router };
