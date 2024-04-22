import React from 'react'

function joinAsV() {
  return (
    <div>
      <div className='form1'>
        <form>
          <div className='firstName'>
            <label name='firstName'>First Name</label>
            <input
              placeholder='Adeola'
              type='text'
              id='firstName'
              name='firstName'
              value=''
            />
          </div>
          <div className='lastName'>
            <label name='lastName'>last Name</label>
            <input
              placeholder='Sarah'
              type='text'
              id='lastName'
              name='lastName'
              value=''
            />
          </div>

          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input
              placeholder='Adeolasarah@gmail.com'
              type='email'
              id='email'
              name='email'
              value=''
            />
          </div>
          <div className='subject'>
            <label htmlFor='textInput'>subject</label>
            <input type='text' id='subject' value='' />
          </div>

          <div className='message'>
            <label htmlFor='message'>Message</label>
            <textarea placeholder='Type your message' id='message' value='' />
          </div>
          <button type='submit' className='send_message'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default joinAsV
