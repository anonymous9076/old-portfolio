import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
        <h1 className='heading'>Contact Me</h1>
        <label>Your Name</label>
        <input className='enter' type='Text' placeholder='Enter Your Name ' required></input>
        <label>Your E-mail</label>

        <input className='enter' type='email' placeholder='Enter Your E-Mail' required></input>
        <label>Your Query</label>

      <textarea id='textarea' className='enter'  placeholder="Write Something . . . . " required ></textarea>
    </div>
  )
}

export default Contact