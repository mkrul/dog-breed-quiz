import { findOrCreateUserByIpAddress } from "./services/user";
const asyncHandler = require("express-async-handler");

exports.startTest = asyncHandler(async (req: any, res: any, next: any) => {
  const ipAddress: string = req.ip;
  const user = await findOrCreateUserByIpAddress(ipAddress);

  res.status(200).json({ user });
});
