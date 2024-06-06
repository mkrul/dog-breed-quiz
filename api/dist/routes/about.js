"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var router = express_1.default.Router();
exports.router = router;
// GET /about
router.get("/about", function (req, res) {
    console.log('derp');
    return app.render("/about");
});
