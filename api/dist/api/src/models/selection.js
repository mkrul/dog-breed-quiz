"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const selectionSchema = new Schema({
    imageUrl: { type: String, required: true },
    correctGuess: { type: Boolean, default: false },
    dir: { type: String, required: true },
    image: { type: String, required: true },
});
exports.default = mongoose_1.default.model("Selection", selectionSchema);
