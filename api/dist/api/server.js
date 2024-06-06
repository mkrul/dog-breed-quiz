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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const react_1 = __importDefault(require("react"));
const server_1 = require("react-router-dom/server");
const react_redux_1 = require("react-redux");
const server_2 = __importDefault(require("react-dom/server"));
const App_1 = __importDefault(require("../client/src/App")); // Adjust the path as needed
const store_1 = require("../client/src/redux/store"); // Adjust the path as needed
const validateEnv_1 = __importDefault(require("./src/util/validateEnv"));
const conn_1 = __importDefault(require("./db/conn"));
const app_1 = __importDefault(require("./src/app")); // Adjust the path as needed
const server = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Serve static files
server.use(express_1.default.static(path_1.default.resolve(__dirname, "..", "client", "build")));
// Use the existing API routes and middleware
server.use(app_1.default);
// Server-side rendering
server.get("*", (req, res) => {
    const context = {};
    const appHTML = server_2.default.renderToString(<react_redux_1.Provider store={store_1.store}>
      <server_1.StaticRouter location={req.url}>
        <App_1.default />
      </server_1.StaticRouter>
    </react_redux_1.Provider>);
    const indexFile = path_1.default.resolve(__dirname, "..", "client", "build", "index.html");
    fs_1.default.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
            console.error("Something went wrong:", err);
            return res.status(500).send("Oops, better luck next time!");
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`));
    });
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const port = validateEnv_1.default.PORT || 3000;
    try {
        server.listen(port, () => {
            conn_1.default.on("error", console.error.bind(console, "connection error:"));
            conn_1.default.on("connected", function () {
                console.log("Connected to MongoDB");
            });
            console.log(`Server started at ${validateEnv_1.default.DOMAIN_URL}:${port}`);
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
