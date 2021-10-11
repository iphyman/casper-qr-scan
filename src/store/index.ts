import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import rootReducer from "../data/rootReducer";

const WHITELISTED: string[] = ["user"];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
    }).concat(save({ states: WHITELISTED, debounce: 1000 })),
  preloadedState: load({ states: WHITELISTED }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
