import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";
//this is a default export, that's why we could name it this way. It is our reducer in our slice

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
