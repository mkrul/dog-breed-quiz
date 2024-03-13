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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.findOrCreateUser = void 0;
const user_1 = __importDefault(require("../../models/user"));
function findOrCreateUser(ipAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        // Try to find the user in the database
        let user = yield user_1.default.findOne({ ipAddress });
        // If user doesn't exist, create a new user
        if (!user) {
            user = new user_1.default({ ipAddress });
            yield user.save();
        }
        return user;
    });
}
exports.findOrCreateUser = findOrCreateUser;
function updateUser(userId, data) {
    return __awaiter(this, void 0, void 0, function* () {
        // Find the user in the database and update it
        // update user in mongo db]
        console.log('in services/user.ts, userId:', userId);
        console.log('in services/user.ts, data:', JSON.stringify(data));
        const user = yield user_1.default.findByIdAndUpdate(userId, data, { new: true });
        return user;
    });
}
exports.updateUser = updateUser;
