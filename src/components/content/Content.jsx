import React from 'react'
import './content.css'
import Share from '../share/Share';
import Post from '../post/Post';
import Story from './Story';


const Content = () => {

  return (
    <div className='content'>
        <Story/>
        <Share/>
        <Post/>
    </div>
  )
}

export default Content