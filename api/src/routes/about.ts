import express, { Request, Response } from "express";

const router = express.Router();

// GET /about
router.get("/about", (req: Request, res: Response) => {
  res.send("About page");
});

export { router };
