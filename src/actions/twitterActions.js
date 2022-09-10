export const CHANGEAVATAR = 'CHANGEAVATAR';
export const ADDFOLLOWER = 'ADDFOLLOWER';
export const DELFOLLOWER = 'DELFOLLOWER';
export const ADDFOLLOWING = 'ADDFOLLOWING';
export const DELFOLLOWING = 'DELFOLLOWING';
export const CHANGENAME = 'CHANGENAME'

export const changeAvatar = url => {
    return {
        type: CHANGEAVATAR,
        payload: url
    }
}
export const changeName = name => {
    return {
        type: CHANGENAME,
        payload: name
    }
}
        /* FOLLOWERS*/
export const addFollower = follower => {
    return {
        type: ADDFOLLOWER,
        payload: follower
    }
}
export const delFollower = follower => {
    return {
        type: DELFOLLOWER,
        payload: follower
    }
}

        /* FOLLOWING*/
export const addFollowing = following => {
    return {
        type: ADDFOLLOWING,
        payload: following
    }
}
export const delFollowing = following => {
    return {
        type: DELFOLLOWING,
        payload: following
    }
}