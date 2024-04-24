import React from 'react'
import { IoNotificationsOffSharp } from 'react-icons/io5'
import AdminNavStyle from './AdminNav.module.css'

function AdminNav() {
  return (
    <div className={AdminNavStyle.home}>
      <div className={AdminNavStyle.main}>
        <div className={AdminNavStyle.section}>
          <div className={AdminNavStyle.img}></div>
          <form>
            <input type='search' name='' id='' placeholder='Search' />
          </form>
          <div className={AdminNavStyle.detail}>
            <h1></h1>
            <p>Agent{''}</p>
            <p>
              <IoNotificationsOffSharp />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNav
