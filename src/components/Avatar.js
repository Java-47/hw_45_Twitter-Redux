import React from 'react'
import { store } from '../store/configureStore'
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar, changeName } from '../actions/twitterActions';
const Avatar = ({ size }) => {
    const dispatch = useDispatch();
    const avatar = useSelector(state => state.avatar);


    return (
                <img 
                    className={`user-avatar ${size ?? ''}`} 
                    src={avatar} alt={store.getState().name} 
                    onClick={() => {
                        const url = prompt('Enter new avatar url');
                        dispatch(changeAvatar(url))
                    }}
                    onContextMenu={(e)=>
                        {e.preventDefault();
                        const pName = prompt('Enter new name');
                        dispatch(changeName(pName));
                        }}
                />
            )
}

export default Avatar