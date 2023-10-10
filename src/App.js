import React from 'react'
import './App.css'
import Sec1 from './Components/Sec1';
import Sec2 from './Components/Sec2';
import Sec3 from './Components/Sec3';
import Sec4 from './Components/Sec4';
import Contact from './Components/Contact';
import { BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
        <div className='mainbody' >
        <Sec1></Sec1>
        <Sec2></Sec2>
        <Sec3></Sec3>
        <Sec4></Sec4>
        <Contact></Contact>
        </div>
        </BrowserRouter>
    )
}

export default App;