import React from 'react'
import './Sec1.css'
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import {Link} from 'react-router-dom'

function Sec1() {
  return (
    <div className='sec1'>
    <div className='container'>
      <div className='img-glow'>
      </div>
      <div className='intro'>
        <h2 className='text name'>TUSHAR KUMAR</h2>
        <h3>Web Developer</h3>
        <span className='contact'>
          <ul>
          <Link to='https://github.com/anonymous9076' className='icons'><FaGithub /></Link>
          <Link to='https://www.instagram.com/__tushar__4369/' className='icons'><FaInstagram /></Link>
          <Link to ='http://www.linkedin.com/in/tushar-kumar-903636280' className='icons'><FaLinkedinIn /></Link>
          <Link className='icons'><FaEnvelope /></Link>
          </ul>
        </span>
      </div>
    </div>
    </div>
  )
}

export default Sec1