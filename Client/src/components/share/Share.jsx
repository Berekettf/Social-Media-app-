import React from 'react'
import './share.css'
import { MdPermMedia,MdLabel,MdRoom,MdEmojiEmotions } from "react-icons/md";

const Share = () => {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
                <img src="./assets/friend/3.png" alt='trh' className="shareprofileimg" />
                <input placeholder="What's is on your mind ?" className="shareinput" />
            </div>
            <hr className="sharehr" />
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                       <MdPermMedia htmlColor="red" className='shareicon'/>
                       <span className="shareoptiontex">photo or video</span>
                    </div>
                    <div className="shareoption">
                       <MdLabel className='shareicon1'/>
                       <span className="shareoptiontex">Tags</span>
                    </div>
                    <div className="shareoption">
                       <MdRoom className='shareicon2'/>
                       <span className="shareoptiontex">Location</span>
                    </div>
                    <div className="shareoption">
                       <MdEmojiEmotions className='shareicon3'/>
                       <span className="shareoptiontext">Feeling</span>
                    </div>
                </div>
                <buttom className="sharebuttom">Share</buttom>
            </div>
        </div>
      
    </div>
  )
}

export default Share
