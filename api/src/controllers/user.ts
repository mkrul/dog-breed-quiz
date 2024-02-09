import { findOrCreateUserByIpAddress } from "./services/user";
const asyncHandler = require("express-async-handler");

exports.getUser = asyncHandler(async (req: any, res: any, next: any) => {
  const ipAddress: string = req.ip;
  const user = await findOrCreateUserByIpAddress(ipAddress);
  console.log("in user controller", user)

  res.status(200).json({ user });
});
