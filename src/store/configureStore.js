import { configureStore } from "@reduxjs/toolkit";
import { userReducer, statsReducer} from "../reducers/twitterReducer";



export const store = configureStore({
  reducer: {
      user: userReducer,
      stats: statsReducer

  }
})
