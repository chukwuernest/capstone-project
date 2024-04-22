import React from 'react'

function VerifyPage() {
  return (
    <div>
      <div className='verifyland'>
        <div className='section_verify'>
          <div className='verify_details'>
            <h3>Let us Know it’s you</h3>
            <p>
              Please enter the 6-digit verification code that was sent to
              <span>example@gmail.com</span>
              <form className='formEnter_code'>
                <div className='Enter_code'>
                  {/* <label>Enter 6 digits code</label> */}
                  <p>Enter 6 digits code</p>
                  <input type='text' value='' placeholder='000-000' />
                  <button className='submit_verification' type='submit'>
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
