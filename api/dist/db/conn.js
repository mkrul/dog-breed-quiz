"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateEnv_1 = __importDefault(require("../src/util/validateEnv"));
const mongoose_1 = __importDefault(require("mongoose"));
const mongoUri = validateEnv_1.default.MONGO_URI;
mongoose_1.default.connect(mongoUri);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});
exports.default = db;
