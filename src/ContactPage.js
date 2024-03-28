import React from 'react'
import logo from './img/LOGO.svg'

function ContactPage() {
  return (
    <div className='homepage'>
      <div className='section'>
        {/* this is the nav code */}
        <nav className='navbar'>
          <img src={logo} alt='logo' />
          <div className='mainNav'>
            <ul>
              <li>
                <a href='/HomePage'>Home</a>
              </li>
              <li>
                <a href='/AboutPage'>About</a>
              </li>
              <li>
                <a href='ServicePage'>Services</a>
              </li>
              <li>
                <a href='ContactPage'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='otherNav'>
            <ul>
              <li>
                <a href='ReportPage'>report case</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* what we do */}
        <div className='what_W_D'>
          <div className='whatC'>
            <section id='wHead'>
              <p id='line'></p>
              <h4>CONTACT US</h4>
            </section>
            <div className='what_k'>
              <h3>We would love to hear from you</h3>
              <p>
                Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details:
              </p>
            </div>
          </div>
          <div className='what_social'>
            <section className='social1'>
              <h4>Let’s talk!</h4>
              <p>+234816304746</p>
            </section>
            <section className='social2'>
              <p>
                Safehaven@gmail. <span>com</span>
              </p>
            </section>
            <section className='social3'>
              <h4>Headoffice</h4>
              <p>
                4 Broad Avenue, Lagos <span>Nigeria.</span>
              </p>
            </section>
            <section className='social4'>
              <ul>
                <li className='facebook'>
                  <a href='#'></a>
                </li>
                <li className='linkin'>
                  <a href='#'></a>
                </li>
                <li className='twitter'>
                  <a href='#'></a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        {/* project we have done */}
        <div className='we_done'>
          <div className='done'>
            <section id='wdone'>
              <div className='form1'>
                <form>
                  <div className='firstName'>
                    <label name='firstName'>First Name</label>
                    <input
                      placeholder='Adeola'
                      type='text'
                      id='firstName'
                      name='firstName'
                      value=''
                    />
                  </div>
                  <div className='lastName'>
                    <label name='lastName'>last Name</label>
                    <input
                      placeholder='Sarah'
                      type='text'
                      id='lastName'
                      name='lastName'
                      value=''
                    />
                  </div>

                  <div className='email'>
                    <label htmlFor='email'>Email</label>
                    <input
                      placeholder='Adeolasarah@gmail.com'
                      type='email'
                      id='email'
                      name='email'
                      value=''
                    />
                  </div>
                  <div className='subject'>
                    <label htmlFor='textInput'>subject</label>
                    <input type='text' id='subject' value='' />
                  </div>

                  <div className='message'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                      placeholder='Type your message'
                      id='message'
                      value=''
                    />
                  </div>
                  <button type='submit' className='send_message'>
                    Send Message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>

        {/* footer */}
        <div className='footerHome'>
          <div className='foot_img'>
            <img src='../try.try/logo.jpg' alt='logo' />
          </div>
          <div className='foot_links1'>
            <ul>
              <li>
                <a href='#'>home</a>
              </li>
              <li>
                <a href='#'>about</a>
              </li>
              <li>
                <a href='#'>team</a>
              </li>
              <li>
                <a href='#'>what we do</a>
              </li>
              <li>
                <a href='#'>contact</a>
              </li>
            </ul>
          </div>
          <div className='foot_links2'>
            <ul>
              <li>
                <a href='#'>more</a>
              </li>
              <li>
                <a href='#'>project</a>
              </li>
              <li>
                <a href='#'>events</a>
              </li>
              <li>
                <a href='#'>donate</a>
              </li>
              <li>
                <a href='#'>blog</a>
              </li>
            </ul>
          </div>
          <div className='foot_links3'>
            <ul>
              <li>
                <a href='#'>connect</a>
              </li>
              <li>
                <a href='#'>facebook</a>
              </li>
              <li>
                <a href='#'>instagram</a>
              </li>
              <li>
                <a href='#'>twitter</a>
              </li>
              <li>
                <a href='#'>linkIn</a>
              </li>
            </ul>
          </div>
          <div className='foot_sub'>
            <h2>Subscribe to get latest updates</h2>
            <form>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='your email'
              />
              <button className='contact-btn' type='submit'>
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
