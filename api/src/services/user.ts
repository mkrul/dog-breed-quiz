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

  // get average accuracy of all users
  const allUsers = await User.find();
  const allUsersAccuracy = allUsers.reduce((acc, user) => acc + user.accuracy, 0) / allUsers.length;

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

  const topUsers = allUsers.sort((a, b) => b.accuracy - a.accuracy).slice(0, 10);

  const proPercentage25 = proUsers.filter((user) => user.percentage <= 25).length / proUsers.length;
  const proPercentage50 = proUsers.filter((user) => user.percentage > 25 && user.percentage <= 50).length / proUsers.length;
  const proPercentage75 = proUsers.filter((user) => user.percentage > 50 && user.percentage <= 75).length / proUsers.length;
  const proPercentageGreaterThan75 = proUsers.filter((user) => user.percentage > 75).length / proUsers.length;

  const moderatePercentage25 = moderateUsers.filter((user) => user.percentage <= 25).length / moderateUsers.length;
  const moderatePercentage50 = moderateUsers.filter((user) => user.percentage > 25 && user.percentage <= 50).length / moderateUsers.length;
  const moderatePercentage75 = moderateUsers.filter((user) => user.percentage > 50 && user.percentage <= 75).length / moderateUsers.length;
  const moderatePercentageGreaterThan75 = moderateUsers.filter((user) => user.percentage > 75).length / moderateUsers.length;

  const antiPercentage25 = antiUsers.filter((user) => user.percentage <= 25).length / antiUsers.length;
  const antiPercentage50 = antiUsers.filter((user) => user.percentage > 25 && user.percentage <= 50).length / antiUsers.length;
  const antiPercentage75 = antiUsers.filter((user) => user.percentage > 50 && user.percentage <= 75).length / antiUsers.length;
  const antiPercentageGreaterThan75 = antiUsers.filter((user) => user.percentage > 75).length / antiUsers.length;

  // what percentage of "anti" alignment users selected "apbt" as a breed
  const antiApbt = antiUsers.filter((user) => user.breeds.some((breed) => breed.label === "apbt" && breed.selected === true)).length / antiUsers.length;
  // what percentage of "anti" alignment users selected "ast" as a breed
  const antiAst = antiUsers.filter((user) => user.breeds.some((breed) => breed.label === "ast" && breed.selected === true)).length / antiUsers.length;
  // what percentage of "anti" alignment users selected "sbt" as a breed
  const antiSbt = antiUsers.filter((user) => user.breeds.some((breed) => breed.label === "sbt" && breed.selected === true)).length / antiUsers.length;
  // what percentage of "anti" alignment users selected "ab" as a breed
  const antiAb = antiUsers.filter((user) => user.breeds.some((breed) => breed.label === "ab" && breed.selected === true)).length / antiUsers.length;

  // what percentage of "pro" alignment users selected "apbt" as a breed
  const proApbt = proUsers.filter((user) => user.breeds.some((breed) => breed.label === "apbt" && breed.selected === true)).length / proUsers.length;
  // what percentage of "pro" alignment users selected "ast" as a breed
  const proAst = proUsers.filter((user) => user.breeds.some((breed) => breed.label === "ast" && breed.selected === true)).length / proUsers.length;
  // what percentage of "pro" alignment users selected "sbt" as a breed
  const proSbt = proUsers.filter((user) => user.breeds.some((breed) => breed.label === "sbt" && breed.selected === true)).length / proUsers.length;
  // what percentage of "pro" alignment users selected "ab" as a breed
  const proAb = proUsers.filter((user) => user.breeds.some((breed) => breed.label === "ab" && breed.selected === true)).length / proUsers.length;

  // what percentage of "neutral" alignment users selected "apbt" as a breed
  const moderateApbt = moderateUsers.filter((user) => user.breeds.some((breed) => breed.label === "apbt" && breed.selected === true)).length / moderateUsers.length;
  // what percentage of "neutral" alignment users selected "ast" as a breed
  const moderateAst = moderateUsers.filter((user) => user.breeds.some((breed) => breed.label === "ast" && breed.selected === true)).length / moderateUsers.length;
  // what percentage of "neutral" alignment users selected "sbt" as a breed
  const moderateSbt = moderateUsers.filter((user) => user.breeds.some((breed) => breed.label === "sbt" && breed.selected === true)).length / moderateUsers.length;
  // what percentage of "neutral" alignment users selected "ab" as a breed
  const moderateAb = moderateUsers.filter((user) => user.breeds.some((breed) => breed.label === "ab" && breed.selected === true)).length / moderateUsers.length;


  return {
    proAccuracy,
    moderateAccuracy,
    antiAccuracy,
    proCount,
    moderateCount,
    antiCount,
    allUsersAccuracy,
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
    topUsers,
    proPercentage25,
    proPercentage50,
    proPercentage75,
    proPercentageGreaterThan75,
    moderatePercentage25,
    moderatePercentage50,
    moderatePercentage75,
    moderatePercentageGreaterThan75,
    antiPercentage25,
    antiPercentage50,
    antiPercentage75,
    antiPercentageGreaterThan75,
    antiApbt,
    antiAst,
    antiSbt,
    antiAb,
    proApbt,
    proAst,
    proSbt,
    proAb,
    moderateApbt,
    moderateAst,
    moderateSbt,
    moderateAb,
  } as BreakdownType;
}