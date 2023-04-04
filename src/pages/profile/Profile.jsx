import React from 'react'
import Header from '../../components/header/Header'
import LeftSide from '../../components/leftside/LeftSide'
import RIghtSide from '../../components/rightside/RightSide'
import ProfileDetail from '../../components/profileDetail/ProfileDetail'

const Profile = () => {
  return (
    <div>
      <Header />
      <div className='Main'>
          <LeftSide/>
          <ProfileDetail/>
          <RIghtSide/>
      </div>
    </div>
  )
}

export default Profile