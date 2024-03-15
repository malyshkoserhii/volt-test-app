import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { todoReducer } from './todo/todo-reducer';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    // modal: modalReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return process.env.NODE_ENV === 'development'
      ? getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(logger)
      : getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
