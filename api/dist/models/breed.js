"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var breedSchema = new Schema({
    name: { type: String, required: true },
    label: { type: String, required: true },
    selected: { type: Boolean, default: false },
});
exports.default = mongoose_1.default.model("Breed", breedSchema);
