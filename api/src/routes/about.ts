import express, { Request, Response } from "express";
import path from "path";

const router = express.Router();

// GET /about
router.get("/about", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

export { router };
