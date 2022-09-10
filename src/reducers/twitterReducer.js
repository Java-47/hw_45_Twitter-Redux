import { ADDFOLLOWER, DELFOLLOWER, CHANGEAVATAR, ADDFOLLOWING, DELFOLLOWING, CHANGENAME } from "../actions/twitterActions";
export const twitterReducer = (state, action) => {
    switch (action.type) {
        case CHANGEAVATAR:
            return { ...state, avatar: state.avatar = action.payload || state.avatar };

        case CHANGENAME:
            return { ...state, name: state.name = action.payload  };

        /* FOLLOWERS*/
        case ADDFOLLOWER:
            return { ...state, followers: state.followers + action.payload };
        case DELFOLLOWER:
            const res = state.followers - action.payload;
            return { ...state, followers: res < 0 ? state.followers : res };

        /* FOLLOWING*/
        case ADDFOLLOWING:
            return { ...state, following: state.following + action.payload };
        case DELFOLLOWING:
            const res2 = state.following - action.payload;
            return { ...state, following: res2 < 0 ? state.following : res2 }; 

        default:
            return state;
    }
}