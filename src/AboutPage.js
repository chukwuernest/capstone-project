import React from 'react'
import logo from './img/LOGO.svg'
import image_k from './img/Frame 1000011687.svg'
import image_w from './img/Frame 1000011685.svg'
import image_17 from './img/image 17.svg'
import { IoMdContacts } from 'react-icons/io'
import { FaLongArrowAltRight } from 'react-icons/fa'

function AboutPage() {
  return (
    <div className='homepage'>
      <div className='section'>
        {/* this is the nav code */}
        <nav className='navbar'>
          <img src={logo} alt='logo' />
          <div className='mainNav'>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='otherNav'>
            <ul>
              <li>
                <a href='#'>report case</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* here is for the image and also positioning */}
        <div className='homeI'>
          <div className='firstA'>
            {/* <img src='../try.try/try.jpg' alt='first' /> */}
          </div>
          {/* <section className='note'>
            <h2>
              We empower survivors to reclaim their dignity, voice, and agency.
            </h2>
            <h4>More than 230 resolved cases</h4>
          </section> */}
          <div className='secondA'>
            {/* <img src='../try.try/try.jpg' alt='second' /> */}
          </div>
        </div>
        {/* this is the know more about us part */}
        <div className='moreAboutUs'>
          <div className='knowingMore'>
            <div className='infor_know'>
              <h3>Who are we?</h3>
              <p>
                Welcome to Safe Haven, a beacon of hope and healing for those
                who have endured the torment of abuse. At Safe Haven, we stand
                firm in our commitment to empower survivors, foster resilience,
                and advocate for a world free from all forms of exploitation and
                violence.
              </p>
              <h3>Our Mission</h3>
              <p>
                Our mission is rooted in the belief that every individual
                deserves to live a life free from fear, trauma, and oppression.
                We strive to provide comprehensive support and resources to
                survivors of abuse, empowering them to reclaim their dignity,
                rebuild their lives, and thrive beyond their past experiences.
              </p>
            </div>
          </div>
          <div className='imageKnowA'>
            {/* <img src={image_k} alt='know' /> */}
          </div>
        </div>

        {/* what we do */}
        <div className='what_W_D'>
          <div className='what'>
            <div className='what_k'>
              <h3>Our Approach</h3>
              <p>
                At SafeHaven, we understand that the journey to healing is
                unique for each survivor. Therefore, we offer a holistic
                approach that encompasses emotional support, legal assistance,
                educational resources, and community outreach. Through our
                trauma-informed programs and services, we aim to address the
                complex needs of survivors while fostering a culture of empathy,
                respect, and understanding.
              </p>
              <h3>Impact</h3>
              <p>
                SafeHaven has made a tangible difference in the lives of
                countless survivors, providing them with the support and
                resources they need to overcome adversity and thrive. Through
                our advocacy efforts, we have also contributed to raising
                awareness, challenging societal norms, and influencing policy
                changes to prevent abuse and protect vulnerable populations.
              </p>
            </div>
          </div>
          <div className='what_iA'>
            {/* <img src={image_w} alt='what' /> */}
          </div>
        </div>
        {/* project we have done */}
        {/* <div className='we_done'> */}
        <div className='done'></div>
        {/* the three display */}
        <div className='all'>
          <div className='Our_Values'>
            <h3>Our Values</h3>
            <p>
              We approach our work with empathy and compassion, recognizing the
              inherent dignity and worth of every individual.
            </p>
            <p>
              We empower survivors to reclaim their agency, voice, and autonomy
              in their healing journey.
            </p>
            <p>
              We believe in the power of collaboration and partnership to create
              meaningful change and support the broader community in ending
              abuse.
            </p>
            <p>
              We advocate for systemic change and social justice to create a
              world where abuse is not tolerated, and all individuals can live
              with dignity and safety.
            </p>
          </div>

          <div className='Get_Involved'>
            <h3>Get Involved</h3>
            <p>
              Join us in our mission to create a world free from abuse. Whether
              through volunteering, donating, or spreading awareness, your
              support enables us to continue our vital work and make a lasting
              impact in the lives of survivors and their communities.
            </p>
            <a href='#' className='volunteer1'>
              Join as a volunteer
            </a>
            <a href='#' className='donate1'>
              donate
            </a>
          </div>
        </div>

        <div className='Our_Events'>
          <section id='Our_Events'>
            <h4>Our Events</h4>
            <p id='Our_Events_line'></p>
          </section>
          <h3>
            Join us in our mission to empower and uplift abused victims on their
            journey towards healing and recovery
          </h3>
        </div>
        <div className='next_event'>
          <section id='next_event1'>
            <p>
              13 <span>apr</span>
            </p>
            <div className='nextandline1'>
              <h4>next events</h4>
              <p></p>
              <h3>
                A day out with abused <span>victims</span>
              </h3>
              <a href='#'>
                <FaLongArrowAltRight />
              </a>
            </div>
          </section>
          {/* this is the second event view */}
          <section id='next_event2'>
            <p>
              25 <span>apr</span>
            </p>
            <div className='nextandline2'>
              <h4>next events</h4>
              <p></p>
              <h3>
                Seminar: Empowering victims on their journey towards healing and
                recovery
              </h3>
              <a href='#'>
                <FaLongArrowAltRight />
              </a>
            </div>
          </section>
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

export default AboutPage
