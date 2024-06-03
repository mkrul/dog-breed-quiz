"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
// GET /about
router.get("/about", (req, res) => {
    // direct to https://ban-this-breed-b3bc9b835a36.herokuapp.com/about
    res.redirect(301, "https://ban-this-breed-b3bc9b835a36.herokuapp.com/about");
});
