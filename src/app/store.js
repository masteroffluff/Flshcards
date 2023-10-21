import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "./features/topics/topicsSlice.js"

export default configureStore({
  reducer: {
    topics:topicsReducer,
  },
});
