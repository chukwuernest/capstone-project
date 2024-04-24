import React from 'react'
import SuccessStyle from './success.module.css'
function success() {
  return (
    <div>
      <div className={SuccessStyle.successland}>
        <div className={SuccessStyle.section_success}>
          <div className={SuccessStyle.success_details}>
            <div className={SuccessStyle.img_success}>
              <div className={SuccessStyle.imgS}></div>
            </div>

            <h3>Successful</h3>
            <p>
              Your Password has successfully
              <span>reset,click below to continue your access</span>
            </p>
            <button className={SuccessStyle.submit_success} type='submit'>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default success
