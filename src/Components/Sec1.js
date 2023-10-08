import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './Sec1.css';

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
                            <li className='icons'><FaGithub /></li>
                            <li className='icons'><FaInstagram /></li>
                            <li className='icons'><FaLinkedinIn /></li>
                            <li className='icons'><FaEnvelope /></li>
                        </ul>
                    </div>
                </div>
                <img className='my-pic' src='./images/my.png' alt='...'></img>
            </div>
        </div>
    )
}

export default Sec1