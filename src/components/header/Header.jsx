import React from 'react'
import './header.css'
import img from "../../images/myphoto.jpg"

const Header = () => {
  return (
    <header className='header'>
        <div className="logo"><span className="material-symbols-outlined icon">travel_explore</span><span>SocialDelema</span></div>
        <div className="search">
            <input type="search" placeholder='Find friends'/>
            <button className="button"><span className="material-symbols-outlined">search</span></button>
        </div>
        <div className="profile">
            <img src={img} alt="" />
        </div>
    </header>
  )
}

export default Header