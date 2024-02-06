import express, { Request, Response } from "express";
const router = express.Router();

const testController = require("../controllers/test");

// GET /results

router.get("/test", testController.startTest);

export { router };
