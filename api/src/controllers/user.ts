import { findOrCreateUser, updateUser } from "./services/user";
const asyncHandler = require("express-async-handler");

exports.getUserByUuid = asyncHandler(async (req: any, res: any, next: any) => {
  const { uuid } = req.params;
  console.log("uuid", uuid)
  const user = await findOrCreateUser(uuid);

  res.status(201).json({ user });
});

exports.updateUser = asyncHandler(async (req: any, res: any, next: any) => {
  const { userId } = req.params;
  const data = req.body;

  const user = await updateUser(userId, data);

  res.status(200).json({ user });
});