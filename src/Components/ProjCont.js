import React from 'react'
import './ProjCont.css'
import {Link} from 'react-router-dom'

function ProjCont(props) {
  return (
    <div className='proj-container' >
      <div className='img-box'>
        <h2 className=' proj-title'>{props.title}</h2>
            <img className='proj-img' src={props.img} alt='...'></img>
      </div>
        <div className='proj-desp'>
           {props.desc}
            <Link to={props.link}>
        <button className='visit' type='submit' >{`visit->`}</button>
            
            </Link>
        </div>


    </div>
  )
}

export default ProjCont