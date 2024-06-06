"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var resultSchema = new Schema({
    totalDogs: { type: Number, default: 0 },
    totalSelected: { type: Number, default: 0 },
    totalCorrectGuesses: { type: Number, default: 0 },
    totalIncorrectGuesses: { type: Number, default: 0 },
    totalSkipped: { type: Number, default: 0 },
    userAccuracy: { type: Number, default: 0 },
    selections: { type: Array, default: [] },
    completed: { type: Number, default: 0 }
});
exports.default = mongoose_1.default.model('Result', resultSchema);
