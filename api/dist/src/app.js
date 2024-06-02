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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const AboutRoutes = __importStar(require("./routes/about"));
const ResultsRoutes = __importStar(require("./routes/results"));
const UserRoutes = __importStar(require("./routes/user"));
const DogsRoutes = __importStar(require("./routes/dogs"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Register API routes before the static files middleware
app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(UserRoutes.router);
// Serve static files from the React app build directory
app.use(express_1.default.static('client/build'));
// This route configuration must come after all other API and middleware routes
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'client', 'build', 'index.html'));
});
exports.default = app;
