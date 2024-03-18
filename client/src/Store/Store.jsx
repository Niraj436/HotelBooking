import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../Store/FavSlice";

const store = configureStore({
  reducer: {
    fav: favReducer,
  },
});

export default store;
