import express, { Request, Response } from "express";
const router = express.Router();

const userController = require("../controllers/user");

// GET /user/:ipAddress
router.get("/user/:ipAddress", userController.getUser);

export { router };
