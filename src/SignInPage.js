import React from 'react'
import { GrHide } from 'react-icons/gr'
import Signstyle from './SignIn.module.css'

function SignInPage() {
  return (
    <div className={Signstyle.signIn_HOME}>
      <div className={Signstyle.section_signIn}>
        <div className={Signstyle.img_sign}></div>
        <div className={Signstyle.sign_details}>
          <h2>Welcome Back</h2>
          <p>Sign in to continue your progress</p>
          <form className={Signstyle.formSignIn}>
            <div className={Signstyle.EmailsignIn}>
              <label>Email</label>
              <input type='email' value='' placeholder='Example@gmail.com' />
            </div>

            <div className={Signstyle.Password}>
              <label>Password</label>
              <input
                type='password'
                value=''
                required
                placeholder='*********'
              />
              <ul>
                <li>
                  <a href='#'>
                    <div className={Signstyle.password_img_signIn}></div>
                  </a>
                </li>
              </ul>
            </div>
            <div className={Signstyle.rememberMe}>
              <label>
                <input type='checkbox' checked='' />
                Remember Me
              </label>
              <ul>
                <li>
                  <a href='#'>Forgot Password?</a>
                </li>
              </ul>
            </div>

            <button className={Signstyle.submit_signIn} type='submit'>
              Sign In
            </button>
          </form>
          <div className={Signstyle.or_use}>
            <h3>OR LOGIN WITH</h3>
          </div>
          <ul>
            <li>
              <a href=''>
                <div className={Signstyle.facebook_signIn}></div>
              </a>
            </li>
            <li>
              <a href=''>
                <div className={Signstyle.gmail_signIn}></div>
              </a>
            </li>
          </ul>

          <div className={Signstyle.no_acctount}>
            <p>Don’t have an account?</p>

            <ul>
              <li>
                <a href=''>
                  <p>Register Her</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
