import React from 'react'
import Adminstyle from './Admin_LogInPage.module.css'
function Admin_LogInPage() {
  return (
    <div className={Adminstyle.Home}>
      <div className={Adminstyle.main}>
        <div className={Adminstyle.section}>
          <h1>Please fill in your unique admin login details below</h1>
          <form>
            <label htmlFor=''>Email</label>
            <input type='email' name='' id='' placeholder='Example@gmail.com' />
            <label htmlFor=''>Password</label>
            <input type='password' name='' id='' placeholder='*******' />
          </form>
          <div className={Adminstyle.others}>
            <p>
              <input type='checkbox' name='' id='' />
              Remember me
            </p>
            <p>forgot password?</p>
          </div>
          <button className={Adminstyle.btn}> sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Admin_LogInPage
