"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const settings_1 = __importDefault(require("./settings"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    username: { type: String, default: '' },
    alignment: { type: String, default: '' },
    percentage: { type: Number, default: 0 },
    breeds: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now },
    settings: { type: Object, default: settings_1.default },
    results: { type: Array, default: [] },
    accuracy: { type: Number, default: 0 }
});
exports.default = mongoose_1.default.model('User', userSchema);
