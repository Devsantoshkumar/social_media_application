import React from 'react'
import {Link} from "react-router-dom"
import './profiledetail.css'
import cover from "../../images/cover.jpeg"
import profile from "../../images/myphoto.jpg"
import About from './About'

const ProfileDetail = () => {
  return (
    <div className='ProfileDetail'>
        <div className="userPhotos commonBox">
          <img src={cover} alt="" className='coverPhoto'/>
          <div className="profileCover">
             <img src={profile} alt="" className='profilePhoto'/>
          </div>
          <div className="profileMenu">
              <ul>
                <li><Link to="/" className='Link'>About</Link></li>
                <li><Link to="/" className='Link'>Posts</Link></li>
                <li><Link to="/" className='Link'>Photos</Link></li>
                <li><Link to="/" className='Link'>Friends</Link></li>
                <li><Link to="/" className='Link'>More</Link></li>
              </ul>
          </div>
        </div>

        <About />

    </div>
  )
}

export default ProfileDetail