import React from 'react'
import './Contact.css'
function Contact() {
  const handleform=()=>{
    
    alert("your QUERY is been submited")
  }
  return (
    <>
        <h1 className='heading'>Contact Me :</h1>
    <div className='contact'>
        <label>Your Name</label>
        <input className='enter' type='Text' placeholder='Enter Your Name ' required></input>
        <label>Your E-mail</label>

        <input className='enter' type='email' placeholder='Enter Your E-Mail' required></input>
        <label>Your Query</label>

      <textarea id='textarea' className='enter'  placeholder="Write Something . . . . " required ></textarea>
      <button className='submit' type="submit" onClick={handleform}>Submit</button>
    </div>
    </>
  )
}

export default Contact