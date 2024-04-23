import React from 'react'
import logo from './img/LOGO.svg'
import { IoMdContacts } from 'react-icons/io'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Errorstyle from './ErrorPage.module.css'
import Nav1 from './nav1'
import Footer from './footer'

function ErrorPage() {
  return (
    <div className='homepage'>
      <div className='section'>
        {/* this is the nav code */}

        {/* project we have done */}
        <div className={Errorstyle.we_done}>
          <Nav1 />
          <div className={Errorstyle.done}>
            <section id={Errorstyle.wdone1}>
              <h3>Something went wrong!</h3>
              <h4>This is awkward! You entered a wrong URL.</h4>
              <ul>
                <li>
                  <a href='/HomePage'>Go Back To Home Page</a>
                </li>
              </ul>
            </section>
            <div className={Errorstyle.done_kE}></div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  )
}

export default ErrorPage
