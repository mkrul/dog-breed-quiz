import { Request, Response, NextFunction } from 'express';

export const ip = (req: Request, res: Response, next: NextFunction) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(ipAddress);
  next();
}
