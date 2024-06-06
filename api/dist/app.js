"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var AboutRoutes = __importStar(require("./routes/about"));
var ResultsRoutes = __importStar(require("./routes/results"));
var UserRoutes = __importStar(require("./routes/user"));
var DogsRoutes = __importStar(require("./routes/dogs"));
var cors_1 = __importDefault(require("cors"));
var crypto_1 = __importDefault(require("crypto"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(UserRoutes.router);
app.use(express_1.default.static("client/build"));
app.get("*", function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, "client", "build", "index.html"));
});
app.use(function (req, res, next) {
    res.locals.nonce = crypto_1.default.randomBytes(16).toString("base64");
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'nonce-".concat(res.locals.nonce, "';"));
    next();
});
exports.default = app;
