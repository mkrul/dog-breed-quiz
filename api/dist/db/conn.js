"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateEnv_1 = __importDefault(require("../src/util/validateEnv"));
const { MongoClient } = require("mongodb");
const mongoUri = validateEnv_1.default.MONGO_URI;
const client = new MongoClient(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
let _db;
module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err) {
                console.error(err);
            }
            _db = db;
            return callback(err);
        });
    },
    getDb: function () {
        return _db;
    },
};
