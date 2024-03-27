import React from 'react'
import logo from './img/LOGO.svg'
import { IoMdContacts } from 'react-icons/io'
import { FaLongArrowAltRight } from 'react-icons/fa'

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
          <div className='what'>
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
          <div className='what_i'>{/* <img src={image_w} alt='what' /> */}</div>
        </div>
        {/* project we have done */}
        <div className='we_done'>
          <div className='done'>
            <section id='wdone'>
              <p id='line'></p>
              <h4>Projects we have done</h4>
            </section>
            <div className='done_k'>
              <h3>
                We are creating a place where victims can find sanctuary,
                solace, and solidarity as they embark on their journey of
                healing power
              </h3>
            </div>
          </div>
          {/* the three display */}
          <div className='all'>
            <div className='d_one'></div>
            <div className='d_two'></div>
            <div className='d_three'></div>
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
              <button type='submit'>subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
