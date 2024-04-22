import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Nextstyle from './NextEvent.module.css'

function NextEvent() {
  return (
    <div>
      <div className={Nextstyle.Our_Events}>
        <section id={Nextstyle.Our_Events}>
          <h4>Our Events</h4>
          <p id={Nextstyle.Our_Events_line}></p>
        </section>
        <h3>
          Join us in our mission to empower and uplift abused victims on their
          journey towards healing and recovery
        </h3>
      </div>
      <div className={Nextstyle.next_event}>
        <section id={Nextstyle.next_event1}>
          <p>
            13 <span>apr</span>
          </p>
          <div className={Nextstyle.nextandline1}>
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
        <section id={Nextstyle.next_event2}>
          <p>
            25 <span>apr</span>
          </p>
          <div className={Nextstyle.nextandline2}>
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
    </div>
  )
}

export default NextEvent
