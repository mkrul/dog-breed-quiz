import { fetchDogs } from "../services/dogs";

const asyncHandler = require("express-async-handler");

exports.getDogs = asyncHandler(async (req: any, res: any, next: any) => {
  const data = await fetchDogs();

  res.status(200).json({ data });
});
