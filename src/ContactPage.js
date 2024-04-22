import React from 'react'
import logo from './img/LOGO.svg'
import ContactStyle from './ContactPage.module.css'

function ContactPage() {
  return (
    <div className={ContactStyle.homepage}>
      <div className={ContactStyle.section}>
        {/* what we do */}
        <div className={ContactStyle.what_W_D}>
          <div className={ContactStyle.whatC}>
            <section id={ContactStyle.wHead}>
              <p id={ContactStyle.line}></p>
              <h4>CONTACT US</h4>
            </section>
            <div className={ContactStyle.what_k}>
              <h3>We would love to hear from you</h3>
              <p>
                Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details:
              </p>
            </div>
          </div>
          <div className={ContactStyle.what_social}>
            <section className={ContactStyle.social1}>
              <h4>Let’s talk!</h4>
              <p>+234816304746</p>
              <p>
                Safehaven@gmail. <span>com</span>
              </p>
            </section>
            <section className={ContactStyle.social2}></section>
            <section className={ContactStyle.social3}>
              <h4>Headoffice</h4>
              <p>
                4 Broad Avenue, Lagos <span>Nigeria.</span>
              </p>
            </section>
            <section className={ContactStyle.social4}>
              <ul>
                <li className={ContactStyle.facebook}>
                  <a href='#'></a>
                </li>
                <li className={ContactStyle.linkin}>
                  <a href='#'></a>
                </li>
                <li className={ContactStyle.twitter}>
                  <a href='#'></a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        {/* project we have done */}
        <div className={ContactStyle.we_done}>
          <div className={ContactStyle.done}>
            <section id={ContactStyle.wdone}>
              <div className={ContactStyle.form1}>
                <form>
                  <div className={ContactStyle.firstName}>
                    <label name='firstName'>First Name</label>
                    <input
                      placeholder='Adeola'
                      type='text'
                      id='firstName'
                      name='firstName'
                      value=''
                    />
                  </div>
                  <div className={ContactStyle.lastName}>
                    <label name='lastName'>last Name</label>
                    <input
                      placeholder='Sarah'
                      type='text'
                      id='lastName'
                      name='lastName'
                      value=''
                    />
                  </div>

                  <div className={ContactStyle.email}>
                    <label htmlFor='email'>Email</label>
                    <input
                      placeholder='Adeolasarah@gmail.com'
                      type='email'
                      id='email'
                      name='email'
                      value=''
                    />
                  </div>
                  <div className={ContactStyle.subject}>
                    <label htmlFor='textInput'>subject</label>
                    <input type='text' id='subject' value='' />
                  </div>

                  <div className={ContactStyle.message}>
                    <label htmlFor='message'>Message</label>
                    <textarea
                      placeholder='Type your message'
                      id='message'
                      value=''
                    />
                  </div>
                  <button type='submit' className={ContactStyle.send_message}>
                    Send Message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
