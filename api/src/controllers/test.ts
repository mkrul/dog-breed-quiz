import User, { UserType } from "../models/user";
const asyncHandler = require("express-async-handler");

exports.startTest = asyncHandler(async (req: any, res: any, next: any) => {
  const ipAddress: string = req.ip;

  const user = await getUser(ipAddress);
  if (user) {
    return res.send("User already exists with IP: " + ipAddress);
  }

  const newUser = new User({
    ipAddress: ipAddress,
    createdAt: new Date(),
  });

  await newUser.save();
});

async function getUser(ipAddress: string): Promise<UserType | null> {
  const user = await User.findOne({ ipAddress: ipAddress }).exec();

  return user;
}
