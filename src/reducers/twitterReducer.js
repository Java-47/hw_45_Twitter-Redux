import {createReducer} from "@reduxjs/toolkit";
import { changeStats } from "../actions/statsActions";
import { changeAvatar, changeName } from "../actions/userActions";
const defaultUser = {
    avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
    name: 'Monster'
}
const defaultStats = {
        followers: 0,
        following: 0
}

export const userReducer = createReducer(defaultUser,{
    [changeAvatar]:(user,action) =>{
        user.avatar = action.payload;
    },
    [changeName]:(user,action) =>{
        user.name = action.payload;
    },
})

export const statsReducer = createReducer(defaultStats, {
    [changeStats]:(stats, action) =>{
        console.log(stats);
        console.log(stats[action.payload]);
        const res = stats[action.payload.statsType] + action.payload.sum;
        stats = { ...stats, [action.payload.statsType]: res < 0 ? 0 : res }
        return { ...stats };

    }
})

