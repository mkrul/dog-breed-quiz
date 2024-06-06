"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
var validators_1 = require("envalid/dist/validators");
var path_1 = __importDefault(require("path"));
var dotenv_1 = require("dotenv");
var environment = process.env.NODE_ENV || 'development';
(0, dotenv_1.config)({
    path: path_1.default.join(__dirname, "../../".concat(environment, ".env")),
});
var env = (0, envalid_1.cleanEnv)(process.env, {
    MONGO_DB_URI: (0, validators_1.str)(),
    DOMAIN_URL: (0, validators_1.str)(),
    NODE_ENV: (0, validators_1.str)(),
    PORT: (0, validators_1.port)(),
});
exports.default = env;
