import React from 'react'
import './rightbar.css'
import {Users} from '../../Data';
import Online from '../online/Online';

const Rightbar = ({profile}) => {

  const HomeRightbar = ()=>{
    return (
      <>
       <div className="birthdaycontainer">
          <img src="./assets\friend/5.png" alt="" className="birthdayimg" />
          <span className="birthdaytext"><b>Amele Anteneh</b> and <b>3 other friends</b> have brithday today</span>
        </div>
        <img src="./assets\brithday.png" alt="" className="rigthbarAd" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriends">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  };

  const ProfileRightbar=()=>{
    return (
        <>
        <h4 className="rightbartitle">User Information</h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfovalue">Addis Ababa</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">D/Markos</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Relationship:</span>
            <span className="rightbarinfovalue">Single</span>
          </div>
        </div>
        <h4 className="rightbartitle">User Friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src="./assets/friend/1.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Samrawit Belsti</span>
          </div>
          <div className="rightbarfollowing">
            <img src="./assets/friend/2.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Babu Gezie</span>
          </div>
          <div className="rightbarfollowing">
            <img src="./assets/friend/3.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Yared Mekonen</span>
          </div>
          <div className="rightbarfollowing">
            <img src="./assets/friend/4.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Haile Aman</span>
          </div>
          <div className="rightbarfollowing">
            <img src="./assets/friend/5.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Obsen Jira</span>
          </div>
          <div className="rightbarfollowing">
            <img src="./assets/friend/6.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Peter John</span>
          </div>
        </div>
        </>
    )
  };
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        {profile ? <ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar
