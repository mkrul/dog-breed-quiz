"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ip = void 0;
const ip = (req, res, next) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(ipAddress);
    next();
};
exports.ip = ip;
