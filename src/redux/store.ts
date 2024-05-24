import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "./slices/postsSlice";
import { postsApi } from "./api/postsApi";

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat([postsApi.middleware]);
    },
  });
};

const rootReducer = combineReducers({
  posts: postReducer,
  [postsApi.reducerPath]: postsApi.reducer
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
