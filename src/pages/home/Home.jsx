import React from 'react'
import './home.css'
import Content from '../../components/content/Content'
import LeftSide from '../../components/leftside/LeftSide'
import RightSide from '../../components/rightside/RightSide'
import Header from "../../components/header/Header"

const Home = () => {
  return (
    <>
     <Header />
      <div className='Main'>
          <LeftSide/>
          <Content/>
          <RightSide/>
      </div>
    </>
  )
}

export default Home