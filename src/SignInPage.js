import React from 'react'
import { GrHide } from 'react-icons/gr'

function SignInPage() {
  return (
    <div className='signIn_HOME'>
      <div className='section_signIn'>
        <div className='img_sign'></div>
        <div className='sign_details'>
          <h2>Welcome Back</h2>
          <p>Sign in to continue your progress</p>
          <form className='formSignIn'>
            <div className='EmailsignIn'>
              <label>Email</label>
              <input type='email' value='' placeholder='Example@gmail.com' />
            </div>

            <div className='Password'>
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
                    <div className='password_img_signIn'></div>
                  </a>
                </li>
              </ul>
            </div>
            <div className='rememberMe'>
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

            <button className='submit_signIn' type='submit'>
              Sign In
            </button>
          </form>
          <div className='or_use'>
            <h3>OR LOGIN WITH</h3>
          </div>
          <ul>
            <li>
              <a href=''>
                <div className='facebook_signIn'></div>
              </a>
            </li>
            <li>
              <a href=''>
                <div className='gmail_signIn'></div>
              </a>
            </li>
          </ul>

          <div className='no_acctount'>
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
