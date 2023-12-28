import React from 'react'
import './Sec2.css'
import ProjCont from './ProjCont'

function Sec2() {
    return (
        <div className='proj'>
            <h1 className='colorful'>Projects:</h1>
            <div className='proj-list'>
                <ProjCont 
                img='./images/iceweb.jpg' 
                title='Ice-Cream' 
                link='http://icey-food.netlify.app'
                desc='Created a dynamic React website for an ice-cream seller. Implemented Bootstrap and Firebase'></ProjCont>
                <ProjCont 
                img='./images/mosam.png' 
                title='Weather' 
                link='http://osm-mosam.netlify.app'
                desc='Developed a weather application, demonstrating proficiency in API integration.'></ProjCont>
                <ProjCont 
                img='./images/pirate.jpg' 
                title='E-Com' 
                link='http://piratestore.netlify.app'
                desc='Developed an Ecommerce store leveraging accumulated experience in web development. '></ProjCont>
                <ProjCont 
                img='./images/todo.png' 
                title='ToDo-list' 
                link='http://tolistdo2.netlify.app'
                desc='Developed a dynamic Todo List application with full CRUD (Create, Read, Update, Delete) functionality.'></ProjCont>
            </div>
        </div>
    )
}

export default Sec2