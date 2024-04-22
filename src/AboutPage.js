import React from 'react'
import logo from './img/LOGO.svg'
import image_k from './img/Frame 1000011687.svg'
import image_w from './img/Frame 1000011685.svg'
import image_17 from './img/image 17.svg'
import { IoMdContacts } from 'react-icons/io'
import Footer from './footer'
import Nav1 from './nav1'
import NextEvent from './NextEvent'
import Aboutstyle from './AboutPage.module.css'

function AboutPage() {
  return (
    <div className={Aboutstyle.Aboutpage}>
      <Nav1 />
      <div className={Aboutstyle.AboutI}>
        <div className={Aboutstyle.firstA}>
          {/* <img src='../try.try/try.jpg' alt='first' /> */}
        </div>
        {/* <section className='note'>
            <h2>
              We empower survivors to reclaim their dignity, voice, and agency.
            </h2>
            <h4>More than 230 resolved cases</h4>
          </section> */}
        <div className={Aboutstyle.secondA}>
          {/* <img src='../try.try/try.jpg' alt='second' /> */}
        </div>
      </div>
      {/* this is the know more about us part */}
      <div className={Aboutstyle.moreAboutUs}>
        <div className={Aboutstyle.knowingMore}>
          <div className={Aboutstyle.infor_know}>
            <h3>Who are we?</h3>
            <p>
              Welcome to Safe Haven, a beacon of hope and healing for those who
              have endured the torment of abuse. At Safe Haven, we stand firm in
              our commitment to empower survivors, foster resilience, and
              advocate for a world free from all forms of exploitation and
              violence.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is rooted in the belief that every individual deserves
              to live a life free from fear, trauma, and oppression. We strive
              to provide comprehensive support and resources to survivors of
              abuse, empowering them to reclaim their dignity, rebuild their
              lives, and thrive beyond their past experiences.
            </p>
          </div>
        </div>
        <div className={Aboutstyle.imageKnowA}>
          {/* <img src={image_k} alt='know' /> */}
        </div>
      </div>

      {/* what we do */}
      <div className={Aboutstyle.what_W_D}>
        <div className={Aboutstyle.what}>
          <div className={Aboutstyle.what_k}>
            <h3>Our Approach</h3>
            <p>
              At SafeHaven, we understand that the journey to healing is unique
              for each survivor. Therefore, we offer a holistic approach that
              encompasses emotional support, legal assistance, educational
              resources, and community outreach. Through our trauma-informed
              programs and services, we aim to address the complex needs of
              survivors while fostering a culture of empathy, respect, and
              understanding.
            </p>
            <h3>Impact</h3>
            <p>
              SafeHaven has made a tangible difference in the lives of countless
              survivors, providing them with the support and resources they need
              to overcome adversity and thrive. Through our advocacy efforts, we
              have also contributed to raising awareness, challenging societal
              norms, and influencing policy changes to prevent abuse and protect
              vulnerable populations.
            </p>
          </div>
        </div>
        <div className={Aboutstyle.what_iA}>
          {/* <img src={image_w} alt='what' /> */}
        </div>
      </div>

      <div className={Aboutstyle.all}>
        <div className={Aboutstyle.Our_Values}>
          <h3>Our Values</h3>
          <p>
            We approach our work with empathy and compassion, recognizing the
            inherent dignity and worth of every individual.
          </p>
          <p>
            We empower survivors to reclaim their agency, voice, and autonomy in
            their healing journey.
          </p>
          <p>
            We believe in the power of collaboration and partnership to create
            meaningful change and support the broader community in ending abuse.
          </p>
          <p>
            We advocate for systemic change and social justice to create a world
            where abuse is not tolerated, and all individuals can live with
            dignity and safety.
          </p>
        </div>

        <div className={Aboutstyle.Get_Involved}>
          <h3>Get Involved</h3>
          <p>
            Join us in our mission to create a world free from abuse. Whether
            through volunteering, donating, or spreading awareness, your support
            enables us to continue our vital work and make a lasting impact in
            the lives of survivors and their communities.
          </p>
          <a href='#' className={Aboutstyle.volunteer1}>
            Join as a volunteer
          </a>
          <a href='#' className={Aboutstyle.donate1}>
            donate
          </a>
        </div>
      </div>
      <NextEvent />
      {/* footer */}
      <Footer />
    </div>
  )
}

export default AboutPage
