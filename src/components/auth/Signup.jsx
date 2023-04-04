import React, { useState } from 'react'
import './signup.css'

const Signup = () => {
  const [form, setForm] = useState(true)

  const HandleForm = () =>{
     setForm(!form)
  }
  return (
    <div className="signup">
        {
          form ? (
          <div className="myForm registeration">
          <h1>Signup Your Community</h1>
          <div className="inputGroup">
            <label htmlFor="fname">First name</label>
            <input type="text" id='fname' placeholder='First name' />
          </div>
          <div className="inputGroup">
            <label htmlFor="lname">Last name</label>
            <input type="text" id='lname' placeholder='Last name' />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email id</label>
            <input type="email" id='email' placeholder='Email id' />
          </div>
          <div className="inputGroup">
            <label htmlFor="pass">Password</label>
            <input type="password" id='pass' placeholder='Create new password' />
          </div>
          <div className="inputGroup">
            <label htmlFor="cpass">Confirm password</label>
            <input type="password" id='cpass' placeholder='confirm new password' />
          </div>
          <div className="inputGroup">
              <button type='submit' className="actionBtn">Signup</button>
          </div>
          <div className="inputGroup">
            <span className='loginNav'>I have already an account <strong onClick={HandleForm}>Login</strong></span>
          </div>
          </div>) : (
        <div className="myForm registeration">
        <h1>Login Your Community</h1>
        <div className="inputGroup">
          <label htmlFor="email">Email id</label>
          <input type="email" id='email' placeholder='Email id' />
        </div>
        <div className="inputGroup">
          <label htmlFor="pass">Password</label>
          <input type="password" id='pass' placeholder='Create new password' />
        </div>
        <div className="inputGroup">
          <label htmlFor="cpass">Confirm password</label>
          <input type="password" id='cpass' placeholder='confirm new password' />
        </div>
        <div className="inputGroup">
            <button type='submit' className="actionBtn">Login</button>
        </div>
        <div className="inputGroup">
          <span className='loginNav'>I have already an account <strong onClick={HandleForm}>Signup</strong></span>
        </div>
        </div>)
        }
    </div>
  )
}

export default Signup