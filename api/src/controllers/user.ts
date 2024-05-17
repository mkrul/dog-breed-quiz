import { saveUserData, fetchUsers } from "../services/user";

const asyncHandler = require("express-async-handler");

exports.createUserData = asyncHandler(async (req: any, res: any, next: any) => {
  const { data } = req.body;

  await saveUserData(data);

  res.status(201);
});

exports.getUserData = asyncHandler(async (req: any, res: any, next: any) => {
  const data = await fetchUsers();

  res.status(200).json({ data });
});