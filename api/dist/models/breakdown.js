"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var breakdownSchema = new Schema({
    proAccuracy: { type: Number, default: 0 },
    moderateAccuracy: { type: Number, default: 0 },
    antiAccuracy: { type: Number, default: 0 },
    proCount: { type: Number, default: 0 },
    moderateCount: { type: Number, default: 0 },
    antiCount: { type: Number, default: 0 },
    allUsersAccuracy: { type: Number, default: 0 },
    proApbtCount: { type: Number, default: 0 },
    proApbtAccuracy: { type: Number, default: 0 },
    proMultiCount: { type: Number, default: 0 },
    proMultiAccuracy: { type: Number, default: 0 },
    moderateApbtCount: { type: Number, default: 0 },
    moderateApbtAccuracy: { type: Number, default: 0 },
    antiApbtCount: { type: Number, default: 0 },
    antiApbtAccuracy: { type: Number, default: 0 },
    topUsers: { type: Array, default: [] }
});
exports.default = mongoose_1.default.model('Breakdown', breakdownSchema);
