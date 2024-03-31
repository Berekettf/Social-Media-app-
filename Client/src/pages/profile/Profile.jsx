import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'

const Profile = () => {
  return (
    <>
      <Topbar/>
      <div className='profile'>
       <Sidebar/>
       <div className="profileright">
         <div className="profilerighttop">
            <div className="profilecover">
               <img src="./assets/4.png" alt="bk" className="profilecoverimg" />
               <img src="./assets/personal/4.png" alt="" className="profileuserimg" />
            </div>
            <div className="profileinfo">
                <h4 className="profileinfoname">Beki Wubie</h4>
                <span className="profileinfodesc">Helo my friends</span>
            </div>
         </div>
         <div className="profilerightbottom">
            <Feed/>
            <Rightbar profile/>
         </div>
       </div>
      </div>
    </>
  )
}

export default Profile
