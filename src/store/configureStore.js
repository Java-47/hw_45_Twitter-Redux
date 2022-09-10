import { legacy_createStore } from "@reduxjs/toolkit"; 
import { twitterReducer } from "../reducers/twitterReducer";


const initialState = {

      avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
      name: 'Monster',
      followers: 5,
      following: 3,
    
  }

export const store = legacy_createStore(twitterReducer, initialState);