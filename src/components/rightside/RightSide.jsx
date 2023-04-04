import React from 'react'
import ProfileCard from './ProfileCard'
import './rightside.css'
import {Link} from "react-router-dom"
import groupImg from "../../images/man3.jpg"
import img1 from "../../images/girl23.jpg"
import img2 from "../../images/girl11.jpg"
import img3 from "../../images/girl12.jpg"
import img4 from "../../images/girl24.jpg"


const RightSide = () => {
  return (
    <div className='right'>
      <div className="createGroup commonBox">
         <Link to="/" className="groupBtn Link">New Group</Link>
      </div>
      <div className="yourGroup commonBox">
        <div className="groupImgBox"><img src={groupImg} alt="" /></div>
        <div className="profiles">
            <div className="imgBox"><img src={img1} alt="" /></div>
            <div className="imgBox"><img src={img2} alt="" /></div>
            <div className="imgBox"><img src={img3} alt="" /></div>
            <div className="imgBox"><img src={img4} alt="" /></div>
            <p>The Web</p>
        </div>
      </div>
      <div className="rightWrapper commonBox">
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
      </div>
    </div>
  )
}

export default RightSide