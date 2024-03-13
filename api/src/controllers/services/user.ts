import User, { UserType } from "../../models/user";

export async function findOrCreateUser(ipAddress: string): Promise<UserType> {
  // Try to find the user in the database
  let user = await User.findOne({ ipAddress });

  // If user doesn't exist, create a new user
  if (!user) {
    user = new User({ ipAddress });
    await user.save();
  }

  return user;
}

export async function updateUser(userId: string, data: any): Promise<UserType> {
  // Find the user in the database and update it

  // update user in mongo db]
  console.log('in services/user.ts, userId:', userId);
  console.log('in services/user.ts, data:', JSON.stringify(data));
  const user = await User.findByIdAndUpdate(userId, data, { new: true });

  return user as UserType;
}