const asyncHandler = require('express-async-handler');

exports.startTest = asyncHandler(async (req: any, res: any, next: any) => {
  res.status(200).json({
    message: 'Test started'
  });
});

exports.showBreedsPage = asyncHandler(async (req: any, res: any, next: any) => {
  res.status(200).json({
    message: 'Breeds page'
  });
});

exports.showDnaPage = asyncHandler(async (req: any, res: any, next: any) => {
  res.status(200).json({
    message: 'DNA page'
  });
});

