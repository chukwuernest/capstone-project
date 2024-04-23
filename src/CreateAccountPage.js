import React from 'react'
import Createstyle from './CreateAccount.module.css'

function CreateAccountPage() {
  return (
    <div className={Createstyle.CreateAccountPage}>
      <div className={Createstyle.section_CAP}>
        <div className={Createstyle.img_CAP}></div>
        <div className={Createstyle.CAP_details}>
          <h2>Create Acount</h2>
          <p>Begin your journey with us toda</p>
          <form className={Createstyle.form_CAP}>
            <div className={Createstyle.Name_CAP}>
              <label>Full name</label>
              <input type='text' value='' placeholder='Adeola Ogunbowale' />
            </div>
            <div className={Createstyle.Email_CAP}>
              <label>Email</label>
              <input type='email' value='' placeholder='Example@gmail.com' />
            </div>

            <div className={Createstyle.Password_CAP}>
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
                    <div className={Createstyle.hiden_img}></div>
                  </a>
                </li>
              </ul>
            </div>

            <div className={Createstyle.accept__CAP}>
              <label>
                <input type='checkbox' checked='' />I accept the Terms &
                Condition
              </label>
            </div>

            <button className={Createstyle.signup_CAP} type='submit'>
              Sign up
            </button>
          </form>

          <h3>OR LOGIN WITH</h3>

          <ul>
            <li>
              <a href=''>
                <div className={Createstyle.facebook_CAP}></div>
              </a>
            </li>
            <li>
              <a href=''>
                <div className={Createstyle.gmail_CAP}></div>
              </a>
            </li>
          </ul>
        </div>
        <div className={Createstyle.no_acctount_CAP}>
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
