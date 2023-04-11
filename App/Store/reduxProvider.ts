import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {generatePersistConfig} from '../Utils/Redux';
import authSlice from './Reducers/authSlice';
import langSlice from './Reducers/langSlice';

const reducers = combineReducers({auth: authSlice, lang: langSlice});

const version = 22021401;

const persistedReducer = persistReducer(
  generatePersistConfig({
    whitelist: ['auth', 'lang'],
    version,
  }),
  reducers,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return middlewares;
  },
});

const persistor = persistStore(store);

export {store, persistor};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
