import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from './Avatar'
import { addFollower, delFollower, addFollowing, delFollowing } from '../actions/twitterActions';

const UserStats = () => {
  const [sum] = useState(1);
  const dispatch = useDispatch();
  const followers = useSelector(state => state.followers)
  const following = useSelector(state => state.following)
  const name = useSelector(state => state.name);

  return (
        <div className='user-stats'>
          <div>
            <Avatar/>
            {name}
          </div>
          <div className='stats'>
            <button 
            onClick={()=> dispatch(addFollower(sum))}
            onContextMenu={(e)=>
            {e.preventDefault();
            dispatch(delFollower(sum));
            }}>Followers: {followers}</button>
     
            <button 
            onClick={()=> dispatch(addFollowing(sum))}
            onContextMenu={(e)=>{
              e.preventDefault();
              dispatch(delFollowing(sum));
            }}>Following: {following}</button>
          </div>
        </div>


  )
}

export default UserStats