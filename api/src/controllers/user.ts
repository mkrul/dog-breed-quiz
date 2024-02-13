import { findOrCreateUserByIpAddress, updateUser } from "./services/user";
const asyncHandler = require("express-async-handler");

exports.getUser = asyncHandler(async (req: any, res: any, next: any) => {
  const ipAddress: string = req.ip;
  const user = await findOrCreateUserByIpAddress(ipAddress);

  res.status(200).json({ user });
});

exports.updateUser = asyncHandler(async (req: any, res: any, next: any) => {
  console.log("in update user")
  console.log("req.params.ipAddress", req.params.ipAddress)
  console.log("req.body", req.body)
  console.log("params", req.params)
  const user = await updateUser(req.ip, req.body);

  res.status(200).json({ user });
});