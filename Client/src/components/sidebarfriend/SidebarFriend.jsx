import React from 'react'
import './sidebarfriend.css'

const SidebarFriend = ({user}) => {
  return (
    
    <li className="sidebarfriendlist">
        <img src={user.profilepicture} alt="friend" className="friendimg" />
        <span className="sidebarfriendname">{user.username}</span>
    </li>
  )
}

export default SidebarFriend
