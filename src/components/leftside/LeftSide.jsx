import React from 'react'
import {Link} from 'react-router-dom';
import './leftside.css';
import img from "../../images/myphoto.jpg"

const LeftSide = () => {
  return (
    <div className='left'>
        <div className="LeftProfileCard">
            <img src={img} alt="" />
            <div className="pinfo">
                <h4>Santosh Kumar</h4>
                <p>Web Developer</p>
            </div>
        </div>

        <div className="settingCard">
            <ul>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">home</span><span className='textprofile'>Home</span></Link></li>
                <li><Link to="/profile" className='SideLink Link'><span className="material-symbols-outlined sideIcon">account_circle</span><span className='textprofile'>Profile</span></Link></li>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">account_box</span><span className='textprofile'>People</span></Link></li>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">image</span><span className='textprofile'>Photos</span></Link></li>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">play_circle</span><span className='textprofile'>Videos</span></Link></li>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">description</span><span className='textprofile'>About</span></Link></li>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">feed</span><span className='textprofile'>News feed</span></Link></li>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">group</span><span className='textprofile'>Group</span></Link></li>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">settings</span><span className='textprofile'>Settings</span></Link></li>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">security</span><span className='textprofile'>Security</span></Link></li>
                <li><Link to="/" className='SideLink Link'><span className="material-symbols-outlined sideIcon">logout</span><span className='textprofile'>Logout</span></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default LeftSide