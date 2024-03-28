import React from 'react'
import logo from './img/LOGO.svg'

function ReportPage() {
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

        {/* project we have done */}
        <div className='we_done'>
          <div className='done'>
            <section id='wdone'>
              <div className='formR'>
                <form className='reportR'>
                  <div className='emailR'>
                    <label htmlFor='email'>Email</label>
                    <input
                      placeholder='Adeolasarah@gmail.com'
                      type='email'
                      id='emailR'
                      name='email'
                      value=''
                    />
                  </div>

                  <div className='ageR'>
                    <label name='Age'>Age</label>
                    <input
                      placeholder='18 yrs'
                      type='number'
                      id='ageR'
                      name='Age'
                      value=''
                    />
                  </div>
                  <div className='addressR'>
                    <label name='lastName'>Address of Inicidence*</label>
                    <input
                      placeholder='Adeolasarah@gmail.com'
                      type='text'
                      id='addressR'
                      name='addressR'
                      value=''
                    />
                  </div>

                  <div className='relationship'>
                    <label name='relationship'>Relationship with Abuser*</label>
                    <input
                      placeholder=''
                      type='text'
                      id='relationship'
                      name='relationship'
                      value=''
                    />
                  </div>
                  <div className='reportAbuse'>
                    <label name='reportAbuse'>report abusa*</label>
                    <input
                      placeholder='Type your message'
                      type='text'
                      id='reportAbuse'
                      name='reportAbuse'
                      value=''
                    />
                  </div>
                  <div className='Upload_Evidence'>
                    <label name='Upload_Evidence'>Upload Evidence*</label>
                    <input
                      placeholder=''
                      type='text'
                      id='Upload_Evidence'
                      name='reportAbuse'
                      value=''
                    />
                    <div className='upload_Evidend'></div>
                  </div>

                  <div className='btnR'>
                    <button type='submit' className='submit_abuse'>
                      submit abuse
                    </button>
                    <button type='submit' className='Download_Form'>
                      Download Form
                    </button>
                  </div>
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

export default ReportPage
