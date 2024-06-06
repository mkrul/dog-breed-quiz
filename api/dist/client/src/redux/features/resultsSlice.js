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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearResultAction = exports.addSelection = exports.incrementField = exports.updateUserAccuracyAsync = exports.updateSelectionsAsync = exports.incrementFieldAsync = exports.updateUserAccuracy = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    totalDogs: 0,
    totalSelected: 0,
    totalCorrectGuesses: 0,
    totalIncorrectGuesses: 0,
    totalSkipped: 0,
    userAccuracy: 0,
    selections: [],
    completed: 0
};
// Actions
const updateUserAccuracy = (accuracy) => {
    return {
        type: 'results/updateUserAccuracy',
        payload: accuracy
    };
};
exports.updateUserAccuracy = updateUserAccuracy;
// Thunks
exports.incrementFieldAsync = (0, toolkit_1.createAsyncThunk)('results/incrementField', ({ field, increment }, { dispatch }) => __awaiter(void 0, void 0, void 0, function* () {
    dispatch(resultsSlice.actions.incrementField({ field, increment }));
}));
exports.updateSelectionsAsync = (0, toolkit_1.createAsyncThunk)('results/updateSelections', (selection, { dispatch }) => __awaiter(void 0, void 0, void 0, function* () {
    dispatch(resultsSlice.actions.addSelection(selection));
}));
exports.updateUserAccuracyAsync = (0, toolkit_1.createAsyncThunk)("result/updateUserAccuracy", (_, { dispatch, getState }) => __awaiter(void 0, void 0, void 0, function* () {
    const state = getState();
    const totalDogs = state.results.totalDogs;
    const totalCorrectGuesses = state.results.totalCorrectGuesses;
    const userAccuracy = (totalCorrectGuesses / totalDogs) * 100;
    const roundedAccuracy = Math.round(userAccuracy * 100) / 100;
    dispatch((0, exports.updateUserAccuracy)(roundedAccuracy));
}));
// Slice
const resultsSlice = (0, toolkit_1.createSlice)({
    name: 'results',
    initialState,
    reducers: {
        incrementField: (state, action) => {
            const { field, increment } = action.payload;
            state[field] += increment;
        },
        addSelection: (state, action) => {
            state.selections.push(action.payload);
        },
        updateUserAccuracy: (state, action) => {
            state.userAccuracy = action.payload;
        },
        clearResultAction: () => initialState
    }
});
_a = resultsSlice.actions, exports.incrementField = _a.incrementField, exports.addSelection = _a.addSelection, exports.clearResultAction = _a.clearResultAction;
exports.default = resultsSlice.reducer;
