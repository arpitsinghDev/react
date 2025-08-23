import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowMovieReducer from "./nowMovieSlice";
import {api} from "./../../hooks/useApi";
const store = configureStore({
  reducer: {
    user: userReducer,
    nowMovie: nowMovieReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
