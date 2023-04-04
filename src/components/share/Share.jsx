import React from 'react'
import { Link } from 'react-router-dom'
import './share.css'
import img from "../../images/myphoto.jpg"

const Share = () => {
  return (
    <div className='share'>
        <div className="section1">
            <Link to="/" className="shareProfile">
                <img src={img} alt="" />
            </Link>
            <div className="shareInput">
                <input type="text" placeholder='Write here...' />
                <button className="button">Post</button>
            </div>
        </div>
        <div className="section2">
            <ul className='shareOptions'>
                <li><Link to="/" className="Link"><span className="material-symbols-outlined">play_circle</span><span>Video</span></Link></li>
                <li><Link to="/" className="Link"><span className="material-symbols-outlined">image</span><span>Photo</span></Link></li>
                <li><Link to="/" className="Link"><span className="material-symbols-outlined">podcasts</span><span>Live</span></Link></li>
                <li><Link to="/" className="Link"><span className="material-symbols-outlined">music_note</span><span>Music</span></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Share