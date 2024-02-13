"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./services/user");
const asyncHandler = require("express-async-handler");
exports.getUser = asyncHandler((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const ipAddress = req.ip;
    const user = yield (0, user_1.findOrCreateUserByIpAddress)(ipAddress);
    res.status(200).json({ user });
}));
exports.updateUser = asyncHandler((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in update user");
    console.log("req.params.ipAddress", req.params.ipAddress);
    console.log("req.body", req.body);
    console.log("params", req.params);
    const user = yield (0, user_1.updateUser)(req.ip, req.body);
    res.status(200).json({ user });
}));
