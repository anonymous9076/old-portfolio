import React from 'react'
import './Sec5.css'

function Sec5() {
  return (
    <div className='sec5'>
        <h1 className='colorful'> Contact Me :</h1>
        <div className='contact-box'>
            <div className='cont-area'>
                <span className='enter-field'>
                    <label>First Name</label><br></br>
                    <input placeholder='Enter your firstname' ></input>
                </span>
                <span className='enter-field'>
                    <label>Last Name</label><br></br>
                    <input placeholder='Enter your lastname'></input>
                </span>
                <span className='enter-field'>
                    <label>E-mail</label><br></br>
                    <input placeholder='Enter your email'></input>
                </span>
                <span className='enter-field'>
                    <label>Phone-No.</label><br></br>
                    <input placeholder='Enter your number'></input>
                </span>
                <span className='enter-field'>
                    <label>Your Query</label><br></br>
                    <textarea placeholder='Enter your query'></textarea>
                </span>
                <span className='enter-field for-btn'><button type='submit' className='sb-btn'>Submit</button></span>
            </div>
        </div>
    </div>
  )
}

export default Sec5