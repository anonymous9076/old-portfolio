import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './Sec1.css';
import { Link } from 'react-router-dom'

function Sec1() {
    return (
        <div>
            <div className='intro'>
                <div className='art'></div>
                <div className='art2'></div>

                <div className='text'>
                    <h1 className='name'>TUSHAR KUMAR</h1>
                    <h2>Web Developer</h2>
                    <p>Computer Science
                        student.
                        I consider my self a
                        responsible and orderly
                        person.
                        I am looking foward for
                        my first work
                        experience.
                    </p>
                    <div className='contact-list'>
                        <ul className='list'>
                            <Link to="https://github.com/anonymous9076" style={{ color: 'white' }} >
                                <li className='icons'><FaGithub /></li>
                            </Link>
                            <Link to='https://www.instagram.com/__tushar__4369/' style={{ color: 'white' }}>
                                <li className='icons'><FaInstagram /></li>
                            </Link>
                            <Link to='https://www.linkedin.com/in/mr-tushar-903636280/' style={{ color: 'white' }}>
                                <li className='icons'><FaLinkedinIn /></li>
                            </Link>
                            <Link style={{ color: 'white' }} to='/'>
                                <li className='icons'><FaEnvelope /></li>
                            </Link>

                        </ul>
                    </div>
                </div>
                <img className='my-pic' src='./images/adu2.png' alt='...'></img>
            </div>
        </div>
    )
}

export default Sec1