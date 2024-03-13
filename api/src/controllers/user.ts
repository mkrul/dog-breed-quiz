import { findOrCreateUser, updateUser } from "./services/user";
const asyncHandler = require("express-async-handler");

exports.getUser = asyncHandler(async (req: any, res: any, next: any) => {
  const ipAddress: string = req.ip;
  const user = await findOrCreateUser(ipAddress);

  res.status(201).json({ user });
});

exports.updateUser = asyncHandler(async (req: any, res: any, next: any) => {
  const { userId } = req.params;
  const data = req.body;

  const user = await updateUser(userId, data);

  res.status(200).json({ user });
});