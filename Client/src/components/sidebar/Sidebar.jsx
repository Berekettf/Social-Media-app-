import React from 'react'
import './sidebar.css'
import { MdRssFeed, MdOutlinePlayCircleFilled,MdHelp,MdWorkOutline,MdEvent,MdSchool  } from "react-icons/md";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { BsBookmarksFill } from "react-icons/bs";
import {Users} from '../../Data'
import SidebarFriend from '../sidebarfriend/SidebarFriend';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <ul className="sidebarlist">
                <li className="sidebarlistitem">
                  <MdRssFeed className='sidebaricon' />
                  <span className="sidebarlistitemtext">Feed</span>
                </li>
                <li className="sidebarlistitem">
                  <BsChatLeftTextFill  className='sidebaricon' />
                  <span className="sidebarlistitemtext">Chat</span>
                </li>
                <li className="sidebarlistitem">
                  <MdOutlinePlayCircleFilled  className='sidebaricon' />
                  <span className="sidebarlistitemtext">Video</span>
                </li>
                <li className="sidebarlistitem">
                  <FaUserGroup className='sidebaricon' />
                  <span className="sidebarlistitemtext">Group</span>
                </li>
                <li className="sidebarlistitem">
                  <BsBookmarksFill className='sidebaricon' />
                  <span className="sidebarlistitemtext">Bookmark</span>
                </li>
                <li className="sidebarlistitem">
                  <MdHelp className='sidebaricon' />
                  <span className="sidebarlistitemtext">Questions</span>
                </li>
                <li className="sidebarlistitem">
                  <MdWorkOutline className='sidebaricon' />
                  <span className="sidebarlistitemtext">Jobs</span>
                </li>
                <li className="sidebarlistitem">
                  <MdEvent className='sidebaricon' />
                  <span className="sidebarlistitemtext">Events</span>
                </li>
                <li className="sidebarlistitem">
                  <MdSchool  className='sidebaricon' />
                  <span className="sidebarlistitemtext">Courses</span>
                </li>
            </ul>
            <buttom className="sidebarbuttom">See more</buttom>
            <hr className="sidebarhr" />
            <ul className="sidebarfriend">
                
              {Users.map((u)=>(
                <SidebarFriend key={u.id} user = {u}/>
              ))}  
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
