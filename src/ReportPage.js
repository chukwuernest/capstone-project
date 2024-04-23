import React from 'react'
import logo from './img/LOGO.svg'
import Nav1 from './nav1'
import Footer from './footer'
import Reportstyle from './ReportPage.module.css'

function ReportPage() {
  return (
    <div className='homepage'>
      <div className='section'>
        {/* this is the nav code */}

        {/* project we have done */}
        <div className={Reportstyle.we_done}>
          <div className={Reportstyle.done}>
            <section id={Reportstyle.wdone}>
              <Nav1 />
              <div className={Reportstyle.formR}>
                <form className={Reportstyle.reportR}>
                  <div className={Reportstyle.emailR}>
                    <label htmlFor='email'>Email</label>
                    <input
                      placeholder='Adeolasarah@gmail.com'
                      type='email'
                      id='emailR'
                      name='email'
                      value=''
                    />
                  </div>

                  <div className={Reportstyle.ageR}>
                    <label name='Age'>Age</label>
                    <input
                      placeholder='18 yrs'
                      type='number'
                      id='ageR'
                      name='Age'
                      value=''
                    />
                  </div>
                  <div className={Reportstyle.addressR}>
                    <label name='lastName'>Address of Inicidence*</label>
                    <input
                      placeholder='Adeolasarah@gmail.com'
                      type='text'
                      id='addressR'
                      name='addressR'
                      value=''
                    />
                  </div>

                  <div className={Reportstyle.relationship}>
                    <label name='relationship'>Relationship with Abuser*</label>
                    <input
                      placeholder=''
                      type='text'
                      id='relationship'
                      name='relationship'
                      value=''
                    />
                  </div>
                  <div className={Reportstyle.reportAbuse}>
                    <label name='reportAbuse'>report abusa*</label>
                    <input
                      placeholder='Type your message'
                      type='text'
                      id='reportAbuse'
                      name='reportAbuse'
                      value=''
                    />
                  </div>
                  <div className={Reportstyle.Upload_Evidence}>
                    <label name='Upload_Evidence'>Upload Evidence*</label>
                    <input
                      placeholder=''
                      type='text'
                      id='Upload_Evidence'
                      name='reportAbuse'
                      value=''
                    />
                    <div className={Reportstyle.upload_Evidend_img}></div>
                  </div>

                  <div className={Reportstyle.btnR}>
                    <button type='submit' className={Reportstyle.submit_abuse}>
                      submit abuse
                    </button>
                    <button type='submit' className={Reportstyle.Download_Form}>
                      Download Form
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  )
}

export default ReportPage
