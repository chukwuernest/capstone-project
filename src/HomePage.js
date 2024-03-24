import React from 'react'
import logo from './img/LOGO.svg'
import image_k from './img/Frame 1000011687.svg'
import image_w from './img/Frame 1000011685.svg'
import { IoMdContacts } from 'react-icons/io'

function HomePage() {
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
          <div className='first'>
            <img src='../try.try/try.jpg' alt='first' />
          </div>
          <section className='note'>
            <h2>
              We empower survivors to reclaim their dignity, voice, and agency.
            </h2>
            <h4>More than 230 resolved cases</h4>
          </section>
          <div className='second'>
            <img src='../try.try/try.jpg' alt='second' />
          </div>
        </div>
        {/* this is the know more about us part */}
        <div className='moreAboutUs'>
          <div className='knowingMore'>
            <section id='lineHead'>
              <p id='line'></p>
              <h4>Know About us</h4>
            </section>
            <div className='infor_know'>
              <h3>
                We provide support for anyone going through any form of abuses{' '}
              </h3>
              <p>
                Our mission is to offer a safe haven for those who have
                experienced such trauma, fostering a nurturing environment where
                survivors can heal and rebuild their lives. We strive to empower
                survivors to reclaim their dignity, voice, and agency.
              </p>
              <p>
                Our team of trained professionals and volunteers work tirelessly
                to ensure that survivors receive the care, respect, and justice
                they deserve. Together, we stand as a beacon of hope,
                solidarity, and compassion, advocating for a world free from
                violence and oppression.
              </p>
              <a href='#' id='learn_more'>
                learn more
              </a>
            </div>
          </div>
          <div className='imageKnow'>
            <img src={image_k} alt='know' />
          </div>
        </div>
        {/* this is foe sponsors */}
        <div className='sponsor'>
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
        {/* what we do */}
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
                help them process their experiences, understand their emotions,
                and develop coping strategies. .
              </p>
              <p>
                <IoMdContacts />
                Legal Advocacy: We help victims ito identify their rights,
                discuss legal options available to them, and provide guidance on
                how to navigate the legal system.
              </p>
              <p>
                <IoMdContacts />
                Medical Support: We collaborate with healthcare professionals
                and other support services to provide comprehensive care.
              </p>
              <p>
                <IoMdContacts />
                Creating Safe Spaces: We create safe and confidential
                environments where abuse victims can come together to share
                their experiences, emotions, and challenges without fear of
                judgment or retaliation.
              </p>
            </div>
          </div>
          <div className='what_i'>
            <img src={image_w} alt='what' />
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
              <img src='../try.try/image1.jpg' alt='image1' srcset='' />
              <h3>
                Mission Smile <span>A visit to the refugee</span>
              </h3>
              <a href='#' id='learn_mored'>
                learn more
              </a>
            </div>
            <div className='d_two'>
              <img src='../try.try/image2.jpg' alt='image2' srcset='' />
              <h3>
                Monthly <span>public awareness</span>
              </h3>
              <a href='#' id='learn_mored'>
                learn more
              </a>
            </div>
            <div className='d_three'>
              <img src='../try.try/image3.jpg' alt='image3' srcset='' />
              <h3>
                Seminars and Open <span>Discussion</span>
              </h3>
              <a href='#' id='learn_mored'>
                learn more
              </a>
            </div>
          </div>
          {/* this is the rainbow design */}
          <div className='rainbow'>
            <div className='rainbow_right'>
              <h3>How we spend your donations and where it goes</h3>
              <p>
                We understand that when you make a  donation, you want to know
                exactly where your money is going and we pledge to be
                transparent.
              </p>
            </div>
            <div className='rainbow_left'>
              <img src='../try.try/chart.jpg' alt='chart' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
