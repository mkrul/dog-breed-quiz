"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIp = void 0;
function getUserIp(request) {
    const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    return ip;
}
exports.getUserIp = getUserIp;
