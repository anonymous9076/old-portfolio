import React from 'react'
import './App.css'
import Sec1 from './Components/Sec1.js'
import Sec2 from './Components/Sec2.js'
import Sec3 from './Components/Sec3.js'
import Sec4 from './Components/Sec4.js'
import Sec5 from './Components/Sec5.js'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Sec1></Sec1>
      <Sec2></Sec2>
      <Sec3></Sec3>
      <Sec4></Sec4>
      <Sec5></Sec5>
      </BrowserRouter>
    </div>
  )
}

export default App