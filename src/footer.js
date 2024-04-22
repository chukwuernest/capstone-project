import React from 'react'
import Footstyle from './footer.module.css'

function footer() {
  return (
    <div className={Footstyle.footerHome}>
      <div className={Footstyle.foot_img}>
        <img src='../try.try/logo.jpg' alt='logo' />
      </div>
      <div className={Footstyle.foot_links1}>
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
      <div className={Footstyle.foot_links2}>
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
      <div className={Footstyle.foot_links3}>
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
      <div className={Footstyle.foot_sub}>
        <h2>Subscribe to get latest updates</h2>

        <form>
          <input type='email' id='' name='email' placeholder='email' />
          <button type='submit'>subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default footer
