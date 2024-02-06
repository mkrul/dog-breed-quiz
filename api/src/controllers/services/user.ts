import User, { UserType } from "../../models/user";

export async function findOrCreateUserByIpAddress(ipAddress: string): Promise<UserType> {
  // Try to find the user in the database by ipAddress
  let user = await User.findOne({ ipAddress });

  // If user doesn't exist, create a new user
  if (!user) {
    user = new User({ ipAddress });
    await user.save();
  }

  return user;
}
