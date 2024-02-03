"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const validators_1 = require("envalid/dist/validators");
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
const environment = process.env.NODE_ENV || 'development';
(0, dotenv_1.config)({
    path: path_1.default.join(__dirname, `../../${environment}.env`),
});
const env = (0, envalid_1.cleanEnv)(process.env, {
    MONGO_URI: (0, validators_1.str)(),
    NODE_ENV: (0, validators_1.str)(),
    PORT: (0, validators_1.port)(),
});
exports.default = env;
