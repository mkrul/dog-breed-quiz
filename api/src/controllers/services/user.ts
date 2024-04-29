import User, { UserType } from "../../models/user";

export async function createUser(username: string): Promise<UserType> {
  // Create a new user in the database
  const user = new User({ username });
  await user.save();

  return user;
}

export async function findOrCreateUser(uuid: string): Promise<UserType> {
  // Try to find the user in the database
  let user = await User.findOne({ uuid });

  // If user doesn't exist, create a new user
  if (!user) {
    user = new User({ uuid });
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