import User from "../components/interfaces/user.interface";
const user: User = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.ip_address = asyncHandler(async (req: any, res: any, next: any) => {
  const ipAddress: string = getUserIp(req);
  console.log(ipAddress);
  res.send("Your IP address has been saved");
});
