import React,{useState} from 'react'
import './post.css'
import { MdMoreVert } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import {Users} from '../../Data'

const Post = ({post}) => {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler= ()=>{
    setLike(isLiked ? like-1:like+1)
    setIsLiked(!isLiked)
  }
  return (
    <>
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src={ Users.filter(u=>u.id===post.userId)[0].profilepicture} alt="kvhj" className="postprofileimg" />
                    <span className="postusername">{ Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postdate">{post.date}</span>
                </div>
                <div className="posttopright">
                   <MdMoreVert className='more' />
                </div>
            </div>
            <div className="postcenter">
                <span className="postdesc">{post?.desc}</span>
                <img src={post.photo} alt="" className="postimg" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                  <AiOutlineLike className='postlike' onClick={likeHandler}/>
                  <CiHeart className='postlike' onClick={likeHandler}/>
                  <span className="postlikecounter">{like} people liked it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcomment">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Post
