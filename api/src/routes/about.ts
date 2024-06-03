import express, { Request, Response } from "express";

const router = express.Router();

// GET /about
router.get("/about", (req: Request, res: Response) => {
  res.redirect(301, '/about');
});

export { router };
