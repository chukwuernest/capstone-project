import React from 'react'
import Servicestyle from './ServicesPage.module.css'
import { IoMdContacts } from 'react-icons/io'
import Nav1 from './nav1'
import NextEvent from './NextEvent'
import Footer from './footer'

function ServicePage() {
  return (
    <div className={Servicestyle.homepage}>
      <Nav1 />
      <div className={Servicestyle.section}>
        {/* this is the nav code */}

        {/* here is for the image and also positioning */}
        <div className={Servicestyle.homeI}>
          <div className={Servicestyle.moreAboutUs1}>
            <div className={Servicestyle.knowingMore}>
              <section id={Servicestyle.lineHead}>
                <p id={Servicestyle.line}></p>
                <h4>Know About us</h4>
              </section>
              <div className={Servicestyle.infor_know}>
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
          <div className={Servicestyle.seconds}>
            {/* <img src='../try.try/try.jpg' alt='second' /> */}
          </div>
        </div>

        {/* what we do */}
        <div className={Servicestyle.whatS}>
          <div className={Servicestyle.what_W_D}>
            <div className={Servicestyle.what}>
              <section id={Servicestyle.wHead}>
                <p id={Servicestyle.line}></p>
                <h4>what we do</h4>
              </section>

              <div className={Servicestyle.what_k}>
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

              <div className={Servicestyle.what_is}>
                <p>
                  <IoMdContacts />
                  Legal Advocacy: We help victims ito identify their rights,
                  discuss legal options available to them, and provide guidance
                  on how to navigate the legal system.
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
                  components where participants learn about the dynamics of
                  abuse, trauma responses, coping skills, self-care techniques,
                  and available resources.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* project we have done */}
        <div className={Servicestyle.we_done}>
          <div className={Servicestyle.done}>
            <section id={Servicestyle.wdone}>
              <p id={Servicestyle.line}></p>
              <h4>Projects we have done</h4>
            </section>
            <div className={Servicestyle.done_k}>
              <h3>
                We are creating a place where victims can find sanctuary,
                solace, and solidarity as they embark on their journey of
                healing power
              </h3>
            </div>
          </div>
          {/* the three display */}
          <div className={Servicestyle.all}>
            <div className={Servicestyle.d_one}>
              <div className={Servicestyle.d_oneI}>
                {/* <img src='../try.try/image1.jpg' alt='image1' srcset='' /> */}
              </div>

              <h3>
                Mission Smile <span>A visit to the refugee</span>
              </h3>
              <a href='#' id={Servicestyle.learn_mored}>
                learn more
              </a>
            </div>
            <div className={Servicestyle.d_two}>
              <div className={Servicestyle.d_twoI}>
                {/* <img src='../try.try/image2.jpg' alt='image2' srcset='' /> */}
              </div>

              <h3>
                Monthly <span>public awareness</span>
              </h3>
              <a href='#' id={Servicestyle.learn_mored}>
                learn more
              </a>
            </div>
            <div className={Servicestyle.d_three}>
              <div className={Servicestyle.d_threeI}>
                {/* <img src='../try.try/image3.jpg' alt='image3' srcset='' /> */}
              </div>

              <h3>
                Seminars and Open <span>Discussion</span>
              </h3>
              <a href='#' id={Servicestyle.learn_mored}>
                learn more
              </a>
            </div>
          </div>
        </div>

        {/* Join as a volunteer */}
        <div className={Servicestyle.join_volunteer}>
          <p>
            You can contribute or volunteer in our organization to provide
            support for abused victims by offering your time, skills, and
            compassion.....................
          </p>
          <div className={Servicestyle.backImg}></div>
          {/* <img src={image_17} alt='volunteer' /> */}
          <a href='#' className={Servicestyle.volunteer}>
            Join as a volunteer
          </a>
          <a href='#' className={Servicestyle.donate}>
            donate
          </a>
        </div>
        <NextEvent />
        {/* footer */}
        <Footer />
      </div>
    </div>
  )
}

export default ServicePage
