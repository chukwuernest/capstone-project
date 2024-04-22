import React from 'react'
import homestyle from './homepage.module.css'
import { IoMdContacts } from 'react-icons/io'
import NextEvent from './NextEvent'
import Nav1 from './nav1'
import Footer from './footer'

function HomePage() {
  return (
    <div className={homestyle.homepage}>
      <Nav1 />
      <div className={homestyle.section}>
        {/* here is for the image and also positioning */}
        <div className={homestyle.homeI}>
          <div className={homestyle.firstH}>
            {/* <img src='../try.try/try.jpg' alt='first' /> */}
          </div>
          <section className={homestyle.note}>
            <h2>
              We empower survivors to reclaim their dignity, voice, and agency.
            </h2>
            <h4>More than 230 resolved cases</h4>
          </section>
          <div className={homestyle.secondH}>
            {/* <img src='../try.try/try.jpg' alt='second' /> */}
          </div>
        </div>

        {/* this is the know more about us part */}
        <div className={homestyle.moreAboutUs}>
          <div className={homestyle.knowingMore}>
            <section id={homestyle.lineHead}>
              <p id={homestyle.line}></p>
              <h4>Know About us</h4>
            </section>
            <div className={homestyle.infor_know}>
              <h3>
                We provide support for anyone going through any form of abuses
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
              <a href='#' id={homestyle.learn_more}>
                learn more
              </a>
            </div>
          </div>
          <div className={homestyle.imageKnowH}>
            {/* <img src={image_k} alt='know' /> */}
          </div>
        </div>
        {/* this is for sponsors */}
        {/* <div className={homestyle.sponsor}>
          <div className={homestyle.sponsor_h}>
            <h3>OUR SUPPORTERS</h3>
            <p></p>
          </div>
        </div> */}
        {/* what we do */}
        <div className={homestyle.what_W_D}>
          <div className={homestyle.what}>
            <section id={homestyle.wHead}>
              <p id={homestyle.line}></p>
              <h4>what we do</h4>
            </section>
            <div className={homestyle.what_k}>
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
          <div className={homestyle.what_i}>
            {/* <img src={image_w} alt='what' /> */}
          </div>
        </div>
        {/* project we have done */}
        <div className={homestyle.we_done}>
          <div className={homestyle.done}>
            <section id={homestyle.wdone}>
              <p id={homestyle.line}></p>
              <h4>Projects we have done</h4>
            </section>
            <div className={homestyle.done_k}>
              <h3>
                We are creating a place where victims can find sanctuary,
                solace, and solidarity as they embark on their journey of
                healing power
              </h3>
            </div>
          </div>
          {/* the three display */}
          <div className={homestyle.all}>
            <div className={homestyle.d_one}>
              <div className={homestyle.d_oneI}>
                {/* <img src='../try.try/image1.jpg' alt='image1' srcset='' /> */}
              </div>

              <h3>
                Mission Smile <span>A visit to the refugee</span>
              </h3>
              <a href='#' id={homestyle.learn_mored}>
                learn more
              </a>
            </div>
            <div className={homestyle.d_two}>
              <div className={homestyle.d_twoI}>
                {/* <img src='../try.try/image2.jpg' alt='image2' srcset='' /> */}
              </div>

              <h3>
                Monthly <span>public awareness</span>
              </h3>
              <a href='#' id={homestyle.learn_mored}>
                learn more
              </a>
            </div>
            <div className={homestyle.d_three}>
              <div className={homestyle.d_threeI}>
                {/* <img src='../try.try/image3.jpg' alt='image3' srcset='' /> */}
              </div>

              <h3>
                Seminars and Open <span>Discussion</span>
              </h3>
              <a href='#' id={homestyle.learn_mored}>
                learn more
              </a>
            </div>
          </div>
        </div>
        {/* this is the ellipse design */}
        <div className={homestyle.rainbow}>
          <div className={homestyle.rainbow_right}>
            <h3>
              How we spend your donations and <span>where it goes</span>
            </h3>
            <p>
              We understand that when you make a  donation, you want to know
              <span>
                exactly where your money is going and we pledge to be
                transparent.
              </span>
            </p>
            <div className={homestyle.rainbow_buttom}>
              <section id={homestyle.rainbow_buttom1}>
                <article className={homestyle.p1}>
                  <p>
                    <span></span> 40% Direct Victim Service
                  </p>
                </article>
                <article className={homestyle.p2}>
                  <p>
                    <span></span>35% Legal Advocacy and Suppor
                  </p>
                </article>
                <article className={homestyle.p3}>
                  <p>
                    <span></span>10% Medical Assistance
                  </p>
                </article>
              </section>

              <section id={homestyle.rainbow_buttom2}>
                <article className={homestyle.p4}>
                  <p>
                    <span></span>5% Prevention and Education Program
                  </p>
                </article>
                <article className={homestyle.p5}>
                  <p>
                    <span></span>5% Prevention and Education Program
                  </p>
                </article>
              </section>
            </div>
          </div>
          {/* this is the ellipse positioning 5 color*/}
          <div className={homestyle.ellipse}></div>
        </div>
        {/* Join as a volunteer */}
        <div className={homestyle.join_volunteer}>
          <p>
            You can contribute or volunteer in our organization to provide
            support for abused victims by offering your time, skills, and
            compassion
          </p>
          <div className={homestyle.backImg}></div>
          {/* <img src={image_17} alt='volunteer' /> */}
          <a href='#' className={homestyle.volunteer}>
            Join as a volunteer
          </a>
          <a href='#' className={homestyle.donate}>
            donate
          </a>
        </div>
        <NextEvent />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
