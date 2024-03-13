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
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./src/util/validateEnv"));
const app_1 = __importDefault(require("./src/app"));
const conn_1 = __importDefault(require("./db/conn"));
const user_1 = require("./src/routes/user");
const body_parser_1 = __importDefault(require("body-parser"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const port = validateEnv_1.default.PORT;
    app_1.default.use(express_1.default.json());
    app_1.default.use(body_parser_1.default.json());
    app_1.default.use(body_parser_1.default.urlencoded({ extended: true }));
    app_1.default.use('/api/user', user_1.router);
    app_1.default.post('/api/test', (req, res) => {
        res.json({ message: 'Hello from server!' });
    });
    try {
        app_1.default.listen(port, () => {
            conn_1.default.on("error", console.error.bind(console, "connection error:"));
            conn_1.default.on("connected", function () {
                console.log("Connected to MongoDB");
            });
            console.log(`Server started at http://localhost:${port}`);
        });
    }
    catch (err) {
        const error = new Error("Request failed");
        console.log(err);
        throw error;
    }
    finally {
        console.log("Server started");
    }
}))();
