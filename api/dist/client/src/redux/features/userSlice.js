"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUsernameAction = exports.updateUserAction = exports.clearUserStoreAction = exports.setUsername = exports.clearUserStore = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    _id: "",
    username: "",
    createdAt: "",
    loading: false,
    error: "",
};
// Action Types
const CLEAR_USER_STORE = "CLEAR_USER_STORE";
const SET_USERNAME = "SET_USERNAME";
// Action Creators
const clearUserStore = () => ({
    type: CLEAR_USER_STORE,
});
exports.clearUserStore = clearUserStore;
const setUsername = (username) => ({
    type: SET_USERNAME,
    payload: username,
});
exports.setUsername = setUsername;
const userSlice = (0, toolkit_1.createSlice)({
    name: "userData",
    initialState,
    reducers: {
        clearUserStoreAction: (state) => {
            return initialState;
        },
        setUsernameAction: (state, action) => {
            return Object.assign(Object.assign({}, state), { username: action.payload });
        },
        updateUserAction: (state, action) => {
            return action.payload;
        },
    },
});
_a = userSlice.actions, exports.clearUserStoreAction = _a.clearUserStoreAction, exports.updateUserAction = _a.updateUserAction, exports.setUsernameAction = _a.setUsernameAction;
exports.default = userSlice.reducer;
