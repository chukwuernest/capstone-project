import React from 'react'

function ForgotPasswordPage() {
  return (
    <div>
      <div className='forgotland'>
        <div className='section_forgot'>
          <div className='forgot_details'>
            <h3>Forgot password?</h3>
            <p>
              Input the email address that is linked to your account to
              <span> recover password</span>
            </p>

            <form className='formforgot'>
              <div className='Emailforgot'>
                <label>Email</label>
                <input type='email' value='' placeholder='Example@gmail.com' />
              </div>
            </form>
            <button className='submit_forgot' type='submit'>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
