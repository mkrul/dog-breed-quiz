"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const redux_persist_1 = require("redux-persist");
const storage_1 = __importDefault(require("redux-persist/lib/storage"));
const autoMergeLevel2_1 = __importDefault(require("redux-persist/es/stateReconciler/autoMergeLevel2"));
const rootReducer_1 = require("./rootReducer");
const redux_thunk_1 = require("redux-thunk");
const persistConfig = {
    key: 'root',
    storage: storage_1.default,
    whitelist: ['user', 'breeds', 'settings', 'results'],
    stateReconciler: autoMergeLevel2_1.default,
};
const persistedReducer = (0, redux_persist_1.persistReducer)(persistConfig, rootReducer_1.rootReducer);
exports.store = (0, toolkit_1.configureStore)({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(redux_thunk_1.thunk)
});
exports.persistor = (0, redux_persist_1.persistStore)(exports.store);
