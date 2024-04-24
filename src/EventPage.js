import React from 'react'
import Eventstyle from './EventPage.module.css'
import Nav1 from './nav1'
import Footer from './footer'
function EventPage() {
  return (
    <div className={Eventstyle.Home}>
      <Nav1 />
      <div className={Eventstyle.main}>
        <div className={Eventstyle.section}>
          <h1>Celebrating Resilience: An Outing with Abused Survivors</h1>
          <div className={Eventstyle.update}>
            <h4>📍 4 Broad Avenue, Lagos Nigeria.</h4>
            <h3>🗓 April 23, 2024 8:30 AM</h3>
          </div>
        </div>
        <div className={Eventstyle.section2}>
          <h4>About</h4>
          <p>
            Promises of comfort and healing were more than just words in the
            peaceful haven we created; they served as the cornerstone around
            which change took root.
          </p>
          <p>
            Some victim’s eyes etched with the weight of emotional turmoil
            endured over years, there were those whose laughter danced like
            sunlight on water, masking the invisible scars of physical pain; and
            Emily, whose quiet strength spoke volumes of her survivor's spirit
          </p>
          <p>
            Together, they embarked on a profound journey of healing, guided by
            the tender touch of our volunteers and the profound bond of shared
            experience. In workshops on mindfulness and meditation, they learned
            to tame the tumultuous echoes of their past, embracing the serenity
            of the present moment. Through art therapy sessions, they spilled
            their pain onto canvas, transforming chaos into beauty with each
            brushstroke. And in group discussions, they found solace in the
            empathetic embrace of fellow survivors, sharing their stories with
            courage and vulnerability.
          </p>
          <div className={Eventstyle.img}></div>
          <p>
            {' '}
            As they bid farewell to our sanctuary and ventured back into the
            world, they carried with them the seeds of hope sown within their
            hearts—a testament to the transformative power of resilience, the
            beauty of solidarity, and the boundless possibilities that awaited
            them on their journey ahead.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EventPage
