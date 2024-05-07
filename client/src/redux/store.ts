import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { rootReducer, RootReducer } from './rootReducer'
import { thunk } from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'breeds', 'settings'],
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer<RootReducer>(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(
    {
      serializableCheck: false,
    },
  ).concat(thunk)
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
