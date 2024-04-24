import React from 'react'
import logo from './img/LOGO.svg'
import style from './nav1.module.css'

function Nav1() {
  return (
    <div className={style.navbar1}>
      {/* this is the nav code */}
      <nav className={style.navbar}>
        <img src={logo} alt='logo' />
        <div className={style.mainNav}>
          <ul>
            <li>
              <a href='/HomePage'>Home</a>
            </li>
            <li>
              <a href='/AboutPage'>About</a>
            </li>
            <li>
              <a href='/SevicePage'>Services</a>
            </li>
            <li>
              <a href='/ContactPage'>Contact</a>
            </li>
          </ul>
        </div>
        <div className={style.otherNav}>
          <ul>
            <li>
              <a href='ReportPage'>report case</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav1
