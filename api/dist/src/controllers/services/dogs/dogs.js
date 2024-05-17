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
exports.getDogs = void 0;
const fs_1 = __importDefault(require("fs"));
function readBreedData() {
    return __awaiter(this, void 0, void 0, function* () {
        var data = JSON.parse(fs_1.default.readFileSync('./data.json', 'utf8'));
        console.log('data:', data);
        return data;
    });
}
function getDogs() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('in getDogs');
        const data = yield readBreedData();
        const breeds = data.breeds;
        const randomBreeds = breeds.sort(() => Math.random() - Math.random()).slice(0, 5);
        return randomBreeds;
    });
}
exports.getDogs = getDogs;
