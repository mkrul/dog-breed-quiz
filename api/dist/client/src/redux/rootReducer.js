"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const userSlice_1 = __importDefault(require("./features/userSlice"));
const breedSlice_1 = __importDefault(require("./features/breedSlice"));
const settingSlice_1 = __importDefault(require("./features/settingSlice"));
const resultsSlice_1 = __importDefault(require("./features/resultsSlice"));
exports.rootReducer = (0, toolkit_1.combineReducers)({
    user: userSlice_1.default,
    breeds: breedSlice_1.default,
    settings: settingSlice_1.default,
    results: resultsSlice_1.default,
});
