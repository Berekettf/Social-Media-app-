import React from 'react'
import './online.css'

const Online = ({user}) => {
  return (
    <li className="rightbarfriend">
     <div className="rightbarprofilecontainer">
        <img src={user.profilepicture} alt="" className="rightbarprofileimg" />
        <span className="rightbaronline"></span>
     </div>
    <span className="rightbarfriendname">{user.username}</span>
    </li>
  )
}

export default Online
