import express, { Request, Response } from "express";
const router = express.Router();

const dogsController = require("../controllers/dogs");

router.get("/api/dogs", dogsController.getDogs);

export { router };
