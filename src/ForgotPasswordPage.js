import React from 'react'
import Forgetstyle from './ForgotPassword.module.css'
function ForgotPasswordPage() {
  return (
    <div>
      <div className={Forgetstyle.forgotland}>
        <div className={Forgetstyle.section_forgot}>
          <div className={Forgetstyle.forgot_details}>
            <h3>Forgot password?</h3>
            <p>
              Input the email address that is linked to your account to
              <span> recover password</span>
            </p>

            <form className={Forgetstyle.formforgot}>
              <div className={Forgetstyle.Emailforgot}>
                <label>Email</label>
                <input type='email' value='' placeholder='Example@gmail.com' />
              </div>
            </form>
            <button className={Forgetstyle.submit_forgot} type='submit'>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
