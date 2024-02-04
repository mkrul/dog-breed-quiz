import express, { Request, Response } from "express";

const router = express.Router();

// GET /results

router.get("/test", (req: Request, res: Response) => {
  res.send("Test page");
});

export { router };
