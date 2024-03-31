import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { IoPersonAdd } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";

import './topbar.css';


const Topbar = () => {
  return (
    <div className='topbarcontainer'>
        <div className='topbarleft'>
            <span className="logo">BWM</span>
        </div>
        <div className='topbarcenter'>
          <div className='topbarsearch'>
            <FaSearch className='searchicon'/>
            <input placeholder='Search for friends, post or Video' className="searchinput" />
          </div>
        </div>
        <div className='topbarright'>
          <div className='topbarlinks'>
            <span className="topbarlink">Homepage</span>
            <span className="topbarlink">Timeline</span>
          </div>
          <div className='topbaricon'>
            <div className="topbariconitem">
              <IoPersonAdd />
              <span className="topbariconbadge">1</span>
            </div>
            <div className="topbariconitem">
              <BsChatDotsFill />
              <span className="topbariconbadge">6</span>
            </div>
            <div className="topbariconitem">
              <IoMdNotifications />
              <span className="topbariconbadge">4</span>
            </div>
            
          </div>
          <img src="./assets/friend/1.png" alt="" className="topbarimg" />
        </div>
    </div>
  )
}

export default Topbar
