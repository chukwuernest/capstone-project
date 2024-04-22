import React from 'react'

function CreateAccountPage() {
  return (
    <div className='CreateAccountPage'>
      <div className='section_CAP'>
        <div className='img_CAP'></div>
        <div className='CAP_details'>
          <h2>Create Acount</h2>
          <p>Begin your journey with us toda</p>
          <form className='form_CAP'>
            <div className='Name_CAP'>
              <label>Full name</label>
              <input type='text' value='' placeholder='Adeola Ogunbowale' />
            </div>
            <div className='Email_CAP'>
              <label>Email</label>
              <input type='email' value='' placeholder='Example@gmail.com' />
            </div>

            <div className='Password_CAP'>
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
                    <div className='hiden_img'></div>
                  </a>
                </li>
              </ul>
            </div>

            <div className='accept__CAP'>
              <label>
                <input type='checkbox' checked='' />I accept the Terms &
                Condition
              </label>
            </div>

            <button className='signup_CAP' type='submit'>
              Sign up
            </button>
          </form>

          <h3>OR LOGIN WITH</h3>

          <ul>
            <li>
              <a href=''>
                <div className='facebook_CAP'></div>
              </a>
            </li>
            <li>
              <a href=''>
                <div className='gmail_CAP'></div>
              </a>
            </li>
          </ul>
        </div>
        <div className='no_acctount_CAP'>
          <p>Already signed up ?</p>

          <ul>
            <li>
              <a href=''>
                <p>Click Here</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountPage
