import express, { Request, Response } from "express";

const router = express.Router();

// GET /about
router.get("/about", (req: Request, res: Response) => {
  // direct to https://ban-this-breed-b3bc9b835a36.herokuapp.com/about
  res.redirect(301, "https://ban-this-breed-b3bc9b835a36.herokuapp.com/about");
});

export { router };
