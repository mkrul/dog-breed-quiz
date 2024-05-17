import User, { UserType } from "../models/user";
import breakdown, { BreakdownType } from "../models/breakdown";

export async function saveUserData(data: UserType): Promise<UserType> {
  const user = new User(data);
  await user.save();

  return user;
}

export async function fetchUsers(): Promise<BreakdownType> {
  const proUsers = await User.find({ alignment: "pro" });
  const moderateUsers = await User.find({ alignment: "neutral" });
  const antiUsers = await User.find({ alignment: "anti" });

  // get average accuracy for each alignment
  const proAccuracy = proUsers.reduce((acc, user) => acc + user.accuracy, 0) / proUsers.length;
  const moderateAccuracy = moderateUsers.reduce((acc, user) => acc + user.accuracy, 0) / moderateUsers.length;
  const antiAccuracy = antiUsers.reduce((acc, user) => acc + user.accuracy, 0) / antiUsers.length;

  const proCount = proUsers.length;
  const moderateCount = moderateUsers.length;
  const antiCount = antiUsers.length;

  // get count of "pro" alignment users who selected "apbt" as the only breed
  const proApbtCount = proUsers.filter((user) => user.breeds.length === 1 && user.breeds[0].label === "apbt").length;
  // get average accuracy of "pro" alignment users who selected "apbt" as the only breed
  const proApbtAccuracy = proUsers
    .filter((user) => user.breeds.length === 1 && user.breeds[0].label === "apbt")
    .reduce((acc, user) => acc + user.accuracy, 0) / proApbtCount;
  // get count of "pro" alignment users who selected multiple breeds
  const proMultiCount = proUsers.filter((user) => user.breeds.length > 1).length;
  // get average accuracy of "pro" alignment users who selected multiple breeds
  const proMultiAccuracy = proUsers
    .filter((user) => user.breeds.length > 1)
    .reduce((acc, user) => acc + user.accuracy, 0) / proMultiCount;

  // get count of "neutral" alignment users who selected "apbt" as the only breed
  const moderateApbtCount = moderateUsers.filter((user) => user.breeds.length === 1 && user.breeds[0].label === "apbt").length;
  // get average accuracy of "neutral" alignment users who selected "apbt" as the only breed
  const moderateApbtAccuracy = moderateUsers
    .filter((user) => user.breeds.length === 1 && user.breeds[0].label === "apbt")
    .reduce((acc, user) => acc + user.accuracy, 0) / moderateApbtCount;
  // get count of "neutral" alignment users who selected multiple breeds
  const moderateMultiCount = moderateUsers.filter((user) => user.breeds.length > 1).length;
  // get average accuracy of "neutral" alignment users who selected multiple breeds
  const moderateMultiAccuracy = moderateUsers
    .filter((user) => user.breeds.length > 1)
    .reduce((acc, user) => acc + user.accuracy, 0) / moderateMultiCount;

  // get count of "anti" alignment users who selected "apbt" as the only breed
  const antiApbtCount = antiUsers.filter((user) => user.breeds.length === 1 && user.breeds[0].label === "apbt").length;
  // get average accuracy of "anti" alignment users who selected "apbt" as the only breed
  const antiApbtAccuracy = antiUsers
    .filter((user) => user.breeds.length === 1 && user.breeds[0].label === "apbt")
    .reduce((acc, user) => acc + user.accuracy, 0) / antiApbtCount;
  // get count of "anti" alignment users who selected multiple breeds
  const antiMultiCount = antiUsers.filter((user) => user.breeds.length > 1).length;
  // get average accuracy of "anti" alignment users who selected multiple breeds
  const antiMultiAccuracy = antiUsers
    .filter((user) => user.breeds.length > 1)
    .reduce((acc, user) => acc + user.accuracy, 0) / antiMultiCount;

  const topUsers = await User.find().sort({ accuracy: -1 }).limit(5);

  return {
    proAccuracy,
    moderateAccuracy,
    antiAccuracy,
    proCount,
    moderateCount,
    antiCount,
    proApbtCount,
    proApbtAccuracy,
    proMultiCount,
    proMultiAccuracy,
    moderateApbtCount,
    moderateApbtAccuracy,
    moderateMultiCount,
    moderateMultiAccuracy,
    antiApbtCount,
    antiApbtAccuracy,
    antiMultiCount,
    antiMultiAccuracy,
    topUsers
  } as BreakdownType;
}