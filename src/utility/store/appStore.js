import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowMovieReducer from "./nowMovieSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    nowMovie: nowMovieReducer,
  },
});
export default store;
