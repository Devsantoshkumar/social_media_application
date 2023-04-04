import React from 'react'
import './profilecard.css'
import img from "../../images/girl23.jpg"

const ProfileCard = () => {
  return (
     <div className="onlineFriends">
           <ul>
            <li>
               <div className="onlineProfile">
                  <img src={img} alt="" />
               </div>
               <div className="onlineInfo">
                  <strong className="onlineName">Komal Singh</strong>
                  <small>Online</small>
               </div>
            </li>
           </ul>
     </div>
  )
}

export default ProfileCard