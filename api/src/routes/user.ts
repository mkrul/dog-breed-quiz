import express, { Request, Response } from "express";
const router = express.Router();

const userController = require("../controllers/user");

// GET /user/:uuid
router.post("/api/user", userController.createUserData);
router.get("/api/users", userController.getUserData);

export { router };
