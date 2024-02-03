import express, { Request, Response } from "express";

const router = express.Router();

// GET /results
router.get("/results", (req: Request, res: Response) => {
  res.send("Results page");
});

export { router };
