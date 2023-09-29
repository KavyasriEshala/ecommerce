import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route } from 'react-router-dom'
import Otherpages from './component/Otherpages'
import Home from './component/Home'
import Fivecolumns from './component/Fivecolumns'
import Listingpage from './component/Listingpage'
import Templates from './component/Templates'
import Navbar from './component/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='./home' element={<Home/>}/>

        <Route path='./otherpages' element={<Otherpages/>}/>
        <Route path='./fivecolumns' element={<Fivecolumns/>}/>
        <Route path='./templates' element={<Templates/>}/>
        <Route path='./listingpage' element={<Listingpage/>}/>


      </Routes>
    </div>
  )
}

export default App
