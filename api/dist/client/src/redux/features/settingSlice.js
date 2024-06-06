"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPercentageAction = exports.setAlignmentAction = exports.clearSettingsAction = exports.setPercentage = exports.setAlignment = exports.clearSettingsStore = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    alignment: "",
    percentage: 25,
};
// Action Types
const CLEAR_SETTINGS_STORE = "CLEAR_SETTINGS_STORE";
const SET_ALIGNMENT = "SET_ALIGNMENT";
const SET_PERCENTAGE = "SET_PERCENTAGE";
// Action Creators
const clearSettingsStore = () => ({
    type: CLEAR_SETTINGS_STORE,
});
exports.clearSettingsStore = clearSettingsStore;
const setAlignment = (alignment) => ({
    type: SET_ALIGNMENT,
    payload: alignment,
});
exports.setAlignment = setAlignment;
const setPercentage = (value) => ({
    type: SET_PERCENTAGE,
    payload: value,
});
exports.setPercentage = setPercentage;
// Reducers
const settingSlice = (0, toolkit_1.createSlice)({
    name: "settingsData",
    initialState,
    reducers: {
        clearSettingsAction: (state) => {
            return initialState;
        },
        setAlignmentAction: (state, action) => {
            return Object.assign(Object.assign({}, state), { alignment: action.payload });
        },
        setPercentageAction: (state, action) => {
            return Object.assign(Object.assign({}, state), { percentage: action.payload });
        },
    },
});
_a = settingSlice.actions, exports.clearSettingsAction = _a.clearSettingsAction, exports.setAlignmentAction = _a.setAlignmentAction, exports.setPercentageAction = _a.setPercentageAction;
exports.default = settingSlice.reducer;
