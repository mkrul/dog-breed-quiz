import express, { Request, Response } from "express";
const router = express.Router();

const userController = require("../controllers/user");

// GET /user/:uuid
// router.post("/", userController.getUser);
// router.get("/api/user", userController.getUser);
// router.put("/api/user/:userId", express.json(), userController.updateUser);

export { router };
