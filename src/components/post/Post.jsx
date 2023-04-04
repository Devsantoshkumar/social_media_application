import React from 'react'
import "./post.css"
import profile from "../../images/myphoto.jpg"
import postImage1 from "../../images/background41.jpg"
import postImage2 from "../../images/background45.jpg"

const Post = () => {
  return (
    <>
      <div className='post'>
        <div className="postProfileInfo">
            <div className="postProfile">
                <img src={profile} alt="" />
            </div>
            <div className="descriptionInfo">
                <div><strong>Santosh Kumar </strong><small> 2 days ago</small></div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="postImage">
            <img src={postImage1} alt="" />
        </div>
        <div className="postIntractions">
            <ul>
                <li><span className="material-symbols-outlined">favorite</span><span>254</span></li>
                <li><span className="material-symbols-outlined">comment</span><span>254</span></li>
                <li><span className="material-symbols-outlined">share</span><span>254</span></li>
            </ul>
        </div>
    </div>


    <div className='post'>
        <div className="postProfileInfo">
            <div className="postProfile">
                <img src={profile} alt="" />
            </div>
            <div className="descriptionInfo">
                <div><strong>Santosh Kumar </strong><small> 2 days ago</small></div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="postImage">
            <img src={postImage2} alt="" />
        </div>
        <div className="postIntractions">
            <ul>
                <li><span className="material-symbols-outlined">favorite</span><span>254</span></li>
                <li><span className="material-symbols-outlined">comment</span><span>254</span></li>
                <li><span className="material-symbols-outlined">share</span><span>254</span></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Post