import React from 'react'
import InfoCard from '../../components/auth/InfoCard'
import Signup from '../../components/auth/Signup'
import './auth.css'

const Auth = () => {
  return (
    <div className='auth'>
      <InfoCard/>
      <Signup/>
    </div>
  )
}

export default Auth