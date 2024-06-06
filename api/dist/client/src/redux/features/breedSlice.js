"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBreedAction = exports.addBreedAction = exports.clearBreedsAction = exports.removeBreed = exports.addBreed = exports.clearBreedStore = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = [
    {
        name: "American Pit Bull Terrier",
        label: "apbt",
        selected: false,
    },
    {
        name: "American Staffordshire Terrier",
        label: "ast",
        selected: false,
    },
    {
        name: "Staffordshire Bull Terrier",
        label: "sbt",
        selected: false,
    },
    {
        name: "American Bully",
        label: "ab",
        selected: false,
    },
];
// Action Types
const CLEAR_BREED_STORE = "CLEAR_BREED_STORE";
const ADD_BREED = "ADD_BREED";
const REMOVE_BREED = "REMOVE_BREED";
const clearBreedStore = () => ({
    type: CLEAR_BREED_STORE,
});
exports.clearBreedStore = clearBreedStore;
const addBreed = (value) => ({
    type: ADD_BREED,
    payload: value,
});
exports.addBreed = addBreed;
const removeBreed = (value) => ({
    type: REMOVE_BREED,
    payload: value,
});
exports.removeBreed = removeBreed;
const breedSlice = (0, toolkit_1.createSlice)({
    name: "breedData",
    initialState,
    reducers: {
        clearBreedsAction: () => initialState,
        addBreedAction: (state, action) => {
            return state.map(breed => breed.label === action.payload ? Object.assign(Object.assign({}, breed), { selected: true }) : breed);
        },
        removeBreedAction: (state, action) => {
            return state.map(breed => breed.label === action.payload ? Object.assign(Object.assign({}, breed), { selected: false }) : breed);
        },
    },
});
_a = breedSlice.actions, exports.clearBreedsAction = _a.clearBreedsAction, exports.addBreedAction = _a.addBreedAction, exports.removeBreedAction = _a.removeBreedAction;
exports.default = breedSlice.reducer;
