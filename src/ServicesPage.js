import React from 'react'
import logo from './img/LOGO.svg'
import { IoMdContacts } from 'react-icons/io'
import { FaLongArrowAltRight } from 'react-icons/fa'

function ServicesPage() {
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
          <div className='moreAboutUs1'>
            <div className='knowingMore'>
              <section id='lineHead'>
                <p id='line'></p>
                <h4>Know About us</h4>
              </section>
              <div className='infor_know'>
                <h3>
                  We provide support for anyone going through any form of abuses
                </h3>
                <p>
                  Our mission is to offer a safe haven for those who have
                  experienced such trauma, fostering a nurturing environment
                  where survivors can heal and rebuild their lives. We strive to
                  empower survivors to reclaim their dignity, voice, and agency.
                </p>
                <p>
                  Our team of trained professionals and volunteers work
                  tirelessly to ensure that survivors receive the care, respect,
                  and justice they deserve. Together, we stand as a beacon of
                  hope, solidarity, and compassion, advocating for a world free
                  from violence and oppression.
                </p>
              </div>
            </div>
          </div>
          <div className='seconds'>
            {/* <img src='../try.try/try.jpg' alt='second' /> */}
          </div>
        </div>

        {/* what we do */}
        <div className='whatS'>
          <div className='what_W_D'>
            <div className='what'>
              <section id='wHead'>
                <p id='line'></p>
                <h4>what we do</h4>
              </section>
              <div className='what_k'>
                <h3>Some services we provide to Abused Victims</h3>
                <p>
                  <IoMdContacts />
                  Counselling:we offer one-on-one sessions to abuse victims to
                  help them process their experiences, understand their
                  emotions, and develop coping strategies. .
                </p>

                <p>
                  <IoMdContacts />
                  Medical Support: We collaborate with healthcare professionals
                  and other support services to provide comprehensive care.
                </p>
                <p>
                  <IoMdContacts />
                  Peer Support: We offer survivors the opportunity to connect
                  with others who have gone through similar experience
                  scollaborate with healthcare professionals and other support
                  services to provide comprehensive care.
                </p>
              </div>
            </div>
            <div className='what_is'>
              {/* <img src={image_w} alt='what' /> */}
              <p>
                <IoMdContacts />
                Legal Advocacy: We help victims ito identify their rights,
                discuss legal options available to them, and provide guidance on
                how to navigate the legal system.
              </p>
              <p>
                <IoMdContacts />
                Creating Safe Spaces: We create safe and confidential
                environments where abuse victims can come together to share
                their experiences, emotions, and challenges without fear of
                judgment or retaliation.
              </p>
              <p>
                <IoMdContacts />
                Psychoeducation: Support groups may include psychoeducational
                components where participants learn about the dynamics of abuse,
                trauma responses, coping skills, self-care techniques, and
                available resources.
              </p>
            </div>
          </div>
          {/* this is foe sponsors */}
          <div className='sponsor1'>
            <div className='sponsor_h'>
              <h3>OUR SUPPORTERS</h3>
              <p></p>
            </div>
            <div className='sponsor_I'>
              <div className='try1'>
                <img src='' alt='sponsor1' srcset='sponsor1' />
                <p>john</p>
              </div>
              <div className='try2'>
                <img src='' alt='sponsor2' srcset='sponsor2' />
                <p>jams</p>
              </div>
              <div className='try3'>
                <img src='' alt='sponsor2' srcset='sponsor2' />
                <p>jams</p>
              </div>
              <div className='try4'>
                <img src='' alt='sponsor2' srcset='sponsor2' />
                <p>jams</p>
              </div>
              <div className='try5'>
                <img src='' alt='sponsor2' srcset='sponsor2' />
                <p>jams</p>
              </div>
              <div className='try6'>
                <img src='' alt='sponsor2' srcset='sponsor2' />
                <p>jams</p>
              </div>
            </div>
          </div>
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
            <div className='d_one'>
              <div className='d_oneI'>
                {/* <img src='../try.try/image1.jpg' alt='image1' srcset='' /> */}
              </div>

              <h3>
                Mission Smile <span>A visit to the refugee</span>
              </h3>
              <a href='#' id='learn_mored'>
                learn more
              </a>
            </div>
            <div className='d_two'>
              <div className='d_twoI'>
                {/* <img src='../try.try/image2.jpg' alt='image2' srcset='' /> */}
              </div>

              <h3>
                Monthly <span>public awareness</span>
              </h3>
              <a href='#' id='learn_mored'>
                learn more
              </a>
            </div>
            <div className='d_three'>
              <div className='d_threeI'>
                {/* <img src='../try.try/image3.jpg' alt='image3' srcset='' /> */}
              </div>

              <h3>
                Seminars and Open <span>Discussion</span>
              </h3>
              <a href='#' id='learn_mored'>
                learn more
              </a>
            </div>
          </div>
        </div>

        {/* Join as a volunteer */}
        <div className='join_volunteer'>
          <p>
            You can contribute or volunteer in our organization to provide
            support for abused victims by offering your time, skills, and
            compassion
          </p>
          <div className='backImg'></div>
          {/* <img src={image_17} alt='volunteer' /> */}
          <a href='#' className='volunteer'>
            Join as a volunteer
          </a>
          <a href='#' className='donate'>
            donate
          </a>
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

export default ServicesPage
