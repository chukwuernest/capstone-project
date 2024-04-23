import React from 'react'
import Verifystyle from './Verify.module.css'
function VerifyPage() {
  return (
    <div>
      <div className={Verifystyle.verifyland}>
        <div className={Verifystyle.section_verify}>
          <div className={Verifystyle.verify_details}>
            <h3>Let us Know it’s you</h3>
            <p>
              Please enter the 6-digit verification code that was sent to
              <span>example@gmail.com</span>
              <form className={Verifystyle.formEnter_code}>
                <div className={Verifystyle.Enter_code}>
                  {/* <label>Enter 6 digits code</label> */}
                  <p>Enter 6 digits code</p>
                  <input type='text' value='' placeholder='000-000' />
                  <button
                    className={Verifystyle.submit_verification}
                    type='submit'
                  >
                    Continue
                  </button>
                </div>
              </form>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyPage
