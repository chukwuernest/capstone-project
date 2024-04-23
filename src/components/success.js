import React from 'react'
import SuccessStyle from './success.module.css'
function success() {
  return (
    <div>
      <div className='successland'>
        <div className='section_success'>
          <div className='success_details'>
            <div className=' img_success'>
              <div className='imgS'></div>
            </div>

            <h3>Successful</h3>
            <p>
              Your Password has successfully
              <span>reset,click below to continue your access</span>
            </p>
            <button className='submit_success' type='submit'>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default success
