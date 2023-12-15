import React from 'react'
import "./Sec3.css"
import { Link } from 'react-router-dom'


const Sec3 = () => {
    return (
        <div>
            <h1 className='heading'>Projects :</h1>
            <div className='project'>
                <div className='sec3-text'>

                    When discussing my projects, I can highlight my experience in handling a total of three projects, including two minor projects and one major project. Currently, I am actively involved in a significant e-commerce project, which has been a valuable opportunity to apply my skills and knowledge in a real-world setting. This project involves the development of a dynamic and user-friendly e-commerce website, where I have been responsible for tasks such as front-end design, database management, and ensuring smooth functionality. Through these experiences, I have honed my web development skills, including proficiency in HTML, CSS, JavaScript, and database management systems. These projects have not only enhanced my technical capabilities but have also improved my problem-solving and teamwork skills, as effective collaboration is crucial in delivering successful projects.
                </div>
                <div className='proj-item'>
                    <Link id='proj-img' to='http://piratestore.netlify.app' target='_blank'>  <img  src='./images/pirate.jpg' alt='...'></img></Link>
                    <Link id='proj-img' to='http://osm-mosam.netlify.app' target='_blank'>  <img src='./images/mosam.png' alt='...'></img></Link>
                    <Link id='proj-img' to='http://icey-food.netlify.app' target='_blank'>  <img src='./images/iceweb.jpg' alt='...'></img></Link>
                    <Link id='proj-img' to='http://tushar1292.netlify.app' target='_blank'>  <img src='./images/mypage.png' alt='...'></img></Link>

                </div>
            </div>
        </div>
    )
}

export default Sec3